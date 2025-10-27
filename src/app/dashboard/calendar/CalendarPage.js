"use client";

import Calendar from "@/components/Calendar/Calendar.js";
import { useEffect } from "react";
import { useAuth } from "@/lib/AuthContext.js";

export default function CalendarPage({events}) {

  useEffect(() => {
    document.title = "Calendar | Make-It-All";
    }, []);

  const events2 = [
  {
    id: 0,
    title: "Team Meeting",
    from: new Date(2025, 9, 24, 9, 0), // Oct 24, 2025 9:00 AM
    to: new Date(2025, 9, 24, 10, 0),
    },
    {
    id: 1,
    title: "Project Deadline",
    from: new Date(2025, 9, 25, 0, 0),
    to: new Date(2025, 9, 25, 23, 59),
    },
    {
    id: 2,
    title: "Code Review",
    from: new Date(2025, 9, 24, 13, 0),
    to: new Date(2025, 9, 24, 15, 0),
    },
  ];

  console.log("Loaded events:", events);

  return (
    <div
    style={{
    width: "80%",
    height: "80%",
    marginTop: "30px",
    }}
    > <Calendar tasks={events} startRangeType="Day" excludeNav={"Year"}/> </div>
    
  );
}


