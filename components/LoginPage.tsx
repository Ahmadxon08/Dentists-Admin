"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Snackbar, Alert } from "@mui/material";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter();

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
          onChange={(e) => setUsername(e.target.value)} // Bind the username to state
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 w-full pl-2 dark:bg-slate-700 bg-blue-200 border-gray-300 rounded-md focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Bind the password to state
        />
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
