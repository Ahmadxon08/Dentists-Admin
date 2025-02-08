import ButtonItem from "@/components/ButtonItem";
import HeaderTitle from "@/components/HeaderTitle";
import MarketTableComponent from "@/components/MarketTableComponent";
import SelectItems from "@/components/SelectItems";
import React from "react";
export const generateMetadata = () => {
  return {
    title: "Bemorlar | Teeth",
  };
};

const BemorlarPage = () => {
  return (
    <div className="ContentContainer">
      <HeaderTitle title={"Marketlar"} />

      <div className="headerActions">
        <div className="headerSelectorContainer">
          <SelectItems title={"viloyat"} /> <SelectItems title={"lokatsiya"} />{" "}
          <SelectItems title={"lokatsiya"} />
        </div>
        <ButtonItem label="+ Qo'shish" />
      </div>
      <MarketTableComponent />
    </div>
  );
};

export default BemorlarPage;
