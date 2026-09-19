import React from 'react';
import { QuestionAnalysis } from '../types';
import { CheckCircle2, XCircle, AlertTriangle, Lightbulb, Volume2, BookOpenCheck } from 'lucide-react';
import { AudioPlayButton } from './AudioPlayButton';

interface AnalysisSectionProps {
  analyses: QuestionAnalysis[];
  questionsPromptMap: Record<number, string>;
  audioScriptsMap?: Record<number, string>;
  readingPassagesMap?: Record<number, string>;
  skillType?: 'grammar' | 'listening' | 'speaking' | 'writing' | 'reading';
}

export const AnalysisSection: React.FC<AnalysisSectionProps> = ({
  analyses,
  questionsPromptMap,
  audioScriptsMap = {},
  readingPassagesMap = {},
  skillType = 'grammar',
}) => {
  const correctCount = analyses.filter((a) => a.isCorrect).length;
  const isListening = skillType === 'listening';
  const isSpeaking = skillType === 'speaking';
  const isWriting = skillType === 'writing';
  const isReading = skillType === 'reading';

  return (
    <section className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 sm:p-6 mb-8" id="analysis-section">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            Phân tích chi tiết từng câu
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {isSpeaking
              ? 'Xem lại câu trả lời, xác định lỗi ngữ pháp khi nói và lời giải thích quy tắc từ Trợ lý AI.'
              : isListening
              ? 'Xem lại lời thoại (transcript), từ khóa quan trọng và giải thích lỗi nghe từ Trợ lý AI.'
              : isWriting
              ? 'Xem lại câu viết của em, xác định lỗi trật tự từ/ngữ pháp và lời giải thích quy tắc từ Trợ lý AI.'
              : isReading
              ? 'Xem lại đoạn văn, phát hiện lỗi ngữ pháp & từ vựng thường gặp và lời giải thích quy tắc từ Trợ lý AI.'
              : 'Xem lại câu trả lời và lời giải thích quy tắc ngữ pháp từ Trợ lý AI.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
            {correctCount}/{analyses.length} câu đúng
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {analyses.map((item, index) => {
          const prompt = questionsPromptMap[item.questionId] || `Câu hỏi #${item.questionId}`;
          const audioScript = item.audioScript || audioScriptsMap[item.questionId];
          const readingPassage = item.readingPassage || readingPassagesMap[item.questionId];

          return (
            <div
              key={item.questionId}
              className={`p-4 rounded-xl border transition-all ${
                item.isCorrect
                  ? 'border-emerald-100 bg-emerald-50/20'
                  : 'border-rose-100 bg-rose-50/20'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`flex items-center justify-center w-6 h-6 rounded-md text-xs font-bold ${
                      item.isCorrect
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {item.topicTitle}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold">
                  {isSpeaking && item.score !== undefined && (
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                        item.score >= 90
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : item.score >= 75
                          ? 'bg-teal-100 text-teal-800 border-teal-300'
                          : 'bg-amber-100 text-amber-800 border-amber-300'
                      }`}
                    >
                      AI Chấm: {item.score}/100
                    </span>
                  )}
                  {item.isCorrect ? (
                    <span className="text-emerald-700 flex items-center gap-1 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {isSpeaking ? 'Đạt chuẩn' : 'Đúng'}
                    </span>
                  ) : (
                    <span className="text-rose-700 flex items-center gap-1 bg-rose-100/70 px-2 py-0.5 rounded-full">
                      <XCircle className="w-3.5 h-3.5" /> {isSpeaking ? 'Cần luyện thêm' : 'Chưa chính xác'}
                    </span>
                  )}
                </div>
              </div>

              {/* Lời thoại audio đối chiếu (đặc biệt hữu ích khi nghe hoặc nói) */}
              {audioScript && (
                <div className="my-2.5 p-3 rounded-lg bg-white border border-slate-200 text-xs">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-semibold text-slate-700 flex items-center gap-1">
                      <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                      {isSpeaking ? 'Câu mẫu đọc theo (Model Audio):' : 'Lời thoại đoạn băng (Transcript):'}
                    </span>
                    <AudioPlayButton
                      text={audioScript}
                      label={isSpeaking ? 'Nghe phát âm chuẩn' : 'Nghe lại đoạn này'}
                    />
                  </div>
                  <p className="text-slate-700 font-semibold italic bg-slate-50 p-2 rounded">
                    "{audioScript}"
                  </p>
                </div>
              )}

              {/* Đoạn văn đọc hiểu đối chiếu (khi làm kỹ năng Reading) */}
              {readingPassage && (
                <div className="my-2.5 p-3 rounded-lg bg-emerald-50/50 border border-emerald-200 text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-emerald-900 mb-1">
                    <BookOpenCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Đoạn văn đọc hiểu (Reading Passage):</span>
                  </div>
                  <p className="text-slate-700 italic bg-white p-2.5 rounded border border-emerald-100/60 leading-relaxed">
                    "{readingPassage}"
                  </p>
                </div>
              )}

              <p className="text-sm font-medium text-slate-800 mb-3">
                {prompt}
              </p>

              {/* Khối hiển thị đáp án học sinh và đối chiếu */}
              {isWriting && (item.questionId === 6 || item.topic === 'writing_essay_paragraph') ? (
                /* Giao diện đặc biệt cho Câu 6: Đoạn văn tiếng Anh */
                <div className="space-y-3 mb-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-slate-600 font-bold">
                        ✍️ Đoạn văn tiếng Anh em đã tự viết:
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {item.studentAnswer?.trim().split(/\s+/).filter(Boolean).length || 0} từ
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed whitespace-pre-wrap font-medium p-3 rounded-lg ${
                      item.isCorrect ? 'bg-emerald-50/50 text-slate-800' : 'bg-rose-50/40 text-slate-800'
                    }`}>
                      {item.studentAnswer || '(Học sinh chưa nhập bài viết)'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-emerald-900 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Đoạn văn tham khảo chuẩn (Model Essay):</span>
                      </span>
                      <AudioPlayButton
                        text={item.correctAnswer}
                        label="Nghe đọc đoạn văn mẫu"
                      />
                    </div>
                    <p className="text-sm leading-relaxed text-slate-800 whitespace-pre-wrap bg-white p-3 rounded-lg border border-emerald-100 font-normal">
                      {item.correctAnswer}
                    </p>
                  </div>
                </div>
              ) : (
                /* Giao diện 2 cột tiêu chuẩn cho câu 1-5 hoặc kỹ năng khác */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex flex-col justify-between gap-1">
                    <span className="text-slate-500 font-medium">
                      {isSpeaking
                        ? 'Giọng em đọc nhận diện được:'
                        : isWriting
                        ? 'Câu em đã tự viết:'
                        : 'Lựa chọn của em:'}
                    </span>
                    <span className={`font-semibold text-sm ${item.isCorrect ? 'text-emerald-700' : 'text-rose-600'}`}>
                      "{item.studentAnswer}"
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex flex-col justify-between gap-1">
                    <span className="text-slate-500 font-medium">
                      {isSpeaking
                        ? 'Câu mẫu chuẩn cần đọc theo:'
                        : isWriting
                        ? 'Câu viết chuẩn ngữ pháp:'
                        : isReading
                        ? 'Đáp án đúng theo bài đọc:'
                        : 'Đáp án chuẩn:'}
                    </span>
                    <span className="font-semibold text-sm text-emerald-700">
                      "{item.correctAnswer}"
                    </span>
                  </div>
                </div>
              )}

              {item.errorType && (
                <div className="mb-2.5 p-2.5 rounded-lg bg-rose-50 border border-rose-200/80 text-xs text-rose-800 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
                  <div>
                    <span className="font-semibold">Lỗi phát hiện: </span>
                    <span>{item.errorType}</span>
                  </div>
                </div>
              )}

              <div className="p-2.5 rounded-lg bg-slate-50/80 border border-slate-200/70 text-xs text-slate-700 flex items-start gap-2">
                <Lightbulb className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800">
                    {isSpeaking
                      ? 'Quy tắc ngữ pháp khi nói: '
                      : isListening
                      ? 'Gợi ý nghe chuẩn: '
                      : isWriting
                      ? 'Quy tắc viết câu: '
                      : isReading
                      ? 'Quy tắc đọc hiểu & từ vựng: '
                      : 'Quy tắc ghi nhớ: '}
                  </span>
                  <span>{item.shortExplanation}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
