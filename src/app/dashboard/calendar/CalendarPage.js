/*"use client";
import Calendar from "@/components/Calendar/Calendar.js";
import { useState } from "react";
import { useEffect } from 'react';
export default function CalendarPage({events}) {
  useEffect(() => {
    document.title = 'Calendar | Make-It-All';
  }, []);

  return (
    <div style={{width: "80%", height: "80%", marginTop: "30px"}}>
        <Calendar tasks={events} startRangeType="Day"/>
    </div>
  );
}
///////
"use client";
import Calendar from "@/components/Calendar/Calendar.js";
import { useEffect } from "react";

export default function CalendarPage() {
  useEffect(() => {
    document.title = "Calendar | Make-It-All";
  }, []);

  // Sample events for testing
  const events = [
  {
    id: 1,
    title: "Team Meeting",
    from: new Date(2025, 9, 24, 9, 0), // Oct 24, 2025 9:00 AM
    to: new Date(2025, 9, 24, 10, 0),
    },
    {
    id: 2,
    title: "Project Deadline",
    from: new Date(2025, 9, 25, 0, 0),
    to: new Date(2025, 9, 25, 23, 59),
    },
    {
    id: 3,
    title: "Code Review",
    from: new Date(2025, 9, 24, 13, 0),
    to: new Date(2025, 9, 24, 15, 0),
    },
  ];

  return (
    <div style={{ width: "80%", height: "80%", marginTop: "30px" }}> <Calendar tasks={events} startRangeType="Day" /> </div>
  );
}
.....
"use client";
import Calendar from "@/components/Calendar/Calendar.js";
import { useEffect } from "react";
import { useAuth } from "@/lib/AuthContext.js"; // ✅ import your hook 

export default function CalendarPage() {
  const { user, data } = useAuth(); // Get user and data from context

  useEffect(() => {
  document.title = "Calendar | Make-It-All";
  }, []);
  console.log("userAuth", data.events);
   // Sample events for testing
  const events = [
  {
    id: 1,
    title: "Team Meeting",
    from: new Date(2025, 9, 24, 9, 0), // Oct 24, 2025 9:00 AM
    to: new Date(2025, 9, 24, 10, 0),
    },
    {
    id: 2,
    title: "Project Deadline",
    from: new Date(2025, 9, 25, 0, 0),
    to: new Date(2025, 9, 25, 23, 59),
    },
    {
    id: 3,
    title: "Code Review",
    from: new Date(2025, 9, 24, 13, 0),
    to: new Date(2025, 9, 24, 15, 0),
    },
  ];

  console.log("harcord",events);

  return (
    <div
      style={{
      width: "80%",
      height: "80%",
      marginTop: "30px",
      }}
    >
  <Calendar tasks={data.events} startRangeType="Day" /> </div>
  );
}
*/

"use client";

import Calendar from "@/components/Calendar/Calendar.js";
import { useEffect } from "react";
import { useAuth } from "@/lib/AuthContext.js";

export default function CalendarPage() {
const { user, data, loading } = useAuth();

useEffect(() => {
  document.title = "Calendar | Make-It-All";
  }, []);

  // 🧠 Prevent rendering before data is ready
  if (loading) return <p>Loading...</p>;

  if (!user) return <p>Please log in to view your calendar.</p>;

  // 🧩 Fallback if data or events missing
  const events = data?.events?.map(e => ({
    ...e,
    from: new Date(e.from),
    to: new Date(e.to),
    })) || [];

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
    > <Calendar tasks={events} startRangeType="Month" /> </div>
    
  );
}


