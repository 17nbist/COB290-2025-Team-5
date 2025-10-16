"use client";
import { useState, useEffect } from "react";
import DashboardPage from "./DashboardPage";
import ForumPage from "./forum/ForumPage";
import NavBar from "@/components/NavBar";

// Main navigation items
const topNavItems = ["Dashboard", "Forum", "Projects", "Requests", "Calendar"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Effect to handle hash changes (back/forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const capitalizedHash = hash.charAt(0).toUpperCase() + hash.slice(1);
      if (topNavItems.includes(capitalizedHash)) {
        setActiveTab(capitalizedHash);
      }
    };

    // Set initial tab from URL hash
    handleHashChange();

    // Listen for hash changes (back/forward buttons)
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    // Update URL hash without reloading the page
    window.location.hash = tab.toLowerCase();
  };

  return (
    <div className="flex flex-col h-screen items-center pt-[5vh] bg-[#fefefe]">
      {/* Main Navigation */}
      <NavBar activeTab={activeTab} items={topNavItems} setActiveTab={setActiveTab} pillStyle={{width: "130px"}} setHash={true}/>

      {/* Main Content Area */}
      <main className="flex-grow p-6">
        {activeTab === "Dashboard" && <DashboardPage />}
        {activeTab === "Forum" && <ForumPage />}
        {/* Add other components for Projects, Requests, etc. here */}
        {activeTab !== "Dashboard" && activeTab !== "Forum" && (
           <div>
             <h1 className="text-2xl font-bold">{activeTab}</h1>
             <p>Content for {activeTab} coming soon.</p>
           </div>
        )}
      </main>
    </div>
  );
}