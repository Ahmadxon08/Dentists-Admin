"use client";
import useAppointmentStore from "@/store/useAppointmentStore";
import useStore from "@/store/useStore";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useFormik } from "formik";
import { appointmentSchema } from "@/validation/validation";
const AddModal = () => {
  const { addAppointment, appointmentDate, appointmentTime } =
    useAppointmentStore();

  const { setModal, isOpenModal } = useStore();

  const handleClose = () => {
    setModal(false);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      birthDate: "",
      appointmentDate: appointmentDate || "",
      appointmentTime: appointmentTime || "",
      doctor: "",
    },
    validationSchema: appointmentSchema,
    onSubmit: (values) => {
      addAppointment(values);
      formik.resetForm();
    },
  });
  useEffect(() => {
    formik.setValues((prevValues) => ({
      ...prevValues,
      appointmentDate,
      appointmentTime,
    }));
  }, [appointmentDate, appointmentTime]);

  // onChange ni formik.handleChange bilan yangilash

  const { handleSubmit, values, handleBlur, handleChange, touched, errors } =
    formik;

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isOpenModal) {
          setModal(false);
        }
      }}
      className={` ${
        isOpenModal
          ? " w-full flex z-[1111] absolute top-0 ring-0 left-0"
          : "hidden"
      } dark:bg-[#000000e8]  bg-[#000000b3] items-center   justify-center md:justify-center p-2 h-full `}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex rounded-lg dark:bg-slate-700 h-auto md:h-fit   bg-white   flex-col w-[90%] md:w-[35%] items-center "
      >
        <div className="flex  p-2  w-full justify-between items-center">
          <h1 className="text-[22px] dark:text-white text-black">
            Qo&#39;shish
          </h1>
          <button
            onClick={handleClose}
            className=" rounded-md p-[1px] bg-blue-300 "
          >
            <IoMdClose size={22} className="text-white" />
          </button>
        </div>
        <div className="flex bg-slate-300 w-full h-[1px]"></div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="items-start border dark:border-none  flex-col gap-3 flex w-full px-3 py-2"
        >
          <div className="flex w-full gap-1 flex-col">
            <label htmlFor="firstName" className="label">
              Bemor Ismi
            </label>
            <input
              type="text"
              id="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Bemor ismi"
              className="flex  w-full  dark:bg-slate-500 outline-none p-[2px] px-[12px] py-1 md:py-1 justify-between items-center rounded-[8px] bg-[rgba(0,0,0,0.03)] shadow-xs"
            />
            {touched.firstName && errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName}</span>
            )}
          </div>{" "}
          <div className="flex w-full gap-1 flex-col">
            <label htmlFor="lastName" className="label">
              Bemor Familiya
            </label>
            <input
              type="text"
              id="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Bemor familyasi"
              className="flex  w-full  dark:bg-slate-500 outline-none p-[2px] px-[12px] py-1 md:py-1 justify-between items-center rounded-[8px] bg-[rgba(0,0,0,0.03)] shadow-xs"
            />
            {touched.lastName && errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName}</span>
            )}
          </div>{" "}
          <div className="flex w-full gap-1 flex-col">
            <label htmlFor="address" className="label">
              Manzili
            </label>
            <input
              type="text"
              id="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Chilonzor.."
              className="flex  w-full  dark:bg-slate-500 outline-none p-[2px] px-[12px] py-1 md:py-1 justify-between items-center rounded-[8px] bg-[rgba(0,0,0,0.03)] shadow-xs"
            />
            {touched.address && errors.address && (
              <span className="text-red-500 text-sm">{errors.address}</span>
            )}
          </div>{" "}
          <div className="w-full flex gap-2">
            <div className="flex w-full gap-1 flex-col">
              <label htmlFor="birthDate" className="label">
                Tug&#39;ilgan vaqti
              </label>
              <input
                type="date"
                id="birthDate"
                value={values.birthDate}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="2025-01-01"
                className="flex  w-full  dark:bg-slate-500 outline-none p-[2px] px-[12px] py-1 md:py-1 justify-between items-center rounded-[8px] bg-[rgba(0,0,0,0.03)] shadow-xs"
              />
              {touched.birthDate && errors.birthDate && (
                <span className="text-red-500 text-sm">{errors.birthDate}</span>
              )}
            </div>{" "}
            <div className="flex w-full gap-1 flex-col">
              <label htmlFor="appointmentDate" className="label">
                Kelish vaqti
              </label>
              <input
                type="date"
                id="appointmentDate"
                value={formik.values.appointmentDate}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="2025-01-01"
                className="flex  w-full  dark:bg-slate-500 outline-none p-[2px] px-[12px] py-1 md:py-1 justify-between items-center rounded-[8px] bg-[rgba(0,0,0,0.03)] shadow-xs"
              />
            </div>{" "}
          </div>
          <div className="w-full flex gap-2">
            <div className="flex w-full gap-1 flex-col">
              <label htmlFor="doctor" className="label">
                Doctorni tanlang
              </label>
              <select
                id="doctor"
                value={values.doctor}
                onBlur={handleBlur}
                onChange={handleChange}
                className="flex dark:text-white w-full dark:bg-slate-500 outline-none p-[2px] px-[12px] py-1 justify-between items-center rounded-[8px] bg-[rgba(0,0,0,0.03)] shadow-xs"
              >
                <option value="">Tanlang...</option>
                <option value="Alijon">Alijon</option>
                <option value="Valijon">Valijon</option>
              </select>
              {touched.doctor && errors.doctor && (
                <span className="text-red-500 text-sm">{errors.doctor}</span>
              )}
            </div>{" "}
            <div className="flex w-full gap-1 flex-col">
              <label htmlFor="appointmentTime" className="label">
                Kelish soati
              </label>
              <input
                type="time"
                id="appointmentTime"
                value={formik.values.appointmentTime}
                onChange={handleChange}
                placeholder="2025-01-01"
                className="flex  w-full  dark:bg-slate-500 outline-none p-[2px] px-[12px] py-1 md:py-1 justify-between items-center rounded-[8px] bg-[rgba(0,0,0,0.03)] shadow-xs"
              />
            </div>{" "}
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center md:w-auto bg-blue-300 py-2 dark:text-blue-600 font-semibold rounded-md text-[#3585ED] px-6"
          >
            Qo&#39;shish
          </button>
        </form>
        <div className="flex bg-slate-300 mb-2 w-full h-[1px]"></div>
        <div
          className="flex items
        onBlur={handleBlur}-center w-full p-3 justify-end  flex-col md:flex-row gap-3"
        >
          <button
            onClick={handleClose}
            className="flex w-full items-center justify-center  md:w-auto bg-gray-100 py-2  font-semibold rounded-md text-[#3585ED] px-6"
          >
            Bekor qilish
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default AddModal;
