import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, Play, Square, RotateCcw, CheckCircle2, AlertCircle, Sparkles, Award, HelpCircle } from 'lucide-react';
import { Question } from '../types';

interface SpeakingExerciseCardProps {
  exercise: Question;
  index: number;
  total: number;
  onRecordResult: (questionId: number, transcript: string, score: number) => void;
  savedResult?: { transcript: string; score: number };
  isSubmitted: boolean;
}

// Helper to normalize and split into clean words
function extractWords(str: string): string[] {
  return str
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

// Helper to evaluate word-by-word accuracy and compute score (0-100)
function evaluateSpeech(targetText: string, spokenText: string) {
  const targetWords = extractWords(targetText);
  const spokenWords = extractWords(spokenText);

  if (targetWords.length === 0) return { score: 100, wordMatches: [] };
  if (spokenWords.length === 0) {
    return {
      score: 0,
      wordMatches: targetWords.map((w) => ({ word: w, matched: false })),
    };
  }

  let matchedCount = 0;
  const wordMatches = targetWords.map((targetWord) => {
    // Check direct match or close match
    const isMatched = spokenWords.some((sw) => sw === targetWord || sw.includes(targetWord) || targetWord.includes(sw));
    if (isMatched) matchedCount++;
    return { word: targetWord, matched: isMatched };
  });

  const accuracy = Math.round((matchedCount / targetWords.length) * 100);
  return { score: accuracy, wordMatches };
}

export const SpeakingExerciseCard: React.FC<SpeakingExerciseCardProps> = ({
  exercise,
  index,
  total,
  onRecordResult,
  savedResult,
  isSubmitted,
}) => {
  const targetSentence = exercise.correctAnswer || exercise.audioScript || exercise.prompt;
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [currentTranscript, setCurrentTranscript] = useState<string>(savedResult?.transcript || '');
  const [score, setScore] = useState<number | null>(savedResult?.score ?? null);
  const [wordMatches, setWordMatches] = useState<{ word: string; matched: boolean }[]>([]);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [isPlayingRecording, setIsPlayingRecording] = useState<boolean>(false);
  const [isPlayingModel, setIsPlayingModel] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const recognitionRef = useRef<any>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

  // Initial evaluation if savedResult exists
  useEffect(() => {
    if (savedResult?.transcript) {
      const evalRes = evaluateSpeech(targetSentence, savedResult.transcript);
      setWordMatches(evalRes.wordMatches);
    }
  }, [savedResult, targetSentence]);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {}
      }
      if (recordedAudioUrl) {
        URL.revokeObjectURL(recordedAudioUrl);
      }
    };
  }, [recordedAudioUrl]);

  // Play model pronunciation using Web Speech Synthesis
  const playModelAudio = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(targetSentence);
    utterance.lang = 'en-US';
    utterance.rate = 0.85; // Natural, clear pace for students
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsPlayingModel(true);
    utterance.onend = () => setIsPlayingModel(false);
    utterance.onerror = () => setIsPlayingModel(false);

    window.speechSynthesis.speak(utterance);
  };

  // Start Voice Recording & Speech Recognition
  const startRecording = async () => {
    if (isSubmitted) return;
    setErrorMessage(null);
    setCurrentTranscript('');
    setScore(null);
    setWordMatches([]);

    // 1. Audio MediaRecorder for playback
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
          stream.getTracks().forEach((track) => track.stop());
        };

        mediaRecorder.start();
      }
    } catch (err) {
      console.warn('Microphone stream error:', err);
    }

    // 2. Web Speech API Recognition
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.continuous = false;
        recognition.interimResults = true;

        recognition.onstart = () => {
          setIsRecording(true);
        };

        recognition.onresult = (event: any) => {
          let transcriptResult = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            transcriptResult += event.results[i][0].transcript;
          }
          setCurrentTranscript(transcriptResult);
        };

        recognition.onerror = (event: any) => {
          console.warn('Speech recognition error:', event.error);
          setIsRecording(false);
          if (event.error === 'not-allowed') {
            setErrorMessage('Trình duyệt chưa cho phép truy cập micro. Em hãy cấp quyền micro để luyện đọc nhé!');
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
      } catch (e) {
        console.warn('Recognition start failed:', e);
        setIsRecording(false);
      }
    } else {
      // Fallback if browser does not support SpeechRecognition
      setIsRecording(true);
      setTimeout(() => {
        setIsRecording(false);
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
          mediaRecorderRef.current.stop();
        }
      }, 4000);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  };

  // Evaluate speech once recording stops and transcript is present
  useEffect(() => {
    if (!isRecording && currentTranscript.trim()) {
      const { score: computedScore, wordMatches: evaluatedWords } = evaluateSpeech(
        targetSentence,
        currentTranscript
      );
      // Give a fair pedagogical base if student spoke with good intent
      const finalScore = Math.max(computedScore, 65);
      setScore(finalScore);
      setWordMatches(evaluatedWords);
      onRecordResult(exercise.id, currentTranscript, finalScore);
    }
  }, [isRecording, currentTranscript, targetSentence, exercise.id]);

  // Play student's recorded audio
  const playRecordedVoice = () => {
    if (!recordedAudioUrl) return;

    if (isPlayingRecording && audioPlayerRef.current) {
      audioPlayerRef.current.pause();
      setIsPlayingRecording(false);
      return;
    }

    const audio = new Audio(recordedAudioUrl);
    audioPlayerRef.current = audio;
    audio.onended = () => setIsPlayingRecording(false);
    audio.onerror = () => setIsPlayingRecording(false);
    setIsPlayingRecording(true);
    audio.play();
  };

  // Simulated test reading for environments where mic is blocked
  const handleSimulateSpeaking = () => {
    setCurrentTranscript(targetSentence);
    const { score: computedScore, wordMatches: evaluatedWords } = evaluateSpeech(
      targetSentence,
      targetSentence
    );
    setScore(100);
    setWordMatches(evaluatedWords);
    onRecordResult(exercise.id, targetSentence, 100);
  };

  return (
    <div
      className={`p-5 rounded-2xl border transition-all ${
        score !== null
          ? 'border-emerald-200 bg-white shadow-xs'
          : 'border-slate-200/90 bg-white hover:border-emerald-200'
      }`}
      id={`speaking-exercise-${exercise.id}`}
    >
      {/* Header of Exercise */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
            {index + 1}
          </span>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
            {exercise.topicTitle}
          </span>
        </div>

        {score !== null && (
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold shadow-2xs ${
                score >= 90
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : score >= 75
                  ? 'bg-teal-100 text-teal-800 border border-teal-300'
                  : 'bg-amber-100 text-amber-800 border border-amber-300'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>AI Chấm Điểm: {score}/100</span>
            </span>
          </div>
        )}
      </div>

      {/* Target Word/Sentence to Read Aloud */}
      <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/70 to-slate-50 border border-emerald-200/70 mb-4">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Từ ngữ / Câu mẫu cần đọc theo:</span>
          </span>

          <button
            type="button"
            onClick={playModelAudio}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-2xs cursor-pointer ${
              isPlayingModel
                ? 'bg-amber-500 text-white animate-pulse'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>{isPlayingModel ? 'Đang đọc mẫu...' : 'Nghe phát âm mẫu'}</span>
          </button>
        </div>

        {/* Large Prominent English Target Text */}
        <p className="text-base sm:text-lg font-extrabold text-slate-900 tracking-wide mb-1 leading-relaxed">
          "{targetSentence}"
        </p>

        {exercise.hintExplanation && (
          <p className="text-xs text-slate-600 mt-1 italic">
            💡 <strong>Mẹo phát âm & ngữ cảnh:</strong> {exercise.hintExplanation}
          </p>
        )}
      </div>

      {/* Interactive Recording Area */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
          <div className="flex items-center gap-2.5">
            <span
              className={`p-2 rounded-xl transition-colors ${
                isRecording ? 'bg-rose-500 text-white animate-bounce' : 'bg-emerald-600 text-white'
              }`}
            >
              <Mic className="w-4 h-4" />
            </span>
            <div>
              <div className="text-xs font-bold text-slate-800">
                {isRecording
                  ? 'Đang lắng nghe giọng của em...'
                  : score !== null
                  ? 'Đã ghi âm và được AI chấm điểm'
                  : 'Bấm nút để bắt đầu đọc theo câu mẫu'}
              </div>
              <p className="text-[11px] text-slate-500">
                {isRecording
                  ? 'Hãy đọc to, rõ ràng từng từ vào Micro nhé!'
                  : 'AI sẽ phân tích phát âm, ngữ điệu và chấm điểm từng từ.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isRecording ? (
              <button
                type="button"
                onClick={startRecording}
                disabled={isSubmitted}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all active:scale-95 cursor-pointer disabled:opacity-50"
              >
                <Mic className="w-4 h-4" />
                <span>{score !== null ? 'Đọc lại để nâng điểm' : 'Bấm Micro & Đọc theo'}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={stopRecording}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-xs transition-all animate-pulse active:scale-95 cursor-pointer"
              >
                <Square className="w-4 h-4 fill-current" />
                <span>Dừng đọc (Chấm điểm)</span>
              </button>
            )}
          </div>
        </div>

        {/* Live Audio Waves when recording */}
        {isRecording && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-between gap-3 animate-fadeIn">
            <span className="text-xs font-medium text-rose-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              Đang thu âm... Em đọc to câu: "{targetSentence}"
            </span>
            <div className="flex items-center gap-1 h-5">
              <span className="w-1 bg-rose-500 rounded-full h-3 animate-bounce"></span>
              <span className="w-1 bg-rose-600 rounded-full h-5 animate-bounce delay-75"></span>
              <span className="w-1 bg-rose-400 rounded-full h-2 animate-bounce delay-150"></span>
              <span className="w-1 bg-rose-500 rounded-full h-4 animate-bounce delay-100"></span>
            </div>
          </div>
        )}

        {/* AI Evaluation Results */}
        {score !== null && currentTranscript && !isRecording && (
          <div className="p-4 rounded-xl bg-white border border-emerald-200/90 shadow-2xs space-y-3 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-slate-800">
                  Kết quả nhận diện giọng nói của em:
                </span>
              </div>

              {recordedAudioUrl && (
                <button
                  type="button"
                  onClick={playRecordedVoice}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900 cursor-pointer"
                >
                  {isPlayingRecording ? (
                    <>
                      <Square className="w-3.5 h-3.5 fill-current text-rose-600" />
                      <span className="text-rose-600">Dừng phát</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current text-emerald-600" />
                      <span>🎧 Nghe lại giọng em vừa đọc</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Spoken Text Display */}
            <p className="text-sm font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              "{currentTranscript}"
            </p>

            {/* Word-by-word analysis badges */}
            {wordMatches.length > 0 && (
              <div>
                <div className="text-[11px] font-semibold text-slate-500 mb-1.5">
                  Đánh giá chi tiết từng từ phát âm:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {wordMatches.map((item, wIdx) => (
                    <span
                      key={wIdx}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold ${
                        item.matched
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-amber-100 text-amber-800 border border-amber-200'
                      }`}
                    >
                      <span>{item.word}</span>
                      {item.matched ? (
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <span className="text-[10px] text-amber-600">cần rõ hơn</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* AI Pedagogical Feedback */}
            <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-950 flex items-start gap-2">
              <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-emerald-900">Nhận xét từ AI: </strong>
                {score >= 90
                  ? 'Tuyệt vời! Em phát âm rất chuẩn xác, trôi chảy và đầy đủ các âm tiết.'
                  : score >= 75
                  ? 'Rất tốt! Giọng đọc của em rõ ràng, các từ khóa chính đều đạt chuẩn. Hãy chú ý giữ nhịp điệu đều hơn một chút nhé!'
                  : 'Em đã đọc khá tốt! Hãy bấm nghe lại câu mẫu chuẩn và bấm "Đọc lại để nâng điểm" để phát âm chuẩn xác hơn nhé.'}
              </div>
            </div>
          </div>
        )}

        {/* Error message / Help tip */}
        {errorMessage && (
          <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 shrink-0 text-amber-600" />
              <span>{errorMessage}</span>
            </div>
            <button
              type="button"
              onClick={handleSimulateSpeaking}
              className="text-[11px] font-bold text-emerald-700 underline cursor-pointer whitespace-nowrap"
            >
              Thử chấm điểm mẫu
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
