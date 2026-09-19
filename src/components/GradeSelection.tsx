import React from 'react';
import { GraduationCap, Check, ArrowRight, X } from 'lucide-react';

export type GradeLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface GradeOption {
  grade: GradeLevel;
  label: string;
  stage: 'Tiểu học (Lớp 1-5)' | 'THCS (Lớp 6-9)';
  desc: string;
}

export const GRADE_OPTIONS: GradeOption[] = [
  { grade: 1, label: 'Lớp 1', stage: 'Tiểu học (Lớp 1-5)', desc: 'Chữ cái, số đếm 1-10, màu sắc & từ vựng đồ vật cơ bản' },
  { grade: 2, label: 'Lớp 2', stage: 'Tiểu học (Lớp 1-5)', desc: 'Từ vựng gia đình, con vật, câu chào hỏi & chỉ dẫn đơn giản' },
  { grade: 3, label: 'Lớp 3', stage: 'Tiểu học (Lớp 1-5)', desc: 'This/That, giới từ chỉ vị trí (in/on/under), can/can\'t' },
  { grade: 4, label: 'Lớp 4', stage: 'Tiểu học (Lớp 1-5)', desc: 'Hỏi giờ, ngày trong tuần, quốc tịch & hoạt động yêu thích' },
  { grade: 5, label: 'Lớp 5', stage: 'Tiểu học (Lớp 1-5)', desc: 'Thì Quá khứ đơn cơ bản, Tương lai gần (will/going to), so sánh hơn' },
  { grade: 6, label: 'Lớp 6', stage: 'THCS (Lớp 6-9)', desc: 'Hiện tại đơn, Hiện tại tiếp diễn, There is/are & từ chỉ số lượng' },
  { grade: 7, label: 'Lớp 7', stage: 'THCS (Lớp 6-9)', desc: 'Quá khứ đơn, Thói quen với Used to, Liên từ (although, however)' },
  { grade: 8, label: 'Lớp 8', stage: 'THCS (Lớp 6-9)', desc: 'Hiện tại hoàn thành, Câu bị động cơ bản, Câu điều kiện loại 1' },
  { grade: 9, label: 'Lớp 9', stage: 'THCS (Lớp 6-9)', desc: 'Mệnh đề quan hệ, Câu gián tiếp, Câu điều kiện loại 1 & 2' },
];

interface GradeSelectionProps {
  selectedGrade: GradeLevel | null;
  onSelectGrade: (grade: GradeLevel) => void;
  onSubmitGrade: () => void;
  isGradeSubmitted: boolean;
  onResetGrade: () => void;
  skillName?: string;
  onCancelToHome?: () => void;
}

export const GradeSelection: React.FC<GradeSelectionProps> = ({
  selectedGrade,
  onSelectGrade,
  onSubmitGrade,
  isGradeSubmitted,
  onResetGrade,
  skillName,
  onCancelToHome,
}) => {
  return (
    <section className="bg-white/95 backdrop-blur-xs rounded-3xl border border-emerald-200/90 shadow-xs p-5 sm:p-7 mb-8 relative overflow-hidden" id="grade-selection-section">
      {/* Nút dấu X để thoát về Trang chủ */}
      {onCancelToHome && (
        <button
          type="button"
          id="btn-close-grade-selection"
          onClick={onCancelToHome}
          title="Thoát về Trang chủ (Đóng)"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-500 hover:text-rose-600 border border-slate-200/90 hover:border-rose-200 flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* Decorative subtle background emojis */}
      <div className="absolute top-2 right-16 text-3xl opacity-15 pointer-events-none select-none">🎒</div>
      <div className="absolute bottom-3 right-10 text-2xl opacity-15 pointer-events-none select-none">✨</div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-100/80 pb-4 mb-6 relative z-10 pr-10 sm:pr-12">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 text-[11px] font-bold mb-1.5">
            <span>🌱 Bước khảo sát quan trọng</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-800 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-600" />
            <span>Khảo sát: Bạn muốn trình độ nào</span>
            <span className="text-xl">🌟🎒</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
            Chọn khối lớp của em từ <strong>Lớp 1 đến Lớp 9</strong> để hệ thống chuẩn bị bộ học liệu đúng độ khó và đưa em vào <strong>Trang chủ học tập</strong> nhé! 🏫✨
          </p>
        </div>

        <div className="flex items-center gap-2">
          {onCancelToHome && (
            <button
              type="button"
              onClick={onCancelToHome}
              className="text-xs text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors font-semibold cursor-pointer"
            >
              🏠 Về Trang chủ
            </button>
          )}

          {isGradeSubmitted && (
            <button
              type="button"
              onClick={onResetGrade}
              className="text-xs text-emerald-800 hover:text-emerald-950 px-3 py-1.5 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 transition-colors font-semibold cursor-pointer"
            >
              🔄 Chọn lại khối lớp
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 relative z-10">
        {GRADE_OPTIONS.map((item) => {
          const isSelected = selectedGrade === item.grade;
          const isPrimary = item.grade <= 5;

          return (
            <button
              key={item.grade}
              type="button"
              disabled={isGradeSubmitted}
              onClick={() => onSelectGrade(item.grade)}
              className={`relative text-left p-4 rounded-2xl border transition-all flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/20 shadow-xs'
                  : isGradeSubmitted
                  ? 'border-slate-200 bg-slate-50/50 text-slate-400 cursor-not-allowed opacity-60'
                  : 'border-emerald-100/90 bg-white hover:border-emerald-300 hover:bg-emerald-50/30 hover:shadow-2xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-8 h-8 rounded-xl text-xs font-black flex items-center justify-center transition-colors shadow-2xs ${
                        isSelected
                          ? 'bg-emerald-600 text-white'
                          : 'bg-emerald-100/80 text-emerald-800'
                      }`}
                    >
                      {item.grade}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800 flex items-center gap-1">
                        {item.label}
                        <span className="text-xs">{isPrimary ? '🎈' : '🏫'}</span>
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center text-[11px] transition-all ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-600 text-white shadow-2xs'
                        : 'border-slate-300 bg-white text-transparent'
                    }`}
                  >
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                </div>

                <span className="inline-block text-[10px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md mb-1.5">
                  {item.stage}
                </span>

                <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Nút Nộp lựa chọn trình độ & Vào Trang chủ */}
      {!isGradeSubmitted && (
        <div className="mt-6 pt-5 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="text-xs text-slate-600">
            {selectedGrade ? (
              <span className="text-slate-800 flex items-center gap-1.5">
                <span>🌟 Em đã chọn:</span>
                <strong className="text-emerald-700 font-bold text-sm bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  Lớp {selectedGrade}
                </strong>
                <span className="text-slate-500">• Sẵn sàng vào Trang chủ học tập!</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-slate-500">
                <span>👉 Hãy nhấp chọn một khối lớp từ Lớp 1 đến Lớp 9 ở trên nhé.</span>
              </span>
            )}
          </div>

          <button
            type="button"
            id="btn-submit-grade"
            disabled={!selectedGrade}
            onClick={onSubmitGrade}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              !selectedGrade
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-200 hover:shadow-lg hover:scale-[1.01]'
            }`}
          >
            <span>Xác nhận trình độ & Vào Trang chủ 🚀</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
};
