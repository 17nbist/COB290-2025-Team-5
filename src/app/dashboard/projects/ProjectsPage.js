"use client";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import { useAuth } from "@/lib/AuthContext";

export default function ProjectsPage({projects, employees}) {
	const { user, allProjects } = useAuth();
	const [searchVal, setSearchVal] = useState("");


	const filteredProjects = projects.filter(p => searchVal == "" || p.title.toLowerCase().includes(searchVal.toLowerCase()));

	const filterTabs = ["Name", "Group", "Upcoming"];
    const [activeFilterTab, setActiveFilterTab] = useState("Name");

	const [showModal, setShowModal] = useState(false);

	return (
		<div className="flex flex-col w-[1200px] flex-wrap items-center">
			<div className="flex mb-[30px] items-center justify-between w-full">
				<div className="w-6xl mx-auto px-4 py-6">
					<div className="mb-6 flex">
						<SearchBar onSearch={(e) => setSearchVal(e)}/>
						{user?.role == "manager" && <Button outerStyle={{width: "47px", height: "47px"}} textStyle={{fontSize: "30px"}} text={"+"} onClick={() => setShowModal(true)}/>}
						{user?.role == "manager" && <Button outerStyle={{ width: "47px", height: "47px" }} textStyle={{ fontSize: "30px" }} text={"+"}/>}
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
						<ProjectCard key={p.id} project={p}/>
					)
				}
			</div>

			<AddProjectModal showModal={showModal} setShowModal={setShowModal} employees={employees}/>
		</div>
	)
}

function AddProjectModal({showModal, setShowModal, employees}) {
	const { user, addToAllProjects } = useAuth();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [endDate, setEndDate] = useState(new Date());
	const [selectedMembers, setSelectedMembers] = useState([]);
	const [memberSearch, setMemberSearch] = useState("");
	
	const filteredEmployees = employees
		.filter(e => e.name.toLowerCase().includes(memberSearch.toLowerCase()))
		.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

	function addProject() {
		if (title == "" || endDate <= new Date()) {
			return
		}
		
		addToAllProjects({title, description, creationDate: new Date(), endDate, members: [...selectedMembers, user.id]});
		setShowModal(false);
		setTitle("");
		setDescription("");
		setEndDate(new Date());
		setSelectedMembers([]);
	}


	return (
		<Modal isOpen={showModal}> 
			<Card style={{width: "40%"}}>
				<div className="flex flex-col gap-[20px]">
					<h1 className="text-[30px] font-[600]">Add A Project</h1>
					<div className="flex flex-col">
						<h1>Title:</h1>
						<input className="rounded-[3px] outline outline-gray-400" value={title} onChange={(e) => setTitle(e.target.value)} type="text"/>
					</div>
					<div className="flex flex-col">
						<h1>Description:</h1>
						<textarea className="rounded-[3px] outline outline-gray-400" value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
					</div>

					<div className="flex flex-col">
						<h1>End Date:</h1>
						<input
							type="datetime-local"
							value={endDate.toISOString().slice(0, 16)}
							onChange={(e) => setEndDate(new Date(e.target.value))}
							className="rounded-[3px] outline outline-gray-400"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<h1>Members ({selectedMembers.length} selected)</h1>
						<input 
							className="rounded-[3px] outline outline-gray-400"
							type="text"
							placeholder="Search"
							value={memberSearch}
							onChange={e => setMemberSearch(e.target.value)}
						/>
						<div className="h-[150px] overflow-auto">
							{
								filteredEmployees.map(member => (
										<label key={member.id} className="flex items-center gap-2">
											<input
											type="checkbox"
											checked={selectedMembers.includes(member.id)}
											onChange={e => {
												if (e.target.checked) {
													setSelectedMembers(prev => [...prev, member.id]);
												}
												
												else {
													setSelectedMembers(prev => prev.filter(x => x !== member.id));
												}
											}}
											/>
											{member?.name || `User ${id}`}
										</label>

								))
							}
						</div>
					</div>
					<div className="flex w-full justify-end">
						<div className="flex gap-2">
							<Button onClick={() => setShowModal(false)} text={"Cancel"}/>
							<Button onClick={addProject} text={"Add"}/>
						</div>
					</div>
				</div>
			</Card>
		</Modal>
	)
}

function ProjectCard({project}) {
	const router = useRouter();

	function handleClick() {
		router.push(`/project/${project.id}`);
	}

	return (
		<Card style={{width: "100%", height: "100%", cursor: "pointer"}} onClick={handleClick}>
			<h1 className="text-[24px] font-[700] mb-[5px]">{project.title}</h1>
			<h1 className="text-[16px] font-[500] ">{project.description}</h1>
			<h1 className="text-[12px] font-[400]  ">Created on {project.creationDate.toDateString()}</h1>
		</Card>
	);
}
