"use client";

import useAppointmentStore from "@/store/useAppointmentStore";

const DeleteAppointment = () => {
  const { isOpenDeleteModal, handleDeleteIsModal, deleteAppointment } =
    useAppointmentStore();

  const handleClose = () => handleDeleteIsModal();
  const handleDelete = () => {
    deleteAppointment();
  };

  return isOpenDeleteModal ? (
    <div
      onClick={handleClose}
      className="fixed inset-0 flex z-50  px-4 items-center justify-center bg-black bg-opacity-80"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-800 p-6 rounded-lg text-center  shadow-lg w-auto"
      >
        <h1 className="text-lg font-semibold">O&#39;chirishni tasdiqlang</h1>
        <p className="mt-2 text-gray-700 dark:text-white">
          Ushbu bemorni o&#39;chirishga ishonchingiz komilmi?
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={handleClose}
            className="mt-4 border-gray-500 border hover:text-white hover:bg-slate-500 duration-300 px-2 py-1 rounded w-auto"
          >
            Bekor qilish
          </button>
          <button
            onClick={handleDelete}
            className="mt-4 bg-red-500 hover:bg-inherit dark:hover:bg-slate-800 border border-red-500 hover:text-red-500 duration-300 text-white px-1 py-1 rounded w-auto"
          >
            O&#39;chirish
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default DeleteAppointment;
