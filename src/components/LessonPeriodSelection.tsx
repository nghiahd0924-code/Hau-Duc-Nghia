import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GradeLevel } from './GradeSelection';
import { SkillType } from './SkillSelection';
import { TextbookUnit, TextbookPeriod } from '../types';
import { TEXTBOOK_UNITS_BY_GRADE } from '../textbookLessonsData';
import {
  ArrowLeft,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  Award,
  ChevronRight,
  ChevronLeft,
  HelpCircle,
  GraduationCap
} from 'lucide-react';

interface LessonPeriodSelectionProps {
  currentGrade: GradeLevel;
  selectedSkill: SkillType;
  onSelectPeriod: (unit: TextbookUnit, period: TextbookPeriod) => void;
  onSelectComprehensive: () => void;
  onBackToHome: () => void;
  onChangeSkill: (newSkill: SkillType) => void;
}

export const LessonPeriodSelection: React.FC<LessonPeriodSelectionProps> = ({
  currentGrade,
  selectedSkill,
  onSelectPeriod,
  onSelectComprehensive,
  onBackToHome,
  onChangeSkill,
}) => {
  const units: TextbookUnit[] = TEXTBOOK_UNITS_BY_GRADE[currentGrade] || [];
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<string>('all');

  // Ref và state cho thanh kéo dưới Unit
  const unitScrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const mouseStartX = useRef<number>(0);
  const scrollStartLeft = useRef<number>(0);

  const updateScrollState = useCallback(() => {
    const el = unitScrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 1) {
      const progress = Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100));
      setScrollProgress(progress);
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft < maxScroll - 4);
    } else {
      setScrollProgress(0);
      setCanScrollLeft(false);
      setCanScrollRight(false);
    }
  }, []);

  useEffect(() => {
    updateScrollState();
    const handleResize = () => updateScrollState();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [units, updateScrollState]);

  // Kéo thanh trượt để cuộn danh sách Unit
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const progress = parseFloat(e.target.value);
    setScrollProgress(progress);
    const el = unitScrollRef.current;
    if (el) {
      const maxScroll = el.scrollWidth - el.clientWidth;
      el.scrollLeft = (progress / 100) * maxScroll;
    }
  };

  // Cuộn bằng nút mũi tên trái / phải
  const handleScrollByButton = (direction: 'left' | 'right') => {
    const el = unitScrollRef.current;
    if (!el) return;
    const scrollAmount = 260;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Kéo chuột tự nhiên trên Desktop (Drag-to-scroll)
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = unitScrollRef.current;
    if (!el) return;
    setIsMouseDown(true);
    mouseStartX.current = e.pageX - el.offsetLeft;
    scrollStartLeft.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    const el = unitScrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - mouseStartX.current) * 1.5;
    el.scrollLeft = scrollStartLeft.current - walk;
    updateScrollState();
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
  };

  const getSkillDetails = (skill: SkillType) => {
    switch (skill) {
      case 'grammar':
        return {
          title: 'Ngữ pháp trọng tâm (Grammar)',
          emoji: '💡',
          badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
          activeTabColor: 'bg-teal-600 text-white',
          bannerBg: 'from-teal-500 via-emerald-600 to-teal-700',
          focusTitle: 'Trọng tâm Ngữ pháp tiết học:',
          focusDesc: 'Bài tập tập trung vào các thì, cấu trúc câu, trật tự từ, từ loại xuất hiện trong tiết học này.',
        };
      case 'listening':
        return {
          title: 'Kỹ năng Nghe (Listening)',
          emoji: '🎧',
          badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
          activeTabColor: 'bg-sky-600 text-white',
          bannerBg: 'from-sky-500 via-blue-600 to-indigo-600',
          focusTitle: 'Trọng tâm Luyện nghe tiết học:',
          focusDesc: 'Bài tập có kèm audio thoại chuẩn bản xứ, kiểm tra khả năng nghe hiểu hội thoại và thông tin của tiết học.',
        };
      case 'reading':
        return {
          title: 'Kỹ năng Đọc hiểu (Reading)',
          emoji: '📖',
          badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
          activeTabColor: 'bg-indigo-600 text-white',
          bannerBg: 'from-indigo-500 via-purple-600 to-indigo-700',
          focusTitle: 'Trọng tâm Đọc hiểu tiết học:',
          focusDesc: 'Bài tập kèm đoạn văn đọc hiểu ngắn chuẩn SGK, luyện kỹ năng tìm ý chính, từ quy chiếu và suy luận.',
        };
      case 'writing':
        return {
          title: 'Kỹ năng Viết (Writing)',
          emoji: '✍️',
          badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          activeTabColor: 'bg-emerald-600 text-white',
          bannerBg: 'from-emerald-500 via-teal-600 to-green-700',
          focusTitle: 'Trọng tâm Kỹ năng viết tiết học:',
          focusDesc: 'Bài tập rèn trật tự từ, liên từ nối câu, chuyển đổi cấu trúc và viết đoạn văn ngắn theo chủ đề của tiết.',
        };
      case 'speaking':
        return {
          title: 'Kỹ năng Nói (Speaking)',
          emoji: '🗣️',
          badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
          activeTabColor: 'bg-purple-600 text-white',
          bannerBg: 'from-purple-500 via-violet-600 to-pink-600',
          focusTitle: 'Trọng tâm Phản xạ nói tiết học:',
          focusDesc: 'Bài tập rèn phản xạ giao tiếp, câu hỏi Yes/No, ngữ điệu và phát âm chuẩn các mẫu câu trong tiết học.',
        };
      default:
        return {
          title: 'Kỹ năng học tập',
          emoji: '📚',
          badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
          activeTabColor: 'bg-slate-600 text-white',
          bannerBg: 'from-slate-600 to-slate-800',
          focusTitle: 'Trọng tâm bài học:',
          focusDesc: 'Bài tập bám sát nội dung SGK.',
        };
    }
  };

  const skillInfo = getSkillDetails(selectedSkill);

  const filteredUnits =
    selectedUnitFilter === 'all'
      ? units
      : units.filter((u) => u.id === selectedUnitFilter);

  const allSkillsList: { id: SkillType; name: string; emoji: string }[] = [
    { id: 'listening', name: 'Listening', emoji: '🎧' },
    { id: 'reading', name: 'Reading', emoji: '📖' },
    { id: 'writing', name: 'Writing', emoji: '✍️' },
    { id: 'speaking', name: 'Speaking', emoji: '🗣️' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-12">
      {/* TOP NAVIGATION BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/90 backdrop-blur-xs p-3.5 px-4 sm:px-5 rounded-2xl border border-emerald-200/90 shadow-2xs">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-xl border border-emerald-200 transition-all cursor-pointer w-fit"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-600" />
          <span>← Quay lại Trang chủ</span>
        </button>

        {/* Quick Skill Switcher */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
          <span className="text-xs font-bold text-slate-500 whitespace-nowrap hidden md:inline">
            Đổi kỹ năng:
          </span>
          {allSkillsList.map((sk) => (
            <button
              key={sk.id}
              type="button"
              onClick={() => onChangeSkill(sk.id)}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap border ${
                selectedSkill === sk.id
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-2xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{sk.emoji}</span>
              <span>{sk.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* HERO BANNER: CHỌN TIẾT HỌC THEO SÁCH GIÁO KHOA */}
      <div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${skillInfo.bannerBg} text-white p-6 sm:p-8 shadow-md`}
      >
        <div className="absolute top-2 right-4 text-6xl opacity-15 pointer-events-none select-none">
          📚
        </div>
        <div className="absolute bottom-2 right-24 text-4xl opacity-15 pointer-events-none select-none">
          {skillInfo.emoji}
        </div>

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-black tracking-wider uppercase border border-white/30 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Tiếng Anh Lớp {currentGrade} • Chuẩn SGK Bộ GD&ĐT</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-black tracking-wider uppercase border border-amber-300">
              {skillInfo.emoji} Kỹ năng: {skillInfo.title}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            Chọn Tiết Học Sách Giáo Khoa (Lớp {currentGrade})
          </h1>

          <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
            Chọn tiết học bạn muốn luyện tập hôm nay. Các câu hỏi được biên soạn bám sát từng bài học trong sách giáo khoa,
            <span className="underline decoration-amber-300 decoration-2 underline-offset-2 font-bold ml-1">
              với trọng tâm rèn luyện chuyên sâu kỹ năng {skillInfo.title}
            </span>
            !
          </p>

          <div className="pt-2 flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 text-xs text-white/90 bg-black/15 px-3 py-1.5 rounded-xl backdrop-blur-xs border border-white/20">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
              <span>Đúng phân phối chương trình GDPT 2018</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/90 bg-black/15 px-3 py-1.5 rounded-xl backdrop-blur-xs border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>AI Chẩn đoán & Gợi ý sửa lỗi theo từng tiết</span>
            </div>
          </div>
        </div>
      </div>

      {/* THẺ ĐẶC BIỆT: BÀI TỔNG HỢP TOÀN BỘ CÁC TIẾT */}
      <div className="rounded-2xl bg-gradient-to-r from-amber-50 via-white to-amber-50/70 border-2 border-amber-300/80 p-4 sm:p-5 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-white flex items-center justify-center shadow-xs shrink-0 text-xl font-bold">
            🌟
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-extrabold text-slate-800">
                Luyện tập Tổng hợp Toàn diện (Tất cả các tiết Lớp {currentGrade})
              </h3>
              <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-200 text-amber-900 uppercase">
                Khảo sát chuẩn
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Làm bài kiểm tra 8–10 câu tổng hợp các kiến thức cốt lõi của môn học để AI xây dựng Bản đồ Năng lực hoàn chỉnh.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onSelectComprehensive}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 border border-amber-400"
        >
          <span>Làm bài tổng hợp ngay</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* BỘ LỌC UNIT VỚI THANH KÉO (SLIDER) TRỰC QUAN */}
      <div className="bg-white/95 backdrop-blur-xs p-4 sm:p-5 rounded-3xl border border-emerald-200/90 shadow-2xs space-y-3" id="unit-selection-container">
        {/* Tiêu đề thanh lọc Unit */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shadow-2xs">
              <Layers className="w-4 h-4 text-emerald-700" />
            </span>
            <span className="text-sm font-extrabold text-slate-800">
              Lọc theo Unit (Lớp {currentGrade}):
            </span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              {units.length} Unit SGK
            </span>
          </div>
        </div>

        {/* Danh sách các nút Unit (cuộn ngang mượt mà, hỗ trợ rê kéo chuột) */}
        <div
          ref={unitScrollRef}
          onScroll={updateScrollState}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex items-center gap-2 overflow-x-auto py-1.5 scrollbar-thin select-none ${
            isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ scrollBehavior: isMouseDown ? 'auto' : 'smooth' }}
          id="unit-buttons-scroll-container"
        >
          <button
            type="button"
            id="unit-btn-all"
            onClick={() => setSelectedUnitFilter('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all shrink-0 cursor-pointer border flex items-center gap-1.5 ${
              selectedUnitFilter === 'all'
                ? 'bg-slate-800 text-white border-slate-800 shadow-2xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span>📚</span>
            <span>Tất cả ({units.length} Unit)</span>
          </button>
          {units.map((u) => (
            <button
              key={u.id}
              id={`unit-btn-${u.unitNumber}`}
              type="button"
              onClick={() => setSelectedUnitFilter(u.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all shrink-0 cursor-pointer border flex items-center gap-1.5 ${
                selectedUnitFilter === u.id
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-2xs scale-[1.02]'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{u.icon}</span>
              <span>Unit {u.unitNumber}: {u.unitTitle.length > 22 ? u.unitTitle.slice(0, 20) + '...' : u.unitTitle}</span>
            </button>
          ))}
        </div>

        {/* THANH KÉO DƯỚI UNIT (INTERACTIVE DRAG SLIDER & SCROLL CONTROLS) */}
        <div className="pt-2 border-t border-slate-100" id="unit-drag-slider-bar">
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Nút cuộn trái */}
            <button
              type="button"
              id="unit-scroll-left-btn"
              onClick={() => handleScrollByButton('left')}
              disabled={!canScrollLeft}
              className="w-8 h-8 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 disabled:opacity-30 disabled:pointer-events-none transition-all shrink-0 cursor-pointer shadow-2xs"
              title="Cuộn sang trái"
              aria-label="Cuộn sang trái"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Thanh kéo / Range Slider */}
            <div className="flex-1 flex flex-col justify-center relative">
              <input
                type="range"
                id="unit-horizontal-slider"
                min="0"
                max="100"
                step="0.2"
                value={scrollProgress}
                onChange={handleSliderChange}
                className="w-full h-2.5 bg-gradient-to-r from-emerald-100 via-teal-100 to-emerald-200 rounded-full appearance-none cursor-pointer accent-emerald-700 hover:accent-emerald-800 focus:outline-none transition-all shadow-inner border border-emerald-200"
                aria-label="Thanh kéo duyệt danh sách Unit"
              />
            </div>

            {/* Nút cuộn phải */}
            <button
              type="button"
              id="unit-scroll-right-btn"
              onClick={() => handleScrollByButton('right')}
              disabled={!canScrollRight}
              className="w-8 h-8 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 disabled:opacity-30 disabled:pointer-events-none transition-all shrink-0 cursor-pointer shadow-2xs"
              title="Cuộn sang phải"
              aria-label="Cuộn sang phải"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* DANH SÁCH CÁC UNIT VÀ CÁC TIẾT HỌC */}
      <div className="space-y-6">
        {filteredUnits.map((unit) => (
          <div
            key={unit.id}
            className="rounded-3xl bg-white border border-slate-200/90 shadow-xs overflow-hidden"
          >
            {/* Unit Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-50 via-emerald-50/30 to-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{unit.icon}</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-base sm:text-lg font-black text-slate-800 tracking-tight">
                      {unit.unitTitle}
                    </h2>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      {unit.themeVi}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Gồm {unit.periods.length} tiết học chuẩn phân phối chương trình SGK Bộ GD&ĐT
                  </p>
                </div>
              </div>

              <div className="text-xs font-bold text-slate-500 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-2xs w-fit">
                {unit.periods.length} Tiết học
              </div>
            </div>

            {/* Grid of Periods */}
            <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {unit.periods.map((period) => (
                <div
                  key={period.id}
                  onClick={() => onSelectPeriod(unit, period)}
                  className="group rounded-2xl border-2 border-slate-200/90 hover:border-emerald-500 bg-slate-50/50 hover:bg-emerald-50/30 p-4 sm:p-5 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md flex flex-col justify-between space-y-3 relative"
                >
                  {/* Period Tag & Section */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-black tracking-wide px-2.5 py-1 rounded-lg bg-emerald-700 text-white shadow-2xs">
                        {period.periodName}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                        SGK
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-extrabold text-slate-800 group-hover:text-emerald-900 transition-colors line-clamp-2 leading-snug">
                      {period.lessonTitle}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {period.summary}
                    </p>
                  </div>

                  {/* SPECIFIC SKILL FOCUS CALLOUT */}
                  <div className="space-y-3 pt-2">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-emerald-800">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>Trọng tâm {skillInfo.title.split('(')[0].trim()}:</span>
                      </div>
                      <p className="text-xs text-slate-700 font-medium leading-tight">
                        {period.skillFocus[selectedSkill]}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-200/70 text-xs font-black text-emerald-700 group-hover:text-emerald-900">
                      <span>Vào học tiết này (5–6 câu)</span>
                      <div className="w-6 h-6 rounded-lg bg-emerald-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-all">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
