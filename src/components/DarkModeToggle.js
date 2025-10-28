// App.jsx
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className="flex flex-col h-screen bg-[#f5f7fa] dark:bg-[#0a0a0a] text-black dark:text-white items-center justify-center transition-colors duration-500"
      style={{ width: "100vw" }}
    >
      <h1 className="text-3xl font-bold mb-4">Tailwind Dark Mode</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 dark:text-white rounded"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
