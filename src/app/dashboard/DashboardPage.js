"use client";
import ProfileOverview from "./ProfileOverview";
import { useState, useEffect } from 'react';
import DashCalendar from "@/components/Calendar/DashCalendar";


export default function DashboardPage({events}) {
  useEffect(() => {
    document.title = 'Dashboard | Make-It-All';
  }, []);
  
  return (
    <div className="flex flex-col items-center">
      <ProfileOverview name={"John Doe"} position={"CEO"} taskAllocated={"12"} ProjectAllocated={"18"} />
      <DashCalendar tasks={events} width={1325} height ={400}/>
    </div>
  );
}