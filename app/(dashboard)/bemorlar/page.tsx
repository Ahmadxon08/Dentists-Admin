import DeleteAppointment from "@/components/DeleteAppoinment";
import EditAppointment from "@/components/EditAppointment";
import HeaderTitle from "@/components/HeaderTitle";
import SearchItems from "@/components/SearchItems";
import React from "react";
import BemorlarTableComponent from "@/components/BemorlarTableComponent";
export const generateMetadata = () => {
  return {
    title: "Bemorlar | Teeth",
  };
};

const BemorlarPage = () => {
  return (
    <div className="ContentContainer">
      <HeaderTitle title={"Bemorlar"} />
      <div className="headerActions">
        <SearchItems />
      </div>
      <BemorlarTableComponent />
      <EditAppointment />
      <DeleteAppointment />
    </div>
  );
};

export default BemorlarPage;
