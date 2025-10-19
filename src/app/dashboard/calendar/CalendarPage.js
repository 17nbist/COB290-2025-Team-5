"use client";
import Calendar from "@/components/Calendar/Calendar.js";
import { useState } from "react";
import { useEffect } from 'react';
export default function CalendarPage() {
  useEffect(() => {
    document.title = 'Calendar | Make-It-All';
  }, []);
    const [tasks, setTasks] = useState([
        {id: 0, title: "Event 1", from: new Date(2025, 9, 14, 8), to: new Date(2025, 9, 23, 14)},
        {id: 1, title: "Event 2", from: new Date(2025, 9, 8, 0), to: new Date(2025, 9, 15, 0)},
        {id: 2, title: "Event 3", from: new Date(2025, 9, 13, 8), to: new Date(2025, 9, 15, 14)},
        {id: 3, title: "Event 4", from: new Date(2025, 9, 1, 0), to: new Date(2025, 10, 1, 0)},
        {id: 4, title: "Event 5", from: new Date(2025, 9, 15, 0), to: new Date(2025, 12, 17, 0)}, 
    ]);
    return (
        <div style={{height: "900px", marginTop: "30px"}}>
            <Calendar tasks={tasks} startRangeType="Day"/>
        </div>
    );
}
