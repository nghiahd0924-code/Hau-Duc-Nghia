import { CatalogItem, INVENTORY_CATALOG } from '../data/inventoryCatalogData';
import { ChestReward } from './gamification';
import { InventoryItem } from '../types';

const OWNED_ITEMS_STORAGE_KEY = 'engjourney_owned_catalog_items_v1';

/**
 * Lấy danh sách ID các vật phẩm trong mục lục mà học sinh đã sở hữu
 */
export const getOwnedCatalogItemIds = (): string[] => {
  try {
    const raw = localStorage.getItem(OWNED_ITEMS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.warn('Lỗi đọc danh sách vật phẩm đã sở hữu:', e);
    return [];
  }
};

/**
 * Lưu danh sách ID các vật phẩm đã sở hữu
 */
export const saveOwnedCatalogItemIds = (ids: string[]): void => {
  try {
    const uniqueIds = Array.from(new Set(ids));
    localStorage.setItem(OWNED_ITEMS_STORAGE_KEY, JSON.stringify(uniqueIds));
  } catch (e) {
    console.warn('Lỗi lưu danh sách vật phẩm đã sở hữu:', e);
  }
};

/**
 * Thêm một vật phẩm mục lục vào kho đồ đã sở hữu
 */
export const addOwnedCatalogItem = (itemId: string): void => {
  const current = getOwnedCatalogItemIds();
  if (!current.includes(itemId)) {
    saveOwnedCatalogItemIds([...current, itemId]);
  }
};

/**
 * Chuẩn hóa chuỗi để so sánh tên vật phẩm không phân biệt hoa thường và dấu cách
 */
const normalizeText = (text?: string): string => {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '')
    .trim();
};

/**
 * Kiểm tra xem một vật phẩm trong mục lục có đang được học sinh sở hữu hay không
 * Dựa trên:
 * 1. Danh sách ID lưu trong localStorage (OWNED_ITEMS_STORAGE_KEY)
 * 2. Mảng items truyền từ props
 * 3. Mảng unlockedRewards từ GamificationState (khi mở hòm)
 */
export const checkIsItemOwned = (
  catalogItem: CatalogItem,
  userItems?: InventoryItem[],
  unlockedRewards?: ChestReward[],
  locallyOwnedIds?: string[]
): boolean => {
  const ownedIds = locallyOwnedIds || getOwnedCatalogItemIds();
  const targetId = catalogItem.id;
  const targetNormName = normalizeText(catalogItem.name);

  // 1. Kiểm tra theo ID lưu trữ
  if (ownedIds.includes(targetId)) {
    return true;
  }

  // 2. Kiểm tra trong danh sách userItems
  if (userItems && userItems.length > 0) {
    const foundInUserItems = userItems.some(
      (item) => item.id === targetId || normalizeText(item.name) === targetNormName
    );
    if (foundInUserItems) return true;
  }

  // 3. Kiểm tra trong danh sách phần thưởng mở hòm (unlockedRewards)
  if (unlockedRewards && unlockedRewards.length > 0) {
    const foundInRewards = unlockedRewards.some((reward) => {
      if (reward.id === targetId || reward.id.startsWith(`${targetId}_`)) return true;
      const rewardNormName = normalizeText(reward.name);
      return (
        rewardNormName === targetNormName ||
        rewardNormName.includes(targetNormName) ||
        targetNormName.includes(rewardNormName)
      );
    });
    if (foundInRewards) return true;
  }

  return false;
};

/**
 * Lấy tất cả vật phẩm trong mục lục dưới dạng phẳng
 */
export const getAllCatalogItems = (): CatalogItem[] => {
  const all: CatalogItem[] = [];
  Object.values(INVENTORY_CATALOG).forEach((category) => {
    all.push(...category.items);
  });
  return all;
};
