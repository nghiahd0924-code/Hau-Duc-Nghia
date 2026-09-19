import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, RotateCcw, CheckCircle2, Play, Square, Sparkles, HelpCircle } from 'lucide-react';

interface VoiceSpeakingInputProps {
  targetSentence?: string;
  options?: string[];
  onSpoken: (transcript: string, matchedOption?: string, accuracyScore?: number) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

// Helper: Calculate text similarity (0 - 100)
function calculateSimilarity(str1: string, str2: string): number {
  const clean1 = str1.toLowerCase().replace(/[^\w\s]/g, '').trim().split(/\s+/).filter(Boolean);
  const clean2 = str2.toLowerCase().replace(/[^\w\s]/g, '').trim().split(/\s+/).filter(Boolean);

  if (clean1.length === 0 || clean2.length === 0) return 0;

  let matchedWords = 0;
  clean1.forEach((w) => {
    if (clean2.includes(w)) matchedWords++;
  });

  const precision = matchedWords / clean1.length;
  const recall = matchedWords / clean2.length;
  if (precision + recall === 0) return 0;

  const f1 = (2 * precision * recall) / (precision + recall);
  return Math.min(100, Math.round(f1 * 100));
}

export const VoiceSpeakingInput: React.FC<VoiceSpeakingInputProps> = ({
  targetSentence,
  options = [],
  onSpoken,
  label = 'Bấm Micro để nói tiếng Anh',
  disabled = false,
  className = '',
}) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [accuracyScore, setAccuracyScore] = useState<number | null>(null);
  const [matchedOption, setMatchedOption] = useState<string | null>(null);
  const [supportMessage, setSupportMessage] = useState<string | null>(null);
  const [isSpeechSupported, setIsSpeechSupported] = useState<boolean>(true);

