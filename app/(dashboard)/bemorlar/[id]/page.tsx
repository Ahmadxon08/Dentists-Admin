"use client";
import HeaderLink from "@/components/HeaderLink";
import useAppointmentStore from "@/store/useAppointmentStore";
import { notFound, useParams } from "next/navigation";

import { FaLocationDot, FaUserDoctor } from "react-icons/fa6";

const DetailsPage = () => {
  const { appointmentDate } = useParams();
  const { appointments } = useAppointmentStore();

  const row = appointments.find(
    (item) => item.appointmentDate === appointmentDate
  );

  if (!row) {
    notFound();
  }

  return (
    <div className="ContentContainer  flex-1">
      <div className="flex items-center">
        <HeaderLink href={"/bemorlar"} title="Bemorlar" />
        <HeaderLink arrow="/" />

        <HeaderLink infoTitle={row.firstName} />
      </div>

      <div className="flex  w-full bg-gray-100 p-6 dark:bg-slate-800   flex-1 rounded-2xl ">
        <div className="card gap-3 bg-white rounded-md dark:bg-slate-700  flex h-auto w-full p-4">
          <div className="imgWrapper rounded-md h-full overflow-hidden w-[60%]"></div>
          <div className="info w-full pb-4  gap-3 flex flex-col ">
            <h2 className="text-[#696BAA] text-[36px] font-semibold">
              {row.firstName}
            </h2>
            <h2 className="text-[#696BAA] text-[36px] font-semibold">
              {row.lastName}
            </h2>
            <div className="flex py-3">
              <p>{row.description}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-semibold">
                Kelish kuni: {row.appointmentDate}
              </p>

              <p className="text-semibold">
                Kelsh vaqti: {row.appointmentTime}
              </p>
              <p className="flex items-center gap-2">
                <FaLocationDot className="text-blue-500 w-5" size={32} />
                <span className="text-[16px]">{row.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaUserDoctor className="text-blue-500 w-5" size={28} />
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
