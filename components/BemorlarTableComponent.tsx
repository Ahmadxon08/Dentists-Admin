"use client";
import React, { useState } from "react";
import PaginationItem from "./PaginationItem";
import useAppointmentStore from "@/store/useAppointmentStore";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import NotFound from "./NotFound";
const BemorlarTableComponent = () => {
  const {
    appointments,
    handleOpenEditModal,
    searchQuery,
    handleDeleteIsModal,
    forCurrencyUz,
  } = useAppointmentStore();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredAppointments = appointments.filter(
    (appt) =>
      appt.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appt.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appt.tel.includes(searchQuery)
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredAppointments.slice(startIndex, endIndex);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProductClick = (id: any) => {
    router.push(`bemorlar/${id}`);
  };

  return (
    <>
      {" "}
      {searchQuery.length > 0 && filteredAppointments.length === 0 ? (
        <NotFound />
      ) : currentData.length > 0 ? (
        <>
          {" "}
          <div className="w-full rounded-2xl p-2 dark:bg-slate-800  bg-slate-50 mt-1">
            <h1 className="flex items-start font-semibold mb-3 text-[22px]">
              Barchasi
            </h1>
            <table className="min-w-full table-auto  responsive-table  rounded-2xl">
              <thead className="bg-gray-300 dark:bg-slate-700 dark:text-white rounded-md text-gray-700">
                <tr>
                  <th className="py-2 px-3  text-[15px] text-left">#</th>
                  <th className="py-2 px-3  text-[15px] text-left">Ismi</th>
                  <th className="py-2 px-3  text-[15px] text-left">
                    Familiyasi
                  </th>
                  <th className="py-2 px-3  text-[15px] text-left">Shifokor</th>
                  <th className="py-2 px-3  text-[15px] text-left">Manzili</th>
                  <th className="py-2 px-3  text-[15px] text-left">
                    Telefon raqami
                  </th>

                  <th className="py-2 px-3  text-[15px] text-left">
                    Kelish kuni
                  </th>
                  <th className="py-2 px-3  text-[15px] text-left">
                    Kelish vaqti
                  </th>
                  <th className="py-2 px-3  text-[15px] text-left">
                    Xizmat narxi
                  </th>
                  <th className="py-2 px-3  text-[15px] text-left">Qarzi</th>
                  <th className="py-2 px-3  text-[15px] text-left">
                    Xizmat turi
                  </th>
                  <th className="py-2 px-3  text-[15px] text-left">
                    Harakatlar
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((row, index) => (
                  <tr
                    onClick={() => handleProductClick(row.id)}
                    key={index}
                    className="border-t hover:bg-gray-200  dark:hover:bg-slate-600 transition cursor-pointer border-gray-200"
                  >
                    <td data-label="#" className="py-2  text-sm px-3">
                      {row.id}
                    </td>
                    <td data-label="Ismi" className="py-2 text-sm   px-3">
                      {row.firstName}
                    </td>
                    <td data-label="Familyasi" className="py-2 text-sm  px-3">
                      {row.lastName}
                    </td>
                    <td data-label="Shifokor" className="py-2 text-sm   px-3">
                      {row.doctor}
                    </td>
                    <td data-label="Manzil" className="py-2 text-sm   px-3">
                      {row.address.length > 10
                        ? row.address.slice(0, 10) + "..."
                        : row.address}
                    </td>
                    <td
                      data-label="Telefon raqami"
                      className="py-2  text-sm  px-3"
                    >
                      {row.tel}
                    </td>
                    <td
                      data-label="Kelish Kuni"
                      className="py-2 text-sm   px-3"
                    >
                      {row.appointmentDate}
                    </td>
                    <td
                      data-label="Kelish soati"
                      className="py-2 text-sm  px-3"
                    >
                      {row.appointmentTime}
                    </td>
                    <td
                      data-label="Xizmat narxi"
                      className="py-2 text-sm   px-3"
                    >
                      {forCurrencyUz(row.price)}
                    </td>
                    <td data-label="Qarzi" className="py-2 text-sm   px-3">
                      {row.givenPrice ? "Bor" : "Yo'q"}
                    </td>
                    <td data-label="Izoh" className="py-2  text-sm  px-3">
                      {row.description.length > 10
                        ? row.description.slice(0, 10) + "..."
                        : row.description}
                    </td>
                    <td
                      data-label="Harakatlar"
                      className="py-2 flex items-center gap-2 px-3"
                    >
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleOpenEditModal(row.id as string | number);
                        }}
                        className="border-gray-500 border-none  text-yellow-500 hover:bg-slate-500 duration-300 px-1 py-1 rounded w-auto"
                      >
                        <AiFillEdit size={28} />
                      </button>{" "}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleDeleteIsModal();
                        }}
                        className="border-gray-500 border-none  text-red-500 hover:bg-slate-500 duration-300 px-1 py-1 rounded w-auto"
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
              data={filteredAppointments}
              itemsPerPage={itemsPerPage}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500">
          <h1 className="font-semibold text-[22px]">Bemorlar yo&#39;q</h1>
          <p>Ushbu holatda bemorlar topilmadi</p>
        </div>
      )}
    </>
  );
};

export default BemorlarTableComponent;
