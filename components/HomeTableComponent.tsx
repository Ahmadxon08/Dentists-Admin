"use client";
import React, { useState } from "react";

import { data } from "./../data/data.js";
import PaginationItem from "./PaginationItem";
import { useRouter } from "next/navigation.js";

const HomeTableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1); // Joriy sahifa
  const itemsPerPage = 10;

  // Sahifadagi ma'lumotlarni hisoblash
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const router = useRouter();

  const handleProductClick = (id: any) => {
    router.push(`/${id}`);
  };

  return (
    <>
      <div className="w-full rounded-2xl p-2 dark:bg-slate-800  bg-slate-50 mt-1">
        <h1 className="flex items-start font-semibold mb-3 text-[22px]">
          Barchasi
        </h1>
        <table className="min-w-full table-auto responsive-table   rounded-md">
          <thead className="bg-gray-300  dark:bg-slate-600 dark:text-white rounded-md text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Viloyat</th>
              <th className="py-2 px-4 text-left">Tuman</th>
              <th className="py-2 px-4 text-left">Klinika</th>
              <th className="py-2 px-4 text-left">Manzil</th>
              <th className="py-2 px-4 text-left">Emal</th>
              <th className="py-2 px-4 text-left">Tel nomer</th>
              <th className="py-2 px-4 text-left">Izoh</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr
                key={index}
                id={row.id}
                onClick={() => handleProductClick(row.id)}
                className="!border-t hover:bg-gray-200 md:dark:bg-slate-700     dark:hover:bg-slate-500 transition cursor-pointer border-gray-200"
              >
                <td data-label="#" className="py-2  px-4">
                  {index + 1}
                </td>

                <td data-label="Viloyat" className="py-2 px-4">
                  {row.viloyat}
                </td>
                <td data-label="Tuman" className="py-2 px-4">
                  {row.tuman}
                </td>
                <td data-label="Klinika" className="py-2 px-4">
                  {row.klinika}
                </td>
                <td data-label="Manzil" className="py-2 px-4">
                  {row.manzil}
                </td>
                <td data-label="Emal" className="py-2 px-4">
                  {row.emal}
                </td>
                <td data-label="Tel nomer" className="py-2 px-4">
                  {row.telNomer}
                </td>
                <td data-label="Izoh" className="py-2 px-4">
                  {row.telNomer}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <PaginationItem
          data={data}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default HomeTableComponent;
