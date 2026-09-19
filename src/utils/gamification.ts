import { addOwnedCatalogItem } from './inventoryStorage';

export type ChestType = 'bronze' | 'silver' | 'gold' | 'diamond';

export interface ChestReward {
  id: string;
  name: string;
  type: 'badge' | 'title' | 'trophy' | 'booster' | 'item';
  icon: string;
  description: string;
}

export interface ChestDefinition {
  id: ChestType;
  name: string;
  nameVi: string;
  requiredExp: number;
  icon: string;
  badgeColor: string;
  bgGradient: string;
  borderColor: string;
  shadowColor: string;
  tagline: string;
  rewardsPool: ChestReward[];
}

export const CHESTS_CONFIG: Record<ChestType, ChestDefinition> = {
  bronze: {
    id: 'bronze',
    name: 'Bronze Treasure Chest',
    nameVi: 'Hòm Kho Báu Đồng',
    requiredExp: 500,
    icon: '🧰',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    bgGradient: 'from-amber-500/10 via-amber-600/5 to-amber-700/10',
    borderColor: 'border-amber-400/60 hover:border-amber-500',
    shadowColor: 'shadow-amber-500/20',
    tagline: 'Hòm kho báu khởi đầu bằng gỗ viền đồng kiên cố',
    rewardsPool: [
      { id: 'bronze_badge', name: 'Huy Hiệu Đồng Khởi Động', type: 'badge', icon: '🥉', description: 'Ghi nhận bước đi vững chắc đầu tiên' },
      { id: 'bronze_title', name: 'Danh hiệu: Tân Binh Chăm Chỉ', type: 'title', icon: '🌱', description: 'Tích cực làm bài và tiến bộ mỗi ngày' },
      { id: 'bronze_star', name: 'Ngôi Sao Đồng May Mắn', type: 'trophy', icon: '⭐', description: 'Vật phẩm may mắn khích lệ học tập' },
      { id: 'common_scrap', name: 'Phế Liệu', type: 'item', icon: '⚙️', description: 'Bánh răng và linh kiện kim loại cũ dùng để đúc tạo trang bị' },
      { id: 'common_iron', name: 'Sắt', type: 'item', icon: '🪨', description: 'Thỏi sắt nguyên chất luyện từ lò rèn kiên cố' },
      { id: 'common_copper', name: 'Đồng', type: 'item', icon: '🥉', description: 'Thỏi đồng đúc nguyên khối với ánh kim cam ấm áp' },
    ],
  },
  silver: {
    id: 'silver',
    name: 'Silver Treasure Chest',
    nameVi: 'Hòm Kho Báu Bạc',
    requiredExp: 2500,
    icon: '🧰',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    bgGradient: 'from-slate-400/15 via-slate-500/5 to-slate-600/10',
    borderColor: 'border-slate-400/70 hover:border-slate-500',
    shadowColor: 'shadow-slate-400/20',
    tagline: 'Hòm kho báu bạc sáng bóng chứa trang bị tinh nhuệ',
    rewardsPool: [
      { id: 'silver_badge', name: 'Huy Hiệu Bạc Tinh Anh', type: 'badge', icon: '🥈', description: 'Minh chứng cho sự kiên trì vượt trội' },
      { id: 'silver_title', name: 'Danh hiệu: Chiến Binh Tiếng Anh', type: 'title', icon: '⚔️', description: 'Sẵn sàng chinh phục mọi cấu trúc thử thách' },
      { id: 'silver_shield', name: 'Khiên Bạc Bền Bỉ', type: 'trophy', icon: '🛡️', description: 'Biểu tượng của sự chính xác tuyệt đối' },
      { id: 'rare_silver_bars', name: 'Bạc', type: 'item', icon: '🥈', description: 'Thỏi bạc thanh khiết sáng bóng phản chiếu ánh hào quang' },
      { id: 'rare_gemstone', name: 'Đá Quý', type: 'item', icon: '💎', description: 'Viên đá quý hồng ngọc giác cắt tinh xảo tỏa ánh hào quang' },
    ],
  },
  gold: {
    id: 'gold',
    name: 'Gold Treasure Chest',
    nameVi: 'Hòm Kho Báu Vàng',
    requiredExp: 5000,
    icon: '👑',
    badgeColor: 'bg-yellow-100 text-yellow-900 border-yellow-300',
    bgGradient: 'from-yellow-400/20 via-amber-400/10 to-yellow-500/15',
    borderColor: 'border-yellow-400 hover:border-yellow-500',
    shadowColor: 'shadow-yellow-500/30',
    tagline: 'Hòm kho báu hoàng gia dát vàng chứa đầy châu báu tri thức',
    rewardsPool: [
      { id: 'gold_badge', name: 'Huy Hiệu Vàng Danh Dự', type: 'badge', icon: '🥇', description: 'Tỏa sáng rực rỡ trên bảng vàng vinh danh' },
      { id: 'gold_title', name: 'Danh hiệu: Bậc Thầy Ngữ Pháp & Nói', type: 'title', icon: '👑', description: 'Phản xạ chuẩn xác, tự tin xuất thần' },
      { id: 'gold_crown', name: 'Vương Miện Tri Thức Vàng', type: 'trophy', icon: '👑', description: 'Đỉnh cao của sự chăm chỉ và tài năng' },
      { id: 'rare_gold_bars', name: 'Vàng', type: 'item', icon: '🪙', description: 'Khối thỏi vàng hoàng gia đúc đặc tinh khiết' },
      { id: 'rare_diamond', name: 'Kim Cương', type: 'item', icon: '💠', description: 'Viên kim cương nguyên bản giác cắt tròn tinh khiết lấp lánh' },
      { id: 'royal_armor_helmet', name: 'Mũ Hoàng Gia', type: 'item', icon: '👑', description: 'Mũ chiến binh hoàng gia mạ vàng nạm ngọc' },
      { id: 'royal_armor_boots', name: 'Ủng Giáp Hoàng Gia', type: 'item', icon: '🥾', description: 'Đôi ủng giáp thép mạ vàng giúp bước đi vững vàng' },
    ],
  },
  diamond: {
    id: 'diamond',
    name: 'Diamond Treasure Chest',
    nameVi: 'Hòm Kho Báu Kim Cương',
    requiredExp: 10000,
    icon: '💎',
    badgeColor: 'bg-cyan-100 text-cyan-900 border-cyan-300',
    bgGradient: 'from-cyan-400/25 via-blue-400/15 to-teal-400/20',
    borderColor: 'border-cyan-400 hover:border-cyan-500',
    shadowColor: 'shadow-cyan-400/40',
    tagline: 'Hòm kho báu ma thuật tỏa sáng hào quang kim cương tối thượng',
    rewardsPool: [
      { id: 'diamond_badge', name: 'Huy Hiệu Kim Cương Tối Thượng', type: 'badge', icon: '💎', description: 'Báu vật vô giá của học viên xuất sắc nhất' },
      { id: 'diamond_title', name: 'Danh hiệu: Đại Sứ Tiếng Anh Toàn Năng', type: 'title', icon: '🏆', description: 'Thống lĩnh mọi kỹ năng Nghe - Nói - Đọc - Viết' },
      { id: 'diamond_gem', name: 'Viên Ngọc Kim Cương Bất Diệt', type: 'trophy', icon: '✨', description: 'Hào quang rực rỡ khẳng định vị thế quán quân' },
      { id: 'royal_armor_chest', name: 'Áo Giáp Hoàng Gia', type: 'item', icon: '🛡️', description: 'Tấm giáp ngực hộ tâm mạ vàng bảo vệ kiên cố' },
      { id: 'royal_armor_pants', name: 'Quần Giáp Hoàng Gia', type: 'item', icon: '🛡️', description: 'Quần giáp hộ thạc linh hoạt và vững chãi' },
      { id: 'ancient_bone', name: 'Xương Cổ Xưa', type: 'item', icon: '🦴', description: 'Khúc xương cổ đại phủ rêu phong chứa đựng tri thức ngàn năm' },
      { id: 'king_key', name: 'Chìa Khóa Vua', type: 'item', icon: '🗝️', description: 'Chìa khóa hoàng kim đầu lâu mở mọi cánh cửa bí mật' },
      { id: 'eternal_crown', name: 'Vương Miện Vĩnh Cửu', type: 'item', icon: '👑', description: 'Vương miện thần thoại nạm ngọc lam quang và kim cương bất tử' },
    ],
  },
};

