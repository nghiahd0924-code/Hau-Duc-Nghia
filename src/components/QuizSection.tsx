import React from 'react';
import { Question } from '../types';
import { CheckCircle, CircleAlert, Sparkles, Loader2, Headphones, BookOpen, Mic, PenTool, BookOpenCheck } from 'lucide-react';
import { AudioPlayButton } from './AudioPlayButton';
import { VoiceSpeakingInput } from './VoiceSpeakingInput';
import { SpeakingExerciseCard } from './SpeakingExerciseCard';
import { WritingExerciseCard } from './WritingExerciseCard';
import { GradeLevel } from './GradeSelection';

interface QuizSectionProps {
  questions: Question[];
  selectedAnswers: Record<number, string>;
  onSelectAnswer: (questionId: number, answer: string, score?: number) => void;
  speakingScores?: Record<number, number>;
  onSubmit: () => void;
  isLoading: boolean;
  hasSubmitted: boolean;
  onReset: () => void;
  skillType?: 'grammar' | 'listening' | 'speaking' | 'writing' | 'reading';
  gradeLevel?: GradeLevel;
  grammarLessonTitle?: string;
  grammarFormula?: string;
  onOpenSpeakingStudio?: () => void;
  onUpdateQuestion?: (updatedQuestion: Question) => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  questions,
  selectedAnswers,
  onSelectAnswer,
  speakingScores = {},
  onSubmit,
  isLoading,
  hasSubmitted,
  onReset,
  skillType = 'grammar',
  gradeLevel = 6,
  grammarLessonTitle,
  grammarFormula,
  onOpenSpeakingStudio,
  onUpdateQuestion,
}) => {
  const answeredCount = Object.keys(selectedAnswers).length;
  const isComplete = answeredCount === questions.length;
  const isListening = skillType === 'listening';
  const isSpeaking = skillType === 'speaking';
  const isWriting = skillType === 'writing';
  const isReading = skillType === 'reading';

  return (
    <section className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 sm:p-6 mb-8" id="quiz-section">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              {isSpeaking ? (
                <>
                  <Mic className="w-5 h-5 text-emerald-600" />
                  <span>Bài kiểm tra nói (Speaking) – Lớp {gradeLevel}</span>
                </>
              ) : isListening ? (
                <>
                  <Headphones className="w-5 h-5 text-emerald-600" />
                  <span>Bài kiểm tra nghe – Lớp {gradeLevel}</span>
                </>
              ) : isWriting ? (
                <>
                  <PenTool className="w-5 h-5 text-emerald-600" />
                  <span>Bài kiểm tra viết (Writing) – Lớp {gradeLevel}</span>
                </>
              ) : isReading ? (
                <>
                  <BookOpenCheck className="w-5 h-5 text-emerald-600" />
                  <span>Bài kiểm tra đọc hiểu (Reading) – Lớp {gradeLevel}</span>
                </>
              ) : (
                <>
                  <BookOpen className="w-5 h-5 text-teal-600" />
                  <span>{grammarLessonTitle ? `Ngữ pháp: ${grammarLessonTitle}` : `Bài kiểm tra ngữ pháp – Lớp ${gradeLevel}`}</span>
                </>
              )}
            </h2>
            {skillType === 'grammar' && grammarLessonTitle ? (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                💡 Chuyên đề chọn lọc
              </span>
            ) : (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Độ khó: Lớp {gradeLevel} 🎒
              </span>
            )}
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 border border-emerald-300/60">
              🎯 {questions.length} câu chuẩn ({answeredCount}/{questions.length} câu)
            </span>
          </div>

          <p className="text-xs text-slate-500">
            {isSpeaking
              ? `Bài tập Luyện đọc theo câu mẫu & AI chấm điểm phát âm Tiếng Anh Lớp ${gradeLevel}. Bộ gồm ${questions.length} câu, em hãy nghe mẫu và bấm Micro đọc to từng câu nhé!`
              : isListening
              ? `Bộ câu hỏi nghe Tiếng Anh Lớp ${gradeLevel} gồm ${questions.length} câu chuẩn độ khó. Em hãy bấm nút nghe audio từng câu và chọn đáp án đúng nhất nhé!`
              : isWriting
              ? `Kỹ năng Viết Lớp ${gradeLevel} gồm ${questions.length} câu: Câu 1–${questions.length - 1} sắp xếp từ ngữ; Câu ${questions.length} viết đoạn văn ngắn có AI chấm chi tiết.`
              : isReading
              ? `Kỹ năng Đọc hiểu Lớp ${gradeLevel} gồm ${questions.length} câu: Đọc đoạn văn ngắn, nhận diện từ vựng ngữ cảnh và ngữ pháp. Em hãy chọn đáp án chính xác nhé!`
              : grammarLessonTitle
              ? `Bài rèn luyện chuyên sâu chủ điểm "${grammarLessonTitle}" gồm ${questions.length} câu hỏi. Đọc kỹ câu hỏi và áp dụng quy tắc ngữ pháp để chọn đáp án chính xác nhé!`
              : `Bộ câu hỏi ngữ pháp Tiếng Anh Lớp ${gradeLevel} gồm ${questions.length} câu chẩn đoán cốt lõi. Em hãy đọc kỹ và chọn đáp án chính xác nhé!`}
          </p>

          {grammarFormula && (
            <div className="mt-2.5 p-2 px-3 rounded-xl bg-slate-900 text-emerald-300 font-mono text-xs font-bold inline-flex items-center gap-2 border border-slate-800 shadow-2xs">
              <span className="text-slate-400 font-sans text-[10px] select-none uppercase tracking-wider">Công thức:</span>
              <span>{grammarFormula}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {isSpeaking && onOpenSpeakingStudio && (
            <button
              onClick={onOpenSpeakingStudio}
              type="button"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-300 bg-emerald-50/70 hover:bg-emerald-100 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Mic className="w-3.5 h-3.5 text-emerald-600" />
              <span>Phòng Luyện Nói Tương Tác</span>
            </button>
          )}

          {hasSubmitted && (
            <button
              onClick={onReset}
              type="button"
              className="text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 self-start sm:self-auto transition-colors cursor-pointer"
            >
              Làm lại từ đầu
            </button>
          )}
        </div>
      </div>

      {/* Danh sách câu hỏi Progress Bar Navigator */}
      <div className="mb-6 p-3 bg-emerald-50/50 rounded-xl border border-emerald-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
          <span>🎯 Danh sách {questions.length} câu:</span>
          <span className="text-[11px] font-medium text-emerald-700">
            (Nhấp vào số câu để chuyển nhanh)
          </span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {questions.map((q, idx) => {
            const isAnswered = selectedAnswers[q.id] !== undefined && selectedAnswers[q.id] !== '';
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => {
                  const el = document.getElementById(`question-card-${q.id}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shrink-0 ${
                  isAnswered
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40'
                }`}
              >
                <span>Câu {idx + 1}</span>
                {isAnswered && <span className="text-[10px]">✓</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Khi là Kỹ năng Nói (Speaking): Hiển thị danh sách các bài tập có từ ngữ để học sinh đọc theo & AI chấm điểm */}
      {isSpeaking ? (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-xs text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-emerald-600 text-white shadow-2xs">
                <Mic className="w-4 h-4" />
              </span>
              <div>
                <p className="font-bold text-emerald-900 text-sm">
                  Bài tập đọc theo từ ngữ & AI chấm điểm phát âm
                </p>
                <p className="text-emerald-800 text-xs mt-0.5">
                  Mỗi câu có từ ngữ/câu mẫu chuẩn. Em nghe phát âm mẫu, bấm Micro đọc theo để AI phân tích và chấm điểm từng từ!
                </p>
              </div>
            </div>

            {!hasSubmitted && (
              <button
                type="button"
                onClick={() => {
                  // Giúp thử nhanh cả bộ câu đọc theo nếu micro bị giới hạn trên trình duyệt
                  questions.forEach((q) => {
                    onSelectAnswer(q.id, q.correctAnswer, 95);
                  });
                }}
                className="text-[11px] font-bold text-emerald-800 bg-white hover:bg-emerald-100/80 border border-emerald-300 px-3 py-1.5 rounded-lg whitespace-nowrap cursor-pointer transition-all shadow-2xs self-start sm:self-auto"
              >
                ✨ Đọc thử mẫu toàn bộ câu
              </button>
            )}
          </div>

          {questions.map((q, idx) => (
            <div key={q.id} id={`question-card-${q.id}`}>
              <SpeakingExerciseCard
                exercise={q}
                index={idx}
                total={questions.length}
                onRecordResult={(questionId, transcript, score) => {
                  onSelectAnswer(questionId, transcript, score);
                }}
                savedResult={
                  selectedAnswers[q.id]
                    ? {
                        transcript: selectedAnswers[q.id],
                        score: speakingScores[q.id] ?? 85,
                      }
                    : undefined
                }
                isSubmitted={hasSubmitted}
              />
            </div>
          ))}
        </div>
      ) : isWriting ? (
        /* Khi là Kỹ năng Viết (Writing): Học sinh tự viết đáp án & Câu 6 là đề bài văn ngẫu nhiên */
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50/70 border border-emerald-200 text-xs text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-emerald-600 text-white shadow-2xs">
                <PenTool className="w-4 h-4" />
              </span>
              <div>
                <p className="font-bold text-emerald-900 text-sm">
                  Kỹ năng Viết: Quy tắc dùng từ & Viết đoạn văn theo chuẩn số câu
                </p>
                <p className="text-emerald-800 text-xs mt-0.5 leading-relaxed">
                  • <strong>Câu 1 – {questions.length - 1}:</strong> Mỗi từ chỉ sử dụng một lần. Em bấm chọn các thẻ từ theo thứ tự để ghép thành câu hoàn chỉnh.<br />
                  • <strong>Câu {questions.length}:</strong> Viết đoạn văn tiếng Anh ngẫu nhiên — <strong>{gradeLevel <= 3 ? "Lớp 1–3 viết 3 đến 6 câu" : gradeLevel <= 5 ? "Lớp 4–5 viết 8 đến 10 câu" : "Lớp 6–9 viết trên 15 câu (> 15 câu)"}</strong>. Có dàn ý gợi ý và có thể bấm <strong>"Đổi đề ngẫu nhiên khác 🎲"</strong>.
                </p>
              </div>
            </div>

            {!hasSubmitted && (
              <button
                type="button"
                onClick={() => {
                  // Giúp học sinh thử nhanh nếu muốn xem phân tích mẫu
                  questions.forEach((q) => {
                    onSelectAnswer(q.id, q.correctAnswer);
                  });
                }}
                className="text-[11px] font-bold text-emerald-800 bg-white hover:bg-emerald-100/80 border border-emerald-300 px-3 py-1.5 rounded-lg whitespace-nowrap cursor-pointer transition-all shadow-2xs self-start sm:self-auto"
              >
                ✨ Điền mẫu gợi ý toàn bộ
              </button>
            )}
          </div>

          {questions.map((q, idx) => (
            <div key={`${gradeLevel}-${q.id}`} id={`question-card-${q.id}`}>
              <WritingExerciseCard
                exercise={q}
                index={idx}
                total={questions.length}
                currentAnswer={selectedAnswers[q.id] || ''}
                onAnswerChange={(qId, text) => {
                  onSelectAnswer(qId, text);
                }}
                gradeLevel={gradeLevel}
                isSubmitted={hasSubmitted}
                onUpdateQuestion={onUpdateQuestion}
              />
            </div>
          ))}
        </div>
      ) : (
        /* Kỹ năng Nghe (Listening) hoặc Ngữ pháp (Grammar) */
        <div className="space-y-6">
          {questions.map((q, idx) => {
            const isSelected = selectedAnswers[q.id] !== undefined;

            return (
              <div
                key={q.id}
                id={`question-card-${q.id}`}
                className={`p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'border-emerald-200 bg-emerald-50/20'
                    : 'border-slate-100 bg-slate-50/40 hover:border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      {q.topicTitle}
                    </span>
                  </div>
                  {isSelected && (
                    <span className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
                      <CheckCircle className="w-3.5 h-3.5" /> Đã chọn
                    </span>
                  )}
                </div>

                {/* Nếu có Audio Script (bài kiểm tra nghe) */}
                {q.audioScript && (
                  <div className="my-3 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="text-xs text-emerald-950 font-medium">
                      {q.audioContext ? (
                        <span>🎧 <strong>Ngữ cảnh:</strong> {q.audioContext}</span>
                      ) : (
                        <span>🎧 <strong>Đoạn nghe:</strong> Bấm nút để nghe audio</span>
                      )}
                    </div>
                    <AudioPlayButton
                      text={q.audioScript}
                      label="Bấm để nghe audio"
                    />
                  </div>
                )}

                {/* Nếu có Đoạn văn đọc hiểu (bài kiểm tra đọc hiểu Reading) */}
                {q.readingPassage && (
                  <div className="my-3 p-3.5 rounded-xl bg-gradient-to-br from-amber-50/50 via-emerald-50/40 to-teal-50/30 border border-emerald-200/90 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 mb-1.5">
                      <BookOpenCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Đoạn văn đọc hiểu (Reading Passage):</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal bg-white/90 p-3 rounded-lg border border-emerald-100/80 shadow-2xs">
                      {q.readingPassage}
                    </p>
                  </div>
                )}

                <p className="text-sm font-medium text-slate-800 mb-3 pt-1">
                  {q.prompt}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((option) => {
                    const isOptionSelected = selectedAnswers[q.id] === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        disabled={hasSubmitted}
                        onClick={() => onSelectAnswer(q.id, option)}
                        className={`text-left px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center justify-between border cursor-pointer ${
                          isOptionSelected
                            ? 'border-emerald-600 bg-emerald-600 text-white shadow-xs'
                            : hasSubmitted
                            ? 'border-slate-200 bg-white text-slate-500 cursor-not-allowed'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/30'
                        }`}
                      >
                        <span>{option}</span>
                        <span
                          className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[10px] ${
                            isOptionSelected
                              ? 'border-white bg-white text-emerald-700 font-bold'
                              : 'border-slate-300'
                          }`}
                        >
                          {isOptionSelected ? '✓' : ''}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!hasSubmitted && (
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 flex items-center gap-2">
            {!isComplete ? (
              <>
                <CircleAlert className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Em hãy hoàn thành đủ {questions.length} câu để AI phân tích lỗi nhé.</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-emerald-700 font-medium">Em đã trả lời đủ {questions.length} câu, sẵn sàng kiểm tra!</span>
              </>
            )}
          </div>

          <button
            type="button"
            id="btn-check-result"
            disabled={!isComplete || isLoading}
            onClick={onSubmit}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer ${
              !isComplete || isLoading
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200 hover:shadow-md'
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>AI đang phân tích bài...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Kiểm tra kết quả</span>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
};
