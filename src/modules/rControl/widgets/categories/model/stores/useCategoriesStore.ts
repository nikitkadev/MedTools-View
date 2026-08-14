import { create } from "zustand";
import type { CategoryId } from "../../ui/CategoryRender/CategoryRender";

interface CategoriesStore {
  targetCategory: CategoryId;
  setTargetCategory: (targetCategory: CategoryId) => void;
}

export const useCategoriesStore = create<CategoriesStore>((set) => ({
  targetCategory: "default",
  setTargetCategory: (targetCategory) =>
    set({
      targetCategory: targetCategory,
    }),
}));
