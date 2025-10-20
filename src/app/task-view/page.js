"use client";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import PieChart from "@/components/PieChart";
import { useEffect, useState } from "react";
import TaskViewMembers from "./TaskViewMembers";
import TaskViewOverview from "./TaskViewOverview";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const navItems = ["Overview", "To-Do", "Members"];
  const [activeTab, setActiveTab] = useState(navItems[0]);

  // ✅ Added: store selected task
  const [task, setTask] = useState(null);
  const router = useRouter();

  // ✅ Added: load selected task from localStorage
  useEffect(() => {
    const storedTask = localStorage.getItem("selectedTask");
    if (storedTask) {
      setTask(JSON.parse(storedTask));
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const capitalizedHash = hash.charAt(0).toUpperCase() + hash.slice(1);
      if (navItems.includes(capitalizedHash)) {
        setActiveTab(capitalizedHash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: "60px",
      }}
    >
      {/* ✅ Added: Back Button */}
      <button
        onClick={() => router.back()}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          background: "#f3f3f3",
          padding: "8px 14px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      {/* ✅ Added: Task title display */}
      {task && (
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          {task.title}
        </h1>
      )}

      {/* Top Nav Bar (unchanged) */}
      <NavBar
        items={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setHash={true}
      />

      {/* Content Area (unchanged) */}
      <main
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        {activeTab === "Members" && (
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <TaskViewMembers />
          </div>
        )}
        {activeTab === "Overview" && (
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            {/* ✅ Pass task info to Overview, but preserve existing layout */}
            <TaskViewOverview task={task} />
          </div>
        )}
      </main>
    </div>
  );
}
