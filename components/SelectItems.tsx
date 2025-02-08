import React from "react";

const SelectItems = (props: any) => {
  const { title } = props;

  return (
    <select
      name=""
      id=""
      title={title}
      className="flex md:w-[200px] w-full  dark:bg-slate-500 outline-none p-[2px] px-[12px] py-3 md:py-2 justify-between items-center rounded-[8px] bg-[rgba(0,0,0,0.03)] shadow-xs"
    >
      <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option>
    </select>
  );
};

export default SelectItems;
