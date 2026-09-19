import React, { useState, useEffect } from 'react';
import { GradeLevel } from './GradeSelection';
import { SkillType } from './SkillSelection';
import {
  Headphones,
  BookOpen,
  PenTool,
  Mic,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Award,
  CheckCircle2,
  Trophy,
  Play,
  X,
  Flame,
  Star,
  Zap,
  Gift,
  Lock,
  Package,
} from 'lucide-react';
import { AnalysisResponse } from '../types';
import {
  getSavedHighScoreData,
  getBadgesList,
  UserHighScoreData,
} from '../utils/achievement';
import { GamificationState, CHESTS_CONFIG, ChestType } from '../utils/gamification';
import { TreasureChestGraphic } from './TreasureChestGraphic';
import { GRAMMAR_QUESTIONS_BY_GRADE } from '../data';

interface HomePageProps {
  currentGrade: GradeLevel;
  onSelectSkill: (skill: SkillType, mode?: 'quiz' | 'studio') => void;
  onOpenSkillsSelection?: () => void;
  onChangeGrade: () => void;
  lastAnalysis?: AnalysisResponse | null;
  lastSkill?: SkillType | null;
  onViewLastResult?: () => void;
  gamificationState: GamificationState;
  onOpenShop: () => void;
  onOpenInventory?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentGrade,
  onSelectSkill,
  onOpenSkillsSelection,
  onChangeGrade,
  lastAnalysis,
  lastSkill,
  onViewLastResult,
  gamificationState,
  onOpenShop,
  onOpenInventory,
}) => {
  // Trạng thái modal Thành tích cao nhất
  const [showAchievementModal, setShowAchievementModal] = useState<boolean>(false);
  const [highScoreData, setHighScoreData] = useState<UserHighScoreData>(() => getSavedHighScoreData());

  // Cập nhật lại số liệu thành tích mỗi khi render hoặc mở modal
  useEffect(() => {
    setHighScoreData(getSavedHighScoreData());
  }, [lastAnalysis]);

  const badges = getBadgesList(highScoreData);

  const skillsList: Array<{
    id: SkillType;
    title: string;
    emoji: string;
    tagline: string;
    icon: React.ReactNode;
    badge: string;
    accentColor: string;
    cardBg: string;
    borderColor: string;
    features: string[];
    actionLabel: string;
    hasStudioOption?: boolean;
  }> = [
    {
      id: 'listening',
      title: 'Listening (Kỹ năng Nghe)',
      emoji: '🎧',
      tagline: `Nghe phát âm chuẩn, bắt từ khóa và hiểu hội thoại Lớp ${currentGrade}`,
      icon: <Headphones className="w-5 h-5 text-sky-600" />,
      badge: '🎯 8–10 câu nghe audio chân thực 🎶',
      accentColor: 'text-sky-700',
      cardBg: 'hover:bg-sky-50/40',
      borderColor: 'border-sky-200/80 hover:border-sky-400',
      features: [
        'Trọn bộ 8–10 câu trắc nghiệm nghe chuẩn độ khó Lớp ' + currentGrade,
        'Nghe âm thanh thực tế, tốc độ vừa phải',
        'AI cung cấp Transcript & phân tích từ khóa bắt buộc',
      ],
      actionLabel: 'Bắt đầu bài Nghe (8–10 câu) 🎧',
    },
    {
      id: 'reading',
      title: 'Reading (Kỹ năng Đọc hiểu)',
      emoji: '📖',
      tagline: `Đọc hiểu đoạn văn, nhận diện ngữ pháp & từ vựng trong ngữ cảnh`,
      icon: <BookOpen className="w-5 h-5 text-emerald-600" />,
      badge: '🎯 8–10 câu đọc hiểu đoạn văn 📚',
      accentColor: 'text-emerald-700',
      cardBg: 'hover:bg-emerald-50/40',
      borderColor: 'border-emerald-200/80 hover:border-emerald-400',
      features: [
        'Trọn bộ 8–10 câu kèm đoạn văn ngắn phù hợp học sinh Lớp ' + currentGrade,
        'Khắc phục nhầm lẫn từ vựng, thì động từ & liên từ',
        'AI phân tích dẫn chứng câu văn & tạo bài luyện đọc tiếp theo',
      ],
      actionLabel: 'Bắt đầu bài Đọc (8–10 câu) 📖',
    },
    {
      id: 'writing',
      title: 'Writing (Kỹ năng Viết)',
      emoji: '✍️',
      tagline: `Sắp xếp trật tự từ và tự viết câu/đoạn văn tiếng Anh chuẩn ngữ pháp`,
      icon: <PenTool className="w-5 h-5 text-amber-600" />,
      badge: '🎯 8–10 câu viết & Chấm AI ✏️',
      accentColor: 'text-amber-700',
      cardBg: 'hover:bg-amber-50/40',
      borderColor: 'border-amber-200/80 hover:border-amber-400',
      features: [
        'Trọn bộ 8–10 câu: sắp xếp từ ngữ + câu viết đoạn văn ngắn có AI chấm',
        'Luyện viết theo quy tắc ngữ pháp chuẩn Lớp ' + currentGrade,
        'AI chấm chi tiết: chính tả, chia thì, cấu trúc câu',
      ],
      actionLabel: 'Bắt đầu bài Viết (8–10 câu) ✍️',
    },
    {
      id: 'speaking',
      title: 'Speaking (Kỹ năng Nói)',
      emoji: '🗣️',
      tagline: `Luyện phản xạ giao tiếp tự tin và vào phòng thu âm nói tương tác AI`,
      icon: <Mic className="w-5 h-5 text-violet-600" />,
      badge: '🎯 8–10 câu phản xạ nói 🎙️',
      accentColor: 'text-violet-700',
      cardBg: 'hover:bg-violet-50/40',
      borderColor: 'border-violet-200/80 hover:border-violet-400',
      features: [
        'Trọn bộ 8–10 câu kiểm tra phản xạ đọc mẫu & nói chuẩn Lớp ' + currentGrade,
        'Phòng Luyện Nói Tương Tác với chủ đề sinh động',
        'AI chấm điểm phát âm, chỉ ra điểm nói tốt và gợi ý cải thiện',
      ],
      actionLabel: 'Làm bài kiểm tra Nói (8–10 câu) 🗣️',
      hasStudioOption: true,
    },
    {
      id: 'grammar',
      title: 'Grammar (Ngữ pháp trọng tâm)',
      emoji: '💡',
      tagline: `Chẩn đoán toàn diện các cấu trúc ngữ pháp cốt lõi Lớp ${currentGrade}`,
      icon: <Sparkles className="w-5 h-5 text-teal-600" />,
      badge: '🎯 8–10 câu ngữ pháp cốt lõi 🌟',
      accentColor: 'text-teal-700',
      cardBg: 'hover:bg-teal-50/40',
      borderColor: 'border-teal-200/80 hover:border-teal-400',
      features: [
        'Trọn bộ 8–10 câu khảo sát chẩn đoán ngữ pháp trọng điểm Lớp ' + currentGrade,
        'AI phân loại lỗi: chia thì, giới từ, mạo từ, cấu trúc câu',
        'Xây dựng Grammar Map và đề xuất bài luyện củng cố ngay',
      ],
      actionLabel: 'Bắt đầu Ngữ pháp (8–10 câu) 💡',
    },
  ];

  const grammarQuestions = GRAMMAR_QUESTIONS_BY_GRADE[currentGrade] || [];
  const grammarTopics = Array.from(new Set(grammarQuestions.map((q) => q.topicTitle).filter(Boolean)));
  const otherSkills = skillsList.filter((s) => s.id !== 'grammar');

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* KHỐI TRANG CHỦ MÀU XANH BÍ ẨN VỚI:
          1. GÓC TRÁI TRÊN: THÀNH TÍCH CAO NHẤT
          2. GÓC TRÁI DƯỚI: NÚT BẮT ĐẦU BÀI */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c1a3b]/95 via-[#0f2452]/90 to-[#0a1838]/95 border border-cyan-500/30 p-5 sm:p-7 shadow-xl shadow-cyan-950/40 backdrop-blur-md">
        {/* Floating decorative celestial elements */}
        <div className="absolute -top-3 -right-3 text-4xl opacity-20 pointer-events-none select-none">✨</div>
        <div className="absolute top-1/2 right-6 text-3xl opacity-25 pointer-events-none select-none">✦</div>
        <div className="absolute bottom-2 right-20 text-2xl opacity-20 pointer-events-none select-none">🔮</div>

        {/* HÀNG TRÊN: GÓC TRÁI TRÊN LÀ THÀNH TÍCH CAO NHẤT & KHO ĐỒ */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-5 border-b border-cyan-500/20">
          {/* GÓC TRÁI TRÊN: THÀNH TÍCH CAO NHẤT & KHO ĐỒ */}
          <div className="w-full md:max-w-xl flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <div
              id="top-left-achievement-card"
              onClick={() => setShowAchievementModal(true)}
              className="flex-1 group cursor-pointer rounded-2xl bg-white/95 backdrop-blur-xs border border-amber-200/90 hover:border-amber-400 p-3.5 sm:p-4 shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-white flex items-center justify-center shadow-xs text-xl shrink-0 group-hover:scale-105 transition-transform">
                  <Trophy className="w-6 h-6 text-amber-50" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-black tracking-wider uppercase text-amber-800 bg-amber-100/90 px-2 py-0.5 rounded-full border border-amber-200/80 flex items-center gap-1">
                      <span>🏆 THÀNH TÍCH CAO NHẤT</span>
                    </span>
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-800 mt-1 flex items-center gap-1.5">
                    {highScoreData.overallHighestScore > 0 ? (
                      <>
                        <span className="text-amber-600">
                          {highScoreData.overallHighestPercent}% chính xác
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">
                          ({highScoreData.overallHighestScore} câu đúng)
                        </span>
                      </>
                    ) : (
                      <span className="text-xs text-emerald-800 font-bold flex items-center gap-1">
                        <span>Chưa có kỷ lục</span>
                        <span className="text-slate-400 font-normal">• Bấm để xem 🌟</span>
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {highScoreData.totalQuizzesTaken > 0
                      ? `Đã hoàn thành ${highScoreData.totalQuizzesTaken} bài kiểm tra`
                      : 'Làm bài để ghi danh bảng vàng của em!'}
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-1 text-xs font-bold text-amber-700 group-hover:text-amber-900 bg-amber-50/80 group-hover:bg-amber-100 px-2.5 py-1.5 rounded-xl border border-amber-200/70 transition-colors">
                <span>Xem chi tiết</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>

            {onOpenInventory && (
              <button
                type="button"
                id="top-left-inventory-btn"
                onClick={onOpenInventory}
                className="group cursor-pointer rounded-2xl bg-white/95 backdrop-blur-xs border border-indigo-200/90 hover:border-indigo-400 p-3 sm:p-3.5 shadow-2xs hover:shadow-md transition-all duration-200 flex sm:flex-col items-center justify-center gap-1 text-indigo-700 hover:text-indigo-900 shrink-0"
                title="Mở Kho đồ của em"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  🎒
                </div>
                <span className="text-xs font-black">Kho đồ</span>
              </button>
            )}
          </div>

          {/* GÓC PHẢI TRÊN: EXP, CHUỖI & ĐỔI TRÌNH ĐỘ */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 self-start md:self-auto w-full md:w-auto">
            {/* Widget Kinh nghiệm & Chuỗi */}
            <div
              onClick={onOpenShop}
              className="flex items-center gap-2.5 bg-white/95 hover:bg-amber-50/70 px-3 py-1.5 rounded-2xl border border-amber-200/90 shadow-2xs cursor-pointer transition-all hover:border-amber-300"
              title="Nhấn để mở Cửa Hàng Rương Kho Báu"
            >
              <div className="flex items-center gap-1 text-xs font-black text-amber-700">
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>{gamificationState.exp.toLocaleString()} EXP</span>
              </div>
              <div className="w-px h-3.5 bg-slate-200" />
              <div className="flex items-center gap-1 text-xs font-bold text-orange-600">
                <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                <span>Chuỗi {gamificationState.currentStreak}</span>
                {gamificationState.currentStreak > 0 && (
                  <span className="text-[10px] text-orange-500 font-extrabold">(+{gamificationState.currentStreak * 5}%)</span>
                )}
              </div>
              <div className="w-px h-3.5 bg-slate-200" />
              <span className="text-xs font-extrabold text-amber-800 flex items-center gap-1">
                <span>🏴‍☠️ Hòm Kho Báu</span>
              </span>
            </div>

            <button
              type="button"
              onClick={onChangeGrade}
              className="px-3.5 py-2 rounded-xl bg-[#0e224b]/90 hover:bg-[#142e63] border border-cyan-500/30 text-cyan-100 text-xs font-bold transition-all shadow-2xs hover:shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
              <span>Đổi trình độ 🔄</span>
            </button>
          </div>
        </div>

        {/* PHẦN GIỚI THIỆU CHÍNH */}
        <div className="pt-5 space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-200 text-xs font-semibold">
            <span>🎒 Chào mừng em đến với Trang chủ!</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2 flex-wrap">
            <span>Hành trình chinh phục Tiếng Anh</span>
            <span className="text-2xl">🔮✨</span>
          </h2>

          <p className="text-xs sm:text-sm text-cyan-100/80 max-w-2xl leading-relaxed">
            Chọn bất kỳ kỹ năng nào bên dưới để bắt đầu hành trình học tập vui vẻ và tự tin.
          </p>

          {/* GÓC TRÁI DƯỚI: CÁC NÚT HÀNH ĐỘNG */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              type="button"
              id="btn-start-learning-bottom-left"
              onClick={() => {
                if (onOpenSkillsSelection) {
                  onOpenSkillsSelection();
                } else {
                  onSelectSkill('listening', 'quiz');
                }
              }}
              className="group px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-sm sm:text-base transition-all shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center gap-3 cursor-pointer border border-cyan-300/40"
            >
              <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center text-white">
                <Play className="w-4 h-4 fill-white text-white ml-0.5" />
              </div>
              <div className="text-left">
                <span className="block leading-none">🚀 BẮT ĐẦU BÀI HỌC</span>
                <span className="text-[11px] font-medium text-cyan-100/90 block mt-0.5">
                  Bấm để chọn kỹ năng & học ngay 🎯
                </span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-1" />
            </button>

            <button
              type="button"
              onClick={onOpenShop}
              className="px-4 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02]"
            >
              <Gift className="w-4 h-4" />
              <span>Hòm Kho Báu 🏴‍☠️🗝️</span>
            </button>

            <button
              type="button"
              onClick={() => setShowAchievementModal(true)}
              className="px-4 py-3 rounded-2xl bg-white/90 hover:bg-white text-slate-700 hover:text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs hover:shadow-xs"
            >
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Thành tích cao nhất 📊</span>
            </button>

            {onOpenInventory && (
              <button
                type="button"
                id="btn-inventory-homepage"
                onClick={onOpenInventory}
                className="px-4 py-3 rounded-2xl bg-white/90 hover:bg-white text-slate-700 hover:text-indigo-800 border border-emerald-200 hover:border-indigo-300 text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs hover:shadow-xs"
              >
                <Package className="w-4 h-4 text-indigo-500" />
                <span>Kho đồ 🎒</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* KHỐI HÒM KHO BÁU - ĐỔI KINH NGHIỆM */}
      <div className="rounded-3xl bg-white/95 border border-emerald-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-xs shrink-0 p-1">
              <TreasureChestGraphic type="gold" size="sm" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-extrabold text-slate-800">
                  Cửa Hàng Hòm Kho Báu (Shop EXP)
                </h3>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                  ⚡ 50 EXP/bài • 🔥 Chuỗi +5%
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Mỗi bài học được +50 EXP. Làm đúng toàn bộ được +1 Chuỗi (+5% EXP). Mở các Hòm Kho Báu để thu thập châu báu & danh hiệu!
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenShop}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer hover:scale-105 shrink-0"
          >
            <Gift className="w-4 h-4" />
            <span>Mở Hòm Kho Báu 🗝️</span>
          </button>
        </div>

        {/* 4 Hòm Kho Báu preview với hình ảnh chân thực */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(['bronze', 'silver', 'gold', 'diamond'] as ChestType[]).map((key) => {
            const chest = CHESTS_CONFIG[key];
            const canAfford = gamificationState.exp >= chest.requiredExp;
            const progress = Math.min(100, Math.round((gamificationState.exp / chest.requiredExp) * 100));

            return (
              <div
                key={chest.id}
                onClick={onOpenShop}
                className={`p-3 sm:p-4 rounded-2xl border transition-all cursor-pointer bg-gradient-to-br ${chest.bgGradient} ${chest.borderColor} flex flex-col justify-between items-center text-center ${
                  canAfford ? 'ring-2 ring-emerald-400 shadow-xs hover:scale-105' : 'hover:scale-[1.02]'
                }`}
              >
                <div className="w-full flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-white/90 text-slate-700 border border-slate-200">
                    {key === 'bronze' ? 'Đồng' : key === 'silver' ? 'Bạc' : key === 'gold' ? 'Vàng' : 'Kim Cương'}
                  </span>
                  <span className="text-[10px] font-black text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 flex items-center gap-0.5">
                    <Zap className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                    {chest.requiredExp.toLocaleString()}
                  </span>
                </div>

                {/* Hình ảnh Hòm Kho Báu chuẩn */}
                <div className="my-1.5 transform hover:scale-110 transition-transform">
                  <TreasureChestGraphic type={chest.id} size="md" />
                </div>

                <div className="text-[11px] font-black text-slate-800 truncate w-full">
                  {chest.nameVi}
                </div>

                <div className="w-full mt-2 pt-2 border-t border-slate-200/60">
                  <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${canAfford ? 'bg-emerald-500' : 'bg-amber-400'}`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="text-[9px] font-semibold text-slate-500 mt-1">
                    {canAfford ? 'Sẵn sàng mở! 🗝️' : `${progress}%`}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* KHỐI GRAMMAR (NGỮ PHÁP TRỌNG TÂM SGK) - ĐƯỢC CHUYỂN XUỐNG DƯỚI CỬA HÀNG HÒM KHO BÁU */}
      <div
        id="grammar-home-section"
        className="rounded-3xl bg-gradient-to-br from-teal-50/90 via-white to-emerald-50/80 border-2 border-teal-300/80 p-5 sm:p-7 shadow-xs space-y-5 relative overflow-hidden"
      >
        {/* Floating subtle emojis */}
        <div className="absolute -top-3 -right-2 text-4xl opacity-15 pointer-events-none select-none">💡</div>
        <div className="absolute bottom-2 right-6 text-3xl opacity-15 pointer-events-none select-none">✨</div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center shadow-xs shrink-0">
              <Sparkles className="w-6 h-6 text-teal-50" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg lg:text-xl font-black text-slate-800 tracking-tight">
                  Chuyên đề Ngữ Pháp (Grammar)
                </h3>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-300">
                  🎯 Kho bài học toàn diện • Không giới hạn
                </span>
              </div>
            </div>
          </div>

          {/* Grammar high score status if any */}
          <div className="shrink-0">
            {highScoreData.skills['grammar'] && highScoreData.skills['grammar'].highestScore > 0 ? (
              <div className="px-3 py-1.5 rounded-xl bg-teal-100/80 border border-teal-300/90 text-teal-900 text-xs font-bold flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>Kỷ lục: {highScoreData.skills['grammar'].highestScore}/{highScoreData.skills['grammar'].totalQuestions || 10} câu ({highScoreData.skills['grammar'].highestPercent}%)</span>
              </div>
            ) : (
              <span className="text-xs font-bold text-teal-700 bg-white/80 px-3 py-1.5 rounded-xl border border-teal-200 shadow-2xs flex items-center gap-1">
                <span>🌟 Tất cả bài học đều mở sẵn • Chọn bài ngay!</span>
              </span>
            )}
          </div>
        </div>

        {/* Nút hành động Bắt đầu làm bài Grammar ngay */}
        <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            type="button"
            id="btn-start-grammar-direct"
            onClick={() => onSelectSkill('grammar', 'quiz')}
            className="flex-1 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 hover:from-teal-700 hover:to-emerald-700 text-white font-extrabold text-sm sm:text-base transition-all shadow-md hover:shadow-lg hover:scale-[1.01] flex items-center justify-center gap-2.5 cursor-pointer border border-teal-400/40"
          >
            <Sparkles className="w-5 h-5 text-teal-100 fill-teal-100" />
            <span>Chọn bài học Ngữ pháp muốn học 💡</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Review Last Result if available */}
      {lastAnalysis && (
        <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-emerald-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase text-emerald-800 tracking-wider">
                  Bài làm vừa hoàn thành 🌟
                </span>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold">
                  {lastSkill?.toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Em đã có kết quả phân tích sư phạm và bài luyện tiếp theo từ AI.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onViewLastResult}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <span>Xem lại kết quả & Bài luyện 📊</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}


      {/* MODAL 1: BẢNG VÀNG THÀNH TÍCH CAO NHẤT (KHI BẤM VÀO THÀNH TÍCH GÓC TRÁI TRÊN) */}
      {showAchievementModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-amber-200 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setShowAchievementModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Modal */}
            <div className="text-center pb-4 border-b border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-white mx-auto flex items-center justify-center shadow-md text-2xl mb-2.5">
                🏆
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
                Bảng Vàng Thành Tích Cao Nhất
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Lưu giữ kỷ lục học tập xuất sắc của em trên EngJourney AI ✨
              </p>
            </div>

            {/* Kỷ lục tổng quát */}
            <div className="my-4 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase text-amber-800 tracking-wider">
                  Kỷ lục điểm cao nhất
                </span>
                <div className="text-2xl font-black text-amber-900 mt-0.5">
                  {highScoreData.overallHighestPercent > 0 ? (
                    <span>{highScoreData.overallHighestPercent}% ({highScoreData.overallHighestScore} câu đúng)</span>
                  ) : (
                    <span className="text-base text-slate-500 font-bold">Chưa có kỷ lục</span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-bold text-slate-500">Tổng bài đã làm</span>
                <div className="text-xl font-bold text-slate-800">
                  {highScoreData.totalQuizzesTaken} bài 📚
                </div>
              </div>
            </div>

            {/* Chi tiết từng kỹ năng & chuyên đề ngữ pháp */}
            <div className="space-y-2.5 my-4">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Thành tích 4 Kỹ Năng & Chuyên đề Ngữ Pháp:
              </h4>

              <div className="grid grid-cols-1 gap-2">
                {[
                  { key: 'listening' as SkillType, name: 'Listening (Nghe)', emoji: '🎧', color: 'text-sky-700', bg: 'bg-sky-50/60' },
                  { key: 'reading' as SkillType, name: 'Reading (Đọc hiểu)', emoji: '📖', color: 'text-emerald-700', bg: 'bg-emerald-50/60' },
                  { key: 'writing' as SkillType, name: 'Writing (Viết)', emoji: '✍️', color: 'text-amber-700', bg: 'bg-amber-50/60' },
                  { key: 'speaking' as SkillType, name: 'Speaking (Nói)', emoji: '🗣️', color: 'text-violet-700', bg: 'bg-violet-50/60' },
                  { key: 'grammar' as SkillType, name: 'Chuyên đề Ngữ pháp (Grammar)', emoji: '💡', color: 'text-teal-700', bg: 'bg-teal-50/60' },
                ].map((item) => {
                  const record = highScoreData.skills[item.key];
                  return (
                    <div
                      key={item.key}
                      className={`p-3 rounded-xl border border-slate-200/80 ${item.bg} flex items-center justify-between text-xs`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{item.emoji}</span>
                        <span className="font-bold text-slate-800">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <span className={`font-black text-sm ${item.color}`}>
                          {record && record.highestScore > 0 ? `${record.highestScore}/${record.totalQuestions || 10} câu` : 'Chưa thi'}
                        </span>
                        {record && record.highestScore > 0 && (
                          <span className="text-[11px] text-slate-500 font-semibold ml-1.5">
                            ({record.highestPercent}%)
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Huy hiệu đạt được */}
            <div className="space-y-2.5 my-4 pt-3 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-amber-500" />
                <span>Huy hiệu của em:</span>
              </h4>

              <div className="grid grid-cols-2 gap-2">
                {badges.map((b) => (
                  <div
                    key={b.id}
                    className={`p-2.5 rounded-xl border text-xs flex items-start gap-2 ${
                      b.unlocked
                        ? 'bg-amber-50/50 border-amber-200 text-amber-950'
                        : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                    }`}
                  >
                    <span className="text-xl shrink-0">{b.icon}</span>
                    <div>
                      <div className="font-bold leading-tight flex items-center gap-1">
                        <span>{b.title}</span>
                        {b.unlocked && <span className="text-[10px] text-amber-600 font-black">✓</span>}
                      </div>
                      <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nút hành động */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setShowAchievementModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Đóng
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAchievementModal(false);
                  if (onOpenSkillsSelection) {
                    onOpenSkillsSelection();
                  }
                }}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Bắt đầu bài để lập kỷ lục mới 🚀</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
