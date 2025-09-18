import { api } from "@/app/_lib/axios";

export const fetchLists = async (month: number, year:number) => {
  const { data } = await api.get(`/purchase-lists/filter?month=${month}&year=${year}`);
  return data;
};

// ⚡ Créer une nouvelle liste
export const createList = async (title: string) => {
  const { data } = await api.post(`/purchase-lists`, {title});
  return data;
};

// ⚡ Mettre à jour une liste existante
export const updateList = async (id: number, title: string) => {
  const { data } = await api.put(`/purchase-lists/${id}`, {title});
  return data;
};