import React, { useState, useMemo } from 'react';
import { GrammarLesson } from '../types';
import { COMPREHENSIVE_GRAMMAR_LESSONS, GRAMMAR_CATEGORIES } from '../comprehensiveGrammarData';
import {
  BookOpen,
  Search,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Layers,
  Flame,
  Home
} from 'lucide-react';

interface GrammarLessonSelectionProps {
  onSelectLesson: (lesson: GrammarLesson) => void;
  onBackToHome: () => void;
  selectedLessonId?: string;
}

export const GrammarLessonSelection: React.FC<GrammarLessonSelectionProps> = ({
  onSelectLesson,
  onBackToHome,
  selectedLessonId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedTheoryId, setExpandedTheoryId] = useState<string | null>(null);

  // Lọc bài học theo danh mục và từ khóa tìm kiếm
  const filteredLessons = useMemo(() => {
    return COMPREHENSIVE_GRAMMAR_LESSONS.filter((lesson) => {
      const matchCategory =
        selectedCategory === 'all' || lesson.category === selectedCategory;

      if (!matchCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchTitleVi = lesson.titleVi.toLowerCase().includes(q);
      const matchTitleEn = lesson.titleEn.toLowerCase().includes(q);
      const matchFormula = lesson.formulaSummary.toLowerCase().includes(q);
      const matchDesc = lesson.shortDescription.toLowerCase().includes(q);
      const matchSignals = lesson.theoryOverview.signalWords?.some((w) =>
        w.toLowerCase().includes(q)
      );

      return matchTitleVi || matchTitleEn || matchFormula || matchDesc || matchSignals;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpandTheory = (id: string) => {
    setExpandedTheoryId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-12" id="grammar-lesson-selection">
      {/* Top Header Navigation */}
      <div className="flex items-center justify-between gap-3 bg-white/95 backdrop-blur-xs p-3.5 px-4 sm:px-6 rounded-2xl border border-teal-200 shadow-2xs">
        <button
          type="button"
          id="btn-grammar-back-home"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-teal-800 hover:text-teal-950 bg-teal-50 hover:bg-teal-100 px-3.5 py-2 rounded-xl border border-teal-200 transition-all cursor-pointer"
        >
          <Home className="w-4 h-4 text-teal-600" />
          <span>← Về Trang chủ 🏠</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-teal-900 bg-teal-100/80 px-3 py-1.5 rounded-xl border border-teal-300">
          <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>Hệ thống Ngữ pháp Toàn diện • Không giới hạn</span>
        </div>
      </div>

      {/* Hero Banner Chuyên đề Ngữ pháp */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-700 via-emerald-700 to-teal-900 text-white shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-48 h-48 rounded-full bg-teal-500/10 pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/30 border border-teal-300/40 text-teal-100 text-xs font-extrabold mb-3">
            <span>💡 Chuyên Đề Grammar Master</span>
            <span>•</span>
            <span>Tất cả bài học đều mở sẵn</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-2">
            Chọn Bài Học Ngữ Pháp Bạn Muốn Học
          </h1>

          <p className="text-teal-100 text-sm sm:text-base leading-relaxed mb-6 font-medium">
            Học chuẩn lý thuyết, nắm chắc công thức và làm bài trắc nghiệm chẩn đoán kèm giải thích chi tiết cho từng cấu trúc ngữ pháp tiếng Anh.
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-bold">
            <span className="px-3 py-1.5 rounded-xl bg-white/15 border border-white/20 flex items-center gap-1.5 backdrop-blur-xs">
              <Layers className="w-3.5 h-3.5 text-amber-300" />
              <span>{COMPREHENSIVE_GRAMMAR_LESSONS.length} Chuyên đề chuẩn</span>
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/15 border border-white/20 flex items-center gap-1.5 backdrop-blur-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
              <span>100% Nội dung thuần Ngữ pháp</span>
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/15 border border-white/20 flex items-center gap-1.5 backdrop-blur-xs">
              <Flame className="w-3.5 h-3.5 text-orange-300" />
              <span>Không giới hạn bài học</span>
            </span>
          </div>
        </div>
      </div>

      {/* Thanh Tìm Kiếm & Bộ Lọc Chuyên Đề */}
      <div className="space-y-4">
        {/* Search input */}
        <div className="relative max-w-2xl">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            id="grammar-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm bài học ngữ pháp (vd: thì hiện tại hoàn thành, passive, wish, giới từ, modal...)"
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-800 text-sm font-medium shadow-xs focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-lg cursor-pointer"
            >
              Xóa
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {GRAMMAR_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                id={`filter-cat-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-teal-700 text-white border-teal-700 shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Danh Sách Các Bài Học Ngữ Pháp (Cards Grid) */}
      {filteredLessons.length === 0 ? (
        <div className="p-8 sm:p-12 text-center bg-white rounded-3xl border border-slate-200 shadow-xs space-y-3">
          <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">Không tìm thấy bài học ngữ pháp phù hợp</h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Em hãy thử tìm kiếm bằng từ khóa khác như "hiện tại", "quá khứ", "bị động", "so sánh", "wish"... hoặc xóa bộ lọc để xem toàn bộ bài học nhé!
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all cursor-pointer"
          >
            Xem tất cả bài học
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {filteredLessons.map((lesson) => {
            const isExpanded = expandedTheoryId === lesson.id;
            const isCurrent = selectedLessonId === lesson.id;

            return (
              <div
                key={lesson.id}
                id={`grammar-card-${lesson.id}`}
                className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                  isCurrent
                    ? 'bg-teal-50/50 border-teal-400 shadow-sm ring-2 ring-teal-500/20'
                    : 'bg-white hover:bg-teal-50/20 border-slate-200/90 hover:border-teal-300 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Header Card */}
                <div className="p-5 sm:p-6 pb-4 space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-teal-100/80 text-teal-900 border border-teal-200">
                      {lesson.categoryLabel}
                    </span>

                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                      {lesson.levelBadge}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                      <span>{lesson.titleVi}</span>
                    </h2>
                    <p className="text-xs font-bold text-teal-700">{lesson.titleEn}</p>
                  </div>

                  {/* Formula preview block */}
                  <div className="p-2.5 px-3 rounded-xl bg-slate-900 text-emerald-300 text-xs font-mono font-bold tracking-tight overflow-x-auto shadow-2xs border border-slate-800">
                    <span className="text-slate-400 select-none mr-1.5 font-sans text-[10px]">CÔNG THỨC:</span>
                    <span>{lesson.formulaSummary}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lesson.shortDescription}
                  </p>

                  {/* Theory summary expandable block */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-100 space-y-3 animate-in fade-in duration-200">
                      <div className="p-3 rounded-xl bg-teal-50/80 border border-teal-200/70 text-xs space-y-1.5">
                        <div className="font-bold text-teal-950 flex items-center gap-1.5">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                          <span>Định nghĩa & Bản chất</span>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{lesson.theoryOverview.definition}</p>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-slate-700">Các quy tắc & Ví dụ điển hình:</span>
                        <div className="space-y-1">
                          {lesson.theoryOverview.rules.map((r, idx) => (
                            <div key={idx} className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 text-xs">
                              <span className="font-bold text-slate-800">{r.rule}: </span>
                              <span className="text-teal-900 italic font-medium">{r.example}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {lesson.theoryOverview.signalWords && (
                        <div className="text-xs">
                          <span className="font-bold text-slate-700">Dấu hiệu nhận biết: </span>
                          <span className="text-teal-800 font-semibold">
                            {lesson.theoryOverview.signalWords.join(' • ')}
                          </span>
                        </div>
                      )}

                      {lesson.theoryOverview.commonMistakes && (
                        <div className="p-2.5 rounded-lg bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-1">
                          <div className="font-bold flex items-center gap-1 text-amber-900">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                            <span>Lỗi sai học sinh hay mắc:</span>
                          </div>
                          <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                            {lesson.theoryOverview.commonMistakes.map((m, idx) => (
                              <li key={idx}>{m}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Footer Actions */}
                <div className="p-4 sm:p-5 pt-3 bg-slate-50/70 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                  <button
                    type="button"
                    onClick={() => toggleExpandTheory(lesson.id)}
                    className="text-xs font-bold text-slate-600 hover:text-teal-800 flex items-center justify-center sm:justify-start gap-1 py-1.5 px-2 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                    <span>{isExpanded ? 'Thu gọn lý thuyết' : 'Xem tóm tắt lý thuyết'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    type="button"
                    id={`btn-select-lesson-${lesson.id}`}
                    onClick={() => onSelectLesson(lesson)}
                    className="px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Làm bài luyện tập ({lesson.questions.length} câu)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
