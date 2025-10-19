"use client";

import { useEffect } from "react";
import ProfileOverview from "./ProfileOverview";
import MiniCalendar from "@/components/MiniCalendar";

export default function DashboardPage() {
  useEffect(() => {
    document.title = "Dashboard | Make-It-All";
  }, []);

  // Dummy data for MiniCalendar
  const tasks2 = [
    {
      id: 1,
      title: "Team meeting",
      from: new Date(),
      to: new Date(new Date().getTime() + 60 * 60 * 1000),
    },
    {
      id: 2,
      title: "Design review",
      from: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
      to: new Date(new Date().getTime() + 3 * 60 * 60 * 1000),
    },
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3">
          <ProfileOverview
            name={"John Doe"}
            position={"CEO"}
            taskAllocated={"12"}
            ProjectAllocated={"18"}
          />
        </div>
        <div className="lg:w-2/3">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Upcoming Tasks</h2>
            <MiniCalendar tasks={tasks2} />
          </div>
        </div>
      </div>
    </div>
  );
}
