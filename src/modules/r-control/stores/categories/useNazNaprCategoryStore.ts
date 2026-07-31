import { create } from "zustand";
import type { Direction, Purpose } from "../../types/categories/NazNapr/NazNaprQueryResult";

interface NazNaprCategoryStore {
    purposes: Purpose[];
    directions: Direction[];

    setPurposes: (entities: Purpose[]) => void;
    setDirections: (entities: Direction[]) => void;
}

export const useNazNaprCategoryStore = create<NazNaprCategoryStore>((set) => ({
    purposes: [],
    directions: [],

    setPurposes: (entities) => set({
        purposes: entities
    }),

    setDirections: (entities) => set({
        directions: entities
    })
    
}))