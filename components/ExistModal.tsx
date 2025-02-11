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
      <div className="bg-white dark:bg-slate-800 h-auto py-4 rounded w-[80%] shadow-lg md:w-[25%]">
        <h2 className="text-xl font-bold mb-4 text-center">
          Band bo&#39;lgan vaqt
        </h2>
        <div className="flex bg-slate-300 mb-2 w-full h-[1px]"></div>

        <div className="space-y-2 px-6 py-2 w-full">
          <div className="flex items-center w-full">
            <strong className="flex w-[50%]">Shifokori:</strong>{" "}
            <span>{existingAppointment.doctor}</span>
          </div>
          <div className="flex items-center w-full">
            <strong className="flex w-[50%]">Bemor ismi:</strong>{" "}
            <span>{existingAppointment.firstName}</span>
          </div>
          <div className="flex items-center w-full">
            <strong className="flex w-[50%]">Bemor familiyasi:</strong>{" "}
            <span>{existingAppointment.lastName}</span>
          </div>
          <div className="flex items-center w-full">
            <strong className="flex w-[50%]">Kelish sanasi:</strong>{" "}
            <span>{existingAppointment.appointmentDate}</span>
          </div>
          <div className="flex items-center w-full">
            <strong className="flex w-[50%]">Kelish vaqti:</strong>{" "}
            <span>{existingAppointment.appointmentTime}</span>
          </div>
          <div className="flex items-center w-full">
            <strong className="flex w-[50%]">Manzili:</strong>{" "}
            <span>{existingAppointment.address}</span>
          </div>
          <div className="flex items-center w-full">
            <strong className="flex w-[50%]">Xizmat narxi:</strong>{" "}
            <span>{existingAppointment.price}</span>
          </div>
          <div className="flex items-center w-full">
            <strong className="flex w-[50%]">Qisqcha izoh:</strong>{" "}
            <span>
              {" "}
              {existingAppointment.description.length > 10
                ? existingAppointment.description.slice(0, 10) + "..."
                : existingAppointment.description}{" "}
            </span>
          </div>
        </div>
        <div className="flex bg-slate-300   w-full h-[1px]"></div>

        <div className="flex w-full gap-3 px-2  justify-between">
          <div className="flex">
            <button
              onClick={deleteAppointment}
              className="mt-4 bg-red-500 hover:bg-inherit dark:hover:bg-slate-800 border border-red-500 hover:text-red-500 duration-300 text-white px-1 py-1 rounded w-auto"
            >
              O&#39;chirish
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="mt-4 border-gray-500 border hover:text-white hover:bg-slate-500 duration-300 px-2 py-1 rounded w-auto"
              onClick={toggleExistingModal}
            >
              Yopish
            </button>

            <button className="mt-4 bg-slate-500 hover:bg-inherit text- dark:hover:bg-slate-800 border duration-300 border-gray-500 dark:hover:text-white  text-white hover:text-black px-1 py-1 rounded w-auto">
              Batafsil..
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExistingAppointmentModal;
