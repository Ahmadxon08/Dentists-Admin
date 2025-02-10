"use client";
import React, { useEffect, useState } from "react";
import useStore from "@/store/useStore";
import { Button } from "@mui/material";
import Link from "next/link";
import { RiMenuFold3Fill, RiMenuUnfold3Fill } from "react-icons/ri";
import Menu from "@/components/Menu";
import { IoMdClose } from "react-icons/io";
import { FaTooth } from "react-icons/fa";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const {
    isMenuOpen,
    isSidebarOpenMenu,
    toggleSidebar,
    setSidebarOpen,
    toggleMenu,
  } = useStore();

  console.log("Sidebar", isSidebarOpenMenu);

  useEffect(() => {
    // Mobil ekranning holatini aniqlash
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setSidebarOpen]);
  return (
    <div
      className={`${
        isMobile
          ? isSidebarOpenMenu
            ? "dark:bg-slate-500 bg-gray-200 flex w-full z-40 absolute h-full"
            : "hidden"
          : isMenuOpen
          ? "w-1/6 z-0"
          : "w-[70px] z-0"
      } transition-all duration-300`}
    >
      <div
        className={`${
          isSidebarOpenMenu ? "w-[60%] absolute px-2 " : "w-full"
        } dark:bg-slate-600 bg-white md:dark:bg-slate-800 px-2 h-[100%]  left-0 justify-end`}
      >
        <div
          className={`${
            isMenuOpen ? "justify-between" : "justify-center"
          } w-full  py-3  hidden md:flex  transition-all duration-300 `}
        >
          {isMenuOpen && (
            <Link
              href="/"
              className="flex pl-3  items-center justify-center lg:justify-start gap-2"
            >
              <span className="hidden lg:block text-[#ADA4D0] text-[24px] font-bold">
                <FaTooth size={28} className="text-[#ADA4D0]" />
              </span>
            </Link>
          )}

          <Button onClick={toggleMenu} variant="text" className="w-[50px]">
            {isMenuOpen ? (
              <RiMenuFold3Fill size={28} className="text-[#ADA4D0]" />
            ) : (
              <RiMenuUnfold3Fill size={28} className="text-[#ADA4D0]" />
            )}
          </Button>
        </div>

        {/* Menu component */}
        <Menu />
      </div>

      <button
        onClick={toggleSidebar}
        className="flex bg-slate-600 text-white rounded-md  md:hidden absolute right-3 top-6 "
      >
        <IoMdClose size={32} />
      </button>
    </div>
  );
};

export default Sidebar;
