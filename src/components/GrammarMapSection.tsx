import React from 'react';
import { TopicMapSummary } from '../types';
import { Award, RefreshCw, AlertCircle, Compass, Target, Headphones, Mic, PenTool, BookOpenCheck } from 'lucide-react';

interface GrammarMapSectionProps {
  goodTopics: TopicMapSummary[];
  needPracticeTopics: TopicMapSummary[];
  priorityReviewTopics: TopicMapSummary[];
  commonMistakeNote: string;
  skillType?: 'grammar' | 'listening' | 'speaking' | 'writing' | 'reading';
  gradeLevel?: number;
}

export const GrammarMapSection: React.FC<GrammarMapSectionProps> = ({
  goodTopics = [],
  needPracticeTopics = [],
  priorityReviewTopics = [],
  commonMistakeNote = '',
  skillType = 'grammar',
  gradeLevel = 6,
}) => {
  const isListening = skillType === 'listening';
  const isSpeaking = skillType === 'speaking';
  const isWriting = skillType === 'writing';
  const isReading = skillType === 'reading';
  const mapTitle = isSpeaking
    ? 'Speaking Map của em'
    : isListening
    ? 'Listening Map của em'
    : isWriting
    ? 'Writing Map của em'
    : isReading
    ? 'Reading Map của em'
    : 'Grammar Map của em';
  const mapDesc = isSpeaking
    ? `Bản đồ tổng hợp các chủ điểm kỹ năng nói Lớp ${gradeLevel} dựa trên kết quả bài kiểm tra vừa qua.`
    : isListening
    ? `Bản đồ tổng hợp các chủ điểm kỹ năng nghe Lớp ${gradeLevel} dựa trên kết quả bài kiểm tra vừa qua.`
    : isWriting
    ? `Bản đồ tổng hợp các chủ điểm kỹ năng viết (Writing) Lớp ${gradeLevel} dựa trên kết quả bài kiểm tra vừa qua.`
    : isReading
    ? `Bản đồ tổng hợp các chủ điểm kỹ năng đọc hiểu (Reading) Lớp ${gradeLevel} dựa trên kết quả bài kiểm tra vừa qua.`
    : `Bản đồ tổng hợp các chủ điểm ngữ pháp Lớp ${gradeLevel} dựa trên kết quả bài kiểm tra vừa qua.`;

  return (
    <section
      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 sm:p-6 mb-8"
      id={
        isSpeaking
          ? 'speaking-map-section'
          : isListening
          ? 'listening-map-section'
          : isWriting
          ? 'writing-map-section'
          : isReading
          ? 'reading-map-section'
          : 'grammar-map-section'
      }
    >
      <div className="border-b border-slate-100 pb-4 mb-6">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          {isSpeaking ? (
            <Mic className="w-5 h-5 text-emerald-600" />
          ) : isListening ? (
            <Headphones className="w-5 h-5 text-emerald-600" />
          ) : isWriting ? (
            <PenTool className="w-5 h-5 text-emerald-600" />
          ) : isReading ? (
            <BookOpenCheck className="w-5 h-5 text-emerald-600" />
          ) : (
            <Compass className="w-5 h-5 text-emerald-600" />
          )}
          <span>{mapTitle}</span>
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          {mapDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Nhóm 1: Chủ điểm đã khá tốt */}
        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                Chủ điểm đã khá tốt
              </h3>
              <span className="text-[11px] text-emerald-700 font-medium">
                {goodTopics.length} chủ điểm
              </span>
            </div>
          </div>

          {goodTopics.length === 0 ? (
            <p className="text-xs text-slate-500 italic">Chưa có chủ điểm đạt tối đa trong lần này.</p>
          ) : (
            <div className="space-y-2">
              {goodTopics.map((t) => (
                <div key={t.topic} className="p-2.5 rounded-lg bg-white border border-emerald-100 shadow-2xs">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-800 mb-1">
                    <span>{t.topicTitle}</span>
                    <span className="text-emerald-600">{t.correctCount}/{t.totalCount}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{t.statusNote}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Nhóm 2: Chủ điểm cần luyện thêm */}
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <RefreshCw className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                Chủ điểm cần luyện thêm
              </h3>
              <span className="text-[11px] text-amber-700 font-medium">
                {needPracticeTopics.length} chủ điểm
              </span>
            </div>
          </div>

          {needPracticeTopics.length === 0 ? (
            <p className="text-xs text-slate-500 italic">Không có chủ điểm nào ở mức này.</p>
          ) : (
            <div className="space-y-2">
              {needPracticeTopics.map((t) => (
                <div key={t.topic} className="p-2.5 rounded-lg bg-white border border-amber-100 shadow-2xs">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-800 mb-1">
                    <span>{t.topicTitle}</span>
                    <span className="text-amber-600">{t.correctCount}/{t.totalCount}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{t.statusNote}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Nhóm 3: Chủ điểm nên ưu tiên ôn */}
        <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
              <AlertCircle className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-xs font-bold text-rose-900 uppercase tracking-wider">
                Chủ điểm nên ưu tiên ôn
              </h3>
              <span className="text-[11px] text-rose-700 font-medium">
                {priorityReviewTopics.length} chủ điểm
              </span>
            </div>
          </div>

          {priorityReviewTopics.length === 0 ? (
            <p className="text-xs text-slate-500 italic">Tuyệt vời! Không có chủ điểm nào cần ưu tiên ôn gấp.</p>
          ) : (
            <div className="space-y-2">
              {priorityReviewTopics.map((t) => (
                <div key={t.topic} className="p-2.5 rounded-lg bg-white border border-rose-100 shadow-2xs">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-800 mb-1">
                    <span>{t.topicTitle}</span>
                    <span className="text-rose-600">{t.correctCount}/{t.totalCount}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{t.statusNote}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Hộp tóm tắt: Lỗi thường gặp */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
        <Target className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
            Lỗi thường gặp của em trong bài này:
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            {commonMistakeNote}
          </p>
        </div>
      </div>
    </section>
  );
};
