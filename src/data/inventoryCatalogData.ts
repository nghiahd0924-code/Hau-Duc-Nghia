import ancientBoneImg from '../assets/images/mossy_ancient_bone_1789779919520.jpg';
import kingKeyImg from '../assets/images/skull_crown_key_minimalist_1789779586071.jpg';
import goldenShieldImg from '../assets/images/golden_shield_ornate_patterns_1789781022143.jpg';
import silverSwordImg from '../assets/images/silver_sword_ornate_patterns_1789781042064.jpg';
import royalHelmetImg from '../assets/images/royal_helmet_single_1789781945826.jpg';
import royalArmorImg from '../assets/images/royal_armor_upper_arms_1789782387048.jpg';
import royalPantsImg from '../assets/images/royal_pants_complete_1789782405637.jpg';
import royalBootsImg from '../assets/images/royal_boots_sabatons_1789782669313.jpg';
import gemstoneImg from '../assets/images/gemstone_ruby_pure_1789783813174.jpg';
import goldBarsImg from '../assets/images/gold_bars_rare_1789783393022.jpg';
import silverBarsImg from '../assets/images/silver_ingot_rare_1789783413308.jpg';
import diamondImg from '../assets/images/diamond_pure_gem_1789783828592.jpg';
import scrapImg from '../assets/images/scrap_common.svg';
import ironImg from '../assets/images/iron_common.svg';
import copperImg from '../assets/images/copper_common.svg';
import eternalCrownImg from '../assets/images/eternal_crown_mythic.svg';

export interface CatalogItem {
  id: string;
  name: string;
  category: 'mythical' | 'legendary' | 'rare' | 'common' | string;
  categoryNameVi: string;
  type: string;
  icon: string;
  imageUrl: string;
  rarity: string;
  effect?: string;
  description?: string;
  lore?: string;
  status: 'locked' | 'unlocked';
}

export interface CatalogCategory {
  categoryKey: string;
  title: string;
  badge: string;
  description: string;
  items: CatalogItem[];
}

