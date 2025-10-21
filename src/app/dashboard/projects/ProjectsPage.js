"use client";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NavBar from "@/components/NavBar";

export default function ProjectsPage() {
	const [searchVal, setSearchVal] = useState("");
	const projects = [
		{id: 0, title: "Mobile App", description: "Mobile App for services", creationDate: new Date(2025, 9, 18)},
		{id: 1, title: "Website", description: "Website for merchandise",  creationDate: new Date(2025, 8, 20)},
		{id: 2, title: "Finance Simulator", description: "Back-testing for investing", creationDate: new Date(2025, 9, 18)},
		{id: 3, title: "Finance Simulator Update", description: "Update for finance simulator", creationDate: new Date(2025, 9, 18)},
	];

	const filterTabs = ["Name", "Group", "Upcoming"];
    const [activeFilterTab, setActiveFilterTab] = useState("Name");

	return (
		<div className="flex flex-col w-[1200px] flex-wrap items-center">
			<div className="flex mb-[30px] items-center justify-between w-full">
				{/* Centered title */}
				<h1 className="text-[24px] font-[700] flex-1 text-center">Projects</h1>

				{/* Search + Filters group (aligned to right but slightly inward) */}
				<div className="flex items-center justify-end flex-1 gap-[20px] mr-[40px]">
					<SearchBar />
					<NavBar
					items={filterTabs}
					activeTab={activeFilterTab}
					setActiveTab={setActiveFilterTab}
					/>
				</div>
			</div>

			
			<div className="flex gap-[25px] w-[1100px] flex-wrap justify-between">
				{
					projects.map(p => 
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
		<Card style={{width: "350px", cursor: "pointer"}} onClick={handleClick}>
			<h1 className="text-[24px] font-[700] mb-[5px]">{title}</h1>
			<h1 className="text-[16px] font-[500] text-[#4B5563]">{description}</h1>
			<h1 className="text-[12px] font-[400] text-[#6B7280]">Created on {creationDate.toDateString()}</h1>
		</Card>
	);
}