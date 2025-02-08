"use client";

import { menuItems } from "@/data/data";
import useStore from "@/store/useStore";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Menu = () => {
  const { isMenuOpen, toggleSidebar } = useStore();
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth < 768 && isMenuOpen) {
      toggleSidebar();
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`mt-4 flex-col justify-between gap-[10px]   ${
        isMenuOpen ? "w-[100%]" : "w-[auto]"
      }`}
    >
      {menuItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (pathname.startsWith(item.href) && item.href !== "/");

        return (
          <Tooltip
            title={!isMenuOpen ? item.label : ""}
            placement="right"
            arrow
            key={item.id}
          >
            <Link
              href={item.href}
              onClick={handleLinkClick}
              className={` ${
                isActive ? " bg-[#DCECFD] text-[#3585ED] " : ""
              }flex w-full hover:bg-slate-200 hover:text-[#000] duration-500 pl-1.5 mt-3 gap-4 h-[42px] rounded-md  ${
                isMenuOpen
                  ? " justify-start items-center "
                  : "justify-start  items-center"
              }`}
            >
              <span
                className={` ${
                  isActive ? " text-[#3585ED]  " : "text-[#ADA4D0]"
                }  pl-2    duration-300`}
              >
                {item.icon}
              </span>
              {/* Conditionally render the label */}
              {isMenuOpen && (
                <span
                  className={` ${
                    isActive ? " text-[#3585ED] " : "text-[#ADA4D0]"
                  }text-md  font-semibold`}
                >
                  {item.label}
                </span>
              )}
            </Link>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default Menu;
