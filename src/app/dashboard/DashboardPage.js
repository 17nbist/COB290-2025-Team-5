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