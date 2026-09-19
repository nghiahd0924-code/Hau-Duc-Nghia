import React, { useState, useMemo } from 'react';
import { ArrowLeft, Package, Sparkles, Gift, BookOpen, BookMarked, Info, ChevronRight, X, Lock, Check } from 'lucide-react';
import { InventoryItem } from '../types';
import { INVENTORY_CATALOG, CatalogItem } from '../data/inventoryCatalogData';
import { GamificationState } from '../utils/gamification';
import {
  checkIsItemOwned,
  getOwnedCatalogItemIds,
  getAllCatalogItems,
} from '../utils/inventoryStorage';

interface InventoryPageProps {
  onBackToHome: () => void;
  items?: InventoryItem[];
  gamificationState?: GamificationState;
  onOpenShop?: () => void;
  onStartLearning?: () => void;
}

export const InventoryPage: React.FC<InventoryPageProps> = ({
  onBackToHome,
  items = [],
  gamificationState,
  onOpenShop,
  onStartLearning,
}) => {
  const [selectedCatalogItem, setSelectedCatalogItem] = useState<CatalogItem | null>(null);

  // Lấy danh sách ID đã sở hữu từ bộ nhớ cục bộ
  const locallyOwnedIds = useMemo(() => getOwnedCatalogItemIds(), [gamificationState]);
  const allCatalogItems = useMemo(() => getAllCatalogItems(), []);

  // Tổng hợp tất cả các vật phẩm mà học sinh thực tế đang sở hữu
  const allOwnedItems = useMemo(() => {
    const list: (InventoryItem & { imageUrl?: string })[] = [];

    // 1. Thêm từ props items
    if (items && items.length > 0) {
      items.forEach((it) => list.push(it));
    }

    // 2. Thêm từ gamificationState.unlockedRewards
    if (gamificationState?.unlockedRewards && gamificationState.unlockedRewards.length > 0) {
      gamificationState.unlockedRewards.forEach((rew) => {
        const alreadyExists = list.some(
          (ex) => ex.id === rew.id || ex.name.toLowerCase() === rew.name.toLowerCase()
        );
        if (!alreadyExists) {
          const matchedCatalog = allCatalogItems.find(
            (c) => rew.id.startsWith(c.id) || c.name.toLowerCase() === rew.name.toLowerCase()
          );
          list.push({
            id: rew.id,
            name: rew.name,
            type: rew.type === 'item' ? 'Vật phẩm' : rew.type === 'badge' ? 'Huy hiệu' : rew.type === 'title' ? 'Danh hiệu' : 'Chiến tích',
            icon: rew.icon,
            imageUrl: matchedCatalog?.imageUrl,
            rarity: matchedCatalog?.rarity || 'Đặc biệt',
            description: rew.description,
          });
        }
      });
    }

    // 3. Thêm từ danh sách ID catalog đã lưu trong localStorage
    locallyOwnedIds.forEach((id) => {
      const matched = allCatalogItems.find((c) => c.id === id);
      if (matched && !list.some((ex) => ex.id === matched.id || ex.name.toLowerCase() === matched.name.toLowerCase())) {
        list.push({
          id: matched.id,
          name: matched.name,
          type: matched.type,
          icon: matched.icon,
          imageUrl: matched.imageUrl,
          rarity: matched.rarity,
          description: matched.description || '',
        });
      }
    });

    return list;
  }, [items, gamificationState?.unlockedRewards, locallyOwnedIds, allCatalogItems]);

  const hasItems = allOwnedItems.length > 0;

  // Helper kiểm tra xem một vật phẩm trong mục lục có được sở hữu hay chưa
  const isItemOwned = (catalogItem: CatalogItem): boolean => {
    return checkIsItemOwned(
      catalogItem,
      items,
      gamificationState?.unlockedRewards,
      locallyOwnedIds
    );
  };

  // Thống kê số lượng vật phẩm đã sở hữu trên tổng số vật phẩm trong mục lục
  const totalCatalogCount = allCatalogItems.length;
  const ownedCatalogCount = useMemo(() => {
    return allCatalogItems.filter((item) => isItemOwned(item)).length;
  }, [allCatalogItems, items, gamificationState?.unlockedRewards, locallyOwnedIds]);

  const mythicalCategory = INVENTORY_CATALOG.mythical;
  const legendaryCategory = INVENTORY_CATALOG.legendary;
  const rareCategory = INVENTORY_CATALOG.rare;
  const commonCategory = INVENTORY_CATALOG.common;

  /**
   * Render thẻ vật phẩm trong mục lục:
   * - Nếu chưa có vật phẩm: XÁM MÀU (grayscale, opacity thấp, huy hiệu "🔒 Chưa sở hữu")
   * - Nếu đã có vật phẩm: ĐẦY ĐỦ MÀU SẮC rực rỡ, huy hiệu "✓ Đã sở hữu"
   */
  const renderCatalogCard = (
    item: CatalogItem,
    categoryType: 'mythical' | 'legendary' | 'rare' | 'common'
  ) => {
    const owned = isItemOwned(item);

    // Cấu hình màu sắc khi ĐÃ SỞ HỮU theo từng loại
    const categoryStyles = {
      mythical: {
        border: 'border-amber-200/90 hover:border-amber-400',
        text: 'group-hover:text-amber-700',
        effectBg: 'bg-amber-50/90 text-amber-900 border-amber-300',
        subtext: 'Mục Thần Thoại 🎒',
        footerLink: 'text-amber-600 group-hover:text-amber-800',
        rarityBadge: 'bg-amber-100 text-amber-900 border-amber-300',
        sparkleColor: 'text-amber-500',
      },
      legendary: {
        border: 'border-indigo-200 hover:border-indigo-400',
        text: 'group-hover:text-indigo-700',
        effectBg: 'bg-indigo-50 text-indigo-950 border-indigo-300',
        subtext: 'Mục Huyền Thoại 🎒',
        footerLink: 'text-indigo-600 group-hover:text-indigo-800',
        rarityBadge: 'bg-indigo-100 text-indigo-900 border-indigo-300',
        sparkleColor: 'text-indigo-500',
      },
      rare: {
        border: 'border-cyan-200/90 hover:border-cyan-400',
        text: 'group-hover:text-cyan-700',
        effectBg: 'bg-cyan-50/90 text-cyan-900 border-cyan-300',
        subtext: 'Mục Hiếm 💎',
        footerLink: 'text-cyan-600 group-hover:text-cyan-800',
        rarityBadge: 'bg-cyan-100 text-cyan-900 border-cyan-300',
        sparkleColor: 'text-cyan-500',
      },
      common: {
        border: 'border-slate-200/90 hover:border-slate-400',
        text: 'group-hover:text-slate-900',
        effectBg: 'bg-slate-100 text-slate-800 border-slate-300',
        subtext: 'Mục Bình Thường ⚙️',
        footerLink: 'text-slate-600 group-hover:text-slate-900',
        rarityBadge: 'bg-slate-100 text-slate-800 border-slate-300',
        sparkleColor: 'text-slate-400',
      },
    };

    const style = categoryStyles[categoryType];

    return (
      <div
        key={item.id}
        id={`catalog-item-${item.id}`}
        onClick={() => setSelectedCatalogItem(item)}
        className={`group cursor-pointer rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between ${
          owned
            ? `bg-white border-2 ${style.border} shadow-2xs hover:shadow-md`
            : 'bg-slate-100/75 border-2 border-slate-300/80 hover:border-slate-400 shadow-2xs hover:shadow-xs'
        }`}
      >
        <div>
          {/* VÙNG HÌNH ẢNH:
              - NẾU CHƯA CÓ: ÁP DỤNG BỘ LỌC XÁM (GRAYSCALE) + ĐỘ MỜ (OPACITY)
              - NẾU ĐÃ CÓ: GIỮ NGUYÊN MÀU SẮC GỐC RỰC RỠ */}
          <div
            className={`relative w-full h-44 sm:h-48 rounded-2xl p-3 mb-4 flex items-center justify-center overflow-hidden transition-all duration-300 ${
              owned
                ? 'bg-white border border-slate-200/80'
                : 'bg-slate-200/50 border border-dashed border-slate-300'
            }`}
          >
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                alt={item.name}
                referrerPolicy="no-referrer"
                className={`max-h-full max-w-full object-contain transition-all duration-300 ${
                  owned
                    ? 'mix-blend-multiply group-hover:scale-108'
                    : 'mix-blend-luminosity grayscale contrast-75 brightness-95 opacity-55 group-hover:opacity-75'
                }`}
              />
            ) : (
              <div
                className={`text-5xl transition-transform ${
                  owned ? 'group-hover:scale-110' : 'grayscale opacity-50'
                }`}
              >
                {item.icon}
              </div>
            )}

            {/* Nhãn loại bảo vật */}
            <div
              className={`absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border flex items-center gap-1.5 ${
                owned
                  ? 'bg-slate-100/95 text-slate-700 border-slate-200/70'
                  : 'bg-slate-200/90 text-slate-500 border-slate-300 grayscale'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.type}</span>
            </div>

            {/* HUY HIỆU TRẠNG THÁI: ĐÃ CÓ (MÀU XANH/VÀNG) VS CHƯA CÓ (MÀU XÁM 🔒) */}
            <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
              {owned ? (
                <div className="px-2 py-0.8 rounded-lg bg-emerald-100 text-emerald-800 text-[10px] font-black border border-emerald-300 flex items-center gap-1 shadow-2xs">
                  <Check className="w-3 h-3" />
                  <span>Đã sở hữu</span>
                </div>
              ) : (
                <div className="px-2 py-0.8 rounded-lg bg-slate-200 text-slate-600 text-[10px] font-bold border border-slate-300 flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>Chưa có</span>
                </div>
              )}
            </div>
          </div>

          {/* TÊN VẬT PHẨM & TÍNH NĂNG */}
          <div className="flex items-center justify-between gap-2">
            <h4
              className={`text-base sm:text-lg font-black transition-colors flex items-center gap-1.5 ${
                owned
                  ? `text-slate-800 ${style.text}`
                  : 'text-slate-500 group-hover:text-slate-700'
              }`}
            >
              <span>{item.name}</span>
              {owned ? (
                <Sparkles className={`w-4 h-4 ${style.sparkleColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
              ) : (
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-slate-200 text-slate-500">
                  🔒 Khóa
                </span>
              )}
            </h4>
          </div>

          {/* HIỂN THỊ HIỆU ỨNG ĐẶC BIỆT */}
          {item.effect && (
            <div
              className={`mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold ${
                owned
                  ? `${style.effectBg} shadow-2xs`
                  : 'bg-slate-200/80 text-slate-500 border border-slate-300'
              }`}
            >
              <span className="text-xs">{owned ? '⚡' : '🔒'}</span>
              <span>{item.effect}</span>
            </div>
          )}

          {/* MÔ TẢ VẬT PHẨM */}
          {item.description && (
            <p
              className={`text-xs sm:text-sm leading-relaxed mt-2 line-clamp-2 ${
                owned ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              {item.description}
            </p>
          )}
        </div>

        {/* CHÂN THẺ */}
        <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
          <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1">
            {owned ? (
              <span className="text-emerald-700 font-bold">✨ Đã có trong kho</span>
            ) : (
              <span>🔒 Chưa thu thập</span>
            )}
          </span>
          <span
            className={`text-xs font-bold flex items-center gap-1 ${
              owned ? style.footerLink : 'text-slate-500 group-hover:text-slate-700'
            }`}
          >
            <span>Chi tiết</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    );
  };

  return (
    <div id="inventory-page" className="space-y-8 animate-in fade-in duration-300 pb-12">
      {/* THANH ĐIỀU HƯỚNG TRÊN CÙNG */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/95 p-4 rounded-2xl border border-emerald-200/90 shadow-2xs">
        <button
          type="button"
          id="btn-back-to-home-from-inventory"
          onClick={onBackToHome}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-xs sm:text-sm font-bold transition-all cursor-pointer border border-slate-200 hover:border-emerald-300 self-start sm:self-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Quay lại Trang chủ 🏠</span>
        </button>

        <div className="flex items-center gap-2">
          {onOpenShop && (
            <button
              type="button"
              onClick={onOpenShop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-bold transition-all cursor-pointer shadow-2xs hover:scale-105"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Hòm Kho Báu 🗝️</span>
            </button>
          )}
        </div>
      </div>

      {/* BANNER TIÊU ĐỀ: KHO ĐỒ CỦA EM */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-100/90 via-[#f3f5fe] to-teal-50/80 border-2 border-indigo-200/90 p-6 sm:p-7 shadow-xs">
        <div className="absolute -top-3 -right-3 text-4xl opacity-20 pointer-events-none select-none">🎒</div>
        <div className="absolute bottom-2 right-12 text-3xl opacity-20 pointer-events-none select-none">✨</div>
        <div className="absolute top-1/2 right-28 text-2xl opacity-15 pointer-events-none select-none">💎</div>

        <div className="space-y-2 relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600/10 border border-indigo-300 text-indigo-800 text-xs font-bold">
            <Package className="w-3.5 h-3.5 text-indigo-700" />
            <span>Túi Đồ Cá Nhân</span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2.5">
            <span>Kho đồ của em</span>
            <span>🎒✨</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Bộ sưu tập các vật phẩm, trang bị, huy hiệu và báu vật tri thức mà em đã xuất sắc đạt được trên hành trình học Tiếng Anh.
          </p>
        </div>
      </div>

      {/* KHU VỰC HIỂN THỊ VẬT PHẨM ĐÃ SỞ HỮU */}
      {hasItems ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Vật phẩm đã sở hữu ({allOwnedItems.length})</span>
            </h2>
          </div>

          {/* Danh sách vật phẩm dạng thẻ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allOwnedItems.map((item) => (
              <div
                key={item.id}
                id={`inventory-item-${item.id}`}
                className="group rounded-2xl bg-white border-2 border-indigo-100 hover:border-indigo-400 p-4 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-2xs overflow-hidden">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="max-h-full max-w-full object-contain mix-blend-multiply"
                        />
                      ) : (
                        item.icon || '🎁'
                      )}
                    </div>
                    {item.rarity && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                        {item.rarity}
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-indigo-700 transition-colors">
                    {item.name}
                  </h3>

                  <div className="inline-block text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md mt-1 mb-2">
                    {item.type || 'Vật phẩm'}
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.obtainedDate && (
                  <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                    Thu thập: {item.obtainedDate}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* KHI CHƯA CÓ VẬT PHẨM NÀO TRONG KHO ĐỒ */
        <div
          id="inventory-empty-card"
          className="rounded-3xl bg-white/95 border-2 border-dashed border-emerald-300/80 p-8 sm:p-14 text-center shadow-xs flex flex-col items-center justify-center max-w-2xl mx-auto space-y-4"
        >
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 flex items-center justify-center text-4xl shadow-2xs">
            🎒
          </div>

          <div className="space-y-1.5 max-w-lg">
            <h3 className="text-base sm:text-lg font-black text-slate-800">
              Chưa có vật phẩm nào
            </h3>
            <p className="text-sm sm:text-base font-bold text-slate-700 leading-relaxed">
              Kho đồ của em đang trống. Hãy tiếp tục học bài để tích lũy EXP và mở Hòm Kho Báu nhé!
            </p>
          </div>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onBackToHome}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs sm:text-sm font-extrabold transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Quay lại học bài ngay 🚀</span>
            </button>

            {onOpenShop && (
              <button
                type="button"
                onClick={onOpenShop}
                className="px-5 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Gift className="w-4 h-4 text-amber-600" />
                <span>Xem Hòm Kho Báu 🗝️</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* ========================================================== */}
      {/* MỤC LỤC DƯỚI KHO ĐỒ */}
      {/* ========================================================== */}
      <div id="inventory-catalog-section" className="space-y-6 pt-6 border-t border-slate-200">
        {/* TIÊU ĐỀ MỤC LỤC & THANH TIẾN ĐỘ THU THẬP */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/80 p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-stone-800 text-amber-100 flex items-center justify-center shadow-xs text-lg shrink-0">
              <BookMarked className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight">
                  Mục lục kho đồ
                </h2>
                <span className="px-2.5 py-0.5 rounded-md bg-stone-100 text-stone-700 text-[11px] font-bold border border-stone-300">
                  Danh mục toàn bộ báu vật
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Vật phẩm chưa sở hữu sẽ hiển thị <strong className="text-slate-700 font-bold">xám màu</strong>. Em hãy mở rương để thắp sáng màu sắc nhé!
              </p>
            </div>
          </div>

          {/* TIẾN TRÌNH THU THẬP BÁU VẬT */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 min-w-[200px] space-y-1.5 self-stretch md:self-auto">
            <div className="flex items-center justify-between text-xs font-extrabold text-slate-700">
              <span>Đã sưu tập</span>
              <span className="text-emerald-700">
                {ownedCatalogCount} / {totalCatalogCount} vật phẩm
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-emerald-500 transition-all duration-500 rounded-full"
                style={{ width: `${Math.round((ownedCatalogCount / Math.max(totalCatalogCount, 1)) * 100)}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-400 flex items-center justify-between">
              <span>{totalCatalogCount - ownedCatalogCount > 0 ? `Còn ${totalCatalogCount - ownedCatalogCount} vật phẩm xám màu` : '🎉 Đã mở khóa trọn bộ!'}</span>
              <span>{Math.round((ownedCatalogCount / Math.max(totalCatalogCount, 1)) * 100)}%</span>
            </div>
          </div>
        </div>

        {/* 1. MỤC THẦN THOẠI */}
        <div
          id="catalog-mythical-section"
          className="rounded-3xl bg-gradient-to-br from-amber-50/80 via-purple-50/40 to-sky-50/60 border-2 border-amber-200/90 p-5 sm:p-7 shadow-sm space-y-6"
        >
          {/* Header Mục Thần Thoại */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-amber-200/70">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-black shadow-2xs">
                  {mythicalCategory.badge}
                </span>
                <span className="text-xs text-amber-800 font-bold bg-amber-100/80 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {mythicalCategory.items.length} Bảo vật đặc biệt
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-800 pt-1 flex items-center gap-2">
                <span>{mythicalCategory.title}</span>
                <span className="text-base">✨👑</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                {mythicalCategory.description}
              </p>
            </div>
          </div>

          {/* Danh sách bảo vật Mục Thần Thoại */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mythicalCategory.items.map((item) => renderCatalogCard(item, 'mythical'))}
          </div>
        </div>

        {/* 2. MỤC HUYỀN THOẠI - GỒM BỘ GIÁP HOÀNG GIA */}
        {legendaryCategory && (
          <div
            id="catalog-legendary-section"
            className="rounded-3xl bg-gradient-to-br from-slate-50 via-sky-50/40 to-indigo-50/50 border-2 border-indigo-200/90 p-5 sm:p-7 shadow-sm space-y-6"
          >
            {/* Header Mục Huyền Thoại */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-indigo-200/70">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black shadow-2xs">
                    {legendaryCategory.badge}
                  </span>
                  <span className="text-xs text-indigo-900 font-bold bg-indigo-100/90 px-2.5 py-0.5 rounded-full border border-indigo-200">
                    {legendaryCategory.items.length} Trang bị đặc biệt
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-800 pt-1 flex items-center gap-2">
                  <span>{legendaryCategory.title}</span>
                  <span className="text-base">🛡️⚔️👑</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  {legendaryCategory.description}
                </p>
              </div>
            </div>

            {/* Danh sách trang bị Mục Huyền Thoại */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {legendaryCategory.items.map((item) => renderCatalogCard(item, 'legendary'))}
            </div>
          </div>
        )}

        {/* 3. MỤC HIẾM - GỒM ĐÁ QUÝ, VÀNG, BẠC, KIM CƯƠNG */}
        {rareCategory && (
          <div
            id="catalog-rare-section"
            className="rounded-3xl bg-gradient-to-br from-amber-50/70 via-cyan-50/40 to-blue-50/60 border-2 border-cyan-300/80 p-5 sm:p-7 shadow-sm space-y-6"
          >
            {/* Header Mục Hiếm */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-cyan-200/70">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-black shadow-2xs">
                    {rareCategory.badge}
                  </span>
                  <span className="text-xs text-cyan-900 font-bold bg-cyan-100/90 px-2.5 py-0.5 rounded-full border border-cyan-200">
                    {rareCategory.items.length} Kho báu quý giá
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-800 pt-1 flex items-center gap-2">
                  <span>{rareCategory.title}</span>
                  <span className="text-base">💎🪙🥈💠</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  {rareCategory.description}
                </p>
              </div>
            </div>

            {/* Danh sách vật phẩm Mục Hiếm */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {rareCategory.items.map((item) => renderCatalogCard(item, 'rare'))}
            </div>
          </div>
        )}

        {/* 4. MỤC BÌNH THƯỜNG - GỒM PHẾ LIỆU, SẮT, ĐỒNG */}
        {commonCategory && (
          <div
            id="catalog-common-section"
            className="rounded-3xl bg-gradient-to-br from-slate-50 via-stone-50/70 to-zinc-100/80 border-2 border-slate-300/90 p-5 sm:p-7 shadow-sm space-y-6"
          >
            {/* Header Mục Bình Thường */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-slate-600 to-zinc-700 text-white text-xs font-black shadow-2xs">
                    {commonCategory.badge}
                  </span>
                  <span className="text-xs text-slate-700 font-bold bg-slate-200/90 px-2.5 py-0.5 rounded-full border border-slate-300">
                    {commonCategory.items.length} Vật liệu cơ bản
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-800 pt-1 flex items-center gap-2">
                  <span>{commonCategory.title}</span>
                  <span className="text-base">⚙️🪨🥉</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  {commonCategory.description}
                </p>
              </div>
            </div>

            {/* Danh sách vật phẩm Mục Bình Thường */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {commonCategory.items.map((item) => renderCatalogCard(item, 'common'))}
            </div>
          </div>
        )}
      </div>

      {/* MODAL CHI TIẾT HIỆN VẬT */}
      {selectedCatalogItem && (
        <div
          id="modal-catalog-item-detail"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedCatalogItem(null)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl bg-white border-2 border-amber-300 p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCatalogItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* HÌNH ẢNH TRONG MODAL: NẾU CHƯA CÓ THÌ CŨNG XÁM MÀU ĐỒNG NHẤT */}
            {(() => {
              const owned = isItemOwned(selectedCatalogItem);
              return (
                <>
                  <div
                    className={`relative w-full h-56 rounded-2xl p-4 flex items-center justify-center overflow-hidden transition-all ${
                      owned
                        ? 'bg-white border border-slate-200'
                        : 'bg-slate-100 border-2 border-dashed border-slate-300'
                    }`}
                  >
                    {selectedCatalogItem.imageUrl ? (
                      <img
                        src={selectedCatalogItem.imageUrl}
                        alt={selectedCatalogItem.name}
                        referrerPolicy="no-referrer"
                        className={`max-h-full max-w-full object-contain transition-all ${
                          owned
                            ? 'mix-blend-multiply'
                            : 'mix-blend-luminosity grayscale contrast-75 brightness-95 opacity-65'
                        }`}
                      />
                    ) : (
                      <div className={`text-6xl ${owned ? '' : 'grayscale opacity-50'}`}>
                        {selectedCatalogItem.icon}
                      </div>
                    )}

                    <div
                      className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-semibold border flex items-center gap-1.5 ${
                        owned
                          ? 'bg-slate-100/90 text-slate-700 border-slate-200'
                          : 'bg-slate-200/90 text-slate-500 border-slate-300 grayscale'
                      }`}
                    >
                      <span>{selectedCatalogItem.icon}</span>
                      <span>{selectedCatalogItem.type}</span>
                    </div>

                    <div className="absolute top-3 right-12">
                      {owned ? (
                        <div className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-300 flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" />
                          <span>Đã sở hữu</span>
                        </div>
                      ) : (
                        <div className="px-2.5 py-1 rounded-lg bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300 flex items-center gap-1">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Chưa có</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* THẺ TRẠNG THÁI HIỆN TẠI TRONG KHO ĐỒ */}
                  {owned ? (
                    <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex items-center gap-3 shadow-2xs">
                      <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-lg font-black shrink-0 shadow-xs">
                        ✓
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-black text-emerald-700 uppercase tracking-wider">
                          Trạng thái hiện tại
                        </div>
                        <div className="text-sm font-black text-emerald-900">
                          Đã có trong kho đồ ✨
                        </div>
                        <div className="text-[11px] text-emerald-700 mt-0.5">
                          Chúc mừng em đã xuất sắc thu thập được báu vật quý giá này!
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-300 text-slate-700 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-slate-300 text-slate-700 flex items-center justify-center text-lg font-bold shrink-0">
                        🔒
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
                          Trạng thái hiện tại
                        </div>
                        <div className="text-sm font-black text-slate-700">
                          Chưa sở hữu (Vật phẩm đang xám màu)
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                          Hãy hoàn thành bài học để tích lũy EXP và mở Hòm Kho Báu nhằm thắp sáng màu sắc báu vật này nhé!
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-1">
                    <h3
                      className={`text-xl font-black flex items-center gap-2 ${
                        owned ? 'text-slate-800' : 'text-slate-600'
                      }`}
                    >
                      <span>{selectedCatalogItem.name}</span>
                      <span>{owned ? '✨' : '🔒'}</span>
                    </h3>
                    <p className="text-xs text-amber-800 font-bold mt-0.5">
                      {selectedCatalogItem.type} • Cấp độ {selectedCatalogItem.rarity}
                    </p>
                  </div>

                  {selectedCatalogItem.effect && (
                    <div
                      className={`p-3.5 rounded-2xl border text-xs flex items-center gap-3 shadow-2xs ${
                        owned
                          ? 'bg-indigo-50/90 border-indigo-200 text-indigo-950'
                          : 'bg-slate-100 border-slate-300 text-slate-600'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl text-white flex items-center justify-center text-lg font-black shrink-0 shadow-xs ${
                          owned ? 'bg-indigo-600' : 'bg-slate-400'
                        }`}
                      >
                        {owned ? '⚡' : '🔒'}
                      </div>
                      <div>
                        <div
                          className={`text-[11px] font-extrabold uppercase tracking-wider ${
                            owned ? 'text-indigo-700' : 'text-slate-500'
                          }`}
                        >
                          Tính năng đặc biệt
                        </div>
                        <div
                          className={`text-sm font-black ${
                            owned ? 'text-indigo-950' : 'text-slate-700'
                          }`}
                        >
                          {selectedCatalogItem.effect}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedCatalogItem.description && (
                    <div className="space-y-2 pt-1 border-t border-slate-100">
                      <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5 text-amber-600" />
                        <span>Giới thiệu về bảo vật</span>
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-amber-50/40 p-3.5 rounded-2xl border border-amber-100">
                        {selectedCatalogItem.description}
                      </p>
                    </div>
                  )}

                  {selectedCatalogItem.lore && (
                    <div className="p-3.5 rounded-2xl bg-amber-100/60 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                      <div className="font-black text-amber-900 mb-1 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>Ý nghĩa học tập:</span>
                      </div>
                      {selectedCatalogItem.lore}
                    </div>
                  )}
                </>
              );
            })()}

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSelectedCatalogItem(null)}
                className="w-full py-3 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm transition-all cursor-pointer shadow-xs active:scale-98"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
