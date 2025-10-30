"use client";
import Card from "@/components/Card";
import { useAuth } from "@/lib/AuthContext";
import { FaTasks } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import DashCalendar from "@/components/Calendar/DashCalendar";
import DashboardProfileCard from "./DashboardProfileCard";
import DashboardCard from "./DashboardCard";
import DashboardToDoCard from "./DashboardToDoCard";
import { useRouter } from "next/navigation"; // import router

export default function ProfileOverview({ events }) {
  const { user } = useAuth();
  const router = useRouter(); // initialize router



    return (
      <div className="grid gap-4 p-8 w-[70%] h-[calc(100vh-4rem)] overflow-auto
                grid-cols-1 md:grid-cols-6 
                md:grid-rows-[repeat(8,minmax(0,1fr))] md:overflow-hidden overflow-auto scrollbar-hide">
        <div className="col-span-1 md:col-span-2 md:row-span-4">
          <DashboardProfileCard
            Title={"Profile"}
            Name={user?.name || "User"}
            Position={user?.position || "N/A"}
            TaskAllocated={user?.taskAllocated || 0}
            ProjectAllocated={user?.projectAllocated || 0}
            ProfilePicLink={"/defaultPFP.png"}
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
        
        <div className="col-span-1 md:col-span-6 md:row-span-5">
          <DashCalendar tasks={events} />
        </div>
      </div>
    )
}
