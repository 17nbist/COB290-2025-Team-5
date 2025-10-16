"use client";
import Card from "@/components/Card";
import NavBar  from "@/components/NavBar";
import PieChart from "@/components/PieChart";
import Calendar from "@/components/Calendar";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const navItems = ["Today", "Projects", "Forum", "Requests"]
  const [activeTab, setActiveTab] = useState(navItems[0]);
  var InputDataExample = {
    "labels" : ["Late", "On time", "Early"],
    "dataSetLabel" : "submission(%)",
    "data" : [17, 60, 23],
    "title" : "Submission Timing"
  }

  const [tasks, setTasks] = useState([
    {id: 0, title: "Task 1", from: new Date(2025, 9, 14, 8), to: new Date(2025, 9, 23, 14)},
    {id: 1, title: "Task 2", from: new Date(2025, 9, 8, 0), to: new Date(2025, 9, 15, 0)},
    {id: 2, title: "Task 3", from: new Date(2025, 9, 13, 8), to: new Date(2025, 9, 15, 14)},
    {id: 3, title: "Task 4", from: new Date(2025, 9, 15, 0), to: new Date(2025, 9, 17, 0)},
    {id: 4, title: "Task 5", from: new Date(2025, 9, 15, 0), to: new Date(2025, 12, 17, 0)},
  ]);
  
  return (
    <div style={{display: "flex", justifyContent : "center", marginTop : "100px"}}>
      {/* <NavBar items={navItems} activeTab={activeTab} setActiveTab={setActiveTab}/> */}
      {/* <PieChart InputData={InputDataExample}></PieChart> */}
      <Calendar tasks={tasks} />
    </div>
  );
}