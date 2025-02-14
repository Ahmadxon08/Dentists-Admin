import LoginPage from "@/components/LoginPage";
import React from "react";
export const generateMetadata = () => {
  return {
    title: "Login | Teeth",
  };
};
const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen overflow-auto w-full">
      <LoginPage />
    </div>
  );
};

export default page;
