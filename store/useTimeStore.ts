import { create } from "zustand";

interface TimeStore {
  times: string[];
  addTime: (time: string) => void;
  removeTime: (time: string) => void;
}

const useTimeStore = create<TimeStore>((set) => ({
  times: ["09:00", "12:00", "15:00"], // Boshlang‘ich vaqtlar
  addTime: (time) => set((state) => ({ times: [...state.times, time].sort() })), // Qo‘shish
  removeTime: (time) =>
    set((state) => ({ times: state.times.filter((t) => t !== time) })), // O‘chirish
}));

export default useTimeStore;
