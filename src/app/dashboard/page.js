"use client";
import { useState, useEffect, act } from "react";
import DashboardPage from "./DashboardPage";
import ForumPage from "./forum/ForumPage";
import RequestPage from "./request/RequestPage";
import NavBar from "@/components/NavBar";
import CalendarPage from "./calendar/CalendarPage.js";
import ProjectsPage from "./projects/ProjectsPage";

const topNavItems = ["Dashboard", "Forum", "Projects", "Requests", "Calendar"];

const events = [
  {id: 0, title: "Google Auth Meeting", from: new Date(2025, 9, 19, 8), to: new Date(2025, 9, 19, 16)},
  {id: 1, title: "Other Meeting", from: new Date(2025, 9, 19, 12), to: new Date(2025, 9, 19, 15)},
  {id: 2, title: "Dashboard Meeting", from: new Date(2025, 9, 20, 12), to: new Date(2025, 9, 20, 15)},
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const capitalizedHash = hash.charAt(0).toUpperCase() + hash.slice(1);
      if (topNavItems.includes(capitalizedHash)) {
        setActiveTab(capitalizedHash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    window.location.hash = tab.toLowerCase();
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-[#f5f7fa]">
      {/* Main Navigation */}
      <div className="pt-8 pb-4 flex justify-center">
        <NavBar
          activeTab={activeTab}
          items={topNavItems}
          setActiveTab={setActiveTab}
          pillStyle={{ width: "130px" }}
          setHash={true}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-grow flex justify-center">
        {activeTab === "Dashboard" && <DashboardPage events={events}/>}
        {activeTab === "Forum" && <ForumPage />}
        {activeTab === "Requests" && <RequestPage />}
        {activeTab === "Calendar" && <CalendarPage events={events}/>}
        {activeTab === "Projects" && <ProjectsPage />}
      </main>
    </div>
  );
}
