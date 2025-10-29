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
      className="px-4 py-2 rounded-md border border-gray-300 bg-white dark:bg-gray-800 dark:text-white transition-colors duration-300"
    >
      {darkMode ? "Switch to Light 🌞" : "Switch to Dark 🌙"}
    </button>
  );
}
