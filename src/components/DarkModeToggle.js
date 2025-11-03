"use client"; // required if you're using Next.js App Router

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check saved preference or system setting
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = storedTheme === "dark" || (!storedTheme && prefersDark);

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !darkMode;
    setDarkMode(newDark);

    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };


  return (
    <button
      onClick={toggleTheme}
      className="
                text-sm font-medium 
                px-4 py-2 
                rounded-md 
                bg-white dark:bg-gray-800 
                text-gray-700 dark:text-gray-200
                border border-gray-300 dark:border-gray-600
                transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-lg active:scale-95
                whitespace-nowrap
              "
      style={{ borderRadius: "40px" }}
    >
      {darkMode ? "Switch to Light 🌞" : "Switch to Dark 🌙"}
    </button>
    // <button
    //   onClick={toggleTheme}
    //   className="px-4 py-2 rounded-md border border-gray-300 bg-white dark:bg-gray-800 dark:text-white transition-colors duration-300"
    // >
    //   {darkMode ? "Switch to Light 🌞" : "Switch to Dark 🌙"}
    // </button>
  );
}
