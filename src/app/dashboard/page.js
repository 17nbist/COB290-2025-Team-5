"use client";
import { useState, useEffect, act } from "react";
import DashboardPage from "./DashboardPage";
import ForumPage from "./forum/ForumPage";
import RequestPage from "./request/RequestPage";
import NavBar from "@/components/NavBar";
import CalendarPage from "./calendar/CalendarPage.js";
import ProjectsPage from "./projects/ProjectsPage";

const topNavItems = ["Dashboard", "Forum", "Projects", "Requests", "Calendar"];

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
    <div className="flex flex-col min-h-screen bg-[#fff]">
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
        {activeTab === "Dashboard" && <DashboardPage />}
        {activeTab === "Forum" && <ForumPage />}
        {activeTab === "Requests" && <RequestPage />}
        {activeTab === "Calendar" && <CalendarPage />}
        {activeTab === "Projects" && <ProjectsPage />}
      </main>
    </div>
  );
}
