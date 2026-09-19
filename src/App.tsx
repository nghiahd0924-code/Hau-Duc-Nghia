import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { GradeSelection, GradeLevel } from './components/GradeSelection';
import { HomePage } from './components/HomePage';
import { QuizSection } from './components/QuizSection';
import { AnalysisSection } from './components/AnalysisSection';
import { GrammarMapSection } from './components/GrammarMapSection';
import { NextPracticeSection } from './components/NextPracticeSection';
import { SpeakingStudio } from './components/SpeakingStudio';
import { LessonPeriodSelection } from './components/LessonPeriodSelection';
import { SkillsSelectionPage } from './components/SkillsSelectionPage';
import { GrammarLessonSelection } from './components/GrammarLessonSelection';
import { SkillType } from './components/SkillSelection';
import {
  GRAMMAR_QUESTIONS_BY_GRADE,
  LISTENING_QUESTIONS_BY_GRADE,
  SPEAKING_QUESTIONS_BY_GRADE,
  WRITING_QUESTIONS_BY_GRADE,
} from './data';
import { READING_QUESTIONS_BY_GRADE } from './readingData';
import { getRandomEssayPrompt } from './essayPrompts';
import { AnalysisResponse, Question, TextbookUnit, TextbookPeriod, GrammarLesson } from './types';
import { getQuestionsForPeriodAndSkill } from './textbookLessonsData';
import { AlertCircle, Home, Mic, RotateCcw, ArrowLeft, Sparkles, Zap, Flame, Gift, BookOpen } from 'lucide-react';
import { updateHighScoreData, getSavedHighScoreData } from './utils/achievement';
import {
  processLessonExp,
  getGamificationState,
  LessonExpResult,
  GamificationState,
} from './utils/gamification';
import { ShopModal } from './components/ShopModal';
import { ExpStreakRewardBanner } from './components/ExpStreakRewardBanner';
import { InventoryPage } from './components/InventoryPage';
import { MysticParticlesBackground } from './components/MysticParticlesBackground';

