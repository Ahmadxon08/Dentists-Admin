"use client";
import useAppointmentStore from "@/store/useAppointmentStore";
import React from "react";

const ExistingAppointmentModal = () => {
  const {
    isExistingModalOpen,
    deleteAppointment,
    toggleExistingModal,
    existingAppointment,
  } = useAppointmentStore();

  if (!isExistingModalOpen || !existingAppointment) return null;

  return (
    <div className="fixed inset-0 flex z-50 items-center justify-center bg-black bg-opacity-80">
      <div className="bg-white dark:bg-slate-800 p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-center">
          Band bo&#39;lgan vaqt
        </h2>
        <div className="space-y-2">
          <p>
            <strong>Sana:</strong> {existingAppointment.appointmentDate}
          </p>
          <p>
            <strong>Vaqt:</strong> {existingAppointment.appointmentTime}
          </p>
          <p>
            <strong>Doktor:</strong> {existingAppointment.doctor || "Noma'lum"}
          </p>
          <p>
            <strong>Ism:</strong> {existingAppointment.firstName || "Noma'lum"}
          </p>
          <p>
            <strong>Familya:</strong>{" "}
            {existingAppointment.lastName || "Noma'lum"}
          </p>
          <p>
            <strong>Address:</strong>{" "}
            {existingAppointment.address || "Noma'lum"}
          </p>
          <p>
            <strong>Narxi:</strong> {existingAppointment.price || "Noma'lum"}
          </p>
        </div>
        <div className="flex w-full gap-3 justify-end">
          <button
            className="mt-4 border-gray-500 border  hover:bg-slate-500 duration-300 px-2 py-1 rounded w-auto"
            onClick={toggleExistingModal}
          >
            Yopish
          </button>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-auto"
            onClick={deleteAppointment}
          >
            O&#39;chirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExistingAppointmentModal;
