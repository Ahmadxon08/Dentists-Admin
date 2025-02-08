"use client";
import React, { useState } from "react";
import PaginationItem from "./PaginationItem";
import useAppointmentStore from "@/store/useAppointmentStore";

const MarketTableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1); // Joriy sahifa
  const itemsPerPage = 10;
  const { appointments } = useAppointmentStore();

  // Sahifadagi ma'lumotlarni hisoblash
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
              <th className="py-2 px-4 text-left">FirstName</th>
              <th className="py-2 px-4 text-left">LastName</th>
              <th className="py-2 px-4 text-left">Shifokor</th>
              <th className="py-2 px-4 text-left">Manzil</th>
              <th className="py-2 px-4 text-left">Kelish kuni</th>
              <th className="py-2 px-4 text-left">Kelish vaqti</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-200  dark:hover:bg-slate-600 transition cursor-pointer border-gray-200"
              >
                <td data-label="#" className="py-2 px-4">
                  {index + 1}
                </td>
                <td data-label="FirstName" className="py-2 px-4">
                  {row.firstName}
                </td>
                <td data-label="LastName" className="py-2 px-4">
                  {row.lastName}
                </td>
                <td data-label="Shifokor" className="py-2 px-4">
                  {row.doctor}
                </td>
                <td data-label="Manzil" className="py-2 px-4">
                  {row.address}
                </td>
                <td data-label="Kelish Kuni" className="py-2 px-4">
                  {row.appointmentDate}
                </td>
                <td data-label="Kelish soati" className="py-2 px-4">
                  {row.appointmentTime}
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
