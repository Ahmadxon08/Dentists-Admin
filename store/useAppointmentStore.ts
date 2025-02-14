import { create } from "zustand";

interface Appointment {
  id?: string | number;
  firstName: string;
  lastName: string;
  birthDate: string;
  address: string;
  appointmentDate: string;
  appointmentTime: string;
  doctor: string;
  price: number;
  givenPrice?: number;
  tel: string;
  description: string;
}

interface AppointmentStore {
  appointments: Appointment[];
  appointmentDate: string;
  appointmentTime: string;
  isOpenDeleteModal: boolean;
  isEditOpenModal: boolean;
  editAppointment: Appointment | null;

  searchQuery: string;
  setSearchQuery: (query: string) => void;
  lastUpdatedAppointment: string | null;
  setAppointmentDate: (date: string) => void;
  setAppointmentTime: (time: string) => void;
  addAppointment: (appointment: Appointment) => void;
  isExistingModalOpen: boolean;
  existingAppointment: Appointment | null;
  toggleExistingModal: () => void;
  deleteAppointment: () => void;
  handleDeleteIsModal: () => void;
  setEditOpenModal: (mode: boolean, id?: string | number) => void;
  updateAppointment: (
    id: string | number,
    updatedData: Partial<Appointment>
  ) => void;
  forCurrencyUz: (number: string | number | undefined) => string;
  handleOpenEditModal: (id: string | number) => void;
  setExistingAppointment: (appointment: Appointment | null) => void;
  setAppointments: (appointments: Appointment[]) => void;
}

const useAppointmentStore = create<AppointmentStore>((set) => ({
  appointments: [],
  appointmentDate: "",
  appointmentTime: "",
  isExistingModalOpen: false,
  existingAppointment: null,
  lastUpdatedAppointment: null,
  isEditOpenModal: false,
  editAppointment: null,
  searchQuery: "",

  isOpenDeleteModal: false,

  setSearchQuery: (query) => set({ searchQuery: query }),

  handleDeleteIsModal: () =>
    set((state) => ({ isOpenDeleteModal: !state.isOpenDeleteModal })),
  handleOpenEditModal: (id: string | number) =>
    set((state) => ({
      isEditOpenModal: true,
      editAppointment:
        state.appointments.find((appt) => appt.id === id) || null,
    })),
  toggleExistingModal: () =>
    set((state) => ({ isExistingModalOpen: !state.isExistingModalOpen })),
  ///////////////////////////////////
  deleteAppointment: () =>
    set((state) => ({
      appointments: state.appointments.filter(
        (appt) =>
          appt.appointmentDate !== state.existingAppointment?.appointmentDate
      ),
      existingAppointment: null,
      isExistingModalOpen: false,
      lastUpdatedAppointment: new Date().toISOString(),
    })),

  setEditOpenModal: (mode: boolean, id?: string | number) =>
    set((state) => ({
      isEditOpenModal: mode,
      editAppointment: id
        ? state.appointments.find((appt) => appt.id === id) || null
        : null,
    })),
  updateAppointment: (id, updatedData) =>
    set((state) => {
      const updatedAppointments = state.appointments.map((appt) =>
        appt.id === id ? { ...appt, ...updatedData } : appt
      );

      return {
        appointments: updatedAppointments,
        lastUpdatedAppointment: new Date().toISOString(),
        editAppointment:
          updatedAppointments.find((appt) => appt.id === id) || null,
        isEditOpenModal: false,
      };
    }),

  setExistingAppointment: (appointment) =>
    set({ existingAppointment: appointment }),

  setAppointmentDate: (date) =>
    set((state) => ({
      ...state,
      appointmentDate: date,
      lastUpdatedAppointment: new Date().toISOString(),
    })),

  setAppointmentTime: (time) =>
    set((state) => ({
      ...state,
      appointmentTime: time,
      lastUpdatedAppointment: new Date().toISOString(),
    })),

  addAppointment: (appointment) =>
    set((state) => ({
      ...state,
      appointments: [...state.appointments, appointment],
      lastUpdatedAppointment: new Date().toISOString(),
    })),

  setAppointments: (newAppointments: Appointment[]) =>
    set({
      appointments: newAppointments,
      lastUpdatedAppointment: new Date().toISOString(),
    }),

  forCurrencyUz: (number: string | number | undefined): string => {
    if (!number) return "";

    return number.toLocaleString("uz-UZ", { style: "decimal" }) + " " + "so'm";
  },
}));

export default useAppointmentStore;
