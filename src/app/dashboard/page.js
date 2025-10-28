"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";
import DashboardPage from "./DashboardPage";
import ForumPage from "./forum/ForumPage";
import RequestPage from "./request/RequestPage";
import NavBar from "@/components/NavBar";
import CalendarPage from "./calendar/CalendarPage.js";
import ProjectsPage from "./projects/ProjectsPage";
import ToDoPage from "./todo/ToDoPage";


const topNavItems = ["Dashboard", "Forum", "Projects", "Requests", "Calendar", "To-Do"];



export default function Home() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { user, data, loading, logout } = useAuth();
  const router = useRouter();

  // Extract events from user data (authcontext)
  const events = data?.events || [];


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
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div  className="flex flex-col h-screen bg-[#c4daff] dark:bg-[#303640] text-black dark:text-white transition-colors duration-300" style={{width:"100vw"} } >
      {/* Header with role indicator and logout */}
      <div className="flex justify-between items-center px-8 pt-4">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600 dark:text-white">Welcome, {user.name}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${user.role === 'manager'
            ? 'bg-purple-100 text-purple-800'
            : 'bg-blue-100 text-blue-800'
            }`}>
            {user.role.toUpperCase()} DASHBOARD
          </span>
        </div>
        <button
          onClick={logout}
          className="
            text-sm font-medium 
            px-4 py-2 
            rounded-md 
            bg-gray-100 text-gray-700 
            hover:bg-red-800 hover:text-white 
            transition-all duration-500
          "
        >
          Logout
        </button>

      </div>

      {/* Main Navigation */}
      <div className="pt-4 pb-4 flex justify-center">
        <NavBar
          activeTab={activeTab}
          items={topNavItems}
          setActiveTab={setActiveTab}
          pillStyle={{ width: "130px" }}
          setHash={true}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex justify-center flex-1 min-h-0">
        {activeTab === "Dashboard" && <DashboardPage events={events} />}
        {activeTab === "Forum" && <ForumPage />}
        {activeTab === "Requests" && <RequestPage />}
        {activeTab === "Calendar" && <CalendarPage events={events} />}
        {activeTab === "Projects" && <ProjectsPage />}
        {activeTab === "To-Do" && <ToDoPage />}
      </main>
    </div>
  );
}