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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "90%",
        width: "70%",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "30% 70%",
          height: "65%",
          width: "100%",
          flex: "flex-1",
        }}
      >
        <div style={{ padding: "10px" }}>
          <DashboardProfileCard
            Title={"Profile"}
            Name={user?.name || "User"}
            Position={user?.position || "N/A"}
            TaskAllocated={user?.taskAllocated || 0}
            ProjectAllocated={user?.projectAllocated || 0}
            ProfilePicLink={"/defaultPFP.png"}
          />
        </div>

        {/* Task Section */}
        <div
          className="justify-left item-start"
          style={{
            display: "grid",
            gridTemplateRows: "60% 40%",
            padding: "10px",
            margin: "1%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "50% 50%",
              gap: "5px",
            }}
          >
            <DashboardCard
              title={"Task Summary"}
              label={"Task progress"}
              result={"83%"}
              Icon={<FaTasks />}
            />
            <DashboardCard
              title={"Project Summary"}
              label={"Project progress"}
              result={"53%"}
              Icon={<GoProject />}
            />
          </div>

          {/* To-Do Section moved into its own file */}
          <div className="w-full mt-[1%]">
            <DashboardToDoCard />
          </div>
        </div>
      </div>

      {/* Calendar below */}
      <div className="flex-1 h-full w-full">
        <DashCalendar tasks={events} />
      </div>
    </div>
  );
}
