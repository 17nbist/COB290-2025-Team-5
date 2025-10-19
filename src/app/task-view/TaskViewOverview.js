"use client";
import { useRouter } from "next/navigation";

export default function TaskViewOverview() {
  const router = useRouter();

  // Create dummy data for "yesterday"
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(14, 0, 0, 0); // creates fake time of 14:00

  // Create dummy data for "tomorrow"
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(17, 0, 0, 0); // creates fake time of 17:00

  // Format date
  const formatDate = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${hours}:${minutes} ${day}/${month}/${year}`;
  };

  const startDate = formatDate(yesterday);
  const dueDate = formatDate(tomorrow);

  return (
    <div className="flex flex-col items-center bg-gray-50 py-10 px-4">
      {/* Creates back arrow */}
      <div className="flex items-center justify-start w-full max-w-5xl mb-10">
        <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition"
            >
            <span className="text-lg">←</span>
            <span>Back</span>
        </button>
      </div>

      {/* Main Overview Box */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl p-8">
        <h1 className="text-2xl font-semibold mb-6">Design Main Dashboard</h1>

        <div className="text-gray-800 mb-6">
          <p className="font-semibold">
            Start: <span className="font-normal">{startDate}</span>
          </p>
          <p className="font-semibold">
            Due: <span className="font-normal">{dueDate}</span>
          </p>
        </div>

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