  const recognitionRef = useRef<any>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setIsSpeechSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {
          // ignore
        }
      }
      if (recordedAudioUrl) {
        URL.revokeObjectURL(recordedAudioUrl);
      }
    };
  }, []);

  const startSpeaking = async () => {
    if (disabled) return;
    setSupportMessage(null);
    setTranscript('');
    setAccuracyScore(null);
    setMatchedOption(null);

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    // Start Audio MediaRecorder to record student's own voice
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            audioChunksRef.current.push(e.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
          if (recordedAudioUrl) {
            URL.revokeObjectURL(recordedAudioUrl);
          }
          const url = URL.createObjectURL(audioBlob);
          setRecordedAudioUrl(url);

          // Stop all stream tracks
          stream.getTracks().forEach((track) => track.stop());
        };

        mediaRecorder.start();
      }
    } catch (err: any) {
      console.warn('MediaRecorder error or mic denied:', err);
    }

    // Start Web Speech Recognition
    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.maxAlternatives = 3;

        recognition.onstart = () => {
          setIsRecording(true);
        };

        recognition.onresult = (event: any) => {
          let currentResult = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            currentResult += event.results[i][0].transcript;
          }
          setTranscript(currentResult);
        };

        recognition.onerror = (event: any) => {
          console.warn('Speech recognition error:', event.error);
          setIsRecording(false);
          if (event.error === 'not-allowed') {
            setSupportMessage('Trình duyệt chưa cho phép truy cập micro. Em hãy cấp quyền micro để luyện nói nhé!');
          } else if (event.error === 'no-speech') {
            setSupportMessage('Chưa nhận diện được giọng nói. Em hãy bấm micro và đọc to rõ ràng hơn nhé!');
          }
        };

        recognition.onend = () => {
          setIsRecording(false);
          if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
          }
        };

        recognitionRef.current = recognition;
        recognition.start();
      } catch (err) {
        console.warn('Failed to start speech recognition:', err);
        setIsRecording(false);
        setSupportMessage('Không thể khởi động nhận diện giọng nói trên trình duyệt này.');
      }
    } else {
      setIsRecording(true);
      // Fallback timeout simulation for environments without Web Speech
      setTimeout(() => {
        setIsRecording(false);
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
          mediaRecorderRef.current.stop();
        }
      }, 3500);
    }
  };

  const stopSpeaking = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // ignore
      }
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  };

  // Whenever transcript updates and recording finishes, process matching
  useEffect(() => {
    if (!isRecording && transcript.trim()) {
      let bestOption: string | undefined = undefined;
      let highestSim = 0;

      if (options.length > 0) {
        options.forEach((opt) => {
          const sim = calculateSimilarity(transcript, opt);
          if (sim > highestSim) {
            highestSim = sim;
            bestOption = opt;
          }
        });
      }

      let score = 0;
      if (targetSentence) {
        score = calculateSimilarity(transcript, targetSentence);
      } else if (highestSim > 0) {
        score = highestSim;
      } else {
        score = 80;
      }

      setAccuracyScore(score);
      setMatchedOption(bestOption || null);
      onSpoken(transcript, bestOption, score);
    }
  }, [isRecording, transcript]);

  // Audio Playback of student's recorded voice
  const playRecordedAudio = () => {
    if (!recordedAudioUrl) return;

    if (isPlayingAudio && audioElementRef.current) {
      audioElementRef.current.pause();
      setIsPlayingAudio(false);
      return;
    }

    const audio = new Audio(recordedAudioUrl);
    audioElementRef.current = audio;
    audio.onended = () => setIsPlayingAudio(false);
    audio.onerror = () => setIsPlayingAudio(false);
    setIsPlayingAudio(true);
    audio.play();
  };

  // Play native speaker sample for comparison
  const playNativeSample = (textToSpeak: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className={`p-3.5 rounded-xl border border-emerald-200/90 bg-emerald-50/40 text-slate-800 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-600 text-white shadow-xs">
            <Mic className="w-4 h-4" />
          </span>
          <div>
            <div className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
              <span>{label}</span>
              {isRecording && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-500 text-white animate-pulse">
                  Đang ghi âm giọng em...
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-500">
              Bấm Micro và đọc to câu trả lời bằng tiếng Anh để luyện phản xạ phát âm!
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {!isRecording ? (
            <button
              type="button"
              onClick={startSpeaking}
              disabled={disabled}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all active:scale-95 cursor-pointer disabled:opacity-50"
            >
              <Mic className="w-4 h-4" />
              <span>Bấm để nói</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={stopSpeaking}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-xs transition-all animate-pulse active:scale-95 cursor-pointer"
            >
              <Square className="w-4 h-4 fill-current" />
              <span>Dừng nói (Hoàn tất)</span>
            </button>
          )}

          {targetSentence && (
            <button
              type="button"
              onClick={() => playNativeSample(targetSentence)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-emerald-800 bg-white border border-emerald-200 hover:bg-emerald-50 transition-colors shadow-2xs"
              title="Nghe phát âm chuẩn người bản xứ"
            >
              <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Nghe mẫu</span>
            </button>
          )}
        </div>
      </div>

      {/* Visual audio wave while recording */}
      {isRecording && (
        <div className="mt-3 p-3 rounded-xl bg-white border border-rose-200 flex items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
            <span className="text-xs font-medium text-rose-700">
              Đang lắng nghe... Hãy đọc to câu tiếng Anh của em vào micro nhé!
            </span>
          </div>
          <div className="flex items-center gap-1 h-5">
            <span className="w-1 bg-rose-500 rounded-full h-3 animate-bounce"></span>
            <span className="w-1 bg-rose-600 rounded-full h-5 animate-bounce delay-75"></span>
            <span className="w-1 bg-rose-400 rounded-full h-2 animate-bounce delay-150"></span>
            <span className="w-1 bg-rose-500 rounded-full h-4 animate-bounce delay-100"></span>
            <span className="w-1 bg-rose-600 rounded-full h-3 animate-bounce delay-200"></span>
          </div>
        </div>
      )}

      {/* Result feedback after speaking */}
      {transcript && !isRecording && (
        <div className="mt-3 p-3 rounded-xl bg-white border border-emerald-200/80 shadow-2xs space-y-2 animate-fadeIn">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-bold text-slate-800">Em vừa nói:</span>
            </div>

            {accuracyScore !== null && (
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-bold ${
                  accuracyScore >= 80
                    ? 'bg-emerald-100 text-emerald-800'
                    : accuracyScore >= 50
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                Độ chuẩn xác: {accuracyScore}%
              </span>
            )}
          </div>

          <p className="text-sm font-semibold text-emerald-900 bg-emerald-50/50 p-2 rounded-lg border border-emerald-100/70">
            "{transcript}"
          </p>

          {/* Compare with target or matched option */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            {matchedOption && (
              <div className="text-xs text-slate-600">
                👉 Hệ thống tự động chọn đáp án:{' '}
                <strong className="text-emerald-700">"{matchedOption}"</strong>
              </div>
            )}

            {/* Listen back to student's own voice */}
            {recordedAudioUrl && (
              <button
                type="button"
                onClick={playRecordedAudio}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition-colors cursor-pointer"
              >
                {isPlayingAudio ? (
                  <>
                    <Square className="w-3.5 h-3.5 fill-current text-rose-600" />
                    <span className="text-rose-600">Dừng phát</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current text-emerald-600" />
                    <span>🎧 Nghe lại giọng em vừa nói</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Support or permission message */}
      {supportMessage && (
        <div className="mt-2.5 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
          <HelpCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
          <span>{supportMessage}</span>
        </div>
      )}
    </div>
  );
};
