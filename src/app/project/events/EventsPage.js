"use client";
import Calendar from "@/components/Calendar/Calendar";
import { useState } from "react";
import Modal from "@/components/Modal.js";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function EventsPage({events, setEvents}) {
	const [showModal, setShowModal] = useState(false);
	const [title, setTitle] = useState("");
	const [from, setFrom] = useState(new Date());
	const [to, setTo] = useState(new Date());

	function addEvent() {
		if (title == "" || to <= from) {
			return
		}
		
		setEvents(prev => [...prev, {id:prev.length, title, from, to}]);
		setShowModal(false);
	}

	return (
		<div style={{width: "80%", height: "80%", backgroundColor: "#fff"}}>
			<Calendar tasks={events} startRangeType={"Day"} addOnClick={() => setShowModal(true)} excludeNav={["Year"]}/>
			<Modal isOpen={showModal}> 
				<Card style={{width: "40%"}}>
					<div className="flex flex-col gap-[20px]">
						<h1 className="text-[30px] font-[600]">Add An Event</h1>
						<div className="flex flex-col">
							<h1>Title:</h1>
							<input className="rounded-[3px] outline outline-gray-400" value={title} onChange={(e) => setTitle(e.target.value)} type="text"/>
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
								<Button onClick={addEvent} text={"Add"}/>
							</div>
						</div>
					</div>
				</Card>
			</Modal>
		</div>
	)
}