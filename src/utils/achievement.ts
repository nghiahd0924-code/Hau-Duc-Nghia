import { GradeLevel } from '../components/GradeSelection';
import { SkillType } from '../components/SkillSelection';

export interface SkillHighScore {
  highestScore: number;
  totalQuestions: number;
  highestPercent: number;
  completedCount: number;
  lastUpdated?: string;
}

export interface AchievementBadge {
  id: string;
  title: string;
  desc: string;
  icon: string;
  unlocked: boolean;
}

export interface UserHighScoreData {
  overallHighestScore: number;
  overallHighestPercent: number;
  bestSkill: SkillType | null;
  totalQuizzesTaken: number;
  skills: Record<SkillType, SkillHighScore>;
  lastGrade?: GradeLevel;
}

const STORAGE_KEY = 'engjourney_high_scores_v1';

export const getDefaultHighScoreData = (): UserHighScoreData => {
  return {
    overallHighestScore: 0,
    overallHighestPercent: 0,
    bestSkill: null,
    totalQuizzesTaken: 0,
    skills: {
      listening: { highestScore: 0, totalQuestions: 10, highestPercent: 0, completedCount: 0 },
      reading: { highestScore: 0, totalQuestions: 10, highestPercent: 0, completedCount: 0 },
      writing: { highestScore: 0, totalQuestions: 10, highestPercent: 0, completedCount: 0 },
      speaking: { highestScore: 0, totalQuestions: 10, highestPercent: 0, completedCount: 0 },
      grammar: { highestScore: 0, totalQuestions: 10, highestPercent: 0, completedCount: 0 },
    },
  };
};

export const getSavedHighScoreData = (): UserHighScoreData => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultHighScoreData();
    const parsed = JSON.parse(raw);
    return {
      ...getDefaultHighScoreData(),
      ...parsed,
      skills: {
        ...getDefaultHighScoreData().skills,
        ...(parsed.skills || {}),
      },
    };
  } catch (err) {
    console.warn('Lỗi đọc thành tích từ localStorage:', err);
    return getDefaultHighScoreData();
  }
};

export const updateHighScoreData = (
  skill: SkillType,
  correctCount: number,
  totalQuestions: number = 10,
  grade?: GradeLevel
): UserHighScoreData => {
  const current = getSavedHighScoreData();
  const percent = Math.round((correctCount / totalQuestions) * 100);

  const prevSkill = current.skills[skill] || {
    highestScore: 0,
    totalQuestions: 10,
    highestPercent: 0,
    completedCount: 0,
  };

  const newSkillRecord: SkillHighScore = {
    highestScore: Math.max(prevSkill.highestScore, correctCount),
    totalQuestions: totalQuestions,
    highestPercent: Math.max(prevSkill.highestPercent, percent),
    completedCount: (prevSkill.completedCount || 0) + 1,
    lastUpdated: new Date().toLocaleDateString('vi-VN'),
  };

  const updatedSkills = {
    ...current.skills,
    [skill]: newSkillRecord,
  };

  // Tính kỷ lục tổng thể
  let overallHighestScore = current.overallHighestScore;
  let overallHighestPercent = current.overallHighestPercent;
  let bestSkill = current.bestSkill;

  Object.entries(updatedSkills).forEach(([sKey, sRecord]) => {
    if (sRecord.highestScore > overallHighestScore) {
      overallHighestScore = sRecord.highestScore;
      overallHighestPercent = sRecord.highestPercent;
      bestSkill = sKey as SkillType;
    } else if (sRecord.highestScore === overallHighestScore && sRecord.highestPercent > overallHighestPercent) {
      overallHighestPercent = sRecord.highestPercent;
      bestSkill = sKey as SkillType;
    }
  });

  const updatedData: UserHighScoreData = {
    overallHighestScore: Math.max(overallHighestScore, correctCount),
    overallHighestPercent: Math.max(overallHighestPercent, percent),
    bestSkill: bestSkill || skill,
    totalQuizzesTaken: (current.totalQuizzesTaken || 0) + 1,
    skills: updatedSkills,
    lastGrade: grade || current.lastGrade,
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  } catch (err) {
    console.warn('Lỗi lưu thành tích vào localStorage:', err);
  }

  return updatedData;
};

export const getBadgesList = (data: UserHighScoreData): AchievementBadge[] => {
  return [
    {
      id: 'first_quiz',
      title: 'Khởi Đầu Tự Tin',
      desc: 'Đã hoàn thành ít nhất 1 bài kiểm tra đầu tiên',
      icon: '🌱',
      unlocked: data.totalQuizzesTaken >= 1,
    },
    {
      id: 'perfect_score',
      title: 'Bậc Thầy Tuyệt Đối 100%',
      desc: 'Đạt điểm tuyệt đối 100% ở bất kỳ bài tập nào',
      icon: '🏆',
      unlocked: data.overallHighestPercent === 100 && data.totalQuizzesTaken > 0,
    },
    {
      id: 'high_score',
      title: 'Điểm Số Ấn Tượng',
      desc: 'Đạt từ 80% câu đúng trở lên (≥ 80%)',
      icon: '🌟',
      unlocked: data.overallHighestPercent >= 80,
    },
    {
      id: 'listening_pro',
      title: 'Đôi Tai Vàng (Listening)',
      desc: 'Hoàn thành và có điểm kỹ năng Nghe',
      icon: '🎧',
      unlocked: data.skills.listening.completedCount > 0,
    },
    {
      id: 'reading_pro',
      title: 'Mọt Sách Đọc Hiểu (Reading)',
      desc: 'Hoàn thành và có điểm kỹ năng Đọc',
      icon: '📖',
      unlocked: data.skills.reading.completedCount > 0,
    },
    {
      id: 'writing_pro',
      title: 'Cây Bút Sáng Tạo (Writing)',
      desc: 'Hoàn thành bài tập Viết & Đoạn văn',
      icon: '✍️',
      unlocked: data.skills.writing.completedCount > 0,
    },
    {
      id: 'speaking_pro',
      title: 'Nhà Diễn Thuyết Nhí (Speaking)',
      desc: 'Luyện tập phát âm và phản xạ Nói',
      icon: '🗣️',
      unlocked: data.skills.speaking.completedCount > 0,
    },
    {
      id: 'grammar_pro',
      title: 'Chuyên Gia Ngữ Pháp (Grammar)',
      desc: 'Chẩn đoán và củng cố kiến thức Ngữ pháp',
      icon: '💡',
      unlocked: data.skills.grammar.completedCount > 0,
    },
  ];
};
