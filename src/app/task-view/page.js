"use client";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import PieChart from "@/components/PieChart";
import { useEffect, useState } from "react";
import TaskViewMembers from "./TaskViewMembers";

export default function Dashboard() {
  const navItems = ["Overview", "To-Do", "Members"];
  const [activeTab, setActiveTab] = useState(navItems[0]);

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
      {/* Top Nav Bar */}
      <NavBar
        items={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setHash={true}
      />

      {/* Content Area */}
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
      </main>
    </div>
  );
}
