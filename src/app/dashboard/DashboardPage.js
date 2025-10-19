"use client";
import ProfileOverview from "./ProfileOverview";
import { useState, useEffect } from 'react';
import DashCalendar from "@/components/Calendar/DashCalendar";


export default function DashboardPage() {
  useEffect(() => {
    document.title = 'Dashboard | Make-It-All';
  }, []);
  const [events, setEvents] = useState([
		{id: 0, title: "Google Auth Meeting", from: new Date(2025, 9, 19, 8), to: new Date(2025, 9, 19, 16)},
		{id: 1, title: "Other Meeting", from: new Date(2025, 9, 19, 12), to: new Date(2025, 9, 19, 15)},
		{id: 2, title: "Dashboard Meeting", from: new Date(2025, 9, 20, 12), to: new Date(2025, 9, 20, 15)},
	]);
  return (
    <div className="flex flex-col items-center">
      <ProfileOverview name={"John Doe"} position={"CEO"} taskAllocated={"12"} ProjectAllocated={"18"} />
      <DashCalendar tasks={events} width={1400} height ={400}/>
    </div>
  );
}