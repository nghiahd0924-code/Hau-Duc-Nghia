import React from 'react';
import { ChestType } from '../utils/gamification';

interface TreasureChestGraphicProps {
  type: ChestType;
  isOpen?: boolean;
  isOpening?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const TreasureChestGraphic: React.FC<TreasureChestGraphicProps> = ({
  type,
  isOpen = false,
  isOpening = false,
  className = '',
  size = 'md',
}) => {
  // Bảng màu kim loại và gỗ cho từng cấp độ Hòm Kho Báu
  const colorThemes = {
    bronze: {
      woodLight: '#9A5B32',
      woodDark: '#663B1E',
      metalLight: '#E59866',
      metalDark: '#A04000',
      metalTrim: '#BA4A00',
      lockColor: '#D35400',
      glowColor: '#F39C12',
      gemColor: '#E67E22',
      lidShadow: 'rgba(50, 20, 5, 0.4)',
    },
    silver: {
      woodLight: '#4A5568',
      woodDark: '#2D3748',
      metalLight: '#E2E8F0',
      metalDark: '#94A3B8',
      metalTrim: '#CBD5E1',
      lockColor: '#64748B',
      glowColor: '#38BDF8',
      gemColor: '#0EA5E9',
      lidShadow: 'rgba(15, 23, 42, 0.45)',
    },
    gold: {
      woodLight: '#8B4513',
      woodDark: '#5C2D0C',
      metalLight: '#FDE047',
      metalDark: '#D97706',
      metalTrim: '#F59E0B',
      lockColor: '#B45309',
      glowColor: '#FBBF24',
      gemColor: '#EF4444',
      lidShadow: 'rgba(67, 20, 7, 0.5)',
    },
    diamond: {
      woodLight: '#0F766E',
      woodDark: '#115E59',
      metalLight: '#67E8F9',
      metalDark: '#0891B2',
      metalTrim: '#22D3EE',
      lockColor: '#0E7490',
      glowColor: '#38BDF8',
      gemColor: '#06B6D4',
      lidShadow: 'rgba(8, 47, 73, 0.55)',
    },
  };

  const theme = colorThemes[type];

  // Kích thước chuẩn hoá
  const dimensions = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
    xl: 'w-36 h-36',
  };

  const sizeClass = dimensions[size] || dimensions.md;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${sizeClass} ${className} ${
        isOpening ? 'animate-bounce' : ''
      }`}
    >
      <svg
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-md overflow-visible transition-all duration-300"
      >
        <defs>
          {/* Gradients cho Thân Hòm Gỗ */}
          <linearGradient id={`woodGrad-${type}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={theme.woodLight} />
            <stop offset="100%" stopColor={theme.woodDark} />
          </linearGradient>

          {/* Gradients cho Khung Kim Loại / Viền Hòm */}
          <linearGradient id={`metalGrad-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme.metalLight} />
            <stop offset="50%" stopColor={theme.metalTrim} />
            <stop offset="100%" stopColor={theme.metalDark} />
          </linearGradient>

          {/* Gradients Hào quang bên trong khi hòm mở */}
          <radialGradient id={`glowGrad-${type}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.9" />
            <stop offset="60%" stopColor={theme.glowColor} stopOpacity="0.6" />
            <stop offset="100%" stopColor={theme.glowColor} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Bóng đổ dưới đáy Hòm */}
        <ellipse cx="60" cy="94" rx="44" ry="5.5" fill="rgba(15, 23, 42, 0.28)" />

