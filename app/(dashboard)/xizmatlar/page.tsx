import ButtonItem from "@/components/ButtonItem";
import HeaderTitle from "@/components/HeaderTitle";
import SelectItems from "@/components/SelectItems";
import ServiceTableComponent from "@/components/ServiceTableComponent";
import React from "react";

export const generateMetadata = () => {
  return {
    title: "Xizmatlar | VET",
  };
};
const ServicePage = () => {
  return (
    <div className="ContentContainer">
      {/* ** top section of Home page*** */}
      <HeaderTitle title={"Xizmatlar"} />

      <div className="headerActions">
        <div className="headerSelectorContainer">
          <SelectItems title={"viloyat"} /> <SelectItems title={"lokatsiya"} />{" "}
          <SelectItems title={"lokatsiya"} />
        </div>
        <ButtonItem label="+ Qo'shish" />
      </div>
      {/* ** Table section of Home page*** */}
      <ServiceTableComponent />
    </div>
  );
};

export default ServicePage;