export const INVENTORY_CATALOG: Record<string, CatalogCategory> = {
  mythical: {
    categoryKey: 'mythical',
    title: 'Mục Thần Thoại',
    badge: 'Cấp Thần Thoại',
    description: 'Bộ sưu tập cổ vật biểu tượng với thiết kế tối giản, biểu trưng cho sự kiên trì và đỉnh cao tri thức.',
    items: [
      {
        id: 'ancient_bone',
        name: 'Xương Cổ Xưa',
        category: 'mythical',
        categoryNameVi: 'Thần Thoại',
        type: 'Khúc xương cổ bám rêu',
        icon: '🦴',
        imageUrl: ancientBoneImg,
        rarity: 'Thần Thoại',
        effect: 'Khai mở trí tuệ cổ đại',
        description: 'Khúc xương cổ đại phủ rêu phong qua hàng thế kỷ, ẩn chứa bí thuật kiên trì của các bậc hiền giả xa xưa.',
        status: 'locked',
      },
      {
        id: 'king_key',
        name: 'Chìa Khóa Vua',
        category: 'mythical',
        categoryNameVi: 'Thần Thoại',
        type: 'Chìa khóa Đầu lâu Vương miện',
        icon: '🗝️',
        imageUrl: kingKeyImg,
        rarity: 'Thần Thoại',
        effect: 'Mở khóa kho tàng vô tận',
        description: 'Chiếc chìa khóa hoàng gia khắc hình đầu lâu đội vương miện, có thể mở ra những rương kho báu bí ẩn nhất.',
        status: 'locked',
      },
      {
        id: 'eternal_crown',
        name: 'Vương Miện Vĩnh Cửu',
        category: 'mythical',
        categoryNameVi: 'Thần Thoại',
        type: 'Vương miện quyền năng bất tử',
        icon: '👑',
        imageUrl: eternalCrownImg,
        rarity: 'Thần Thoại',
        effect: 'Hào quang vương quyền vĩnh hằng',
        description: 'Vương miện thần thoại nạm ngọc bích lam quang và đỉnh kim cương tinh khiết, biểu trưng vĩnh cửu cho người thống trị mọi đỉnh cao tri thức.',
        status: 'locked',
      },
    ],
  },
  legendary: {
    categoryKey: 'legendary',
    title: 'Mục Huyền Thoại',
    badge: 'Cấp Huyền Thoại',
    description: 'Bộ trang bị huyền thoại tối thượng với năng lượng bảo vệ và gia tăng chuỗi học tập.',
    items: [
      {
        id: 'golden_shield',
        name: 'Khiên Vàng',
        category: 'legendary',
        categoryNameVi: 'Huyền Thoại',
        type: 'Khiên phòng thủ',
        icon: '🛡️',
        imageUrl: goldenShieldImg,
        rarity: 'Huyền Thoại',
        effect: 'Bảo vệ chuỗi',
        status: 'locked',
      },
      {
        id: 'silver_sword',
        name: 'Kiếm Bạc',
        category: 'legendary',
        categoryNameVi: 'Huyền Thoại',
        type: 'Kiếm chiến binh',
        icon: '⚔️',
        imageUrl: silverSwordImg,
        rarity: 'Huyền Thoại',
        effect: 'Tăng 5 chuỗi',
        status: 'locked',
      },
      {
        id: 'royal_helmet',
        name: 'Mũ Hoàng Gia',
        category: 'legendary',
        categoryNameVi: 'Huyền Thoại',
        type: 'Mũ giáp hoàng gia',
        icon: '👑',
        imageUrl: royalHelmetImg,
        rarity: 'Huyền Thoại',
        status: 'locked',
      },
      {
        id: 'royal_armor',
        name: 'Giáp Hoàng Gia',
        category: 'legendary',
        categoryNameVi: 'Huyền Thoại',
        type: 'Áo giáp hoàng gia',
        icon: '🛡️',
        imageUrl: royalArmorImg,
        rarity: 'Huyền Thoại',
        status: 'locked',
      },
      {
        id: 'royal_pants',
        name: 'Quần Hoàng Gia',
        category: 'legendary',
        categoryNameVi: 'Huyền Thoại',
        type: 'Quần giáp hoàng gia',
        icon: '👖',
        imageUrl: royalPantsImg,
        rarity: 'Huyền Thoại',
        status: 'locked',
      },
      {
        id: 'royal_boots',
        name: 'Giày Hoàng Gia',
        category: 'legendary',
        categoryNameVi: 'Huyền Thoại',
        type: 'Chiến hài hoàng gia',
        icon: '👢',
        imageUrl: royalBootsImg,
        rarity: 'Huyền Thoại',
        status: 'locked',
      },
    ],
  },
  rare: {
    categoryKey: 'rare',
    title: 'Mục Hiếm',
    badge: 'Cấp Hiếm',
    description: 'Kho tàng bảo thạch và kim loại quý giá, biểu trưng cho sự rèn luyện bền bỉ và tích lũy tri thức vô giá.',
    items: [
      {
        id: 'rare_gemstone',
        name: 'Đá Quý',
        category: 'rare',
        categoryNameVi: 'Hiếm',
        type: 'Bảo thạch Ruby giác cắt',
        icon: '💎',
        imageUrl: gemstoneImg,
        rarity: 'Hiếm',
        effect: 'Tỏa sáng tri thức',
        description: 'Viên đá quý hồng ngọc đỏ thẫm rực rỡ với các mặt cắt giác tinh xảo, tỏa ánh hào quang huyền bí phản chiếu nguồn tri thức quý giá.',
        status: 'locked',
      },
      {
        id: 'rare_gold',
        name: 'Vàng',
        category: 'rare',
        categoryNameVi: 'Hiếm',
        type: 'Thỏi vàng hoàng gia',
        icon: '🪙',
        imageUrl: goldBarsImg,
        rarity: 'Hiếm',
        effect: 'Độ bền bỉ vàng kim',
        description: 'Những thỏi vàng nguyên chất sáng lấp lánh, đúc kết tinh xảo với dấu ấn vương giả.',
        status: 'locked',
      },
      {
        id: 'rare_silver',
        name: 'Bạc',
        category: 'rare',
        categoryNameVi: 'Hiếm',
        type: 'Thỏi bạc thanh khiết',
        icon: '🥈',
        imageUrl: silverBarsImg,
        rarity: 'Hiếm',
        effect: 'Ánh bạc thuần khiết',
        description: 'Khối bạc trắng ánh kim thanh nhã, biểu trưng cho sự chuẩn xác và minh triết.',
        status: 'locked',
      },
      {
        id: 'rare_diamond',
        name: 'Kim Cương',
        category: 'rare',
        categoryNameVi: 'Hiếm',
        type: 'Kim cương giác cắt tròn',
        icon: '💠',
        imageUrl: diamondImg,
        rarity: 'Hiếm',
        effect: 'Độ cứng tối thượng',
        description: 'Viên kim cương nguyên bản trong suốt lộng lẫy với giác cắt tinh xảo, phản chiếu muôn ngàn tia sáng lấp lánh và có độ cứng tối thượng.',
        status: 'locked',
      },
    ],
  },
  common: {
    categoryKey: 'common',
    title: 'Mục Bình Thường',
    badge: 'Cấp Bình Thường',
    description: 'Các vật liệu và kim loại cơ bản quen thuộc, nền tảng vững chắc để tôi luyện và chế tác mọi trang bị.',
    items: [
      {
        id: 'common_scrap',
        name: 'Phế Liệu',
        category: 'common',
        categoryNameVi: 'Bình Thường',
        type: 'Mảnh kim loại tái chế',
        icon: '⚙️',
        imageUrl: scrapImg,
        rarity: 'Bình Thường',
        effect: 'Nguyên liệu tái chế',
        description: 'Tập hợp các mảnh bánh răng, bu-lông và thanh sắt vụn, có thể tái chế thành nhiều vật phẩm hữu ích.',
        status: 'locked',
      },
      {
        id: 'common_iron',
        name: 'Sắt',
        category: 'common',
        categoryNameVi: 'Bình Thường',
        type: 'Thỏi sắt nguyên khối',
        icon: '🪨',
        imageUrl: ironImg,
        rarity: 'Bình Thường',
        effect: 'Độ bền cơ bản',
        description: 'Những thỏi sắt đặc chắc nịch được tôi luyện cẩn thận, nền tảng cho mọi công cụ kiên cố.',
        status: 'locked',
      },
      {
        id: 'common_copper',
        name: 'Đồng',
        category: 'common',
        categoryNameVi: 'Bình Thường',
        type: 'Thỏi đồng đỏ nguyên chất',
        icon: '🥉',
        imageUrl: copperImg,
        rarity: 'Bình Thường',
        effect: 'Dẫn truyền năng lượng',
        description: 'Các thỏi đồng đỏ ấm áp sáng bóng, dễ uốn nắn và dẫn truyền tinh hoa chế tác.',
        status: 'locked',
      },
    ],
  },
};
