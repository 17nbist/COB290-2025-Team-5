"use client";
import Calendar from "@/components/Calendar/Calendar";
import { useState } from "react";
import Modal from "@/components/Modal.js";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";

export default function TasksPage({tasks, projectId, projectMembers}) {
	const { user, addToAllTasks, users } = useAuth();
	const router = useRouter();
	const [showModal, setShowModal] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [employeeName, setEmployeeName] = useState([]);
	const [from, setFrom] = useState(new Date());
	const [to, setTo] = useState(new Date());
	const [selectedMembers, setSelectedMembers] = useState([]);
	const [memberSearch, setMemberSearch] = useState("");
	
	const filteredMembers = projectMembers.filter(e => e.name.toLowerCase().includes(memberSearch.toLowerCase())).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

	function addTask() {
		if (title == "" || to <= from) {
			return
		}
		
		addToAllTasks({title, description, from, to, projectId, members: selectedMembers});
		setShowModal(false);
		setTitle("");
		setDescription("");
		setFrom(new Date());
		setTo(new Date());
		setSelectedMembers([]);
	}

	function handleTaskClick (task) {
		router.push(`/task/${task.id}`);
	};


	return (
		<div style={{width: "80%", height: "80%"}}>
			<Calendar tasks={tasks} addOnClick={user?.role == "manager" && (() => setShowModal(true))} taskOnClick={handleTaskClick} excludeNav={["8h"]}/>
			<Modal isOpen={showModal}> 
				<Card style={{width: "40%"}}>
					<div className="flex flex-col gap-[20px]">
						<h1 className="text-[30px] font-[600]">Add A Task</h1>
						<div className="flex flex-col">
							<div className="textInput-group">
								<input required="" placeholder="Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="text" autoComplete="off" className="textInput" />
								<label className="label">Title</label>
							</div>
						</div>
						<div className="flex flex-col">
							<div className="textInput-group">
								<input required="" placeholder="Description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} name="text" autoComplete="off" className="textInput" />
								<label className="label">Description</label>
							</div>
						</div>
						<div className="flex flex-col">
							<div className="textInput-group">
								<input required="" placeholder="Assign To" type="text" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} name="text" autoComplete="off" className="textInput" />
								<label className="label">Assign To</label>
							</div>
						</div>
						<div className="flex flex-col">
							<h1>From:</h1>
							<input
								type="datetime-local"
								value={from.toISOString().slice(0, 16)}
								onChange={(e) => setFrom(new Date(e.target.value))}
								className="rounded-[3px] outline outline-gray-400"
							/>
						</div>

						<div className="flex flex-col">
							<h1>To:</h1>
							<input
								type="datetime-local"
								value={to.toISOString().slice(0, 16)}
								onChange={(e) => setTo(new Date(e.target.value))}
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
									filteredMembers.map(member => (
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
								<Button onClick={() => setShowModal(false)} text={"Cancel"} />
								<Button onClick={addTask} text={"Add"} />
							</div>
						</div>
					</div>
				</Card>
			</Modal>
		</div>
	)
}