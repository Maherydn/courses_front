"use client";

import { useEffect, useState } from "react";

export default function ButtonThemeToggle() {
  const getPreferredTheme = () => {
    if (localStorage.theme) return localStorage.theme;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  };

  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else if (theme === "light") {
      root.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      // mode "auto" : respecte le système
      localStorage.removeItem("theme");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, [theme]);

  return (
    <div className="flex gap-2">
      {theme === "light" ? (
        <button
          onClick={() => setTheme("dark")}
          className="md:text-lg text-md md:px-4 px-4 py-1 h-fit w-fit bg-[#B0B0B0] rounded-full cursor-pointer hover:bg-gray-400 duration-300 "
        >
          🌙 Dark
        </button>
      ) : (
        <button
          onClick={() => setTheme("light")}
          className="md:text-lg text-md md:px-4 px-4 py-1 h-fit w-fit bg-[#B0B0B0] rounded-full cursor-pointer hover:bg-gray-400 duration-300 "
        >
          ☀️ Light
        </button>
      )}
    </div>
  );
}