        {/* NỘI DUNG PHÁT SÁNG NẾU HÒM ĐANG MỞ (TREASURE GLOW & COINS) */}
        {(isOpen || isOpening) && (
          <g className="animate-pulse">
            <ellipse cx="60" cy="50" rx="36" ry="24" fill={`url(#glowGrad-${type})`} />
            
            {/* Các tia sáng vàng kim từ bên trong Hòm */}
            <path d="M60 24 L56 46 L64 46 Z" fill="#FEF08A" opacity="0.8" />
            <path d="M42 30 L52 48 L58 44 Z" fill="#FDE047" opacity="0.75" />
            <path d="M78 30 L62 44 L68 48 Z" fill="#FDE047" opacity="0.75" />
            <path d="M30 42 L50 50 L50 45 Z" fill="#FACC15" opacity="0.7" />
            <path d="M90 42 L70 45 L70 50 Z" fill="#FACC15" opacity="0.7" />

            {/* Các đồng tiền vàng và châu báu tràn ra từ hòm */}
            <circle cx="50" cy="46" r="5" fill="#FACC15" stroke="#B45309" strokeWidth="1" />
            <circle cx="62" cy="44" r="5.5" fill="#FDE047" stroke="#B45309" strokeWidth="1" />
            <circle cx="72" cy="47" r="4.5" fill="#FACC15" stroke="#B45309" strokeWidth="1" />
            <circle cx="56" cy="49" r="4" fill="#FEF08A" stroke="#B45309" strokeWidth="0.8" />
            {/* Viên đá quý */}
            <polygon points="60,38 65,43 60,48 55,43" fill={theme.gemColor} stroke="#FFFFFF" strokeWidth="0.8" />
          </g>
        )}

        {/* THÂN DƯỚI CỦA HÒM KHO BÁU (CHEST BASE) */}
        <g id="chest-base">
          {/* Khối gỗ chính */}
          <path
            d="M18 48 L102 48 L96 90 L24 90 Z"
            fill={`url(#woodGrad-${type})`}
            stroke={theme.woodDark}
            strokeWidth="2"
          />

          {/* Đường vân gỗ ngang trên thân hòm */}
          <line x1="20" y1="62" x2="100" y2="62" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
          <line x1="22" y1="76" x2="98" y2="76" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />

          {/* Dải nẹp kim loại bo góc trái (Metal Strap Left) */}
          <path
            d="M18 48 L28 48 L32 90 L24 90 Z"
            fill={`url(#metalGrad-${type})`}
            stroke="rgba(0,0,0,0.3)"
            strokeWidth="0.8"
          />
          {/* Đinh tán kim loại (Rivets) */}
          <circle cx="23" cy="54" r="1.6" fill="#FFFFFF" opacity="0.8" />
          <circle cx="25" cy="68" r="1.6" fill="#FFFFFF" opacity="0.8" />
          <circle cx="27" cy="82" r="1.6" fill="#FFFFFF" opacity="0.8" />

          {/* Dải nẹp kim loại bo góc phải (Metal Strap Right) */}
          <path
            d="M92 48 L102 48 L96 90 L88 90 Z"
            fill={`url(#metalGrad-${type})`}
            stroke="rgba(0,0,0,0.3)"
            strokeWidth="0.8"
          />
          <circle cx="97" cy="54" r="1.6" fill="#FFFFFF" opacity="0.8" />
          <circle cx="95" cy="68" r="1.6" fill="#FFFFFF" opacity="0.8" />
          <circle cx="93" cy="82" r="1.6" fill="#FFFFFF" opacity="0.8" />

          {/* Dải nẹp kim loại ở giữa hòm (Center Strap) */}
          <path
            d="M54 48 L66 48 L65 90 L55 90 Z"
            fill={`url(#metalGrad-${type})`}
            stroke="rgba(0,0,0,0.3)"
            strokeWidth="0.8"
          />
          <circle cx="60" cy="74" r="1.6" fill="#FFFFFF" opacity="0.8" />
          <circle cx="60" cy="84" r="1.6" fill="#FFFFFF" opacity="0.8" />

          {/* Nắp viền đáy hòm kim loại */}
          <path
            d="M23 88 L97 88 L96 91 L24 91 Z"
            fill={`url(#metalGrad-${type})`}
            stroke="rgba(0,0,0,0.2)"
          />
        </g>

