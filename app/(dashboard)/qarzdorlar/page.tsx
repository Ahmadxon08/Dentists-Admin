import DeleteAppointment from "@/components/DeleteAppoinment";
import HeaderTitle from "@/components/HeaderTitle";
import MarketTableComponent from "@/components/MarketTableComponent";
import React from "react";
export const generateMetadata = () => {
  return {
    title: "Bemorlar | Teeth",
  };
};

const BemorlarPage = () => {
  return (
    <div className="ContentContainer">
      <HeaderTitle title={"Qarzdorlar"} />

      <MarketTableComponent />
      <DeleteAppointment />
    </div>
  );
};

export default BemorlarPage;
