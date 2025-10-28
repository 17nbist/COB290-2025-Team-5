"use client";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import { useAuth } from "@/lib/AuthContext";

export default function ProjectsPage() {
	const { user } = useAuth();
	const [searchVal, setSearchVal] = useState("");

	useEffect(() => {
		document.title = 'Projects | Make-It-All';
  }, []);

	const projects = [
		{id: 0, title: "Mobile App", description: "Mobile App for services", creationDate: new Date(2025, 9, 18)},
		{id: 1, title: "Website", description: "Website for merchandise",  creationDate: new Date(2025, 8, 20)},
		{id: 2, title: "Finance Simulator", description: "Back-testing for investing", creationDate: new Date(2025, 9, 18)},
		{id: 3, title: "Finance Simulator Update", description: "Update for finance simulator", creationDate: new Date(2025, 9, 18)},
	];

	const filteredProjects = projects.filter(p => searchVal == "" || p.title.toLowerCase().includes(searchVal.toLowerCase()));

	const filterTabs = ["Name", "Group", "Upcoming"];
    const [activeFilterTab, setActiveFilterTab] = useState("Name");

	return (
		<div className="flex flex-col w-[1200px] flex-wrap items-center">
			<div className="flex mb-[30px] items-center justify-between w-full">
				<div className="flex justify-end flex-1 gap-[20px] flex-col w-full">
					<div className="flex">
						<SearchBar onSearch={(e) => setSearchVal(e)}/>
						{user?.role == "manager" && <Button outerStyle={{width: "47px", height: "47px"}} textStyle={{fontSize: "30px"}} text={"+"}/>}
					</div>
					<NavBar
					items={filterTabs}
					activeTab={activeFilterTab}
					setActiveTab={setActiveFilterTab}
					/>
				</div>
			</div>


			<div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", width: "100%"}}>
				{
					filteredProjects.map(p =>
						<ProjectCard key={p.id} title={p.title} description={p.description} creationDate={p.creationDate}/>
					)
				}
			</div>
		</div>
	)
}

function ProjectCard({title, description, creationDate}) {
	const router = useRouter();

	function handleClick() {
		router.push("/project");
	}
	return (
		<Card style={{width: "100%", height: "100%", cursor: "pointer"}} onClick={handleClick}>
			<h1 className="text-[24px] font-[700] mb-[5px]">{title}</h1>
			<h1 className="text-[16px] font-[500] ">{description}</h1>
			<h1 className="text-[12px] font-[400]  ">Created on {creationDate.toDateString()}</h1>
		</Card>
	);
}
