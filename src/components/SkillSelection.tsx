import React from 'react';
import { Headphones, PenTool, BookOpenCheck, Mic, Sparkles, Check } from 'lucide-react';

export type SkillType = 'listening' | 'writing' | 'reading' | 'speaking' | 'grammar';

export interface SkillOption {
  key: SkillType;
  letter: string;
  name: string;
  nameVi: string;
  desc: string;
  icon: React.ElementType;
}

export const SKILL_OPTIONS: SkillOption[] = [
  {
    key: 'listening',
    letter: 'a',
    name: 'Listening',
    nameVi: 'Kỹ năng Nghe',
    desc: 'Luyện nghe các đoạn hội thoại ngắn thường gặp trong chương trình lớp 6',
    icon: Headphones,
  },
  {
    key: 'writing',
    letter: 'b',
    name: 'Writing',
    nameVi: 'Kỹ năng Viết',
    desc: 'Luyện viết lại câu và viết đoạn văn ngắn theo chủ đề lớp 6',
    icon: PenTool,
  },
  {
    key: 'reading',
    letter: 'c',
    name: 'Reading',
    nameVi: 'Kỹ năng Đọc hiểu',
    desc: 'Luyện đọc đoạn văn, phát hiện lỗi từ vựng & cấu trúc ngữ pháp thường gặp Lớp 1-9',
    icon: BookOpenCheck,
  },
  {
    key: 'speaking',
    letter: 'd',
    name: 'Speaking',
    nameVi: 'Kỹ năng Nói',
    desc: 'Luyện phản xạ nói, khắc phục lỗi ngữ pháp khi gặp từ lạ và tự tin giao tiếp Lớp 1-9',
    icon: Mic,
  },
];

interface SkillSelectionProps {
  selectedSkill: SkillType | null;
  onSelectSkill: (skill: SkillType) => void;
  onSubmitSkill: () => void;
  isSkillSubmitted: boolean;
  onResetSkill: () => void;
}

export const SkillSelection: React.FC<SkillSelectionProps> = ({
  selectedSkill,
  onSelectSkill,
  onSubmitSkill,
  isSkillSubmitted,
  onResetSkill,
}) => {
  return (
    <section className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 sm:p-6 mb-8" id="skill-selection-section">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-5">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-800">
            Khảo sát: Bạn muốn chọn lĩnh vực nào
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Hãy chọn theo đúng sở thích và mong muốn của em, sau đó bấm nút <strong>"Nộp lựa chọn"</strong> nhé.
          </p>
        </div>

        {isSkillSubmitted && (
          <button
            type="button"
            onClick={onResetSkill}
            className="text-xs text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 self-start sm:self-auto transition-colors font-medium cursor-pointer"
          >
            Thay đổi lựa chọn
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {SKILL_OPTIONS.map((item) => {
          const IconComponent = item.icon;
          const isSelected = selectedSkill === item.key;

          return (
            <button
              key={item.key}
              type="button"
              disabled={isSkillSubmitted}
              onClick={() => onSelectSkill(item.key)}
              className={`relative text-left p-4 rounded-xl border transition-all flex flex-col justify-between group cursor-pointer ${
                isSelected
                  ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-500/20 shadow-xs'
                  : isSkillSubmitted
                  ? 'border-slate-200 bg-slate-50/50 text-slate-400 cursor-not-allowed opacity-60'
                  : 'border-slate-200 bg-white hover:border-emerald-300 hover:bg-slate-50/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center uppercase transition-colors ${
                        isSelected
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 text-slate-700 group-hover:bg-emerald-100 group-hover:text-emerald-800'
                      }`}
                    >
                      {item.letter}
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      {item.name}
                    </span>
                  </div>

                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] transition-all ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-slate-300 bg-white text-transparent'
                    }`}
                  >
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                </div>

                <p className="text-xs text-slate-600 mb-1 font-medium">{item.nameVi}</p>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-end text-[11px]">
                <IconComponent className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-600' : 'text-slate-400'}`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Nút NỘP LỰA CHỌN */}
      {!isSkillSubmitted && (
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            {selectedSkill ? (
              <span className="text-slate-700">
                Em đang chọn: <strong className="text-emerald-700 font-bold uppercase">{selectedSkill}</strong>
              </span>
            ) : (
              <span>Em hãy chọn 1 trong 5 đáp án ở trên.</span>
            )}
          </div>

          <button
            type="button"
            id="btn-submit-skill"
            disabled={!selectedSkill}
            onClick={onSubmitSkill}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer ${
              !selectedSkill
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200 hover:shadow-md'
            }`}
          >
            <span>Nộp lựa chọn</span>
          </button>
        </div>
      )}
    </section>
  );
};
