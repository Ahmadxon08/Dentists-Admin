import { create } from "zustand";

interface Appointment {
  firstName: string;
  lastName: string;
  birthDate: string;
  address: string;
  appointmentDate: string;
  appointmentTime: string;
  doctor: string;
}

interface AppointmentStore {
  appointments: Appointment[];
  appointmentDate: string;
  appointmentTime: string;
  setAppointmentDate: (date: string) => void;
  setAppointmentTime: (time: string) => void;
  addAppointment: (appointment: Appointment) => void;
  isExistingModalOpen: boolean;
  existingAppointment: Appointment | null;
  toggleExistingModal: () => void;
  deleteAppointment: () => void;
  setExistingAppointment: (appointment: Appointment | null) => void;
  setAppointments: (appointments: Appointment[]) => void;
}

const useAppointmentStore = create<AppointmentStore>((set) => ({
  appointments: [],
  appointmentDate: "", // ✅ Store ichida mavjud
  appointmentTime: "", // ✅ Store ichida mavjud

  isExistingModalOpen: false,
  existingAppointment: null,

  toggleExistingModal: () =>
    set((state) => ({ isExistingModalOpen: !state.isExistingModalOpen })),
  deleteAppointment: () =>
    set((state) => ({
      appointments: state.appointments.filter(
        (appt) =>
          appt.appointmentDate !== state.existingAppointment?.appointmentDate
      ),
      existingAppointment: null,
      isExistingModalOpen: false,
    })),

  setExistingAppointment: (appointment) =>
    set({ existingAppointment: appointment }),

  setAppointmentDate: (date) =>
    set((state) => ({ ...state, appointmentDate: date })),
  setAppointmentTime: (time) =>
    set((state) => ({ ...state, appointmentTime: time })),

  addAppointment: (appointment) =>
    set((state) => ({
      ...state,
      appointments: [...state.appointments, appointment],
    })),
  setAppointments: (newAppointments: Appointment[]) =>
    set({ appointments: newAppointments }),
}));

export default useAppointmentStore;
