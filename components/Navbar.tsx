"use client";
import useStore from "@/store/useStore";
import Account from "./Account";
import { TfiAlignLeft } from "react-icons/tfi";

const Navbar = () => {
  const { isOpenModal, toggleSidebar } = useStore();

  console.log(isOpenModal);
  return (
    <header className="border-b dark:border-b-gray-500 dark:bg-slate-800 w-[100%] sticky top-0 z-10  py-1.5  px-6 items-center ">
      <nav className="flex items-center justify-between w-[100%] ">
        <button onClick={toggleSidebar} className="flex md:hidden">
          <TfiAlignLeft size={32} />
        </button>
        <span>{isOpenModal}</span>
        <Account />
      </nav>
    </header>
  );
};

export default Navbar;
