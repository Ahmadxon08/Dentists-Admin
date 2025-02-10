"use client";
import AddModal from "@/components/AddModal";
import ExistingAppointmentModal from "@/components/ExistModal";
import { months } from "@/data/data";
import useAppointmentStore from "@/store/useAppointmentStore";
import useStore from "@/store/useStore";
import useTimeStore from "@/store/useTimeStore";
import React, { useEffect, useState } from "react";

const hours = Array.from(
  { length: 10 }, // 5:00 dan 00:00 gacha 20 ta vaqt bo'ladi
  (_, i) => `${String(i + 5).padStart(2, "0")}:00`
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
  const { times, addTime, removeTime } = useTimeStore(); // Zustand store'ni chaqiramiz

  const { toggleModal } = useStore();
  const { appointments, setAppointmentDate, setAppointmentTime } =
    useAppointmentStore();

  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [view, setView] = useState<"week" | "month">("week");
  const currentDate = new Date();
  const [newTime, setNewTime] = useState("");

  const handleAddTime = () => {
    if (newTime && !times.includes(newTime)) {
      addTime(newTime);
      setNewTime(""); // Inputni tozalash
    }
  };

  // Boshlanish va tugash vaqtlarini saqlash uchun state
  const [startHour, setStartHour] = useState(() => {
    return localStorage.getItem("startHour") || "05:00";
  });

  const [endHour, setEndHour] = useState(() => {
    return localStorage.getItem("endHour") || "23:00";
  });

  // Vaqtlar o'zgarganda localStorage'ga saqlash
  useEffect(() => {
    localStorage.setItem("startHour", startHour);
  }, [startHour]);

  useEffect(() => {
    localStorage.setItem("endHour", endHour);
  }, [endHour]);

  useEffect(() => {
    const savedStartHour = localStorage.getItem("startHour");
    const savedEndHour = localStorage.getItem("endHour");

    if (savedStartHour) setStartHour(savedStartHour);
    if (savedEndHour) setEndHour(savedEndHour);
  }, []);

  // Vaqt massivini yaratish
  const generateHours = () => {
    const start = parseInt(startHour.split(":")[0], 10);
    const end = parseInt(endHour.split(":")[0], 10);

    return Array.from(
      { length: end - start + 1 },
      (_, i) => `${String(start + i).padStart(2, "0")}:00`
    );
  };
  const hours = generateHours();

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
  const isPastTime = (date: string, hour: string) => {
    const now = new Date();
    const currentDate = now.toISOString().split("T")[0];
    const currentHour = now.getHours();

    if (date < currentDate) return true;
    if (date === currentDate && parseInt(hour.split(":")[0]) < currentHour)
      return true;

    return false;
  };
  const removePastAppointments = () => {
    const now = new Date();
    const currentDate = now.toISOString().split("T")[0];
    const currentHour = now.getHours();

    const { appointments, setAppointments } = useAppointmentStore.getState();

    const filteredAppointments = appointments.filter((app) => {
      const appHour = parseInt(app.appointmentTime.split(":")[0]);
      return (
        app.appointmentDate > currentDate ||
        (app.appointmentDate === currentDate && appHour >= currentHour)
      );
    });

    setAppointments(filteredAppointments);
  };

  useEffect(() => {
    removePastAppointments();

    const interval = setInterval(() => {
      removePastAppointments();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 mx-auto">
      <div className="text-center w-full flex flex-col justify-start gap-2 mb-4">
        <div className="flex w-full items-center flex-col md:flex-row justify-between">
          <p className="text-lg font-semibold">{formatDate(currentDate)}</p>
          <div className="flex md:w-auto w-full items-end  justify-between   gap-3 md:items-center   ">
            <div className="flex items-center    gap-2">
              <div className="flex items-center gap-2 md:items-center flex-col md:flex-row">
                <label htmlFor="time" className=" text-xl">
                  Boshlanish:
                </label>
                <input
                  type="time"
                  id="time"
                  value={startHour}
                  step="3600"
                  onChange={(e) => setStartHour(e.target.value)}
                  className="w-auto dark:bg-slate-800  border md:px-4 px-1 py-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-300"
                />
              </div>
              <div className="flex  gap-2 items-start md:items-center flex-col md:flex-row">
                <label htmlFor="time" className=" text-xl">
                  Tugashi:
                </label>{" "}
                <input
                  type="time"
                  value={endHour}
                  step="3600"
                  onChange={(e) => setEndHour(e.target.value)}
                  className="w-auto border dark:bg-slate-800  md:px-4 px-1 py-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-300"
                />{" "}
              </div>
            </div>
            <div className="flex justify-end gap-2  md:flex-row h-full  items-center">
              <button
                className={` md:px-4 px-1 py-2 rounded ${
                  view === "week"
                    ? "bg-blue-500   text-white"
                    : "dark:bg-slate-800 bg-slate-200 text-black dark:text-white"
                }`}
                onClick={() => setView("week")}
              >
                Haftalik
              </button>
              <button
                className={`  md:px-4 px-1   dark:text-white py-2 rounded ${
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
        </div>
      </div>

      <div className="w-full overflow-auto ">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="md:z-10 top-0 bg-gray-100 dark:bg-slate-800 dark:text-white z-10">
            <tr>
              <th className="p-2 border border-gray-300 sticky -left-1 bg-gray-100 dark:bg-slate-900 z-20">
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
                        className="p-2 text-sm w-auto border border-gray-300"
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
                <td className="p-2 border border-gray-300 bg-gray-100 dark:bg-slate-900 sticky -left-1 z-10">
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
                          className={`p-2 border border-gray-300 text-center cursor-pointer
    ${
      isBooked(formattedDate, hour)
        ? "bg-red-200 dark:bg-slate-600 dark:text-white"
        : ""
    }
    ${
      isPastTime(formattedDate, hour)
        ? "bg-gray-300 text-gray-500 opacity-50 pointer-events-none"
        : "dark:hover:bg-slate-400  hover:bg-blue-200"
    }
  `}
                          onClick={() =>
                            !isPastTime(formattedDate, hour) &&
                            handleOpenModal(formattedDate, hour)
                          }
                        >
                          {isPastTime(formattedDate, hour)
                            ? "❌"
                            : isBooked(formattedDate, hour)
                            ? "📌 Band"
                            : ""}
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