export interface GamificationState {
  exp: number; // Kinh nghiệm hiện có để mở rương
  totalExpEarned: number; // Tổng kinh nghiệm đã kiếm được tích lũy
  currentStreak: number; // Chuỗi bài học đúng liên tiếp hiện tại
  highestStreak: number; // Chuỗi kỷ lục cao nhất
  openedChestsCount: Record<ChestType, number>;
  unlockedRewards: ChestReward[];
}

const GAMIFICATION_STORAGE_KEY = 'engjourney_gamification_v1';

export const getDefaultGamificationState = (): GamificationState => {
  return {
    exp: 0,
    totalExpEarned: 0,
    currentStreak: 0,
    highestStreak: 0,
    openedChestsCount: {
      bronze: 0,
      silver: 0,
      gold: 0,
      diamond: 0,
    },
    unlockedRewards: [],
  };
};

export const getGamificationState = (): GamificationState => {
  try {
    const raw = localStorage.getItem(GAMIFICATION_STORAGE_KEY);
    if (!raw) return getDefaultGamificationState();
    const parsed = JSON.parse(raw);
    return {
      ...getDefaultGamificationState(),
      ...parsed,
      openedChestsCount: {
        ...getDefaultGamificationState().openedChestsCount,
        ...(parsed.openedChestsCount || {}),
      },
      unlockedRewards: Array.isArray(parsed.unlockedRewards) ? parsed.unlockedRewards : [],
    };
  } catch (e) {
    console.warn('Lỗi đọc gamification state:', e);
    return getDefaultGamificationState();
  }
};

