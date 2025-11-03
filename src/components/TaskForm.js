"use client";

import { useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function TasksForm({ tasks, setTasks, setShowModal }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [projectName, setProjectName] = useState("");
    const [from, setFrom] = useState(new Date());
    const [to, setTo] = useState(new Date());

    function addTask() {
        if (title.trim() === "" || to <= from) {
            return;
        }

        if (setTasks) {
            setTasks(prev => [
                ...prev,
                { id: prev.length, title, description, employeeName, from, to }
            ]);
        }
        
        if (setShowModal) {
            setShowModal(false);
        }
        
        setTitle("");
        setDescription("");
        setEmployeeName("");
        setProjectName("");
        setFrom(new Date());
        setTo(new Date());
    }

    function handleCancel() {
        if (setShowModal) {
            setShowModal(false);
        } else {
            setTitle("");
            setDescription("");
            setEmployeeName("");
            setProjectName("");
            setFrom(new Date());
            setTo(new Date());
        }
    }

    return (
        <Card style={{ width: "100%" }}>
            <div className="flex flex-col gap-[20px]">
                <h1 className="text-[30px] font-[600]">Add A Task</h1>

                {/* Title */}
                <div className="flex flex-col">
                    <div className="textInput-group">
                        <label className="label flex flex-col">
                            <h1>Title:</h1>
                            <input
                                required
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                name="title"
                                autoComplete="off"
                                className="rounded-[3px] outline outline-gray-400"
                            />
                        </label>
                    </div>
                </div>

                {/* Description */}
                <div className="flex flex-col">
                    <div className="textInput-group">
                        <label className="label flex flex-col">
                            <h1>Description:</h1>
                            <input
                                required
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                name="description"
                                autoComplete="off"
                                className="rounded-[3px] outline outline-gray-400"
                            />
                        </label>
                    </div>
                </div>

                {/* Assign To */}
                <div className="flex flex-col">
                    <div className="textInput-group">
                        <label className="label flex flex-col">
                            <h1>Assign To:</h1>
                            <input
                                required
                                type="text"
                                value={employeeName}
                                onChange={(e) => setEmployeeName(e.target.value)}
                                name="employee"
                                autoComplete="off"
                                className="rounded-[3px] outline outline-gray-400"
                            />
                        </label>
                    </div>
                </div>

                                <div className="flex flex-col">
                    <div className="textInput-group">
                        <label className="label flex flex-col">
                            <h1>Project:</h1>
                            <input
                                required
                                type="text"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                                name="employee"
                                autoComplete="off"
                                className="rounded-[3px] outline outline-gray-400"
                            />
                        </label>
                    </div>
                </div>

                {/* From */}
                <div className="flex flex-col">
                    <h1>From:</h1>
                    <input
                        type="datetime-local"
                        value={from.toISOString().slice(0, 16)}
                        onChange={(e) => setFrom(new Date(e.target.value))}
                        className="rounded-[3px] outline outline-gray-400"
                    />
                </div>

                {/* To */}
                <div className="flex flex-col">
                    <h1>To:</h1>
                    <input
                        type="datetime-local"
                        value={to.toISOString().slice(0, 16)}
                        onChange={(e) => setTo(new Date(e.target.value))}
                        className="rounded-[3px] outline outline-gray-400"
                    />
                </div>

                {/* Buttons */}
                <div className="flex w-full justify-end">
                    <div className="flex gap-2">
                        {setShowModal && (
                            <Button onClick={handleCancel} text={"Cancel"} />
                        )}
                        <Button onClick={addTask} text={"Add"} />
                    </div>
                </div>
            </div>
        </Card>
    );
}
