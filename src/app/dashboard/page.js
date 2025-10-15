"use client";
import { useState, useEffect } from "react";
import DashboardPage from "@/components/DashboardPage";
import ForumPage from "@/components/ForumPage";

// Main navigation items
const topNavItems = ["Dashboard", "Forum", "Projects", "Requests", "Calendar"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Effect to set tab from URL hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const capitalizedHash = hash.charAt(0).toUpperCase() + hash.slice(1);
    if (topNavItems.includes(capitalizedHash)) {
      setActiveTab(capitalizedHash);
    }
  }, []);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    // Update URL hash without reloading the page
    window.location.hash = tab.toLowerCase();
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Main Navigation */}
      <nav className="bg-white border-b p-4">
        <div className="flex space-x-8">
          {topNavItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`text-lg font-semibold ${
                activeTab === item
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow p-6 bg-gray-50">
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