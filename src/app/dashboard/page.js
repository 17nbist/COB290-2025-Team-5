"use client";
import { useState, useEffect } from "react";
import DashboardPage from "./DashboardPage";
import ForumPage from "./forum/ForumPage";
import NavBar from "@/components/NavBar";
import CalendarPage from "./calendar/CalendarPage.js";

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
    <div className="flex flex-col min-h-screen bg-[#0f172a]">
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
        {activeTab === "Calendar" && <CalendarPage />}
        {activeTab !== "Dashboard" && activeTab !== "Forum" && activeTab !== "Calendar" && (
          <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-white">{activeTab}</h1>
            <p className="text-gray-400">Content for {activeTab} coming soon.</p>
          </div>
        )}
      </main>
    </div>
  );
}