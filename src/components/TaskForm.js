"use client";

import { useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function TasksForm({ tasks, setTasks }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [employeeName, setEmployeeName] = useState([]);
    const [from, setFrom] = useState(new Date());
    const [to, setTo] = useState(new Date());

    function addTask() {
        if (title == "" || to <= from) {
            return
        }

        console.log(from, to);
        setTasks(prev => [...prev, { id: prev.length, title, description, from, to }]);
        setShowModal(false);
        setTitle("");
        setDescription("");
        setFrom(new Date());
        setTo(new Date());
    }

    return (
        <Card style={{ width: "100%" }}>
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
                <div className="flex w-full justify-center">
                    <div className="flex gap-2">
                        <Button onClick={addTask} text={"Add"} />
                    </div>
                </div>
            </div>
        </Card>
    )
}