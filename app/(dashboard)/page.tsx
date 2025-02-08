"use client";
import AddModal from "@/components/AddModal";
import ExistingAppointmentModal from "@/components/ExistModal";
import { months } from "@/data/data";
import useAppointmentStore from "@/store/useAppointmentStore";
import useStore from "@/store/useStore";
import React, { useEffect, useState } from "react";

const hours = Array.from(
  { length: 24 },
  (_, i) => `${String(i).padStart(2, "0")}:00`
);
const allDays = [
  "Yakshanba",
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
];

const CalendarView = () => {
  const { toggleModal } = useStore();
  const { appointments, setAppointmentDate, setAppointmentTime } =
    useAppointmentStore();

  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [view, setView] = useState<"week" | "month">("week");
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const now = new Date();
    const dayIndex = now.getDay();
    const reorderedDays: string[] = [
      ...allDays.slice(dayIndex),
      ...allDays.slice(0, dayIndex),
    ];
    setWeekDays(reorderedDays);
  }, []);

  const getMonthDays = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const daysInMonth = new Date(year, month, 0).getDate();

    return Array.from({ length: daysInMonth }, (_, i) => {
      const day = String(i + 1).padStart(2, "0");
      return `${year}-${String(month).padStart(2, "0")}-${day}`;
    });
  };

  const isBooked = (date: string, hour: string) => {
    return appointments.some((app) => {
      return app.appointmentDate === date && app.appointmentTime === hour;
    });
  };

  const handleOpenModal = (date: string, hour: string) => {
    const { setExistingAppointment, toggleExistingModal } =
      useAppointmentStore.getState();

    const existingAppointment = appointments.find(
      (app) =>
        app.appointmentDate === date &&
        app.appointmentTime.startsWith(hour.split(":")[0])
    );

    if (existingAppointment) {
      console.log("Band bo'lgan vaqt:", existingAppointment);

      setExistingAppointment(existingAppointment);
      toggleExistingModal();
    } else {
      setAppointmentDate(date);
      setAppointmentTime(hour);

      toggleModal();
    }
  };

  const formatDate = (date: Date) => {
    const monthName = months[date.getMonth()];
    return `${String(date.getDate()).padStart(
      2,
      "0"
    )} ${monthName} ${date.getFullYear()} ${String(date.getHours()).padStart(
      2,
      "0"
    )}:${String(date.getMinutes()).padStart(2, "0")}`;
  };

  return (
    <div className="p-6 mx-auto">
      <div className="text-center w-full flex justify-start gap-2 mb-4">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold">{formatDate(currentDate)}</p>
        </div>
        <div className="flex">
          <button
            className={`px-4 py-2 rounded ${
              view === "week"
                ? "bg-blue-500   text-white"
                : "dark:bg-slate-800 bg-slate-200 text-black dark:text-white"
            }`}
            onClick={() => setView("week")}
          >
            Haftalik
          </button>
          <button
            className={`ml-2 px-4   dark:text-white py-2 rounded ${
              view === "month"
                ? "bg-blue-500   text-white"
                : "dark:bg-slate-800 bg-slate-200 text-black dark:text-white"
            }`}
            onClick={() => setView("month")}
          >
            Oylik
          </button>
        </div>
      </div>

      <div className="w-full overflow-auto ">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="md:z-10 top-0 bg-gray-100 dark:bg-slate-800 dark:text-white z-10">
            <tr>
              <th className="p-2 border border-gray-300 sticky left-0 bg-gray-100 dark:bg-slate-900 z-20">
                Vaqt
              </th>
              {view === "week"
                ? weekDays.map((day, index) => {
                    const now = new Date();
                    now.setDate(now.getDate() + index);
                    const formattedDate = now.toISOString().split("T")[0];

                    return (
                      <th
                        key={formattedDate}
                        className="p-2 border border-gray-300"
                      >
                        {day} <br />
                        <span className="text-sm">{formattedDate}</span>
                      </th>
                    );
                  })
                : getMonthDays().map((date) => (
                    <th key={date} className="p-2 border border-gray-300">
                      {date.split("-")[2]}
                    </th>
                  ))}
            </tr>
          </thead>
          <tbody className="overflow-auto">
            {hours.map((hour) => (
              <tr key={hour} className="border border-gray-300">
                <td className="p-2 border border-gray-300 bg-gray-100 dark:bg-slate-900 sticky left-0 z-10">
                  {hour}
                </td>
                {view === "week"
                  ? weekDays.map((_, index) => {
                      const now = new Date();
                      now.setDate(now.getDate() + index);
                      const formattedDate = now.toISOString().split("T")[0];

                      return (
                        <td
                          key={`${formattedDate}-${hour}`}
                          className={`p-2 border border-gray-300 text-center cursor-pointer ${
                            isBooked(formattedDate, hour)
                              ? "bg-red-200 dark:bg-slate-600 dark:text-white"
                              : "dark:hover:bg-slate-400 hover:bg-blue-200"
                          }`}
                          onClick={() => handleOpenModal(formattedDate, hour)}
                        >
                          {isBooked(formattedDate, hour) ? "📌 Band" : ""}
                        </td>
                      );
                    })
                  : getMonthDays().map((date) => (
                      <td
                        key={`${date}-${hour}`}
                        className={`p-2 border border-gray-300 text-center cursor-pointer ${
                          isBooked(date, hour)
                            ? "bg-red-200 dark:bg-slate-600 dark:text-white"
                            : "dark:hover:bg-slate-400 hover:bg-blue-200"
                        }`}
                        onClick={() => handleOpenModal(date, hour)}
                      >
                        {isBooked(date, hour) ? "📌 Band" : ""}
                      </td>
                    ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddModal />
      <ExistingAppointmentModal />
    </div>
  );
};

export default CalendarView;
