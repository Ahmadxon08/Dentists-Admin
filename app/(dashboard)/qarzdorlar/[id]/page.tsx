"use client";
import HeaderLink from "@/components/HeaderLink";
import useAppointmentStore from "@/store/useAppointmentStore";
import { useParams } from "next/navigation";
import { TbClockHour3 } from "react-icons/tb";

import { FaLocationDot, FaUserDoctor } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

const DetailsPage = () => {
  const { id } = useParams();
  const { appointments, forCurrencyUz } = useAppointmentStore();

  const row = appointments.find((item) => String(item.id) === String(id));

  if (!row) {
    return <p>Loading..</p>;
  }

  return (
    <div className="ContentContainer  flex-1">
      <div className="flex items-center">
        <HeaderLink href={"/qarzdorlar"} title="Qarzdorlar" />
        <HeaderLink arrow="/" />

        <HeaderLink infoTitle={row.firstName} />
      </div>

      <div className="flex  w-full bg-gray-100 p-6 dark:bg-slate-800   flex-1 rounded-2xl ">
        <div className="card gap-3 bg-white rounded-md dark:bg-slate-700  flex h-auto w-full p-4">
          <div className="info w-full pb-4  gap-3 flex flex-col ">
            <h2 className=" text-[22px]">Bemor ismi: {row.firstName}</h2>
            <h2 className=" text-[22px]">Bemor familiyasi: {row.lastName}</h2>
            <div className="flex py-3">
              <p> Izoh: {row.description}</p>
            </div>
            <div className="flex py-1">
              <p> Qarzi: {forCurrencyUz(row.givenPrice)}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-semibold flex items-center gap-1">
                <MdDateRange className="text-blue-500 " size={32} />
                Kelish kuni: {row.appointmentDate}
              </p>

              <p className="text-semibold flex items-center gap-1">
                <TbClockHour3 className="text-blue-500 " size={32} />
                Kelsh vaqti: {row.appointmentTime}
              </p>
              <p className="text-semibold flex items-center gap-1">
                <FaLocationDot className="text-blue-500 " size={32} />
                <span className="text-[16px]">{row.address}</span>
              </p>
              <p className="text-semibold flex items-center gap-1">
                <FaUserDoctor className="text-blue-500 " size={32} />
                <span className="text-[16px]">{row.doctor}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
