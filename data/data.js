import { BiSolidInjection } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

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
    id: 5,
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
