"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Snackbar, Alert } from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!username || !password) {
      setError("Iltimos, foydalanuvchi nomi va parolni kiriting.");
      setSuccess(false);
      setOpenSnackbar(true);
      return;
    }

    const adminUser = {
      username: username,
      password: password,
      role: "admin",
    };

    localStorage.setItem("adminUser", JSON.stringify(adminUser));

    setError("");
    setSuccess(true);
    setOpenSnackbar(true);

    router.push("/");
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="flex bg-white   dark:bg-slate-800 rounded-md justify-between gap-2 flex-col p-4 md:w-[30%] md:h-auto">
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {success
            ? "Tizimga kirish muvaffaqiyatli bo'ldi!"
            : error || "Birinchi foydalanuvchi nomi va parolni kiriting."}
        </Alert>
      </Snackbar>

      <div className="flex flex-col items-center w-full pt-6 gap-2">
        <h1 className="text-[32px] mb-4">Tizimga kirish</h1>
        {error && <p className="text-red-500">{error}</p>}{" "}
        {/* Display error message */}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 px-2 w-full">
        <input
          type="text"
          placeholder="username"
          className="p-2 w-full pl-2 dark:bg-slate-700 bg-blue-200 border-gray-300 rounded-md focus:outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Parol"
            className="p-2 w-full pr-10 pl-2 dark:bg-slate-700 bg-blue-200 border-gray-300 rounded-md focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </button>
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Kirish
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
