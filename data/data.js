import { BiSolidInjection } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaHandHoldingDollar } from "react-icons/fa6";

export const menuItems = [
  {
    id: 1,
    label: "Jadvallar",
    href: "/",
    icon: <FaRegCalendarAlt size={28} />,
  },
  {
    id: 2,
    label: "Bemorlar",
    href: "/bemorlar",
    icon: <BiSolidInjection size={28} />,
  },
  {
    id: 3,
    label: "Qarzdorlar",
    href: "/qarzdorlar",
    icon: <FaHandHoldingDollar size={28} />,
  },

  {
    id: 4,
    label: "Profile",
    href: "/profile",
    icon: <IoPerson size={28} />,
  },
];

export const months = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentabr",
  "Oktabr",
  "Noyabr",
  "Dekabr",
];
