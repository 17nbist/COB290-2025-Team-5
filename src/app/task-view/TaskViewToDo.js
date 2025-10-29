"use client";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";

export default function TaskViewToDo({ task }) {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center">
      <Card
        className="border border-black hover:bg-gray-100 transition-colors duration-200"
        style={{
          padding: "24px",
          width: "100%",
          maxWidth: "800px",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="flex flex-col gap-[16px] w-full">
          {/* Dynamic task title button (centered) */}
          <button
            onClick={() => router.push("/task-view")}
            className="bg-transparent text-[20px] font-bold px-3 py-3 rounded-md w-full text-center hover:text-gray-600 transition"
          >
            {task?.title || "Task Title"}
          </button>

          {/* To-Do buttons */}
          <button className="bg-white text-black px-4 py-3 text-[15px] rounded-md border border-gray-400 hover:bg-gray-200 transition w-full text-center">
            Setup
          </button>
          <button className="bg-white text-black px-4 py-3 text-[15px] rounded-md border border-gray-400 hover:bg-gray-200 transition w-full text-center">
            Authentication
          </button>
          <button className="bg-white text-black px-4 py-3 text-[15px] rounded-md border border-gray-400 hover:bg-gray-200 transition w-full text-center">
            Testing
          </button>
        </div>
      </Card>
    </div>
  );
}
