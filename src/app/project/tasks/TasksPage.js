"use client";
import Calendar from "@/components/Calendar/Calendar";
import { useState } from "react";
import Modal from "@/components/Modal.js";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";

export default function TasksPage({tasks, setTasks}) {
	const { user } = useAuth();
	const router = useRouter();
	const [showModal, setShowModal] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [from, setFrom] = useState(new Date());
	const [to, setTo] = useState(new Date());

	function addTask() {
		if (title == "" || to <= from) {
			return
		}
		
		console.log(from, to);
		setTasks(prev => [...prev, {id:prev.length, title, description, from, to}]);
		setShowModal(false);
		setTitle("");
		setDescription("");
		setFrom(new Date());
		setTo(new Date());
	}

	function handleTaskClick (task) {
		localStorage.setItem("selectedTask", JSON.stringify(task));
		router.push("/task-view");
	};


	return (
		<div style={{width: "80%", height: "80%", backgroundColor: "#fff"}}>
			<Calendar tasks={tasks} addOnClick={user?.role == "manager" && (() => setShowModal(true))} taskOnClick={ handleTaskClick} excludeNav={["8h"]}/>
			<Modal isOpen={showModal}> 
				<Card style={{width: "40%"}}>
					<div className="flex flex-col gap-[20px]">
						<h1 className="text-[30px] font-[600]">Add A Task</h1>
						<div className="flex flex-col">
							<h1>Title:</h1>
							<input className="rounded-[3px] outline outline-gray-400" value={title} onChange={(e) => setTitle(e.target.value)} type="text"/>
						</div>
						<div className="flex flex-col">
							<h1>Description:</h1>
							<textarea className="rounded-[3px] outline outline-gray-400" value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
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
						<div className="flex w-full justify-end">
							<div className="flex gap-2">
								<Button onClick={() => setShowModal(false)} text={"Cancel"}/>
								<Button onClick={addTask} text={"Add"}/>
							</div>
						</div>
					</div>
				</Card>
			</Modal>
		</div>
	)
}