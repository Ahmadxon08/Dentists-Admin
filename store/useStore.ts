import { create } from "zustand";

interface StoreState {
  isDarkMode: boolean;
  isMenuOpen: boolean;
  isOpenModal: boolean;
  isAuthenticated: boolean;
  isSidebarOpenMenu: boolean;

  toggleMenu: () => void;
  toggleSidebar: () => void;
  toggleModal: () => void;
  logOut: () => void;
  toggleDarkMode: () => void;

  setIsDarkMode: (mode: boolean) => void;
  setSidebarOpen: (isOpen: boolean) => void;
  setModal: (isOpen: boolean) => void;

  imageSrc: string;
  setImageSrc: (image: string) => void;
  initializeImage: () => void; // Faqat `initializeImage`ni qoldiramiz

  selectedDate: string;
  selectedTime: string;
  setSelectedDate: (date: string) => void;
  setSelectedTime: (time: string) => void;

  reservedTimes: string[]; // Band bo'lgan vaqtlar
  addReservedTime: (dateTime: string) => void;
}

const useStore = create<StoreState>((set) => ({
  isDarkMode: false,
  isMenuOpen: true,
  isOpenModal: false,
  isAuthenticated: true,
  isSidebarOpenMenu: false,

  selectedDate: "",
  selectedTime: "",
  reservedTimes: ["2025-01-01 14:00", "2025-01-02 10:00"],

  // 🔹 **Funksiyalar to'g'ri joylashgan**
  setSelectedDate: (date) => set({ selectedDate: date }),
  setSelectedTime: (time) => set({ selectedTime: time }),

  addReservedTime: (dateTime) =>
    set((state) => ({ reservedTimes: [...state.reservedTimes, dateTime] })),

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpenMenu: !state.isSidebarOpenMenu })),

  setIsDarkMode: (mode) => set({ isDarkMode: mode }),
  setSidebarOpen: (isOpen) => set({ isSidebarOpenMenu: isOpen }),
  setModal: (isOpen) => set({ isOpenModal: isOpen }),
  toggleModal: () => set((state) => ({ isOpenModal: !state.isOpenModal })),

  toggleDarkMode: () =>
    set((state) => {
      const newTheme = !state.isDarkMode ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { isDarkMode: !state.isDarkMode };
    }),

  logOut: () => {
    localStorage.clear();
    set({ isAuthenticated: false });
  },

  imageSrc: "",
  setImageSrc: (image) => {
    set({ imageSrc: image });
    localStorage.setItem("profileImage", image);
  },
  initializeImage: () => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      set({ imageSrc: savedImage });
    }
  },
}));

export default useStore;
