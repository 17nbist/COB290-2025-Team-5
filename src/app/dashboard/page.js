"use client";
import Card from "@/components/Card";
import NavBar  from "@/components/NavBar";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const navItems = ["Today", "Projects", "Forum", "Requests"]
  const [activeTab, setActiveTab] = useState(navItems[0]);

  return (
    <div style={{display: "flex", justifyContent : "center", marginTop : "100px"}}>
      <NavBar items={navItems} activeTab={activeTab} setActiveTab={setActiveTab}/>
    </div>
  );
}