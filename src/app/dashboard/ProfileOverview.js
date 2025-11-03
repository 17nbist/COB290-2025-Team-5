"use client";
import Card from "@/components/Card";
import { useAuth } from "@/lib/AuthContext";
import { FaTasks } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import DashCalendar from "@/components/Calendar/DashCalendar";
import DashboardProfileCard from "./DashboardProfileCard";
import DashboardCard from "./DashboardCard";
import DashboardToDoCard from "./DashboardToDoCard";
import { useRouter } from "next/navigation";

export default function ProfileOverview({ events }) {
  const { user } = useAuth();
  const router = useRouter();



    return (
      <div
        className="
          grid gap-4 p-4 sm:p-6 md:p-8
          w-full md:w-[70%]
          min-h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)]
          overflow-auto md:overflow-hidden scrollbar-hide
          grid-cols-1 md:grid-cols-6
          auto-rows-max md:grid-rows-[repeat(8,minmax(0,1fr))]
        "
      >
        <div className="col-span-1 md:col-span-2 md:row-span-4">
          <DashboardProfileCard
            Title={"Profile"}
            Name={user?.name || "User"}
            Position={user?.position || "N/A"}
            TaskAllocated={user?.taskAllocated || 0}
            ProjectAllocated={user?.projectAllocated || 0}
            ProfilePicLink={user?.profilePic||"/defaultPFP2.png"}
            
          />

        </div>
        <div className="col-span-1 md:col-span-2 md:row-span-4">
          <DashboardCard
            title={"Task Summary"}
            label={"Task progress"}
            result={"83%"}
            Icon={<FaTasks />}
          />
        </div>
        <div className="col-span-1 md:col-span-2 md:row-span-4">
          <DashboardCard
            title={"Project Summary"}
            label={"Project progress"}
            result={"53%"}
            Icon={<GoProject />}
          />
        </div>
        
        <div className="col-span-1 md:col-span-6 md:row-span-4">
          <DashCalendar tasks={events} />
        </div>
      </div>
    )
}
