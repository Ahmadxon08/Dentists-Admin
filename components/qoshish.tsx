"use client";
import React, { useState } from "react";

const AppointmentForm = ({ onAddAppointment }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [visitHour, setVisitHour] = useState("");
  const [doctor, setDoctor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      first_name: firstName,
      last_name: lastName,
      birth_date: birthDate,
      address: address,
      visit_date: visitDate,
      visit_hour: visitHour,
      doctor: doctor,
    };

    // Ma'lumotlarni yuqoridagi CalendarView'ga yuborish
    onAddAppointment(newAppointment);

    // Forma qiymatlarini tozalash
    setFirstName("");
    setLastName("");
    setBirthDate("");
    setAddress("");
    setVisitDate("");
    setVisitHour("");
    setDoctor("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Ism"
        className="p-2 border border-gray-300 rounded w-full"
        required
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Familiya"
        className="p-2 border border-gray-300 rounded w-full"
        required
      />
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        placeholder="Tug'ilgan sana"
        className="p-2 border border-gray-300 rounded w-full"
        required
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Manzil"
        className="p-2 border border-gray-300 rounded w-full"
        required
      />
      <input
        type="date"
        value={visitDate}
        onChange={(e) => setVisitDate(e.target.value)}
        placeholder="Tashrif sanasi"
        className="p-2 border border-gray-300 rounded w-full"
        required
      />
      <input
        type="time"
        value={visitHour}
        onChange={(e) => setVisitHour(e.target.value)}
        placeholder="Tashrif soati"
        className="p-2 border border-gray-300 rounded w-full"
        required
      />
      <input
        type="text"
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
        placeholder="Doktor"
        className="p-2 border border-gray-300 rounded w-full"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
      >
        Appointment Qo‘shish
      </button>
    </form>
  );
};

export default AppointmentForm;
