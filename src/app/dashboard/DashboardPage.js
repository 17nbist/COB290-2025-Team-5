"use client";
import ProfileOverview from "./ProfileOverview";
import { useState, useEffect } from 'react';
import DashCalendar from "@/components/Calendar/DashCalendar";


export default function DashboardPage({events}) {
  useEffect(() => {
    document.title = 'Dashboard | Make-It-All';
  }, []);
  
  return (
    <div className="flex flex-col items-center w-full h-full">
      <ProfileOverview name={"John Doe"} position={"CEO"} taskAllocated={"12"} ProjectAllocated={"18"} events={events}/>
      {/* <div className="w-[1400px] h-[400px]">
        <DashCalendar tasks={events}/>
      </div> */}
    </div>
  );
}