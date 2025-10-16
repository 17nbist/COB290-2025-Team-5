"use client";
import Card from "@/components/Card";
import NavBar  from "@/components/NavBar";
import PieChart from "@/components/PieChart";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const navItems = ["Overview", "To-Do", "Members"]
  const [activeTab, setActiveTab] = useState(navItems[0]);

  useEffect(() => {
      const handleHashChange = () => {
        const hash = window.location.hash.replace("#", "");
        const capitalizedHash = hash.charAt(0).toUpperCase() + hash.slice(1);
        if (navItems.includes(capitalizedHash)) {
          setActiveTab(capitalizedHash);
        }
      };
  
      // Set initial tab from URL hash
      handleHashChange();
  
      // Listen for hash changes (back/forward buttons)
      window.addEventListener("hashchange", handleHashChange);
  
      // Cleanup
      return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);
    
  return (
    <div style={{display: "flex", justifyContent : "center", marginTop : "100px"}}>
      <NavBar items={navItems} activeTab={activeTab} setActiveTab={setActiveTab} setHash={true}/>
        
      
    </div>
  );
}