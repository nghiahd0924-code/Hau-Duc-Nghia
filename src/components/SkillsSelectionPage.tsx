import React from 'react';
import {
  Headphones,
  BookOpenCheck,
  PenTool,
  Mic,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Trophy,
  Zap,
  Flame,
  BookOpen,
} from 'lucide-react';
import { SkillType } from './SkillSelection';
import { GradeLevel } from './GradeSelection';
import { UserHighScoreData } from '../utils/achievement';
import { GamificationState } from '../utils/gamification';

interface SkillsSelectionPageProps {
  currentGrade: GradeLevel;
  highScoreData: UserHighScoreData;
  gamificationState: GamificationState;
  onSelectSkill: (skill: SkillType, mode?: 'quiz' | 'studio') => void;
  onBackToHome: () => void;
  onChangeGrade: () => void;
}

export interface SkillDetailItem {
  id: SkillType;
  title: string;
  subTitle: string;
  emoji: string;
  icon: React.ReactNode;
  badge: string;
  accentColor: string;
  bgGradient: string;
  borderColor: string;
  buttonGradient: string;
}

export const SkillsSelectionPage: React.FC<SkillsSelectionPageProps> = ({
  currentGrade,
  highScoreData,
  gamificationState,
  onSelectSkill,
  onBackToHome,
  onChangeGrade,
}) => {
  const skills: SkillDetailItem[] = [
    {
      id: 'listening',
      title: 'Listening',
      subTitle: 'Kỹ năng Nghe',
      emoji: '🎧',
      icon: <Headphones className="w-6 h-6 text-sky-600" />,
      badge: 'Chuẩn SGK • 8–10 câu',
      accentColor: 'text-sky-700',
      bgGradient: 'from-sky-50/90 via-white to-blue-50/80',
      borderColor: 'border-sky-300/80 hover:border-sky-500',
      buttonGradient: 'from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700',
    },
    {
      id: 'reading',
      title: 'Reading',
      subTitle: 'Kỹ năng Đọc hiểu',
      emoji: '📖',
      icon: <BookOpenCheck className="w-6 h-6 text-emerald-600" />,
      badge: 'Chuẩn SGK • 8–10 câu',
      accentColor: 'text-emerald-700',
      bgGradient: 'from-emerald-50/90 via-white to-teal-50/80',
      borderColor: 'border-emerald-300/80 hover:border-emerald-500',
      buttonGradient: 'from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700',
    },
    {
      id: 'writing',
      title: 'Writing',
      subTitle: 'Kỹ năng Viết',
      emoji: '✍️',
      icon: <PenTool className="w-6 h-6 text-amber-600" />,
      badge: 'Chuẩn SGK • Viết & Chấm AI',
      accentColor: 'text-amber-700',
      bgGradient: 'from-amber-50/90 via-white to-orange-50/80',
      borderColor: 'border-amber-300/80 hover:border-amber-500',
      buttonGradient: 'from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700',
    },
    {
      id: 'speaking',
      title: 'Speaking',
      subTitle: 'Kỹ năng Nói & Giao tiếp',
      emoji: '🗣️',
      icon: <Mic className="w-6 h-6 text-violet-600" />,
      badge: 'Chuẩn SGK • Luyện phản xạ',
      accentColor: 'text-violet-700',
      bgGradient: 'from-violet-50/90 via-white to-purple-50/80',
      borderColor: 'border-violet-300/80 hover:border-violet-500',
      buttonGradient: 'from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700',
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* THANH ĐIỀU HƯỚNG TRÊN CÙNG */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/95 p-4 rounded-2xl border border-emerald-200/90 shadow-2xs">
        <button
          type="button"
          onClick={onBackToHome}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-xs sm:text-sm font-bold transition-all cursor-pointer border border-slate-200 hover:border-emerald-300 self-start sm:self-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Quay lại Trang chủ 🏠</span>
        </button>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
            <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{gamificationState.exp.toLocaleString()} EXP</span>
            <span className="text-slate-300">•</span>
            <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
            <span>Chuỗi {gamificationState.currentStreak}</span>
          </div>

          <button
            type="button"
            onClick={onChangeGrade}
            className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold cursor-pointer transition-colors"
          >
            Đổi trình độ 🔄
          </button>
        </div>
      </div>

      {/* BANNER GIỚI THIỆU TRANG CHỌN KỸ NĂNG */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-100/95 via-[#eefbf4] to-teal-50/90 border-2 border-emerald-300/80 p-6 sm:p-7 shadow-xs">
        <div className="absolute -top-3 -right-3 text-4xl opacity-20 pointer-events-none select-none">🎯</div>
        <div className="absolute bottom-2 right-12 text-3xl opacity-20 pointer-events-none select-none">✨</div>

        <div className="space-y-2 relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/10 border border-emerald-300 text-emerald-800 text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>4 Kỹ Năng Tiếng Anh</span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-800 tracking-tight">
            Em muốn rèn luyện kỹ năng nào hôm nay? 🚀
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Chọn một trong <strong>4 kỹ năng ngôn ngữ</strong> (Listening 🎧, Reading 📖, Writing ✍️, Speaking 🗣️) để vào chọn tiết học bám sát Sách Giáo Khoa Bộ GD&ĐT!
          </p>
        </div>
      </div>

      {/* DANH SÁCH 4 KỸ NĂNG */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {skills.map((skill) => {
          const record = highScoreData.skills[skill.id];
          return (
            <div
              key={skill.id}
              className={`group rounded-3xl border-2 ${skill.borderColor} bg-gradient-to-br ${skill.bgGradient} p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4`}
            >
              {/* Header của thẻ */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {skill.emoji}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-black text-slate-800">
                          {skill.title}
                        </h3>
                        <span className="text-xs font-bold text-slate-500">
                          • {skill.subTitle}
                        </span>
                      </div>
                      <span className="inline-block mt-0.5 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-white/90 text-slate-600 border border-slate-200">
                        {skill.badge}
                      </span>
                    </div>
                  </div>

                  {/* Kỷ lục điểm nếu có */}
                  {record && record.highestScore > 0 ? (
                    <div className="text-right shrink-0">
                      <div className="inline-flex items-center gap-1 text-[11px] font-black text-amber-800 bg-amber-100/90 px-2 py-1 rounded-xl border border-amber-200">
                        <Trophy className="w-3 h-3 text-amber-600" />
                        <span>{record.highestScore}/{record.totalQuestions || 10} câu</span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-semibold mt-0.5">
                        {record.highestPercent}% chính xác
                      </div>
                    </div>
                  ) : (
                    <span className="text-[11px] font-semibold text-slate-400 bg-white/60 px-2 py-1 rounded-xl border border-slate-200/60 shrink-0">
                      Chưa làm bài
                    </span>
                  )}
                </div>
              </div>

              {/* Các nút hành động */}
              <div className="pt-2 border-t border-slate-200/60 flex flex-col sm:flex-row items-stretch gap-2">
                <button
                  type="button"
                  onClick={() => onSelectSkill(skill.id, 'quiz')}
                  className={`flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r ${skill.buttonGradient} text-white font-extrabold text-xs sm:text-sm transition-all shadow-xs hover:shadow-md hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer`}
                >
                  <span>Chọn {skill.title} & Xem các tiết học 📚</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {skill.id === 'speaking' && (
                  <button
                    type="button"
                    onClick={() => onSelectSkill('speaking', 'studio')}
                    className="py-3 px-3.5 rounded-2xl bg-white hover:bg-violet-50 text-violet-700 font-extrabold text-xs border border-violet-300 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    title="Vào phòng thu âm nói tương tác AI"
                  >
                    <Mic className="w-3.5 h-3.5 text-violet-600" />
                    <span>Phòng Luyện Nói 🎙️</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* GHI CHÚ VỀ CHUYÊN ĐỀ NGỮ PHÁP (GRAMMAR) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-teal-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center text-xl shrink-0">
            💡
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-extrabold text-slate-800">
              Bạn muốn rèn luyện Ngữ pháp (Grammar)?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Kho bài học Ngữ pháp toàn diện không giới hạn: các thì, câu bị động, câu điều kiện, mệnh đề quan hệ...
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onSelectSkill('grammar')}
          className="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white shadow-xs border border-teal-500 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer self-start sm:self-auto shrink-0"
        >
          <span>Chọn bài học Ngữ pháp 💡</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
