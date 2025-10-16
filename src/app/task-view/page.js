"use client";
import Card from "@/components/Card";
import NavBar  from "@/components/NavBar";
import PieChart from "@/components/PieChart";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const navItems = ["Overview", "To-Do", "Members"]
  const [activeTab, setActiveTab] = useState(navItems[0]);
    
  return (
    <div style={{display: "flex", justifyContent : "center", marginTop : "100px"}}>
      <NavBar items={navItems} activeTab={activeTab} setActiveTab={setActiveTab}/>
    
      {/* <PieChart InputData={InputDataExample}></PieChart> */}
    </div>
  );
}