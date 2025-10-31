"use client";
import { useState, useEffect, use } from "react";
import {useRouter} from "next/navigation";
import NavBar from "@/components/NavBar";
import TodayPage from "./today/TodayPage";
import TasksPage from "./tasks/TasksPage";
import EventsPage from "./events/EventsPage";
import MembersPage from "./members/MembersPage";
import { useAuth } from "@/lib/AuthContext";
import { useParams } from "next/navigation";


export default function ProjectPage() {
	const { user, allProjects, allTasks, allEvents, allUsers } = useAuth();
	const router = useRouter();
	const topNavItems = ["All Projects", "Today", "Tasks", "Events", "Members"];
	const [activeTab, setActiveTab] = useState("Today");
	const [errText, setErrText] = useState("");
	const projectId = parseInt(useParams().id);
	const [project, setProject] = useState(null);

	const adminPerms = user?.role == "manager" || user?.id == project?.leaderId;

	const tasks = allTasks?.filter(t => 
		t.projectId == project?.id && 
		(adminPerms || t.members?.includes(user?.id))) || [];

	const events = allEvents?.filter(e => 
		e.projectId == project?.id && 
		(adminPerms || e.members?.includes(user?.id))) || [];

	const projectMembers = allUsers?.filter(u => project?.members?.includes(u?.id));


	useEffect(() => {
		if (!user || !allProjects || !allTasks || !allEvents || !allUsers) {
			return;
		}

		const currentProject = allProjects.find(p => p.id == projectId);
		if (!currentProject || !currentProject.members.includes(user.id)){
			setErrText("No access or project doesn't exist");
			return;
		}

		setProject(currentProject);
		setErrText(null);
	}, [allProjects, allTasks, allEvents, user]);

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

	useEffect(() => {
		document.title = 'Active Project | Make-It-All';
  }, []);

	const handleTabClick = (tab) => {
		if (tab == "All Projects") {
			router.push("/dashboard#projects");
			return;
		}
		setActiveTab(tab);
	};

	if (errText) {
		return(
			<div className="flex flex-col w-screen h-screen bg-[#d2d2d2] dark:bg-[#303640]">
				<h1>{errText}</h1>
			</div>
		)
	}


	return (
		<div className="flex flex-col w-screen h-screen bg-[#d2d2d2] dark:bg-[#303640]">
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
				{activeTab == "Tasks" && <TasksPage tasks={tasks} project={project} projectMembers={projectMembers} adminPerms={adminPerms}/>}
				{activeTab == "Events" && <EventsPage events={events} project={project} projectMembers={projectMembers} adminPerms={adminPerms}/>}
				{activeTab === "Members" && (
					<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
						<MembersPage members={projectMembers} project={project} adminPerms={adminPerms}/>
					</div>
				)}
			</main>
		</div>
	);
}
