"use client";
import ThemeSwitch from "@/components/ThemeSwitch";
import useStore from "@/store/useStore";

import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
const profileImg = "./images/profile.png";
const ProfileHead = () => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const { logOut } = useStore();

  // LocalStorage'dan tasvirni olish
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setImageSrc(savedImage);
    }
  }, []);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileSize = file.size / 1024 / 1024;
      const maxFileSize = 2;

      if (fileSize > maxFileSize) {
        alert(`Fayl hajmi juda katta. Maksimal hajm: ${maxFileSize}MB`);
      } else {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageUrl = reader.result;
          if (typeof imageUrl === "string") {
            setImageSrc(imageUrl);
            localStorage.setItem("profileImage", imageUrl);
            console.log(imageUrl);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const onlogOut = () => {
    logOut();
  };
  return (
    <div className="flex justify-between gap-3 flex-col md:flex-row  bg-white backdrop-blur-lg items-start p-5 border dark:border-none border-gray-200 rounded-2xl dark:bg-slate-800 w-[100%] py-5">
      {/* ** profile picture *** */}
      <div className=" h-auto flex w-full flex-col sm:flex-row   md:w-[44%] gap-6 ">
        <img
          src={imageSrc || profileImg}
          alt="Profile Image"
          className="rounded-md w-[300px] h-[260px] md:w-[150px] md:h-[150px] "
        />
        <div className="flex items-start justify-between md:gap-3  gap-4 h-auto py-1 flex-col">
          <h1 className="text-[28px] font-semibold dark:text-white text-[black]">
            Sizning avataringiz
          </h1>
          <span className="text-[#696BAA] dark:text-gray-300 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            similique!
          </span>
          <div className="relative">
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              aria-label="upload"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />

            <label
              htmlFor="file-upload"
              className="py-2 bg-blue-300 dark:text-blue-600 font-semibold rounded-md text-[#3585ED] px-6 cursor-pointer transition-all hover:bg-blue-400 focus:ring-2 focus:ring-blue-500"
            >
              Yuklash
            </label>
          </div>
        </div>
      </div>

      {/* ******Actions****** */}
      <div className="h-[100%] gap-5 flex w-full md:justify-between md:w-auto     md:flex-col flex-row-reverse items-center    py-5 px-3 justify-start  md:items-start">
        <div className="flex items-center">
          <Button
            onClick={onlogOut}
            variant="text"
            className=" gap-1 text-[32px] flex items-center"
          >
            <BiLogOut size={32} />
            chiqish
          </Button>
        </div>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default ProfileHead;
