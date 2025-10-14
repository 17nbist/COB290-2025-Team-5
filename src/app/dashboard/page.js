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
    "data" : [17,60,23],
    "title" : "Submission Timing"
  }

  const tasks = [
    {id: 0, title: "Task 1", from: new Date(), from: new Date("2025-10-16")},
  ]
  return (
    <div style={{display: "flex", justifyContent : "center", marginTop : "100px"}}>
      {/* <NavBar items={navItems} activeTab={activeTab} setActiveTab={setActiveTab}/>
      */}
      {/* <PieChart InputData={InputDataExample}></PieChart> */}
      <Calendar />
    </div>
  );
}