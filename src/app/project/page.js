"use client";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import TodayPage from "./today/TodayPage";
import TasksPage from "./tasks/TasksPage";
import EventsPage from "./events/EventsPage";

export default function ProjectPage() {
	const topNavItems = ["Today", "Tasks", "Events", "Members"];
	const [activeTab, setActiveTab] = useState("Today");
	const [tasks, setTasks] = useState([
		{id: 0, title: "Google Auth", from: new Date(2025, 9, 14, 8), to: new Date(2025, 9, 23, 14)},
		{id: 1, title: "Main Dashboard", from: new Date(2025, 9, 8, 0), to: new Date(2025, 9, 15, 0)},
		{id: 2, title: "A Task", from: new Date(2025, 9, 14, 8), to: new Date(2025, 10, 28, 14)},
		{id: 3, title: "Other Task", from: new Date(2025, 9, 13, 8), to: new Date(2025, 9, 15, 14)},
		{id: 4, title: "Task B", from: new Date(2025, 9, 14, 8), to: new Date(2025, 9, 19, 20)},
	]);

	const [events, setEvents] = useState([
		{id: 0, title: "Google Auth Meeting", from: new Date(2025, 9, 19, 8), to: new Date(2025, 9, 19, 16)},
		{id: 1, title: "Other Meeting", from: new Date(2025, 9, 19, 12), to: new Date(2025, 9, 19, 15)},
		{id: 2, title: "Dashboard Meeting", from: new Date(2025, 9, 20, 12), to: new Date(2025, 9, 20, 15)},
	]);

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

	return (
		<div className="flex flex-col min-h-screen">
			<div className="pt-8 pb-4 flex justify-center">
				<NavBar
					activeTab={activeTab}
					items={topNavItems}
					setActiveTab={setActiveTab}
					pillStyle={{ width: "130px" }}
					setHash={true}
					style={{marginBottom: "50px"}}
				/>
			</div>

			<main className="flex-grow flex justify-center">
				{activeTab == "Today" && <TodayPage tasks={tasks} events={events}/>}
				{activeTab == "Tasks" && <TasksPage tasks={tasks} setTasks={setTasks}/>}
				{activeTab == "Events" && <EventsPage events={events} setTasks={setTasks}/>}
			</main>
		</div>
	);
}