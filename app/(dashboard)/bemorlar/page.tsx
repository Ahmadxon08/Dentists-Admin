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
      <HeaderTitle title={"Marketlar"} />

      <div className="headerActions">
        <div className="headerSelectorContainer"></div>
      </div>
      <MarketTableComponent />
    </div>
  );
};

export default BemorlarPage;