        {/* NẮP HÒM KHO BÁU (CHEST LID) - ĐÓNG HOẶC MỞ */}
        {isOpen ? (
          /* TRẠNG THÁI HÒM MỞ NẮP (OPENED LID) */
          <g id="chest-lid-open" className="transition-all transform origin-bottom">
            {/* Nắp bật lên phía sau */}
            <path
              d="M16 44 C16 26 104 26 104 44 L98 32 C98 18 22 18 22 32 Z"
              fill={theme.lidShadow}
            />
            <path
              d="M20 30 C20 12 100 12 100 30 L96 42 C96 26 24 26 24 42 Z"
              fill={`url(#woodGrad-${type})`}
              stroke={theme.metalDark}
              strokeWidth="2"
            />
            {/* Vành kim loại nắp mở */}
            <path
              d="M19 32 C19 14 101 14 101 32 L98 34 C98 17 22 17 22 34 Z"
              fill={`url(#metalGrad-${type})`}
            />
          </g>
        ) : (
          /* TRẠNG THÁI HÒM ĐÓNG NẮP (CLOSED LID) CÓ KHÓA CHẮC CHẮN */
          <g id="chest-lid-closed">
            {/* Vòm nắp gỗ cong (Curved Wooden Lid) */}
            <path
              d="M14 48 C14 26 106 26 106 48 Z"
              fill={`url(#woodGrad-${type})`}
              stroke={theme.woodDark}
              strokeWidth="2"
            />

            {/* Các đường vân gỗ vòm nắp */}
            <path
              d="M20 44 C25 33 95 33 100 44"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M26 36 C35 28 85 28 94 36"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              fill="none"
            />

            {/* Đai kim loại nẹp nắp trái */}
            <path
              d="M14 48 C14 26 32 28 32 48 Z"
              fill={`url(#metalGrad-${type})`}
              opacity="0.95"
            />
            <circle cx="21" cy="42" r="1.6" fill="#FFFFFF" opacity="0.8" />
            <circle cx="24" cy="34" r="1.6" fill="#FFFFFF" opacity="0.8" />

            {/* Đai kim loại nẹp nắp phải */}
            <path
              d="M88 48 C88 28 106 26 106 48 Z"
              fill={`url(#metalGrad-${type})`}
              opacity="0.95"
            />
            <circle cx="99" cy="42" r="1.6" fill="#FFFFFF" opacity="0.8" />
            <circle cx="96" cy="34" r="1.6" fill="#FFFFFF" opacity="0.8" />

            {/* Đai kim loại nẹp nắp ở giữa */}
            <path
              d="M54 48 C54 27 66 27 66 48 Z"
              fill={`url(#metalGrad-${type})`}
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="0.8"
            />
            <circle cx="60" cy="34" r="1.6" fill="#FFFFFF" opacity="0.8" />

            {/* Vành mép kim loại dưới nắp hòm */}
            <rect
              x="12"
              y="46"
              width="96"
              height="5"
              rx="2.5"
              fill={`url(#metalGrad-${type})`}
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1"
            />
          </g>
        )}

        {/* Ổ KHÓA BÁU VẬT TRUNG TÂM (CHEST PADLOCK & LATCH) */}
        <g id="chest-lock">
          {/* Bát khóa kim loại gắn từ nắp xuống thân */}
          <path
            d="M52 46 L68 46 L66 64 L54 64 Z"
            fill={`url(#metalGrad-${type})`}
            stroke="rgba(0,0,0,0.3)"
            strokeWidth="1"
          />

          {/* Thân ổ khóa vàng/bạc/đồng */}
          <rect
            x="52"
            y="52"
            width="16"
            height="14"
            rx="3"
            fill={theme.lockColor}
            stroke="#FFFFFF"
            strokeWidth="0.8"
          />

          {/* Vòng móc khóa */}
          <path
            d="M55 52 V47 C55 44 65 44 65 47 V52"
            stroke={theme.metalLight}
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Lỗ tra chìa khóa (Keyhole) hoặc Viên Ngọc Khóa */}
          {type === 'diamond' ? (
            <polygon points="60,56 63,59 60,62 57,59" fill="#E0F2FE" />
          ) : (
            <>
              <circle cx="60" cy="57" r="1.8" fill="#1E293B" />
              <polygon points="59,57 61,57 61.5,62 58.5,62" fill="#1E293B" />
            </>
          )}

          {/* Điểm sáng phản quang trên khóa */}
          <circle cx="55" cy="55" r="1" fill="#FFFFFF" opacity="0.85" />
        </g>
      </svg>

      {/* Hiệu ứng lấp lánh nhẹ */}
      <span className="absolute -top-1 -right-1 text-xs select-none pointer-events-none animate-pulse">
        {type === 'diamond' ? '✨' : type === 'gold' ? '⭐' : '🌟'}
      </span>
    </div>
  );
};
