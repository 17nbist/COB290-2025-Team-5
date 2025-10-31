"use client";
import Card from "@/components/Card";
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
    <Card style={{width: "50%"}}>
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-6">{task.title}</h1>

      {/* Dates */}
      <div className="text-gray-800 dark:text-white mb-6">
        <p className="font-semibold">
          Start: <span className="font-normal">{startDate}</span>
        </p>
        <p className="font-semibold">
          Due: <span className="font-normal">{dueDate}</span>
        </p>
      </div>

      {/* Description */}
      <h2 className="text-xl font-semibold mb-2">Description</h2>
      <p className="text-gray-700  dark:text-white leading-relaxed">
        {task.description}
      </p>
    </Card>
  );
}
