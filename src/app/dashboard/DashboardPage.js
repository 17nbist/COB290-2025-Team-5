"use client";
import ProfileOverview from "./ProfileOverview";
import { useEffect } from 'react';


export default function DashboardPage() {
  useEffect(() => {
    document.title = 'Dashboard | Make-It-All';
  }, []);
  return (
    <div>
      <ProfileOverview name={"John Doe"} position={"CEO"} taskAllocated={"12"} ProjectAllocated={"18"} />
    </div>
  );
}

//May need to change later, just testing if miniCalendar works. 
"use client";

import { useEffect } from "react";
import MiniCalendar from "@/components/MiniCalendar";

export default function DashboardPage() {
  useEffect(() => {
    document.title = "Dashboard | Make-It-All";
  }, []);

  // Dummy data to test
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
    <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome to the Dashboard!</p>
        <p>This is where you can see an overview of your activities.</p>
      </div>

      {/* calendar is below*/}
      <MiniCalendar tasks={tasks2} />
    </div>
  );
}
