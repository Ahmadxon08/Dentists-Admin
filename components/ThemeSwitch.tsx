"use client";

import useStore from "@/store/useStore";
import { Switch, FormControlLabel } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md"; // Ikonalar uchun import

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Theme switch action
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      localStorage.setItem("theme", "dark");
      console.log("theme changed to dark");

      document.body.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      console.log("theme changed to light");

      document.body.classList.remove("dark");
    }
    useStore.getState().setIsDarkMode(event.target.checked);

    // Yangi theme holatini o'rnatish
    const newTheme = event.target.checked ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center gap-3">
      <FormControlLabel
        control={
          <Switch
            checked={resolvedTheme === "dark"}
            onChange={handleChange}
            inputProps={{ "aria-label": "theme switch" }}
            sx={{
              width: 80,
              height: 40,
              "& .MuiSwitch-switchBase": {
                padding: 0.7,

                "&.Mui-checked": {
                  transform: "translateX(40px)",
                },
              },
              "& .MuiSwitch-thumb": {
                width: 28,
                height: 28,
              },
              "& .MuiSwitch-track": {
                borderRadius: 20,
                opacity: 1,
                backgroundColor:
                  resolvedTheme === "dark" ? "#6b7280" : "#d1d5db",
              },
            }}
          />
        }
        label={
          resolvedTheme === "dark" ? (
            <MdOutlineLightMode size={28} />
          ) : (
            <MdDarkMode size={28} />
          )
        }
        labelPlacement="start"
      />
    </div>
  );
};

export default ThemeSwitch;
