"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";
import DashboardPage from "./DashboardPage";
import ManagerDashboard from "../dashboard-manager/page";
import ForumPage from "./forum/ForumPage";
import RequestPage from "./request/RequestPage";
import NavBar from "@/components/NavBar";
import CalendarPage from "./calendar/CalendarPage.js";
import ProjectsPage from "./projects/ProjectsPage";
import ToDoPage from "./todo/ToDoPage";

import DarkModeToggle from "@/components/DarkModeToggle";
import PageSkeleton from "@/components/SkeletonLoader";

const topNavItems = ["Dashboard", "Forum", "Projects", "Requests", "Calendar", "To-do"];



export default function Home() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { user, loading, logout, allEvents, allProjects, allUsers } = useAuth();
  const router = useRouter();

  const projects = allProjects?.filter(p => p.members?.includes(user?.id));
  const events = allEvents?.filter(e => e.members?.includes(user?.id));
  const employees = allUsers?.filter(u => u?.isManager == false);


  // Redirect to login if not authenticated

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

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

  if (loading || !user) {
    return <PageSkeleton />;
  }

  return (
    <div className="flex flex-col h-screen bg-[#d2d2d2] dark:bg-[#303030] text-black dark:text-white transition-colors duration-300" style={{ width: "100vw" }} >
      {/* Header with role indicator and logout */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-8 pt-4 gap-2 sm:gap-0">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <span className="text-sm text-gray-600 dark:text-white truncate">
            Welcome, {user.name}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${user.isManager == true
            ? 'bg-purple-100 text-purple-800'
            : 'bg-blue-100 text-blue-800'
            }`}>
            {user.isManager ? 'MANAGER DASHBOARD' : 'EMPLOYEE DASHBOARD'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
          <DarkModeToggle />
          <button
            onClick={logout}
            className="
              text-sm font-medium 
              px-4 py-2 
              rounded-md 
              bg-gray-100 text-gray-700 
              hover:bg-red-800 hover:text-white 
              transition-all duration-500
              whitespace-nowrap
            "
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="pt-4 pb-4 flex justify-center">
        <NavBar
          activeTab={activeTab}
          items={topNavItems}
          setActiveTab={setActiveTab}
          pillStyle={{
            width: "clamp(80px, 12vw, 180px)", // responsive width
            padding: "0.5rem 1rem",
          }}
          setHash={true}
          textStyle={{
            fontSize: "clamp(0.8rem, 1.2vw, 1.2rem)", // responsive font
            whiteSpace: "nowrap", // prevent wrapping
          }}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex justify-center flex-1 min-h-0 overflow-auto">
        {activeTab === "Dashboard" && (user.isManager ? <ManagerDashboard /> : <DashboardPage events={events} />)}
        {activeTab === "Forum" && <ForumPage />}
        {activeTab === "Requests" && <RequestPage />}
        {activeTab === "Calendar" && <CalendarPage events={events} />}
        {activeTab === "Projects" && <ProjectsPage projects={projects} employees={employees} />}
        {activeTab === "To-do" && <ToDoPage />}
      </main>
    </div>
  );
}