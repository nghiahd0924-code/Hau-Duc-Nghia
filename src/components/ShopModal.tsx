import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Zap,
  Flame,
  Lock,
  Gift,
  CheckCircle2,
  Trophy,
  Award,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import {
  ChestType,
  CHESTS_CONFIG,
  GamificationState,
  purchaseChest,
  ChestReward,
} from '../utils/gamification';
import { TreasureChestGraphic } from './TreasureChestGraphic';

interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  gamificationState: GamificationState;
  onStateUpdate: (newState: GamificationState) => void;
}

export const ShopModal: React.FC<ShopModalProps> = ({
  isOpen,
  onClose,
  gamificationState,
  onStateUpdate,
}) => {
  const [openingChest, setOpeningChest] = useState<ChestType | null>(null);
  const [revealedReward, setRevealedReward] = useState<{
    chestType: ChestType;
    chestName: string;
    reward: ChestReward;
  } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'shop' | 'inventory'>('shop');

  if (!isOpen) return null;

  const handleOpenChest = (chestType: ChestType) => {
    const chest = CHESTS_CONFIG[chestType];
    if (gamificationState.exp < chest.requiredExp) {
      setToastMessage(`Em còn thiếu ${(chest.requiredExp - gamificationState.exp).toLocaleString()} EXP để mở ${chest.nameVi}!`);
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    // Animation mở hòm kho báu
    setOpeningChest(chestType);

    setTimeout(() => {
      const result = purchaseChest(chestType);
      setOpeningChest(null);

      if (result.success && result.reward) {
        setRevealedReward({
          chestType,
          chestName: chest.nameVi,
          reward: result.reward,
        });
        // Cập nhật lại state
        onStateUpdate({
          ...gamificationState,
          exp: result.remainingExp,
          openedChestsCount: {
            ...gamificationState.openedChestsCount,
            [chestType]: (gamificationState.openedChestsCount[chestType] || 0) + 1,
          },
          unlockedRewards: [result.reward, ...gamificationState.unlockedRewards],
        });
      } else {
        setToastMessage(result.message);
        setTimeout(() => setToastMessage(null), 3000);
      }
    }, 1100);
  };

  const chestKeys: ChestType[] = ['bronze', 'silver', 'gold', 'diamond'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border border-emerald-200/90 max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* HEADER CỬA HÀNG */}
        <div className="p-4 sm:p-5 border-b border-emerald-100 bg-gradient-to-r from-emerald-50 via-[#f0fbf5] to-teal-50 flex items-center justify-between gap-3 relative">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-xs shrink-0 p-1">
              <TreasureChestGraphic type="gold" size="sm" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-slate-800">
                  Cửa Hàng Hòm Kho Báu
                </h2>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300/80">
                  Shop EXP ✨
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Tích lũy kinh nghiệm từ các bài học để mở các hòm kho báu quý giá (Đồng, Bạc, Vàng, Kim Cương)!
              </p>
            </div>
          </div>

          {/* Dấu X đóng modal */}
          <button
            type="button"
            id="btn-close-shop-modal"
            onClick={onClose}
            title="Đóng Cửa Hàng"
            className="w-9 h-9 rounded-full bg-white hover:bg-rose-50 text-slate-500 hover:text-rose-600 border border-slate-200 flex items-center justify-center cursor-pointer transition-all hover:scale-105 shrink-0 shadow-2xs"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* BARS CHỈ SỐ: EXP HIỆN CÓ & CHUỖI HIỆN TẠI */}
        <div className="px-4 py-3 bg-emerald-900 text-white flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-4 flex-wrap">
            {/* Kinh nghiệm */}
            <div className="flex items-center gap-2 bg-emerald-800/80 px-3 py-1.5 rounded-xl border border-emerald-700">
              <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span>
                Kinh nghiệm: <strong className="text-amber-300 text-sm sm:text-base font-extrabold">{gamificationState.exp.toLocaleString()} EXP</strong>
              </span>
            </div>

            {/* Chuỗi hiện tại */}
            <div className="flex items-center gap-2 bg-emerald-800/80 px-3 py-1.5 rounded-xl border border-emerald-700">
              <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
              <span>
                Chuỗi: <strong className="text-orange-300 text-sm sm:text-base font-extrabold">{gamificationState.currentStreak}</strong>
                {gamificationState.currentStreak > 0 && (
                  <span className="ml-1 text-[11px] text-emerald-200 font-semibold">
                    (+{gamificationState.currentStreak * 5}% EXP/bài)
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* Nút chuyển tab Shop vs Kho đồ */}
          <div className="flex items-center gap-1 bg-emerald-950/60 p-1 rounded-xl border border-emerald-800">
            <button
              type="button"
              onClick={() => setActiveTab('shop')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'shop'
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'text-emerald-200 hover:text-white'
              }`}
            >
              🏴‍☠️ Hòm Kho Báu
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('inventory')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                activeTab === 'inventory'
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'text-emerald-200 hover:text-white'
              }`}
            >
              <span>🎒 Kho Báu</span>
              {gamificationState.unlockedRewards.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-900 text-[10px] font-black">
                  {gamificationState.unlockedRewards.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* TOAST THÔNG BÁO NHANH */}
        {toastMessage && (
          <div className="mx-4 mt-3 p-2.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold flex items-center justify-between animate-in fade-in">
            <span className="flex items-center gap-1.5">
              <span>⚠️</span>
              <span>{toastMessage}</span>
            </span>
            <button
              type="button"
              onClick={() => setToastMessage(null)}
              className="text-amber-700 hover:text-amber-900 text-xs cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* NỘI DUNG CUỘN */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {activeTab === 'shop' ? (
            <>
              {/* Giới thiệu quy tắc */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong>💡 Cách tích lũy kinh nghiệm:</strong> Hoàn thành 1 bài học nhận ngay <strong>+50 EXP</strong>. Mỗi bài học đúng toàn bộ nhận thêm <strong>+1 Chuỗi (+5% EXP)</strong>. Nếu làm sai, chuỗi quay về 0. Hãy nỗ lực giữ chuỗi cao để mở khóa các Hòm Kho Báu thần kỳ!
                </div>
              </div>

              {/* GRID 4 HÒM KHO BÁU */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {chestKeys.map((key) => {
                  const chest = CHESTS_CONFIG[key];
                  const canAfford = gamificationState.exp >= chest.requiredExp;
                  const progressPercent = Math.min(
                    100,
                    Math.round((gamificationState.exp / chest.requiredExp) * 100)
                  );
                  const isOpening = openingChest === key;
                  const openedCount = gamificationState.openedChestsCount[key] || 0;

                  return (
                    <div
                      key={chest.id}
                      className={`rounded-2xl border p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br ${chest.bgGradient} ${chest.borderColor} ${chest.shadowColor} ${
                        canAfford ? 'shadow-md ring-1 ring-emerald-300/50' : 'opacity-90'
                      }`}
                    >
                      {/* Badge EXP */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[11px] font-black px-2.5 py-1 rounded-full border shadow-2xs ${chest.badgeColor} flex items-center gap-1.5`}>
                          <span>🗝️</span>
                          <span>{chest.nameVi.toUpperCase()}</span>
                        </span>

                        <div className="flex items-center gap-1 text-xs font-black text-slate-800 bg-white/90 px-2.5 py-1 rounded-xl border border-slate-200/80 shadow-2xs">
                          <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          <span>{chest.requiredExp.toLocaleString()} EXP</span>
                        </div>
                      </div>

                      {/* Graphic Hòm Kho Báu chân thực & Tên */}
                      <div className="text-center py-2.5 my-auto flex flex-col items-center">
                        <div
                          className={`transition-transform duration-300 ${
                            isOpening ? 'scale-110' : 'hover:scale-105'
                          }`}
                        >
                          <TreasureChestGraphic
                            type={chest.id}
                            isOpening={isOpening}
                            isOpen={false}
                            size="lg"
                          />
                        </div>
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-2">
                          {chest.nameVi}
                        </h3>
                        <p className="text-[11px] text-slate-600 mt-0.5 line-clamp-1">
                          {chest.tagline}
                        </p>
                        {openedCount > 0 && (
                          <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full mt-1.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>Đã mở: {openedCount} lần</span>
                          </div>
                        )}
                      </div>

                      {/* Thanh tiến độ EXP */}
                      <div className="space-y-1.5 mt-2 pt-3 border-t border-slate-200/60">
                        <div className="flex justify-between text-[11px] font-semibold text-slate-600">
                          <span>Tiến độ mở hòm</span>
                          <span>
                            {gamificationState.exp.toLocaleString()} / {chest.requiredExp.toLocaleString()} EXP ({progressPercent}%)
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-200/80 overflow-hidden">
                          <div
                            className={`h-full transition-all duration-500 rounded-full ${
                              canAfford
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                                : 'bg-gradient-to-r from-amber-400 to-amber-500'
                            }`}
                            style={{ width: `${progressPercent}%` }}
                          />
                        </div>

                        {/* Nút hành động Mở hòm kho báu */}
                        <div className="pt-2">
                          {canAfford ? (
                            <button
                              type="button"
                              id={`btn-open-chest-${chest.id}`}
                              disabled={isOpening}
                              onClick={() => handleOpenChest(chest.id)}
                              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-yellow-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs hover:shadow-md cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                              <Gift className="w-4 h-4" />
                              <span>{isOpening ? 'Đang mở hòm kho báu...' : `MỞ HÒM KHO BÁU 🗝️`}</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => {
                                setToastMessage(`Cần thêm ${(chest.requiredExp - gamificationState.exp).toLocaleString()} EXP nữa để mở ${chest.nameVi}! Hãy hoàn thành thêm bài học nhé.`);
                                setTimeout(() => setToastMessage(null), 3000);
                              }}
                              className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors border border-slate-200"
                            >
                              <Lock className="w-3.5 h-3.5" />
                              <span>Cần thêm {(chest.requiredExp - gamificationState.exp).toLocaleString()} EXP</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            /* TAB KHO ĐỒ / BỘ SƯU TẬP */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-800">
                    Huy Hiệu & Vật Phẩm Đã Nhận
                  </h3>
                  <p className="text-xs text-slate-500">
                    Bộ sưu tập các phần thưởng nhận được khi mở các Rương Đồng, Bạc, Vàng và Kim Cương.
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200">
                  Tổng: {gamificationState.unlockedRewards.length} phần thưởng
                </span>
              </div>

              {gamificationState.unlockedRewards.length === 0 ? (
                <div className="text-center py-12 px-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50/60">
                  <div className="text-4xl mb-2">🎁</div>
                  <h4 className="text-sm font-bold text-slate-700">Kho báu đang chờ em khám phá!</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    Em chưa mở rương nào. Hãy hoàn thành các bài học để tích lũy đủ 500 EXP và mở chiếc Rương Đồng đầu tiên nhé!
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('shop')}
                    className="mt-4 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                  >
                    Xem Cửa Hàng Rương 🛍️
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {gamificationState.unlockedRewards.map((reward, index) => (
                    <div
                      key={reward.id || index}
                      className="p-3.5 rounded-2xl border border-emerald-100 bg-emerald-50/40 hover:bg-emerald-50/80 transition-colors flex items-start gap-3 shadow-2xs"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-2xl flex items-center justify-center border border-emerald-200 shadow-2xs shrink-0">
                        {reward.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-800 line-clamp-1">
                          {reward.name}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                          {reward.description}
                        </div>
                        <span className="inline-block mt-1.5 text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded bg-white text-emerald-800 border border-emerald-200">
                          {reward.type === 'badge' ? 'Huy Hiệu' : reward.type === 'title' ? 'Danh Hiệu' : 'Vật Phẩm'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="p-3 sm:p-4 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Kinh nghiệm & Chuỗi được lưu tự động trên thiết bị của em.</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold transition-all cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>

      {/* MODAL BẬT MỞ PHẦN THƯỞNG KHI MỞ HÒM KHO BÁU THÀNH CÔNG */}
      {revealedReward && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl border border-amber-300 max-w-sm w-full p-6 text-center shadow-2xl relative animate-in zoom-in-90 duration-300 overflow-hidden">
            <div className="text-3xl mb-1">🎉✨</div>
            <div className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full inline-block border border-amber-300 shadow-2xs">
              MỞ THÀNH CÔNG {revealedReward.chestName.toUpperCase()}
            </div>

            {/* Khung kho báu mở nắp & phần thưởng */}
            <div className="my-4 p-4 rounded-2xl bg-gradient-to-b from-amber-50/80 via-yellow-50/60 to-amber-100/50 border border-amber-200 relative flex flex-col items-center">
              {/* Graphic Hòm Kho Báu Mở Nắp Tỏa Sáng */}
              <div className="mb-2">
                <TreasureChestGraphic
                  type={revealedReward.chestType}
                  isOpen={true}
                  size="lg"
                />
              </div>

              {/* Phần thưởng nổi bật nhận được */}
              <div className="bg-white/95 backdrop-blur-xs w-full p-3 rounded-xl border border-amber-300 shadow-xs flex items-center gap-3 text-left">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-3xl flex items-center justify-center shrink-0 shadow-2xs">
                  {revealedReward.reward.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-black text-slate-900 line-clamp-1">
                    {revealedReward.reward.name}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5 leading-tight">
                    {revealedReward.reward.description}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setRevealedReward(null);
                setActiveTab('inventory');
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-yellow-600 text-white font-extrabold text-xs sm:text-sm cursor-pointer shadow-xs transition-transform hover:scale-105"
            >
              Cất vào Kho Báu & Xem Thêm 🎒
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
