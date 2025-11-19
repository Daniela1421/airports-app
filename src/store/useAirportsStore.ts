import { create } from "zustand";

export const useAirportsStore = create((set) => ({
  airports: [],
  search: "",
  page: 1,

  setAirports: (airports) => set({ airports }),
  setSearch: (search) => set({ search }),
  setPage: (page) => set({ page }),
}));

