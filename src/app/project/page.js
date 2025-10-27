"use client";
import { useState, useEffect } from "react";
import {useRouter} from "next/navigation";
import NavBar from "@/components/NavBar";
import TodayPage from "./today/TodayPage";
import TasksPage from "./tasks/TasksPage";
import EventsPage from "./events/EventsPage";
import MembersPage from "./members/MembersPage";


export default function ProjectPage() {
	const router = useRouter();
	const topNavItems = ["All Projects", "Today", "Tasks", "Events", "Members"];
	const [activeTab, setActiveTab] = useState("Today");
	
	const [tasks, setTasks] = useState([
		{id: 0, title: "Google Auth", from: new Date(2025, 9, 24, 0), to: new Date(2025, 10, 7, 0)},
		{id: 1, title: "Main Dashboard", from: new Date(2025, 9, 31, 0), to: new Date(2025, 10, 8, 0)},
		{id: 2, title: "A Task", from: new Date(2025, 10, 2, 8), to: new Date(2025, 10, 11, 14)},
		{id: 3, title: "Other Task", from: new Date(2025, 10, 5, 8), to: new Date(2025, 10, 11, 14)},
		{id: 4, title: "Task B", from: new Date(2025, 10, 4, 0), to: new Date(2025, 10, 9, 20)},
	]);

	const [events, setEvents] = useState([
		{id: 0, title: "Google Auth Meeting", from: new Date(2025, 10, 4, 8), to: new Date(2025, 10, 4, 16)},
		{id: 1, title: "Other Meeting", from: new Date(2025, 10, 5, 12), to: new Date(2025, 10, 5, 15)},
		{id: 2, title: "Dashboard Meeting", from: new Date(2025, 10, 6, 11), to: new Date(2025, 10, 6, 15)},
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

	const handleTabClick = (tab) => {
		if (tab == "All Projects") {
			router.push("/dashboard#projects");
			return;
		}
		setActiveTab(tab);
	};


	return (
		<div className="flex flex-col w-screen h-screen bg-[#f5f7fa]">
			<div className="pt-8 pb-4 flex justify-center">
				<NavBar
					activeTab={activeTab}
					items={topNavItems}
					setActiveTab={handleTabClick}
					pillStyle={{ width: "130px" }}
					setHash={true}
					style={{marginBottom: "50px"}}
				/>
			</div>

			<main className="flex justify-center flex-1">
				{activeTab == "Today" && <TodayPage tasks={tasks} events={events}/>}
				{activeTab == "Tasks" && <TasksPage tasks={tasks} setTasks={setTasks}/>}
				{activeTab == "Events" && <EventsPage events={events} setEvents={setEvents}/>}
				{activeTab === "Members" && (
					<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
						<MembersPage />
					</div>
				)}
				
			</main>
		</div>
	);
}