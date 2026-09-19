import React, { useMemo } from 'react';

interface Particle {
  id: number;
  x: number; // percentage 0 - 100
  y: number; // percentage 0 - 100
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
  type: 'dot' | 'sparkle' | 'star' | 'diamond';
  glowSize: number;
}

export const MysticParticlesBackground: React.FC = () => {
  // Tạo danh sách các hạt li ti với tọa độ và hiệu ứng chuyển động nhẹ ngẫu nhiên nhưng ổn định
  const particles: Particle[] = useMemo(() => {
    const list: Particle[] = [];
    const colors = [
      'rgba(56, 189, 248, 0.85)',  // cyan sáng
      'rgba(125, 211, 252, 0.9)',  // xanh da trời nhạt
      'rgba(165, 180, 252, 0.8)',  // tím lam huyền bí
      'rgba(34, 211, 238, 0.85)',  // ngọc lam huyền ảo
      'rgba(253, 224, 71, 0.75)',  // ánh vàng tinh tú li ti
      'rgba(240, 249, 255, 0.95)', // ánh sao bạc
    ];

    const types: ('dot' | 'sparkle' | 'star' | 'diamond')[] = [
      'dot', 'dot', 'dot', 'sparkle', 'star', 'diamond'
    ];

    // Tạo 48 hạt li ti huyền ảo phân bổ đều khắp không gian
    for (let i = 0; i < 48; i++) {
      const type = types[i % types.length];
      const isDot = type === 'dot';
      const size = isDot ? 1.5 + (i % 3) * 0.8 : 8 + (i % 4) * 2;
      
      list.push({
        id: i,
        x: (i * 2.1 + (i % 7) * 9.3) % 98 + 1,
        y: (i * 2.3 + (i % 5) * 17.1) % 98 + 1,
        size,
        opacity: 0.35 + ((i % 5) * 0.12),
        duration: 9 + (i % 8) * 2.5, // 9s - 26.5s trôi chậm êm dịu
        delay: (i % 12) * 0.8,
        color: colors[i % colors.length],
        type,
        glowSize: isDot ? 4 + (i % 3) * 3 : 6,
      });
    }

    return list;
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden"
    >
      {/* 1. LỚP NỀN XANH BÍ ẨN ĐA TẦNG (MYSTERIOUS DEEP BLUE GRADIENT) */}
      <div className="absolute inset-0 bg-[#050b1a] bg-gradient-to-b from-[#040816] via-[#07132a] to-[#04091a]" />

      {/* 2. CÁC QUẦNG SÁNG HUYỀN ẢO DỊU MẮT (AURORA & NEBULA GLOWS) */}
      <div
        className="mystic-pulse absolute -top-24 -left-20 w-[550px] h-[550px] rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(14, 116, 144, 0.45) 0%, rgba(6, 78, 114, 0.15) 50%, transparent 75%)',
        }}
      />
      <div
        className="mystic-pulse absolute top-1/3 -right-28 w-[600px] h-[600px] rounded-full blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(67, 56, 202, 0.35) 0%, rgba(30, 27, 75, 0.12) 55%, transparent 75%)',
          animationDelay: '-4s',
        }}
      />
      <div
        className="mystic-pulse absolute -bottom-24 left-1/4 w-[650px] h-[650px] rounded-full blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(3, 105, 161, 0.4) 0%, rgba(12, 74, 110, 0.15) 50%, transparent 75%)',
          animationDelay: '-7s',
        }}
      />

      {/* 3. LƯỚI ĐIỂM TINH THỂ MỜ ẢO (SUBTLE CELESTIAL MESH) */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '42px 42px',
        }}
      />

      {/* 4. TẬP HỢP CÁC HỌA TIẾT LI TI CÓ CHUYỂN ĐỘNG NHẸ (FLOATING & TWINKLING PARTICLES) */}
      {particles.map((p) => {
        const isDot = p.type === 'dot';

        return (
          <div
            key={p.id}
            className="mystic-particle absolute flex items-center justify-center"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `-${p.delay}s`,
            }}
          >
            {isDot ? (
              // Hạt điểm sáng li ti phát quang
              <span
                className="mystic-twinkle rounded-full inline-block"
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  backgroundColor: p.color,
                  boxShadow: `0 0 ${p.glowSize}px ${p.color}`,
                  opacity: p.opacity,
                  animationDuration: `${3.5 + (p.id % 4)}s`,
                  animationDelay: `-${(p.id % 5) * 0.7}s`,
                }}
              />
            ) : p.type === 'sparkle' ? (
              // Họa tiết ánh sao ✦ li ti xoay nhẹ
              <span
                className="mystic-twinkle select-none inline-block font-serif text-[10px] leading-none"
                style={{
                  color: p.color,
                  textShadow: `0 0 ${p.glowSize}px ${p.color}`,
                  opacity: p.opacity * 0.9,
                  animationDuration: `${4 + (p.id % 3)}s`,
                  animationDelay: `-${(p.id % 4) * 0.9}s`,
                }}
              >
                ✦
              </span>
            ) : p.type === 'star' ? (
              // Họa tiết ngôi sao nhỏ ⋆ lấp lánh
              <span
                className="mystic-twinkle select-none inline-block leading-none text-[9px]"
                style={{
                  color: p.color,
                  textShadow: `0 0 ${p.glowSize}px ${p.color}`,
                  opacity: p.opacity * 0.85,
                  animationDuration: `${5 + (p.id % 3)}s`,
                }}
              >
                ⋆
              </span>
            ) : (
              // Họa tiết kim cương tinh thể ✧
              <span
                className="mystic-twinkle select-none inline-block leading-none text-[10px]"
                style={{
                  color: p.color,
                  textShadow: `0 0 ${p.glowSize}px ${p.color}`,
                  opacity: p.opacity * 0.85,
                  animationDuration: `${4.5 + (p.id % 4)}s`,
                }}
              >
                ✧
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};
