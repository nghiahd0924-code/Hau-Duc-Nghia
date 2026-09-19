import React from 'react';
import { BookOpen, Home, RotateCcw } from 'lucide-react';
import { GradeLevel } from './GradeSelection';

interface HeaderProps {
  currentGrade?: GradeLevel | null;
  currentView?: 'survey' | 'home' | 'quiz' | 'speaking_studio' | 'lesson_selection' | 'skills_selection' | 'grammar_selection' | 'inventory';
  onNavigateHome?: () => void;
  onChangeGrade?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentGrade,
  currentView,
  onNavigateHome,
  onChangeGrade,
}) => {
  // Ẩn hoàn toàn header ở Trang chủ để giao diện thoáng, gọn gàng theo yêu cầu
  if (currentView === 'home') {
    return null;
  }

  return (
    <header className="border-b border-cyan-500/20 bg-[#07132a]/85 backdrop-blur-md sticky top-0 z-30 shadow-lg shadow-cyan-950/30">
      <div className="max-w-4xl mx-auto px-4 py-2.5 sm:px-6 flex items-center justify-between gap-3">
        {/* Navigation back to home */}
        <div
          onClick={onNavigateHome}
          className="flex items-center space-x-2 cursor-pointer group"
          title="Về Trang chủ"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-cyan-100 group-hover:text-cyan-300 transition-colors">
            EngJourney
          </span>
        </div>

        {/* Action / Nav Buttons */}
        <div className="flex items-center gap-2">
          {onNavigateHome && (
            <button
              type="button"
              onClick={onNavigateHome}
              className="flex items-center gap-1.5 text-xs font-bold text-cyan-100 bg-[#0b1c3e]/80 hover:bg-[#102756] px-3 py-1.5 rounded-xl border border-cyan-500/30 shadow-xs hover:border-cyan-400 transition-all cursor-pointer"
            >
              <Home className="w-3.5 h-3.5 text-cyan-400" />
              <span>Trang chủ 🏠</span>
            </button>
          )}

          {currentGrade && onChangeGrade && (
            <button
              type="button"
              onClick={onChangeGrade}
              className="flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-cyan-100 bg-[#0b1c3e]/60 hover:bg-[#0e244f] px-2.5 py-1.5 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all cursor-pointer"
              title="Khảo sát đổi trình độ"
            >
              <RotateCcw className="w-3 h-3 text-cyan-400" />
              <span className="hidden sm:inline">Đổi trình độ</span>
              <span className="sm:hidden">Lớp {currentGrade}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
