import { create } from "zustand";
import type { FilterGroupId } from "../types/FilterId";

interface MedViewStore {
  selectedfilterGroupId: FilterGroupId;
  selectFilterGroup: (filterGroupId: FilterGroupId) => void;
}

export const useMedViewStore = create<MedViewStore>((set) => ({
  selectedfilterGroupId: "none",
  selectFilterGroup: (filterGroupId) =>
    set({
      selectedfilterGroupId: filterGroupId,
    }),
}));
