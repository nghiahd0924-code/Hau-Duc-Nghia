import React, { useState, useEffect, useMemo } from 'react';
import { Question, EssayPromptDetails, GradeLevel } from '../types';
import { getRandomEssayPrompt, getSentenceRequirementsForGrade } from '../essayPrompts';
import {
  PenTool,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Dices,
  BookOpen,
  FileText,
  Lightbulb,
  AlignLeft,
  Undo2,
  X,
  Volume2,
} from 'lucide-react';

interface WritingExerciseCardProps {
  exercise: Question;
  index: number;
  total: number;
  currentAnswer: string;
  onAnswerChange: (questionId: number, answerText: string) => void;
  gradeLevel: GradeLevel;
  isSubmitted: boolean;
  onUpdateQuestion?: (updatedQuestion: Question) => void;
}

// Token item representing a word in the word bank
interface WordToken {
  id: string;
  word: string;
}

// Helper to count words
function countWords(str: string): number {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

// Helper to count complete sentences ending in ., !, or ?
function countSentences(str: string): number {
  return str
    .trim()
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 2).length;
}

// Deterministic pseudo-random shuffle for words
function deterministicShuffle<T>(array: T[], seedNumber: number): T[] {
  const arr = [...array];
  let seed = seedNumber;
  for (let i = arr.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = Math.floor((seed / 233280) * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Extract word tokens for Questions 1 to 5
function getQuestionTokens(exercise: Question): WordToken[] {
  // 1. If prompt has slash tokens in quotes: "Nam / name / My / is / ."
  const slashMatch = exercise.prompt.match(/['"]([^'"]+)['"]/);
  if (slashMatch && slashMatch[1].includes('/')) {
    const rawTokens = slashMatch[1]
      .split('/')
      .map((w) => w.trim())
      .filter((w) => w.length > 0 && w !== '.' && w !== '?' && w !== '!');
    return rawTokens.map((w, idx) => ({ id: `token-${idx}-${w}`, word: w }));
  }

  // 2. If question explicitly specifies wordBank
  if (exercise.wordBank && exercise.wordBank.length > 0) {
    return exercise.wordBank.map((w, idx) => ({ id: `bank-${idx}-${w}`, word: w }));
  }

  // 3. Otherwise, derive tokens from correctAnswer so every Q1-5 has interactive words
  if (exercise.correctAnswer) {
    const cleanAnswer = exercise.correctAnswer.replace(/[.!?]+$/, '').trim();
    const words = cleanAnswer.split(/\s+/).filter(Boolean);
    const tokenList = words.map((w, idx) => ({ id: `ans-${idx}-${w}`, word: w }));
    // Shuffle deterministic so it's a puzzle to re-order
    return deterministicShuffle(tokenList, exercise.id * 17 + exercise.prompt.length);
  }

  return [];
}

export const WritingExerciseCard: React.FC<WritingExerciseCardProps> = ({
  exercise,
  index,
  total,
  currentAnswer,
  onAnswerChange,
  gradeLevel,
  isSubmitted,
  onUpdateQuestion,
}) => {
  const isEssay = exercise.isEssay || index === total - 1 || exercise.topic === 'writing_essay_paragraph';

  // Essay details for the final essay question
  const [essayDetails, setEssayDetails] = useState<EssayPromptDetails>(() => {
    return exercise.essayDetails || getRandomEssayPrompt(gradeLevel);
  });

  // Re-sync essayDetails whenever exercise or gradeLevel changes to guarantee strict grade correspondence
  useEffect(() => {
    if (isEssay) {
      if (exercise.essayDetails && exercise.essayDetails.grade === gradeLevel) {
        setEssayDetails(exercise.essayDetails);
      } else {
        const prompt = getRandomEssayPrompt(gradeLevel);
        setEssayDetails(prompt);
      }
    }
  }, [exercise.id, exercise.essayDetails, gradeLevel, isEssay]);

  const [localText, setLocalText] = useState<string>(currentAnswer || '');

  // Word tokens available for Question 1-5
  const availableTokens = useMemo(() => {
    if (isEssay) return [];
    return getQuestionTokens(exercise);
  }, [exercise, isEssay]);

  // Track which tokens are selected by ID (each token can ONLY be used once!)
  const [selectedTokenIds, setSelectedTokenIds] = useState<string[]>([]);

  // Sentence requirement rule for Question 6 based on grade
  const sentenceReq = useMemo(() => {
    return getSentenceRequirementsForGrade(gradeLevel);
  }, [gradeLevel]);

  // Keep localText synced with currentAnswer prop
  useEffect(() => {
    setLocalText(currentAnswer || '');
  }, [currentAnswer]);

  // Re-sync selected token IDs if answer is cleared externally
  useEffect(() => {
    if (!currentAnswer || currentAnswer.trim() === '') {
      setSelectedTokenIds([]);
    }
  }, [currentAnswer]);

  // Handle switching to another random essay prompt for Question 6
  const handleRollNewEssayPrompt = () => {
    const newDetails = getRandomEssayPrompt(gradeLevel, essayDetails.topicKey);
    setEssayDetails(newDetails);
    onAnswerChange(exercise.id, '');
    setLocalText('');

    if (onUpdateQuestion) {
      onUpdateQuestion({
        ...exercise,
        isEssay: true,
        topic: 'writing_essay_paragraph',
        topicTitle: `Viết đoạn văn: ${newDetails.topicTitleEn}`,
        prompt: `Đề bài văn Lớp ${gradeLevel}: ${newDetails.topicTitleVi}. ${newDetails.instructionsVi}`,
        essayDetails: newDetails,
        correctAnswer: newDetails.sampleEssay,
        hintExplanation: `Đoạn văn tham khảo (Lớp ${gradeLevel}): "${newDetails.sampleEssay}"`,
      });
    }
  };

  const wordCount = countWords(localText);
  const sentenceCount = countSentences(localText);
  const hasAnswered = localText.trim().length > 0;

  // Question 6: check if sentence requirements are met
  const isSentenceAdequate = useMemo(() => {
    if (!isEssay) return false;
    if (sentenceReq.isStrictOver15) {
      return sentenceCount > 15;
    }
    return sentenceCount >= sentenceReq.minSentences;
  }, [isEssay, sentenceReq, sentenceCount]);

  // =========================================================================
  // LOGIC CÂU 1 - 5: MỖI TỪ CHỈ ĐƯỢC SỬ DỤNG MỘT LẦN
  // =========================================================================

  // Handle clicking a word chip from the word bank
  const handleSelectWordToken = (token: WordToken) => {
    if (isSubmitted) return;

    // RULE: Each word token can ONLY be used once!
    if (selectedTokenIds.includes(token.id)) {
      return; // Already used - cannot use again
    }

    const nextTokenIds = [...selectedTokenIds, token.id];
    setSelectedTokenIds(nextTokenIds);

    // Build the sentence from selected token words
    const words = nextTokenIds
      .map((id) => availableTokens.find((t) => t.id === id)?.word)
      .filter(Boolean) as string[];

    const updatedSentence = words.join(' ');
    setLocalText(updatedSentence);
    onAnswerChange(exercise.id, updatedSentence);
  };

  // Remove a word token from the selected sentence (putting it back to the bank)
  const handleRemoveTokenByIndex = (indexToRemove: number) => {
    if (isSubmitted) return;
    const nextTokenIds = selectedTokenIds.filter((_, idx) => idx !== indexToRemove);
    setSelectedTokenIds(nextTokenIds);

    const words = nextTokenIds
      .map((id) => availableTokens.find((t) => t.id === id)?.word)
      .filter(Boolean) as string[];

    const updatedSentence = words.join(' ');
    setLocalText(updatedSentence);
    onAnswerChange(exercise.id, updatedSentence);
  };

  // Undo last selected word
  const handleUndoLastWord = () => {
    if (isSubmitted || selectedTokenIds.length === 0) return;
    handleRemoveTokenByIndex(selectedTokenIds.length - 1);
  };

  // Append punctuation (. or ?)
  const handleAppendPunctuation = (punct: '.' | '?') => {
    if (isSubmitted) return;
    const trimmed = localText.replace(/[.!?]+$/, '').trim();
    if (!trimmed) return;
    const updated = `${trimmed}${punct}`;
    setLocalText(updated);
    onAnswerChange(exercise.id, updated);
  };

  // Handle manual typing in input
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.target.value;
    setLocalText(val);
    onAnswerChange(exercise.id, val);
  };

  // Clear answer
  const handleClear = () => {
    if (isSubmitted) return;
    setSelectedTokenIds([]);
    setLocalText('');
    onAnswerChange(exercise.id, '');
  };

  // For typed answers: check if any word is used multiple times (mỗi từ chỉ sử dụng 1 lần)
  const duplicateWordWarning = useMemo(() => {
    if (isEssay || !localText.trim()) return null;
    const rawWords = localText
      .toLowerCase()
      .replace(/[.,!?;:"']/g, '')
      .split(/\s+/)
      .filter((w) => w.length > 0);

    const counts: Record<string, number> = {};
    for (const w of rawWords) {
      counts[w] = (counts[w] || 0) + 1;
    }

    // Find words used more than once
    const duplicated = Object.entries(counts).filter(([_, count]) => count > 1);
    if (duplicated.length > 0) {
      return duplicated.map(([w, c]) => `"${w}" (${c} lần)`).join(', ');
    }
    return null;
  }, [isEssay, localText]);

  // Pronounce sample text for Essay
  const handleSpeakSample = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        isEssay
          ? 'border-amber-300 bg-gradient-to-b from-amber-50/50 via-white to-white shadow-xs'
          : hasAnswered
          ? 'border-emerald-300 bg-white shadow-2xs'
          : 'border-slate-200/90 bg-white shadow-2xs hover:border-slate-300'
      }`}
      id={`writing-card-${exercise.id}`}
    >
      {/* Card Header */}
      <div
        className={`px-4 sm:px-5 py-3.5 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
          isEssay
            ? 'bg-amber-100/70 border-amber-200'
            : hasAnswered
            ? 'bg-emerald-50/70 border-emerald-100'
            : 'bg-slate-50/80 border-slate-100'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <span
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
              isEssay
                ? 'bg-amber-600 text-white shadow-xs'
                : hasAnswered
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-200 text-slate-700'
            }`}
          >
            {index + 1}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-800">
                {isEssay ? `Đề bài văn ngẫu nhiên Lớp ${gradeLevel}` : exercise.topicTitle}
              </h3>
              {isEssay && (
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 border border-amber-300 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-700" />
                  <span>Câu {index + 1}: Viết đoạn văn ({sentenceReq.label})</span>
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500">
              {isEssay
                ? `Lớp ${gradeLevel} • Quy định số câu: ${sentenceReq.label}`
                : `Lớp ${gradeLevel} • Quy tắc: Mỗi từ chỉ sử dụng 1 lần`}
            </p>
          </div>
        </div>

        {/* Action button in header */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          {isEssay && !isSubmitted && (
            <button
              type="button"
              onClick={handleRollNewEssayPrompt}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-600 text-white transition-all shadow-2xs active:scale-95 cursor-pointer"
              title="Nhấn để đổi ngẫu nhiên sang đề bài khác"
            >
              <Dices className="w-3.5 h-3.5" />
              <span>Đổi đề bài khác 🎲</span>
            </button>
          )}
          {hasAnswered && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-100/90 px-2.5 py-1 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Đã hoàn thành</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 space-y-4">
        {isEssay ? (
          /* ========================================================================= */
          /* GIAO DIỆN CÂU 6: BÀI VĂN THEO QUY ĐỊNH SỐ CÂU (LỚP 1-3: 3-6 CÂU; LỚP 4-5: 8-10 CÂU; LỚP 6-9: >15 CÂU) */
          /* ========================================================================= */
          <div className="space-y-4">
            {/* Box đề bài & yêu cầu số câu */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50/90 to-amber-100/40 border border-amber-200/90 space-y-2.5">
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                      Chủ đề bài văn:
                    </span>
                    <h4 className="text-sm font-extrabold text-amber-950">
                      {essayDetails.topicTitleEn} ({essayDetails.topicTitleVi})
                    </h4>
                  </div>
                  <p className="text-xs text-amber-900 leading-relaxed font-medium">
                    {essayDetails.instructionsVi}
                  </p>
                </div>
              </div>

              {/* Banner yêu cầu số câu theo khối lớp */}
              <div className="p-2.5 rounded-lg bg-white/95 border border-amber-300 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                  <span className="font-bold text-slate-800">
                    Quy chuẩn số lượng câu:
                  </span>
                  <span className="px-2 py-0.5 rounded-md font-extrabold bg-amber-100 text-amber-900 border border-amber-300">
                    {sentenceReq.label}
                  </span>
                </div>
                <span className="text-[11px] text-slate-600">
                  {gradeLevel <= 3 && 'Lớp 1–3: viết 3 đến 6 câu ngắn'}
                  {gradeLevel >= 4 && gradeLevel <= 5 && 'Lớp 4–5: viết 8 đến 10 câu hoàn chỉnh'}
                  {gradeLevel >= 6 && 'Lớp 6–9: viết trên 15 câu (> 15 câu) phát triển ý sâu sắc'}
                </span>
              </div>

              {/* Câu hỏi gợi ý (Guiding questions) */}
              {essayDetails.guidingQuestions && essayDetails.guidingQuestions.length > 0 && (
                <div className="space-y-1 pt-1">
                  <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                    <span>Dàn ý & Các câu hỏi gợi ý triển khai:</span>
                  </span>
                  <ul className="space-y-1 pl-4 text-xs text-slate-700 list-disc marker:text-amber-500">
                    {essayDetails.guidingQuestions.map((q, qIdx) => (
                      <li key={qIdx} className="leading-relaxed">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Gợi ý mẫu câu mở đầu (Sentence Starters) */}
            {!isSubmitted && essayDetails.suggestedStarters && essayDetails.suggestedStarters.length > 0 && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Gợi ý mẫu câu nối & mở đầu (Nhấp để chèn vào bài):</span>
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {essayDetails.suggestedStarters.slice(0, 5).map((starter, sIdx) => (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={() => {
                        if (isSubmitted) return;
                        const separator = localText.length === 0 || localText.endsWith(' ') ? '' : ' ';
                        const updated = localText + separator + starter;
                        setLocalText(updated);
                        onAnswerChange(exercise.id, updated);
                      }}
                      className="text-xs text-slate-700 bg-slate-100 hover:bg-amber-50 hover:text-amber-900 hover:border-amber-300 border border-slate-200/90 px-2.5 py-1 rounded-lg transition-colors cursor-pointer text-left shadow-2xs active:scale-95"
                    >
                      + "{starter}"
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Ô viết bài văn (Textarea) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label htmlFor={`essay-textarea-${exercise.id}`} className="font-bold text-slate-800 flex items-center gap-1.5">
                  <PenTool className="w-3.5 h-3.5 text-amber-600" />
                  <span>Em hãy tự viết bài văn tiếng Anh vào khung dưới đây:</span>
                </label>
                <span className="text-[11px] font-semibold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md">
                  Mục tiêu: {sentenceReq.label}
                </span>
              </div>

              <div className="relative">
                <textarea
                  id={`essay-textarea-${exercise.id}`}
                  rows={gradeLevel >= 6 ? 10 : 7}
                  value={localText}
                  onChange={handleTextChange}
                  disabled={isSubmitted}
                  placeholder={`Write your English paragraph here...\nVí dụ mở đầu: "${essayDetails.suggestedStarters?.[0] || 'In my free time...'}"`}
                  className="w-full px-4 py-3 text-sm text-slate-800 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all shadow-inner leading-relaxed resize-y font-normal"
                />
              </div>

              {/* Thống kê số câu và số từ với thông báo quy chuẩn cụ thể */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs pt-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`font-bold px-2.5 py-1 rounded-md border flex items-center gap-1.5 ${
                      isSentenceAdequate
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : 'bg-amber-50 text-amber-900 border-amber-300'
                    }`}
                  >
                    📝 Đã viết: <strong>{sentenceCount} câu</strong> ({wordCount} từ)
                  </span>

                  {/* Nhãn kiểm tra số câu theo quy tắc */}
                  {gradeLevel <= 3 && (
                    sentenceCount >= 3 && sentenceCount <= 6 ? (
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Đạt chuẩn số câu (3 - 6 câu) ✓
                      </span>
                    ) : sentenceCount < 3 ? (
                      <span className="text-amber-800 font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                        Cần viết thêm {3 - sentenceCount} câu nữa (tối thiểu 3 câu)
                      </span>
                    ) : (
                      <span className="text-slate-600 font-medium">
                        Đã viết {sentenceCount} câu (Khuyến nghị: 3 - 6 câu)
                      </span>
                    )
                  )}

                  {gradeLevel >= 4 && gradeLevel <= 5 && (
                    sentenceCount >= 8 && sentenceCount <= 10 ? (
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Đạt chuẩn số câu (8 - 10 câu) ✓
                      </span>
                    ) : sentenceCount < 8 ? (
                      <span className="text-amber-800 font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                        Cần viết thêm {8 - sentenceCount} câu nữa (yêu cầu: 8 - 10 câu)
                      </span>
                    ) : (
                      <span className="text-slate-600 font-medium">
                        Đã viết {sentenceCount} câu (Đạt tối thiểu 8 câu)
                      </span>
                    )
                  )}

                  {gradeLevel >= 6 && (
                    sentenceCount > 15 ? (
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Đạt chuẩn xuất sắc ({sentenceCount} câu &gt; 15 câu) ✓
                      </span>
                    ) : (
                      <span className="text-amber-800 font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                        Yêu cầu &gt;15 câu (Hiện có {sentenceCount}/15 câu, cần thêm {16 - sentenceCount} câu nữa)
                      </span>
                    )
                  )}
                </div>

                {!isSubmitted && hasAnswered && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1 hover:underline cursor-pointer self-start sm:self-auto"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Xóa viết lại bài</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* GIAO DIỆN CÂU 1 ĐẾN 5: TỰ VIẾT CÂU - MỖI TỪ CHỈ SỬ DỤNG MỘT LẦN */
          /* ========================================================================= */
          <div className="space-y-4">
            {/* Prompt đề bài */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-slate-700">Yêu cầu câu hỏi:</span>
                <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  ⚡ Mỗi từ chỉ sử dụng 1 lần
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                {exercise.prompt}
              </p>
            </div>

            {/* BẢNG NGÂN HÀNG TỪ (WORD BANK): MỖI TỪ CHỈ SỬ DỤNG 1 LẦN */}
            {availableTokens.length > 0 && (
              <div className="p-3.5 rounded-xl bg-emerald-50/40 border border-emerald-200/90 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <AlignLeft className="w-4 h-4 text-emerald-600" />
                    <span>Ngân hàng từ cho sẵn (Bấm vào từ để ghép câu - Mỗi từ chỉ dùng 1 lần):</span>
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    Đã dùng: {selectedTokenIds.length}/{availableTokens.length} từ
                  </span>
                </div>

                {/* Danh sách thẻ từ */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {availableTokens.map((token) => {
                    const isUsed = selectedTokenIds.includes(token.id);
                    return (
                      <button
                        key={token.id}
                        type="button"
                        onClick={() => handleSelectWordToken(token)}
                        disabled={isUsed || isSubmitted}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                          isUsed
                            ? 'bg-slate-100 text-slate-400 border border-slate-200 line-through cursor-not-allowed opacity-60'
                            : 'bg-white hover:bg-emerald-500 hover:text-white border border-emerald-300 text-slate-800 shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer'
                        }`}
                        title={isUsed ? 'Từ này đã được sử dụng (mỗi từ chỉ dùng 1 lần)' : `Bấm để thêm "${token.word}" vào câu`}
                      >
                        {isUsed && <span className="text-[10px]">✓</span>}
                        <span>{token.word}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Hướng dẫn quy tắc */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-emerald-100">
                  <span className="flex items-center gap-1 text-emerald-800 font-medium">
                    <Lightbulb className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Mẹo: Bấm từng từ theo thứ tự để tạo câu hoàn chỉnh. Mỗi từ chỉ được dùng 1 lần.</span>
                  </span>
                  {selectedTokenIds.length > 0 && !isSubmitted && (
                    <button
                      type="button"
                      onClick={handleUndoLastWord}
                      className="text-xs text-amber-700 hover:text-amber-800 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <Undo2 className="w-3 h-3" />
                      <span>Hoàn tác từ cuối</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* KHUNG HIỂN THỊ CÂU ĐANG GHÉP (SENTENCE BUILDER CHIPS) */}
            {selectedTokenIds.length > 0 && (
              <div className="p-3 rounded-xl bg-white border border-emerald-300 shadow-2xs space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-900 flex items-center gap-1">
                    <span>Câu đang ghép:</span>
                  </span>
                  <span className="text-[11px] text-slate-500">
                    (Bấm vào từ có dấu × để gỡ từ đó ra)
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 min-h-[32px] p-2 bg-slate-50 rounded-lg border border-slate-200">
                  {selectedTokenIds.map((id, sIdx) => {
                    const token = availableTokens.find((t) => t.id === id);
                    if (!token) return null;
                    return (
                      <button
                        key={`${id}-${sIdx}`}
                        type="button"
                        onClick={() => handleRemoveTokenByIndex(sIdx)}
                        disabled={isSubmitted}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-md bg-emerald-600 text-white shadow-2xs hover:bg-rose-600 transition-colors cursor-pointer group"
                        title="Bấm để trả từ này về ngân hàng từ"
                      >
                        <span>{token.word}</span>
                        <X className="w-3 h-3 text-emerald-200 group-hover:text-white" />
                      </button>
                    );
                  })}
                </div>

                {/* Nút thêm dấu câu kết thúc */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-xs text-slate-600">Thêm dấu câu:</span>
                  <button
                    type="button"
                    onClick={() => handleAppendPunctuation('.')}
                    disabled={isSubmitted}
                    className="px-2 py-0.5 text-xs font-bold rounded bg-slate-200 hover:bg-emerald-100 hover:text-emerald-800 text-slate-800 cursor-pointer"
                  >
                    Dấu chấm (.)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAppendPunctuation('?')}
                    disabled={isSubmitted}
                    className="px-2 py-0.5 text-xs font-bold rounded bg-slate-200 hover:bg-emerald-100 hover:text-emerald-800 text-slate-800 cursor-pointer"
                  >
                    Dấu hỏi (?)
                  </button>
                </div>
              </div>
            )}

            {/* Ô NHẬP CÂU TRẢ LỜI (TEXT INPUT) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label htmlFor={`input-q-${exercise.id}`} className="font-bold text-slate-800 flex items-center gap-1.5">
                  <PenTool className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Em hãy xem câu đã ghép hoặc tự gõ chỉnh sửa tại đây:</span>
                </label>
                {hasAnswered && !isSubmitted && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="text-slate-500 hover:text-rose-600 flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Xóa toàn bộ câu</span>
                  </button>
                )}
              </div>

              <div className="relative">
                <input
                  id={`input-q-${exercise.id}`}
                  type="text"
                  value={localText}
                  onChange={handleTextChange}
                  disabled={isSubmitted}
                  placeholder="✍️ Bấm các thẻ từ ở trên hoặc gõ câu tiếng Anh hoàn chỉnh vào đây..."
                  className="w-full px-4 py-3 text-sm text-slate-900 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all shadow-2xs font-medium"
                />
              </div>

              {/* Kiểm tra quy tắc: Mỗi từ chỉ sử dụng một lần */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] px-1">
                {duplicateWordWarning ? (
                  <span className="text-amber-700 font-bold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Chú ý: Quy tắc mỗi từ chỉ sử dụng 1 lần! Bạn đang lặp lại: {duplicateWordWarning}</span>
                  </span>
                ) : hasAnswered ? (
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Đã viết: "{localText}" (Mỗi từ dùng 1 lần: Hợp lệ ✓)</span>
                  </span>
                ) : (
                  <span className="text-slate-500">
                    💡 Hãy sắp xếp sao cho mỗi từ chỉ xuất hiện đúng 1 lần trong câu nhé.
                  </span>
                )}
                <span className="text-slate-500 font-medium shrink-0">{wordCount} từ</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
