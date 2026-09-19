import React, { useState } from 'react';
import { PracticeQuestion } from '../types';
import { Target, CheckCircle, XCircle, ArrowRight, Lightbulb, BookOpenCheck } from 'lucide-react';
import { AudioPlayButton } from './AudioPlayButton';
import { VoiceSpeakingInput } from './VoiceSpeakingInput';

interface NextPracticeSectionProps {
  questions: PracticeQuestion[];
  skillType?: 'grammar' | 'listening' | 'speaking' | 'writing' | 'reading';
}

export const NextPracticeSection: React.FC<NextPracticeSectionProps> = ({
  questions,
  skillType = 'grammar',
}) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [checkedQuestions, setCheckedQuestions] = useState<Record<number, boolean>>({});
  const isSpeaking = skillType === 'speaking';
  const isReading = skillType === 'reading';

  const handleSelect = (questionId: number, option: string) => {
    if (checkedQuestions[questionId]) return;
    setUserAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleCheck = (questionId: number) => {
    setCheckedQuestions((prev) => ({ ...prev, [questionId]: true }));
  };

  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <section className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 sm:p-6 mb-8" id="next-practice-section">
      <div className="border-b border-slate-100 pb-4 mb-6">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <Target className="w-5 h-5 text-emerald-600" />
          Bài luyện tiếp theo của em
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          {questions.length} câu hỏi được AI chọn lọc nhằm khắc phục trực tiếp lỗi phát hiện trong bài kiểm tra vừa rồi. Em hãy thử sức nhé!
        </p>
      </div>

      <div className="space-y-6">
        {questions.map((q, idx) => {
          const selected = userAnswers[q.id];
          const isChecked = checkedQuestions[q.id];
          const isCorrect = isChecked && selected === q.correctAnswer;

          return (
            <div
              key={q.id}
              className={`p-4 rounded-xl border transition-all ${
                isChecked
                  ? isCorrect
                    ? 'border-emerald-200 bg-emerald-50/20'
                    : 'border-amber-200 bg-amber-50/20'
                  : 'border-slate-100 bg-slate-50/40'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-emerald-600 text-white text-xs font-bold">
                    L{idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {q.topicTitle}
                  </span>
                </div>

                <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  Khắc phục: {q.targetedMistake}
                </span>
              </div>

              {/* Nếu có Audio Script cho câu luyện nghe hoặc nói */}
              {q.audioScript && (
                <div className="my-2.5 p-3 rounded-lg bg-emerald-50/50 border border-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs text-emerald-950 font-medium">
                    {isSpeaking
                      ? '🗣️ Bấm nghe câu thoại mẫu để chọn cách nói đúng:'
                      : '🎧 Bấm nghe đoạn hội thoại để chọn đáp án đúng:'}
                  </span>
                  <AudioPlayButton
                    text={q.audioScript}
                    label={isSpeaking ? 'Nghe câu mẫu' : 'Nghe audio câu này'}
                  />
                </div>
              )}

              {/* Nếu có Đoạn văn đọc hiểu (kỹ năng Reading) */}
              {q.readingPassage && (
                <div className="my-2.5 p-3 rounded-xl bg-gradient-to-br from-amber-50/50 via-emerald-50/40 to-teal-50/30 border border-emerald-200/80 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-900 mb-1">
                    <BookOpenCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Đoạn văn đọc hiểu (Reading Passage):</span>
                  </div>
                  <p className="text-slate-800 italic bg-white p-2.5 rounded-lg border border-emerald-100/70 leading-relaxed font-normal">
                    {q.readingPassage}
                  </p>
                </div>
              )}

              <p className="text-sm font-medium text-slate-800 mb-3 pt-1">
                {q.prompt}
              </p>

              {/* Luyện nói trực tiếp qua Micro cho câu thực hành tiếp theo */}
              {isSpeaking && !isChecked && (
                <div className="mb-3">
                  <VoiceSpeakingInput
                    options={q.options}
                    targetSentence={q.correctAnswer}
                    onSpoken={(transcript, matchedOption) => {
                      if (matchedOption) {
                        handleSelect(q.id, matchedOption);
                      }
                    }}
                    label="Luyện nói câu này qua Micro để khắc phục lỗi ngữ pháp"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                {q.options.map((option) => {
                  const isOptionSelected = selected === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={isChecked}
                      onClick={() => handleSelect(q.id, option)}
                      className={`text-left px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center justify-between border cursor-pointer ${
                        isOptionSelected
                          ? isChecked
                            ? isCorrect
                              ? 'border-emerald-600 bg-emerald-600 text-white'
                              : 'border-rose-600 bg-rose-600 text-white'
                            : 'border-emerald-600 bg-emerald-600 text-white'
                          : isChecked && option === q.correctAnswer
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-800 font-semibold'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-300'
                      }`}
                    >
                      <span>{option}</span>
                      {isChecked && option === q.correctAnswer && (
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      )}
                    </button>
                  );
                })}
              </div>

              {!isChecked ? (
                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    disabled={!selected}
                    onClick={() => handleCheck(q.id)}
                    className={`text-xs px-4 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      selected
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <span>Kiểm tra câu này</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="pt-2 border-t border-slate-200/60 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    {isCorrect ? (
                      <span className="text-emerald-700 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" /> Em đã chọn đúng rồi!
                      </span>
                    ) : (
                      <span className="text-rose-600 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> Đáp án chuẩn là: <strong className="text-slate-800 underline">{q.correctAnswer}</strong>
                      </span>
                    )}
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{q.explanation}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
