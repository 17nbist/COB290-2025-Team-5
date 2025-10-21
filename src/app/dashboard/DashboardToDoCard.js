"use client";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";

export default function DashboardTodoCard() {
  const router = useRouter();

  return (
    <Card
      className="border border-black hover:bg-gray-100 transition-colors duration-200"
      style={{ color: "black", padding: "16px" }}
    >
      {/* Header */}
      <h1 className="text-[16px] font-[600] mb-[10px] text-center">To-Do</h1>

      {/* Button group */}
      <div className="flex flex-col items-start gap-[8px] pl-[4px]">
        <button
          onClick={() => router.push("/task-view")}
          className="bg-transparent text-black text-[16px] font-bold px-3 py-1.5 rounded-md w-[45%] sm:w-[40%] md:w-[35%] text-center hover:text-gray-600 transition"
        >
          Google Authentication
        </button>
        <button className="bg-white text-black px-3 py-1.5 text-[13px] rounded-md border border-gray-400 hover:bg-gray-200 transition w-[45%] sm:w-[40%] md:w-[35%] text-center">
          Setup
        </button>
        <button className="bg-white text-black px-3 py-1.5 text-[13px] rounded-md border border-gray-400 hover:bg-gray-200 transition w-[45%] sm:w-[40%] md:w-[35%] text-center">
          Authentication
        </button>
        <button className="bg-white text-black px-3 py-1.5 text-[13px] rounded-md border border-gray-400 hover:bg-gray-200 transition w-[45%] sm:w-[40%] md:w-[35%] text-center">
          Testing
        </button>
      </div>
    </Card>
  );
}
