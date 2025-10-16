"use client";
import Calendar from "@/components/Calendar.js";
import { useState } from "react";
export default function CalendarPage() {
    const [tasks, setTasks] = useState([
        {id: 0, title: "Task 1", from: new Date(2025, 9, 14, 8), to: new Date(2025, 9, 23, 14)},
        {id: 1, title: "Task 2", from: new Date(2025, 9, 8, 0), to: new Date(2025, 9, 15, 0)},
        {id: 2, title: "Task 3", from: new Date(2025, 9, 13, 8), to: new Date(2025, 9, 15, 14)},
        {id: 3, title: "Task 4", from: new Date(2025, 9, 15, 0), to: new Date(2025, 9, 17, 0)},
        {id: 4, title: "Task 5", from: new Date(2025, 9, 15, 0), to: new Date(2025, 12, 17, 0)},
    ]);
    return (
        <div style={{width: "1250px", height: "900px", marginTop: "30px"}}>
            <Calendar tasks={tasks}/>
        </div>
    );
}