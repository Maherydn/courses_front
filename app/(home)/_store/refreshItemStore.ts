// src/app/(main)/_store/listStore.ts
import { create } from "zustand";

interface refreshItemStoreState {
  refreshItem: boolean;
  setRefreshItem: () => void;
}

const refreshItemStore = create<refreshItemStoreState>((set, get) => ({
  refreshItem: false,
  setRefreshItem: () => set({ refreshItem: !get().refreshItem }),
}));

export default refreshItemStore;
