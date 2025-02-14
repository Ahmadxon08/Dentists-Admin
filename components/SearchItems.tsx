"use client";

import useAppointmentStore from "@/store/useAppointmentStore";
import { MdOutlinePersonSearch } from "react-icons/md";

const SearchItems = () => {
  const { setSearchQuery, searchQuery } = useAppointmentStore();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="searchElement gap-2 flex items-center px-2 md:w-full ">
      <label htmlFor="search" className="cursor-pointer">
        <MdOutlinePersonSearch size={32} />
      </label>
      <input
        id="search"
        type="search"
        className="bg-inherit outline-none w-full"
        placeholder="Qidirish..."
        onChange={handleSearch}
        value={searchQuery}
      />
    </div>
  );
};

export default SearchItems;
