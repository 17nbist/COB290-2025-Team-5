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
      <div className="box-border" style={{display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridTemplateRows: "repeat(8, 1fr)", gap: "1rem", padding: "2rem", width: "70%", height: "100%"}}>
        <div style={{gridRow: "1/6", gridColumn: "1/3"}}>
          <DashboardProfileCard
            Title={"Profile"}
            Name={user?.name || "User"}
            Position={user?.position || "N/A"}
            TaskAllocated={user?.taskAllocated || 0}
            ProjectAllocated={user?.projectAllocated || 0}
            ProfilePicLink={"/defaultPFP.png"}
          />
        </div>
        <div style={{gridRow: "1/4", gridColumn: "3/5"}}>
          <DashboardCard
            title={"Task Summary"}
            label={"Task progress"}
            result={"83%"}
            Icon={<FaTasks />}
          />
        </div>
        <div style={{gridRow: "1/4", gridColumn: "5/7"}}>
          <DashboardCard
            title={"Project Summary"}
            label={"Project progress"}
            result={"53%"}
            Icon={<GoProject />}
          />
        </div>
        <div style={{gridRow: "4/6", gridColumn: "3/7"}}>
          <DashboardToDoCard />
        </div>
        <div style={{gridRow: "6/9", gridColumn: "1/7"}}>
          <DashCalendar tasks={events} />
        </div>
      </div>
    )
}
