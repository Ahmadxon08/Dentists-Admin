import React from "react";

const ButtonItem = (props: any) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="flex w-full md:w-auto h-[38px] px-[16px] py-[12px] justify-center items-center gap-[10px] text-white font-semibold rounded-[12px] bg-[#3886EE] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.25)]"
    >
      {label}
    </button>
  );
};

export default ButtonItem;
