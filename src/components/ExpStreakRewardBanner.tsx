import React from 'react';
import { Flame, Zap, Gift, AlertCircle, Sparkles, ArrowRight } from 'lucide-react';
import { LessonExpResult } from '../utils/gamification';

interface ExpStreakRewardBannerProps {
  expResult: LessonExpResult;
  onOpenShop: () => void;
}

export const ExpStreakRewardBanner: React.FC<ExpStreakRewardBannerProps> = ({
  expResult,
  onOpenShop,
}) => {
  const isStreakSuccess = expResult.newStreak > 0;

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 shadow-xs transition-all animate-in zoom-in-95 duration-200 ${
        isStreakSuccess
          ? 'bg-gradient-to-br from-emerald-500/10 via-amber-500/10 to-teal-500/10 border-emerald-300'
          : 'bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-slate-100 border-amber-300'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-2xs ${
              isStreakSuccess
                ? 'bg-gradient-to-br from-orange-400 to-amber-500 text-white'
                : 'bg-amber-100 text-amber-700'
            }`}
          >
            {isStreakSuccess ? '🔥' : '⚡'}
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              {isStreakSuccess ? (
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-300/80 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                  <span>CHUỖI +1! (HIỆN TẠI: {expResult.newStreak} BÀI LIÊN TIẾP)</span>
                </span>
              ) : (
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-300/80 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                  <span>CHUỖI ĐÃ QUAY LẠI 0 (DO CÓ CÂU LÀM CHƯA ĐÚNG)</span>
                </span>
              )}

              <span className="text-xs font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-200">
                +{expResult.totalExpAdded} EXP nhận được
              </span>
            </div>

            <div className="mt-1.5 text-sm font-extrabold text-slate-800">
              {isStreakSuccess ? (
                <span className="flex items-center gap-1.5 flex-wrap">
                  <span>Tuyệt vời! Em hoàn thành xuất sắc:</span>
                  <span className="text-emerald-700">+{expResult.baseExp} EXP cơ bản</span>
                  {expResult.bonusExp > 0 && (
                    <span className="text-orange-600">
                      + {expResult.bonusExp} EXP thưởng chuỗi (+{expResult.bonusPercent}%)
                    </span>
                  )}
                </span>
              ) : (
                <span className="text-slate-700">
                  Em nhận được <strong className="text-emerald-700">+{expResult.baseExp} EXP</strong> khi hoàn thành bài học. Hãy xem kỹ lời giải bên dưới để lấy lại chuỗi ở bài sau nhé!
                </span>
              )}
            </div>

            <p className="text-xs text-slate-500 mt-0.5">
              Tổng kinh nghiệm hiện có của em: <strong className="text-slate-800 font-black">{expResult.newExp.toLocaleString()} EXP</strong>. Dùng EXP để mở các Hòm Kho Báu quý giá trong Shop!
            </p>
          </div>
        </div>

        {/* Nút vào Cửa Hàng Hòm Kho Báu */}
        <button
          type="button"
          onClick={onOpenShop}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-2xs hover:shadow-xs transition-transform hover:scale-105 cursor-pointer shrink-0"
        >
          <Gift className="w-4 h-4" />
          <span>Hòm Kho Báu 🗝️</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
