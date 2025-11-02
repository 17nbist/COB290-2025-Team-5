"use client";

import Calendar from "@/components/Calendar/Calendar.js";
import { useEffect } from "react";
import { useAuth } from "@/lib/AuthContext.js";

export default function CalendarPage({events}) {
  useEffect(() => {
    document.title = "Calendar | Make-It-All";
  }, []);

  const colorPalette = [
    "#FFB3BA",
    "#BAE1FF",
    "#BAFFC9",
    "#FFFFBA",
    "#D7BAFF",
  ];

  // Assign a color to each event (cyclically)
  const coloredEvents = events.map((event, index) => ({
    ...event,
    color: colorPalette[index % colorPalette.length],
  }));
  
  console.log("hey pls");
  console.log(events);
  
  return (
    <div
      style={{
      width: "80%",
      height: "80%",
      marginTop: "30px",
      }}
    > 
      <Calendar tasks={events} startRangeType="Day" excludeNav={["Year", "Month"]}/> 
    
    </div>
    
  );
}