export const saveGamificationState = (state: GamificationState): void => {
  try {
    localStorage.setItem(GAMIFICATION_STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Lỗi lưu gamification state:', e);
  }
};

/**
 * Xử lý cộng EXP và Chuỗi sau khi hoàn thành bài học
 * Quy tắc người dùng yêu cầu:
 * - Học 1 bài học được 50 kinh nghiệm
 * - Học 1 bài học được 1 chuỗi cộng 5% kinh nghiệm
 * - Nếu làm sai thì chuỗi quay lại 0
 * 
 * @param allCorrect boolean: true nếu bài học không sai câu nào (hoàn thành xuất sắc)
 */
export interface LessonExpResult {
  baseExp: number;
  bonusPercent: number;
  bonusExp: number;
  totalExpAdded: number;
  previousStreak: number;
  newStreak: number;
  previousExp: number;
  newExp: number;
  isStreakBroken: boolean;
}

export const processLessonExp = (allCorrect: boolean): LessonExpResult => {
  const current = getGamificationState();
  const baseExp = 50; // Học 1 bài học được 50 kinh nghiệm

  let newStreak = 0;
  let isStreakBroken = false;
  let bonusPercent = 0;
  let totalExpAdded = baseExp;

  if (allCorrect) {
    // Không làm sai câu nào -> tăng 1 chuỗi, cộng 5% mỗi chuỗi
    newStreak = current.currentStreak + 1;
    bonusPercent = newStreak * 5; // 1 chuỗi cộng 5%
    const bonusExp = Math.round((baseExp * bonusPercent) / 100);
    totalExpAdded = baseExp + bonusExp;
  } else {
    // Nếu làm sai -> chuỗi quay lại 0
    newStreak = 0;
    isStreakBroken = current.currentStreak > 0;
    bonusPercent = 0;
    totalExpAdded = baseExp; // Vẫn nhận 50 kinh nghiệm gốc vì đã hoàn thành bài học
  }

  const updatedState: GamificationState = {
    ...current,
    exp: current.exp + totalExpAdded,
    totalExpEarned: current.totalExpEarned + totalExpAdded,
    currentStreak: newStreak,
    highestStreak: Math.max(current.highestStreak, newStreak),
  };

  saveGamificationState(updatedState);

  return {
    baseExp,
    bonusPercent,
    bonusExp: totalExpAdded - baseExp,
    totalExpAdded,
    previousStreak: current.currentStreak,
    newStreak,
    previousExp: current.exp,
    newExp: updatedState.exp,
    isStreakBroken,
  };
};

/**
 * Mở rương trong Shop bằng điểm kinh nghiệm
 */
export interface OpenChestResult {
  success: boolean;
  message: string;
  reward?: ChestReward;
  remainingExp: number;
}

export const purchaseChest = (chestType: ChestType): OpenChestResult => {
  const current = getGamificationState();
  const chestDef = CHESTS_CONFIG[chestType];

  if (current.exp < chestDef.requiredExp) {
    return {
      success: false,
      message: `Em cần thêm ${chestDef.requiredExp - current.exp} EXP nữa để mở ${chestDef.nameVi}!`,
      remainingExp: current.exp,
    };
  }

  // Trừ kinh nghiệm
  const newExp = current.exp - chestDef.requiredExp;

  // Chọn phần thưởng từ pool
  const pool = chestDef.rewardsPool;
  const randomIndex = Math.floor(Math.random() * pool.length);
  const baseReward = pool[randomIndex];
  const selectedReward = {
    ...baseReward,
    id: `${baseReward.id}_${Date.now()}`,
  };

  // Tự động mở khóa vật phẩm trong mục lục nếu là vật phẩm cổ vật
  addOwnedCatalogItem(baseReward.id);

  const updatedState: GamificationState = {
    ...current,
    exp: newExp,
    openedChestsCount: {
      ...current.openedChestsCount,
      [chestType]: (current.openedChestsCount[chestType] || 0) + 1,
    },
    unlockedRewards: [selectedReward, ...current.unlockedRewards],
  };

  saveGamificationState(updatedState);

  return {
    success: true,
    message: `Chúc mừng em đã mở thành công ${chestDef.nameVi}!`,
    reward: selectedReward,
    remainingExp: newExp,
  };
};
