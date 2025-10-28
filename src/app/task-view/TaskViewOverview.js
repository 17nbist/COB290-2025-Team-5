"use client";
import { useRouter } from "next/navigation";

export default function TaskViewOverview({ task }) {
  const router = useRouter();

  if (!task) {
    return <>No task selected (404)</>;
  }

  // Format the date and time to match your ProjectPage style
  const formatDate = (date) => {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${hours}:${minutes} ${day}/${month}/${year}`;
  };

  // Match the same from/to structure as in ProjectPage
  const startDate = formatDate(task.from);
  const dueDate = formatDate(task.to);

  return (
    <div className="flex flex-col items-center bg-gray-50 py-10 px-4">
      {/* Main Overview Box */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl p-8">
        {/* Title */}
        <h1 className="text-2xl font-semibold mb-6">{task.title}</h1>

        {/* Dates */}
        <div className="text-gray-800 mb-6">
          <p className="font-semibold">
            Start: <span className="font-normal">{startDate}</span>
          </p>
          <p className="font-semibold">
            Due: <span className="font-normal">{dueDate}</span>
          </p>
        </div>

        {/* Description */}
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
