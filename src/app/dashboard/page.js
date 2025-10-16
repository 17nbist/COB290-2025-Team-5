"use client";
import Card from "@/components/Card";
import NavBar  from "@/components/NavBar";
import PieChart from "@/components/PieChart";
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
  return (
    <div style={{display: "flex", justifyContent : "center", marginTop : "100px"}}>
      {/* <NavBar items={navItems} activeTab={activeTab} setActiveTab={setActiveTab}/>
      */}
      <PieChart InputData={InputDataExample}></PieChart>
    </div>
  );
}