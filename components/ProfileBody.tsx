import React from "react";

const ProfileBody = () => {
  return (
    <div className="flex bg-white border dark:bg-slate-800  dark:border-none p-5 rounded-2xl h-auto flex-col w-[100%] gap-3">
      <h2 className="text-[22px] font-semibold">Profile haqida</h2>
      <form className="flex flex-col gap-[20px] w-[100%]">
        <div className="formInputContainerWrapper">
          <div className="formInputContainer">
            <label htmlFor="name" className="label ">
              Ismi
            </label>
            <input id="name" className="inputElement" />
          </div>{" "}
          <div className="formInputContainer">
            <label htmlFor="lastName" className="label ">
              Familiya
            </label>
            <input id="lastName" className="inputElement" />
          </div>
        </div>
        <div className="formInputContainerWrapper">
          <div className="formInputContainer">
            <label htmlFor="phone" className="label ">
              Telefon nomer
            </label>
            <input id="phone" className="inputElement" />
          </div>{" "}
          <div className="formInputContainer">
            <label htmlFor="email" className="label ">
              Email
            </label>
            <input id="email" className="inputElement" />
          </div>
        </div>
        <div className="flex w-full md:pr-8 pr-0 justify-between md:justify-end">
          <div className="flex w-full  flex-col md:flex-row justify-between md:justify-end  gap-4 items-center">
            <button className="py-2 w-full md:w-auto bg-blue-300 dark:text-blue-600 font-semibold rounded-md text-[#3585ED] px-6">
              Bekor qilish
            </button>{" "}
            <button className="py-2 w-full md:w-auto bg-blue-800 text-white  font-semibold rounded-md  px-6">
              O`zgarishlarni saqlash
            </button>{" "}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileBody;
