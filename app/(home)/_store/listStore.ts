// store/listStore.ts
import { create } from "zustand";

// type pour l'item
interface Item {
  id: number;
  name: string;
}

interface ItemStore {
  item: Item;
  setItem: (id: number, name: string) => void; 
}

const defaultItem: Item = {
  id: 0,
  name: "Valeur par défaut",
};

const listStore = create<ItemStore>((set) => ({
  item: defaultItem, 
  setItem: (id, name) => set({ item: { id, name } }),
}));

export default listStore;
