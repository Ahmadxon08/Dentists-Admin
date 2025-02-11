"use client";
import React, { useState } from "react";
import PaginationItem from "./PaginationItem";
import useAppointmentStore from "@/store/useAppointmentStore";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const MarketTableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1); // Joriy sahifa
  const itemsPerPage = 10;
  const { appointments, handleDeleteIsModal } = useAppointmentStore();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = appointments.slice(startIndex, endIndex);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="w-full rounded-2xl p-2 dark:bg-slate-800  bg-slate-50 mt-1">
        <h1 className="flex items-start font-semibold mb-3 text-[22px]">
          Barchasi
        </h1>
        <table className="min-w-full table-auto  responsive-table  rounded-2xl">
          <thead className="bg-gray-300 dark:bg-slate-700 dark:text-white rounded-md text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Ismi</th>
              <th className="py-2 px-4 text-left">Familiyasi</th>
              <th className="py-2 px-4 text-left">Shifokor</th>
              <th className="py-2 px-4 text-left">Manzili</th>
              <th className="py-2 px-4 text-left">Kelish kuni</th>
              <th className="py-2 px-4 text-left">Kelish vaqti</th>
              <th className="py-2 px-4 text-left">Xizmat narxi</th>
              <th className="py-2 px-4 text-left">Xizmat turi</th>
              <th className="py-2 px-4 text-left">Harakatlar</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-200  dark:hover:bg-slate-600 transition cursor-pointer border-gray-200"
              >
                <td data-label="#" className="py-2 gap-6 px-4">
                  {index + 1}
                </td>
                <td data-label="FirstName" className="py-2 gap-6 px-4">
                  {row.firstName}
                </td>
                <td data-label="LastName" className="py-2 gap-6 px-4">
                  {row.lastName}
                </td>
                <td data-label="Shifokor" className="py-2 gap-6 px-4">
                  {row.doctor}
                </td>
                <td data-label="Manzil" className="py-2 gap-6 px-4">
                  {row.address}
                </td>
                <td data-label="Kelish Kuni" className="py-2 gap-6 px-4">
                  {row.appointmentDate}
                </td>
                <td data-label="Kelish soati" className="py-2 gap-6 px-4">
                  {row.appointmentTime}
                </td>
                <td data-label="Kelish soati" className="py-2 gap-6 px-4">
                  {row.price}
                </td>
                <td data-label="Kelish soati" className="py-2 gap-6 px-4">
                  {row.description.length > 10
                    ? row.description.slice(0, 10) + "..."
                    : row.description}
                </td>
                <td
                  data-label="Harakatlar"
                  className="py-2 flex items-center gap-6 px-4"
                >
                  <button className="border-gray-500 border-none  text-yellow-500 hover:bg-slate-500 duration-300 px-2 py-1 rounded w-auto">
                    <AiFillEdit size={28} />
                  </button>{" "}
                  <button
                    onClick={handleDeleteIsModal}
                    className="border-gray-500 border-none  text-red-500 hover:bg-slate-500 duration-300 px-2 py-1 rounded w-auto"
                  >
                    <MdDelete size={28} />
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
      </div>
      <div className="flex justify-center">
        <PaginationItem
          data={appointments}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default MarketTableComponent;
