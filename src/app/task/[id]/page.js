"use client";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import PieChart from "@/components/PieChart";
import { useEffect, useState } from "react";
import TaskViewMembers from "./TaskViewMembers";
import TaskViewOverview from "./TaskViewOverview";
import TaskViewToDo from "./TaskViewToDo";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import { useParams } from "next/navigation";
import PageSkeleton from "@/components/SkeletonLoader";

export default function Dashboard() {
  const { user, allProjects, allTasks, allEvents, allUsers, loading } = useAuth();
  const navItems = ["Overview", "To-Do", "Members"];
  const [activeTab, setActiveTab] = useState(navItems[0]);
  const [errText, setErrText] = useState("");
  const [task, setTask] = useState(null);

  const taskMembers = allUsers?.filter(u => task?.members?.includes(u?.id));

  const taskId = parseInt(useParams().id);
  const router = useRouter();
  useEffect(() => {
		if (!user || !allTasks || !allEvents) {
			return;
		}

		const currentTask = allTasks.find(t => t.id == taskId);
		if (!currentTask){
			setErrText("No access or task doesn't exist");
			return;
		}

    setTask(currentTask);
		setErrText(null);
    document.title = `${currentTask.title} | Make-It-All`;
	}, [allProjects, allTasks, allEvents, user]);

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

  if (loading || !user || !allTasks || !allEvents) {
    return <PageSkeleton />;
  }

  if (errText) {
		return(
			<div className="flex dark:text-white flex-col w-screen h-screen bg-[#d2d2d2] dark:bg-[#303640]">
				<h1>{errText}</h1>
			</div>
		)
	}

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: "60px",
      }}
      className="dark:text-white bg-[#d2d2d2] dark:bg-[#303030]"
    >
      {/* Back Button */}
      <button
        onClick={() => router.push(`/project/${task.projectId}`)}
        className={"bg-[#f3f3f3] dark:bg-[#989898]"}
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
          height: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        {activeTab === "Members" && (
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <TaskViewMembers taskMembers={taskMembers}/>
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