export default function App() {
  // Trạng thái trình độ khối lớp (Lớp 1 đến Lớp 9)
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel | null>(() => {
    try {
      const saved = localStorage.getItem('grammarpath_grade');
      return saved ? (parseInt(saved, 10) as GradeLevel) : 6;
    } catch {
      return 6;
    }
  });

  const [isGradeSubmitted, setIsGradeSubmitted] = useState<boolean>(() => {
    try {
      return localStorage.getItem('grammarpath_grade_submitted') === 'true';
    } catch {
      return false;
    }
  });

  // Điều hướng màn hình: 'survey' (Khảo sát trình độ) | 'home' (Trang chủ) | 'skills_selection' (Trang chọn kỹ năng) | 'lesson_selection' (Chọn tiết SGK) | 'grammar_selection' (Chọn bài học ngữ pháp) | 'quiz' (Bài kiểm tra) | 'speaking_studio' | 'inventory' (Kho đồ của em)
  const [currentView, setCurrentView] = useState<'survey' | 'home' | 'skills_selection' | 'lesson_selection' | 'grammar_selection' | 'quiz' | 'speaking_studio' | 'inventory'>(() => {
    try {
      return localStorage.getItem('grammarpath_grade_submitted') === 'true' ? 'home' : 'survey';
    } catch {
      return 'survey';
    }
  });

  // Thông tin Tiết học và Unit đang được chọn từ SGK (cho 4 kỹ năng)
  const [selectedPeriodInfo, setSelectedPeriodInfo] = useState<{ unit: TextbookUnit; period: TextbookPeriod } | null>(null);

  // Bài học Ngữ pháp đang được chọn (chuyên đề không giới hạn)
  const [selectedGrammarLesson, setSelectedGrammarLesson] = useState<GrammarLesson | null>(null);

  // Trạng thái Kinh nghiệm, Chuỗi và Shop mở rương
  const [gamificationState, setGamificationState] = useState<GamificationState>(() => getGamificationState());
  const [latestLessonExpResult, setLatestLessonExpResult] = useState<LessonExpResult | null>(null);
  const [showShopModal, setShowShopModal] = useState<boolean>(false);

  // Kỹ năng hiện tại được chọn (listening, reading, writing, speaking, grammar)
  const [selectedSkill, setSelectedSkill] = useState<SkillType>('grammar');

  // Chế độ cho Speaking: 'quiz' | 'studio'
  const [speakingMode, setSpeakingMode] = useState<'quiz' | 'studio'>('quiz');

  // Bộ câu hỏi và kết quả bài làm
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [speakingScores, setSpeakingScores] = useState<Record<number, number>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Lưu lịch sử bài làm gần nhất để xem lại trên Trang chủ
  const [lastCompletedAnalysis, setLastCompletedAnalysis] = useState<AnalysisResponse | null>(null);
  const [lastCompletedSkill, setLastCompletedSkill] = useState<SkillType | null>(null);

  // Helper lấy bộ câu hỏi chuẩn theo kỹ năng và khối lớp
  const getQuestionsForSkillAndGrade = (skill: SkillType, grade: GradeLevel): Question[] => {
    if (skill === 'listening') {
      return LISTENING_QUESTIONS_BY_GRADE[grade] || [];
    } else if (skill === 'grammar') {
      return GRAMMAR_QUESTIONS_BY_GRADE[grade] || [];
    } else if (skill === 'speaking') {
      return SPEAKING_QUESTIONS_BY_GRADE[grade] || [];
    } else if (skill === 'reading') {
      return READING_QUESTIONS_BY_GRADE[grade] || [];
    } else if (skill === 'writing') {
      const baseQuestions = WRITING_QUESTIONS_BY_GRADE[grade] || [];
      const randomPrompt = getRandomEssayPrompt(grade);
      return baseQuestions.map((q) => {
        if (q.id === 6 || q.isEssay || q.topic === 'writing_essay_paragraph') {
          return {
            ...q,
            isEssay: true,
            topic: 'writing_essay_paragraph',
            topicTitle: `Viết đoạn văn: ${randomPrompt.topicTitleEn}`,
            prompt: `Đề bài văn Lớp ${grade}: ${randomPrompt.topicTitleVi}. ${randomPrompt.instructionsVi}`,
            essayDetails: randomPrompt,
            correctAnswer: randomPrompt.sampleEssay,
            hintExplanation: `Đoạn văn tham khảo (Lớp ${grade}): "${randomPrompt.sampleEssay}"`,
          };
        }
        return q;
      });
    }
    return [];
  };

  const getSkillLabel = (skill: SkillType | null) => {
    switch (skill) {
      case 'listening':
        return 'Kỹ năng Nghe (Listening) 🎧';
      case 'reading':
        return 'Kỹ năng Đọc hiểu (Reading) 📖';
      case 'writing':
        return 'Kỹ năng Viết (Writing) ✍️';
      case 'speaking':
        return 'Kỹ năng Nói (Speaking) 🗣️';
      case 'grammar':
        return 'Ngữ pháp trọng tâm (Grammar) 💡';
      default:
        return '';
    }
  };

  // --- XỬ LÝ KHẢO SÁT: BẠN MUỐN TRÌNH ĐỘ NÀO ---
  const handleSelectGrade = (grade: GradeLevel) => {
    setSelectedGrade(grade);
  };

  const handleSubmitGrade = () => {
    if (!selectedGrade) return;
    setIsGradeSubmitted(true);
    try {
      localStorage.setItem('grammarpath_grade', String(selectedGrade));
      localStorage.setItem('grammarpath_grade_submitted', 'true');
    } catch (e) {
      console.warn(e);
    }
    // Sau khi nộp khảo sát -> đưa vào Trang chủ
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenGradeSurvey = () => {
    setCurrentView('survey');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- XỬ LÝ CHỌN KỸ NĂNG TỪ TRANG CHỦ ---
  const handleSelectSkillFromHome = (skill: SkillType, mode: 'quiz' | 'studio' = 'quiz') => {
    setSelectedSkill(skill);
    setSpeakingMode(mode);

    if (mode === 'studio') {
      setCurrentView('speaking_studio');
    } else if (skill === 'grammar') {
      // YÊU CẦU NGƯỜI DÙNG: Khi chọn grammar thì chọn bài học mình muốn học (các bài học ngữ pháp không giới hạn)
      setCurrentView('grammar_selection');
    } else {
      // Các kỹ năng chuẩn SGK -> Chọn tiết học
      setCurrentView('lesson_selection');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- XỬ LÝ CHỌN BÀI HỌC NGỮ PHÁP (KHÔNG GIỚI HẠN) ---
  const handleSelectGrammarLesson = (lesson: GrammarLesson) => {
    setSelectedSkill('grammar');
    setSelectedGrammarLesson(lesson);
    setSelectedPeriodInfo(null);
    setActiveQuestions(lesson.questions);
    setSelectedAnswers({});
    setSpeakingScores({});
    setHasSubmitted(false);
    setAnalysisResult(null);
    setLatestLessonExpResult(null);
    setErrorMessage(null);
    setCurrentView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- XỬ LÝ CHỌN TIẾT HỌC SGK ---
  const handleSelectPeriod = (unit: TextbookUnit, period: TextbookPeriod) => {
    const grade = selectedGrade || 6;
    setSelectedPeriodInfo({ unit, period });
    const qs = getQuestionsForPeriodAndSkill(unit, period, selectedSkill, grade);
    setActiveQuestions(qs);
    setSelectedAnswers({});
    setSpeakingScores({});
    setHasSubmitted(false);
    setAnalysisResult(null);
    setLatestLessonExpResult(null);
    setErrorMessage(null);
    setCurrentView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- XỬ LÝ CHỌN BÀI TỔNG HỢP TOÀN BỘ CÁC TIẾT ---
  const handleSelectComprehensive = () => {
    const grade = selectedGrade || 6;
    setSelectedPeriodInfo(null);
    const qs = getQuestionsForSkillAndGrade(selectedSkill, grade);
    setActiveQuestions(qs);
    setSelectedAnswers({});
    setSpeakingScores({});
    setHasSubmitted(false);
    setAnalysisResult(null);
    setLatestLessonExpResult(null);
    setErrorMessage(null);
    setCurrentView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- XỬ LÝ LÀM BÀI VÀ NỘP BÀI KIỂM TRA ---
  const handleSelectAnswer = (questionId: number, answer: string, score?: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
    if (score !== undefined) {
      setSpeakingScores((prev) => ({
        ...prev,
        [questionId]: score,
      }));
    }
  };

  const handleUpdateQuestion = (updatedQuestion: Question) => {
    setActiveQuestions((prev) =>
      prev.map((q) => (q.id === updatedQuestion.id ? updatedQuestion : q))
    );
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setSpeakingScores({});
    setHasSubmitted(false);
    setAnalysisResult(null);
    setLatestLessonExpResult(null);
    setErrorMessage(null);

    // Khi làm lại Writing, tự tạo đề bài văn mới cho câu viết đoạn văn cuối cùng
    if (selectedSkill === 'writing' && selectedGrade) {
      const randomPrompt = getRandomEssayPrompt(selectedGrade);
      setActiveQuestions((prev) =>
        prev.map((q, idx) => {
          if (q.isEssay || q.topic === 'writing_essay_paragraph' || idx === prev.length - 1) {
            return {
              ...q,
              isEssay: true,
              topic: 'writing_essay_paragraph',
              topicTitle: `Viết đoạn văn: ${randomPrompt.topicTitleEn}`,
              prompt: `Đề bài văn Lớp ${selectedGrade}: ${randomPrompt.topicTitleVi}. ${randomPrompt.instructionsVi}`,
              essayDetails: randomPrompt,
              correctAnswer: randomPrompt.sampleEssay,
              hintExplanation: `Đoạn văn tham khảo (Lớp ${selectedGrade}): "${randomPrompt.sampleEssay}"`,
            };
          }
          return q;
        })
      );
    }

    const el = document.getElementById('quiz-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmitQuiz = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    const submissions = activeQuestions.map((q) => ({
      id: q.id,
      topic: q.topic,
      topicTitle: q.topicTitle,
      prompt: q.prompt,
      readingPassage: q.readingPassage,
      audioScript: q.audioScript,
      hintExplanation: q.hintExplanation,
      studentAnswer: selectedAnswers[q.id] || '',
      correctAnswer: q.correctAnswer,
      score: speakingScores[q.id],
      isEssay: q.isEssay,
      essayDetails: q.essayDetails,
    }));

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          submissions,
          skillType: selectedSkill,
          gradeLevel: selectedGrade || 6,
        }),
      });

      if (!response.ok) {
        throw new Error('Lỗi phản hồi từ máy chủ phân tích.');
      }

      const data: AnalysisResponse = await response.json();
      setAnalysisResult(data);
      setHasSubmitted(true);
      setLastCompletedAnalysis(data);
      setLastCompletedSkill(selectedSkill);

      // Lưu thành tích cao nhất
      let correctCount = 0;
      if (data.detailedAnalysis && data.detailedAnalysis.length > 0) {
        correctCount = data.detailedAnalysis.filter((a) => a.isCorrect).length;
      } else {
        correctCount = activeQuestions.filter(
          (q) => selectedAnswers[q.id]?.trim().toLowerCase() === q.correctAnswer?.trim().toLowerCase()
        ).length;
      }
      updateHighScoreData(selectedSkill, correctCount, activeQuestions.length || 6, selectedGrade || 6);

      // Xử lý EXP & Chuỗi theo quy tắc:
      // + Học một bài học được 50 kinh nghiệm
      // + 1 bài học được 1 chuỗi cộng 5% kinh nghiệm
      // + Nếu làm sai thì chuỗi quay lại 0
      const totalQuestionsCount = activeQuestions.length || 6;
      const allCorrect = correctCount === totalQuestionsCount;
      const expReward = processLessonExp(allCorrect);
      setLatestLessonExpResult(expReward);
      setGamificationState(getGamificationState());

      setTimeout(() => {
        const el = document.getElementById('analysis-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(
        'Có lỗi khi kết nối với AI phân tích. Hệ thống đã kích hoạt chế độ phân tích sư phạm dự phòng.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Map question prompts and texts for display
  const questionsPromptMap = activeQuestions.reduce((acc, q) => {
    acc[q.id] = q.prompt;
    return acc;
  }, {} as Record<number, string>);

  const audioScriptsMap = activeQuestions.reduce((acc, q) => {
    if (q.audioScript) acc[q.id] = q.audioScript;
    return acc;
  }, {} as Record<number, string>);

  const readingPassagesMap = activeQuestions.reduce((acc, q) => {
    if (q.readingPassage) acc[q.id] = q.readingPassage;
    return acc;
  }, {} as Record<number, string>);

  return (
    <div className="min-h-screen bg-[#050b1a] text-slate-100 font-sans flex flex-col antialiased relative selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Nền xanh bí ẩn với các họa tiết li ti chuyển động nhẹ */}
      <MysticParticlesBackground />

      {/* Header */}
      <Header
        currentGrade={selectedGrade}
        currentView={currentView}
        onNavigateHome={() => setCurrentView('home')}
        onChangeGrade={handleOpenGradeSurvey}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 relative z-10">
        {errorMessage && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-2 shadow-2xs">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* 1. MÀN HÌNH KHẢO SÁT: "Bạn muốn trình độ nào" */}
        {currentView === 'survey' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            {/* Friendly prompt tip */}
            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-emerald-200/80 shadow-2xs flex items-center gap-3">
              <span className="text-2xl">🎒</span>
              <div className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                Chào mừng em đến với <strong>EngJourney AI</strong>! Hãy chọn khối lớp phù hợp từ <strong>Lớp 1 đến Lớp 9</strong> dưới đây, sau đó bấm <strong>"Xác nhận trình độ & Vào Trang chủ"</strong> để bắt đầu nhé. 🌟
              </div>
            </div>

            <GradeSelection
              selectedGrade={selectedGrade}
              onSelectGrade={handleSelectGrade}
              onSubmitGrade={handleSubmitGrade}
              isGradeSubmitted={false}
              onResetGrade={() => {}}
              onCancelToHome={() => {
                if (!selectedGrade) setSelectedGrade(5);
                setCurrentView('home');
              }}
            />
          </div>
        )}

        {/* 2. TRANG CHỦ (HOME PAGE) CÓ MÀU XANH NHẠT & EMOJI THÂN THIỆN */}
        {currentView === 'home' && selectedGrade && (
          <HomePage
            currentGrade={selectedGrade}
            onSelectSkill={handleSelectSkillFromHome}
            onOpenSkillsSelection={() => {
              setCurrentView('skills_selection');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onChangeGrade={handleOpenGradeSurvey}
            lastAnalysis={lastCompletedAnalysis}
            lastSkill={lastCompletedSkill}
            gamificationState={gamificationState}
            onOpenShop={() => setShowShopModal(true)}
            onOpenInventory={() => {
              setCurrentView('inventory');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onViewLastResult={() => {
              if (lastCompletedSkill) {
                setSelectedSkill(lastCompletedSkill);
                const qs = getQuestionsForSkillAndGrade(lastCompletedSkill, selectedGrade);
                setActiveQuestions(qs);
                setAnalysisResult(lastCompletedAnalysis);
                setHasSubmitted(true);
                setCurrentView('quiz');
              }
            }}
          />
        )}

        {/* 2.1. TRANG KHO ĐỒ CỦA EM */}
        {currentView === 'inventory' && (
          <InventoryPage
            gamificationState={gamificationState}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenShop={() => setShowShopModal(true)}
            onStartLearning={() => {
              setCurrentView('skills_selection');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* 2.2. MÀN HÌNH CHỌN KỸ NĂNG (MỞ TRANG KHÁC KHI NHẤN "BẮT ĐẦU BÀI HỌC") */}
        {currentView === 'skills_selection' && selectedGrade && (
          <SkillsSelectionPage
            currentGrade={selectedGrade}
            highScoreData={getSavedHighScoreData()}
            gamificationState={gamificationState}
            onSelectSkill={handleSelectSkillFromHome}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onChangeGrade={handleOpenGradeSurvey}
          />
        )}

        {/* 2.4. MÀN HÌNH CHỌN BÀI HỌC NGỮ PHÁP TOÀN DIỆN (KHÔNG GIỚI HẠN) */}
        {currentView === 'grammar_selection' && (
          <GrammarLessonSelection
            onSelectLesson={handleSelectGrammarLesson}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            selectedLessonId={selectedGrammarLesson?.id}
          />
        )}

        {/* 2.5. MÀN HÌNH CHỌN TIẾT HỌC THEO SÁCH GIÁO KHOA */}
        {currentView === 'lesson_selection' && selectedGrade && (
          <LessonPeriodSelection
            currentGrade={selectedGrade}
            selectedSkill={selectedSkill}
            onSelectPeriod={handleSelectPeriod}
            onSelectComprehensive={handleSelectComprehensive}
            onBackToHome={() => {
              setCurrentView('skills_selection');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onChangeSkill={(newSkill) => {
              setSelectedSkill(newSkill);
            }}
          />
        )}

        {/* 3. MÀN HÌNH BÀI KIỂM TRA CHẨN ĐOÁN & PHÂN TÍCH AI (QUIZ VIEW) */}
        {currentView === 'quiz' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Top Navigation & Status Bar */}
            <div className="flex items-center justify-between gap-3 bg-white/90 backdrop-blur-xs p-3.5 px-4 sm:px-5 rounded-2xl border border-emerald-200/90 shadow-2xs flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => setCurrentView('home')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-200 transition-all cursor-pointer"
                >
                  <Home className="w-4 h-4 text-emerald-600" />
                  <span>← Trang chủ 🏠</span>
                </button>

                {selectedSkill === 'grammar' ? (
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentView('grammar_selection');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-800 hover:text-teal-950 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-xl border border-teal-200 transition-all cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-teal-600" />
                    <span>← Chọn bài học ngữ pháp 💡</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentView('lesson_selection');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-800 hover:text-teal-950 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-xl border border-teal-200 transition-all cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-teal-600" />
                    <span>← Chọn tiết khác 📚</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold flex-wrap">
                {/* EXP & Chuỗi Badge */}
                <div
                  onClick={() => setShowShopModal(true)}
                  className="flex items-center gap-1.5 bg-amber-50/90 hover:bg-amber-100 px-2.5 py-1 rounded-xl border border-amber-200 text-amber-800 font-bold cursor-pointer transition-colors shadow-2xs"
                  title="Nhấn để mở Cửa Hàng Rương"
                >
                  <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{gamificationState.exp.toLocaleString()} EXP</span>
                  <span className="text-amber-300">|</span>
                  <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                  <span>Chuỗi {gamificationState.currentStreak}</span>
                  <span className="text-amber-300">|</span>
                  <span className="text-[11px] font-black text-emerald-700">Shop 🛍️</span>
                </div>

                <span className="hidden md:inline text-slate-400">•</span>

                {selectedSkill === 'grammar' && selectedGrammarLesson ? (
                  <span className="px-2.5 py-1 rounded-lg bg-teal-100 text-teal-950 font-black border border-teal-300 text-xs flex items-center gap-1">
                    <span>💡</span>
                    <span>{selectedGrammarLesson.titleVi}</span>
                  </span>
                ) : selectedPeriodInfo ? (
                  <span className="px-2.5 py-1 rounded-lg bg-teal-100 text-teal-950 font-black border border-teal-300 text-xs flex items-center gap-1">
                    <span>🎯</span>
                    <span>{selectedPeriodInfo.unit.unitTitle.split(':')[0]}: {selectedPeriodInfo.period.periodName}</span>
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-950 font-bold border border-amber-300 text-xs">
                    Bài tổng hợp SGK 🌟
                  </span>
                )}

                <span className="hidden sm:inline px-2.5 py-1 rounded-lg bg-emerald-100/90 text-emerald-900 font-bold border border-emerald-300/60">
                  {getSkillLabel(selectedSkill)}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold">
                  Lớp {selectedGrade} 🎒
                </span>
              </div>
            </div>

            {/* Speaking Mode Switcher nếu đang ở kỹ năng Speaking */}
            {selectedSkill === 'speaking' && (
              <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-xs p-1.5 rounded-2xl border border-emerald-200/80 max-w-md mx-auto shadow-2xs">
                <button
                  type="button"
                  onClick={() => setSpeakingMode('quiz')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    speakingMode === 'quiz'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>📝 Bài kiểm tra phản xạ</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSpeakingMode('studio');
                    setCurrentView('speaking_studio');
                  }}
                  className="flex-1 py-2 px-3 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Mic className="w-3.5 h-3.5 text-violet-600" />
                  <span>🎙️ Vào Studio Nói AI</span>
                </button>
              </div>
            )}

            {/* Quiz Section */}
            {activeQuestions.length > 0 && (
              <>
                <QuizSection
                  questions={activeQuestions}
                  selectedAnswers={selectedAnswers}
                  speakingScores={speakingScores}
                  onSelectAnswer={handleSelectAnswer}
                  onSubmit={handleSubmitQuiz}
                  isLoading={isLoading}
                  hasSubmitted={hasSubmitted}
                  onReset={handleResetQuiz}
                  skillType={selectedSkill}
                  gradeLevel={selectedGrade || 6}
                  grammarLessonTitle={selectedSkill === 'grammar' ? selectedGrammarLesson?.titleVi : undefined}
                  grammarFormula={selectedSkill === 'grammar' ? selectedGrammarLesson?.formulaSummary : undefined}
                  onOpenSpeakingStudio={() => {
                    setSpeakingMode('studio');
                    setCurrentView('speaking_studio');
                  }}
                  onUpdateQuestion={handleUpdateQuestion}
                />

                {/* Kết quả phân tích từ AI */}
                {hasSubmitted && analysisResult && analysisResult.grammarMap && (
                  <div className="space-y-6">
                    {/* Banner chúc mừng hoặc thông báo kết quả Kinh nghiệm & Chuỗi */}
                    {latestLessonExpResult && (
                      <ExpStreakRewardBanner
                        expResult={latestLessonExpResult}
                        onOpenShop={() => setShowShopModal(true)}
                      />
                    )}

                    {/* Phân tích lỗi chi tiết từng câu */}
                    <AnalysisSection
                      analyses={analysisResult.detailedAnalysis || []}
                      questionsPromptMap={questionsPromptMap}
                      audioScriptsMap={audioScriptsMap}
                      readingPassagesMap={readingPassagesMap}
                      skillType={selectedSkill}
                    />

                    {/* Bản đồ năng lực cá nhân hóa (Map của em) */}
                    <GrammarMapSection
                      goodTopics={analysisResult.grammarMap.goodTopics || []}
                      needPracticeTopics={analysisResult.grammarMap.needPracticeTopics || []}
                      priorityReviewTopics={analysisResult.grammarMap.priorityReviewTopics || []}
                      commonMistakeNote={analysisResult.grammarMap.commonMistakeNote || ''}
                      skillType={selectedSkill}
                      gradeLevel={selectedGrade || 6}
                    />

                    {/* Bài luyện tập tiếp theo */}
                    <NextPracticeSection
                      questions={analysisResult.nextPractice || []}
                      skillType={selectedSkill}
                    />

                    {/* Bottom Back to Home bar */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-emerald-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">
                          Em đã hoàn thành xuất sắc bài kiểm tra này! 🌟🎉
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {selectedSkill === 'grammar'
                            ? 'Em có thể tiếp tục chọn chuyên đề ngữ pháp khác hoặc quay về Trang chủ nhé.'
                            : 'Em có thể quay về Trang chủ để thử sức với các kỹ năng khác nhé.'}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-end">
                        {selectedSkill === 'grammar' && (
                          <button
                            type="button"
                            onClick={() => {
                              setCurrentView('grammar_selection');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <BookOpen className="w-4 h-4" />
                            <span>Chọn bài học ngữ pháp khác 💡</span>
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            setCurrentView('home');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Home className="w-4 h-4" />
                          <span>Quay về Trang chủ 🏠🌱</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* 4. PHÒNG LUYỆN NÓI TƯƠNG TÁC (SPEAKING STUDIO) */}
        {currentView === 'speaking_studio' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between gap-3 bg-white/90 backdrop-blur-xs p-3 px-4 rounded-2xl border border-emerald-200/90 shadow-2xs">
              <button
                type="button"
                onClick={() => setCurrentView('home')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-200 transition-all cursor-pointer"
              >
                <Home className="w-4 h-4 text-emerald-600" />
                <span>← Về Trang chủ 🏠</span>
              </button>

              <span className="text-xs font-bold text-violet-800 bg-violet-50 px-3 py-1 rounded-lg border border-violet-200">
                🎙️ Phòng Luyện Nói AI • Lớp {selectedGrade} 🌟
              </span>
            </div>

            <SpeakingStudio
              gradeLevel={selectedGrade || 6}
              onBackToQuiz={() => {
                const qs = getQuestionsForSkillAndGrade('speaking', selectedGrade || 6);
                setActiveQuestions(qs);
                setSelectedSkill('speaking');
                setCurrentView('quiz');
              }}
            />
          </div>
        )}

        {/* SHOP MODAL: MỞ RƯƠNG ĐỔI KINH NGHIỆM */}
        <ShopModal
          isOpen={showShopModal}
          onClose={() => setShowShopModal(false)}
          gamificationState={gamificationState}
          onStateUpdate={setGamificationState}
        />
      </main>
    </div>
  );
}
