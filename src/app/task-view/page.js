"use client";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import PieChart from "@/components/PieChart";
import { useEffect, useState } from "react";
import TaskViewMembers from "./TaskViewMembers";
import TaskViewOverview from "./TaskViewOverview";
import TaskViewToDo from "./TaskViewToDo";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const navItems = ["Overview", "To-Do", "Members"];
  const [activeTab, setActiveTab] = useState(navItems[0]);

  // store selected task
  const [task, setTask] = useState(null);
  const router = useRouter();

  // Dropdown state
  const [selectedAssignee, setSelectedAssignee] = useState("Unassigned");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const assignees = [
    "Unassigned",
    "You",
    "Ryan Mitchell",
    "Neha Sharma",
    "Sofia Rivera",
    "Andrei Petrov",
  ];

  // Load selected task from localStorage
  useEffect(() => {
    const storedTask = localStorage.getItem("selectedTask");
    if (storedTask) setTask(JSON.parse(storedTask));
  }, []);

  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const capitalizedHash = hash.charAt(0).toUpperCase() + hash.slice(1);
      if (navItems.includes(capitalizedHash)) setActiveTab(capitalizedHash);
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
      className="bg-[#f5f7fa] dark:bg-[#3C5433]"
    >
      {/* Back Button */}
      <button
        onClick={() => router.push("/project")}
        className={"bg-[#f3f3f3] dark:bg-[#000000]"}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          /*background: "#f3f3f3",*/
          padding: "8px 14px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      {/* Assignee Dropdown */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
        className="relative "
      >
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="dark:text-white border border-gray-400 px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition dark:hover:bg-black"
        >
          {selectedAssignee}
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-md z-10">
            {assignees.map((name) => (
              <button
                key={name}
                onClick={() => {
                  setSelectedAssignee(name);
                  setDropdownOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                  selectedAssignee === name ? "font-semibold bg-gray-50" : ""
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Top Nav Bar */}
      <NavBar
        items={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setHash={true}
      />

      {/* Main Content */}
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
            {/* Pass task info to Overview, but preserve existing layout */}
            <TaskViewOverview task={task} />
          </div>
        )}
        {activeTab === "To-Do" && (
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            {/* Pass task info to To-Do, but preserve existing layout */}
            <TaskViewToDo task={task} />
          </div>
        )}
      </main>
    </div>
  );
}
