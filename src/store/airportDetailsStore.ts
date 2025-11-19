import { create } from "zustand";

export const useAirportDetailsStore = create((set) => ({
  airport: null,
  loading: false,
  error: null,

  fetchAirportById: async (id) => {
    set({ loading: true, error: null });

    try {
      const res = await fetch(
        `http://api.aviationstack.com/v1/airports?access_key=${process.env.NEXT_PUBLIC_AVIATION_KEY}`
      );
      const data = await res.json();
      const airportFound = data.data.find(airport => airport.id === id);
  
      set({ airport: airportFound || null });
    } catch (e) {
      set({ error: "No se pudo cargar el aeropuerto" });
    } finally {
      set({ loading: false });
    }
  },
}));


