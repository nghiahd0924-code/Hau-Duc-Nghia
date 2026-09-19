import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Square, Play, RotateCcw } from 'lucide-react';

interface AudioPlayButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export const AudioPlayButton: React.FC<AudioPlayButtonProps> = ({
  text,
  label = 'Nghe đoạn băng (Audio)',
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playCount, setPlayCount] = useState<number>(0);
  const [hasSupport, setHasSupport] = useState<boolean>(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setHasSupport(false);
    }

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlay = () => {
    if (!hasSupport) {
      alert('Trình duyệt của em chưa hỗ trợ phát âm thanh trực tiếp. Hãy dùng Chrome hoặc Edge nhé!');
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    // Rate 0.88 is slightly paced down so grade 6 students can catch each word clearly
    utterance.rate = 0.88;
    utterance.pitch = 1.0;

    // Pick a natural English voice if available
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(
      (v) => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('David'))
    ) || voices.find((v) => v.lang.startsWith('en'));

    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setPlayCount((prev) => prev + 1);
    };

    utterance.onerror = (event) => {
      console.warn('SpeechSynthesis error:', event);
      setIsPlaying(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={handlePlay}
        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
          isPlaying
            ? 'bg-amber-500 hover:bg-amber-600 text-white animate-pulse'
            : playCount > 0
            ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
            : 'bg-emerald-600 hover:bg-emerald-700 text-white'
        }`}
      >
        {isPlaying ? (
          <>
            <Square className="w-3.5 h-3.5 fill-current" />
            <span>Đang phát đoạn nghe... (Bấm để dừng)</span>
          </>
        ) : playCount > 0 ? (
          <>
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Nghe lại đoạn băng (Đã nghe {playCount} lần)</span>
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5" />
            <span>{label}</span>
          </>
        )}
      </button>

      {isPlaying && (
        <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium animate-pulse">
          <span className="w-1.5 h-3 bg-emerald-500 rounded-full animate-bounce"></span>
          <span className="w-1.5 h-4 bg-emerald-600 rounded-full animate-bounce delay-75"></span>
          <span className="w-1.5 h-2 bg-emerald-500 rounded-full animate-bounce delay-150"></span>
          <span className="ml-1 text-slate-600">Đang đọc tiếng Anh</span>
        </span>
      )}
    </div>
  );
};
