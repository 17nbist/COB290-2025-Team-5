
"use client";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import PieChart from "@/components/PieChart";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaTasks } from 'react-icons/fa';
import { GoProject } from 'react-icons/go';
import DashCalendar from "@/components/Calendar/DashCalendar";

import DashboardProfileCard from "./DashboardProfileCard";
import DashboardCard from "./DashboardCard";


export default function ProfileOverview({events}) {
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "90%", width: "70%", flexDirection: "column"}}>
            <div style={{ display: "grid", gridTemplateColumns: "30% 70%", height: "65%", width: "100%", flex: "flex-1" }}>
                <div style={{ padding: "10px" }}>
                     <DashboardProfileCard Title={"Profile"} Name={"Mike Oxlarge"} Position={"CEO"} TaskAllocated={12} ProjectAllocated={18} ProfilePicLink={"/defaultPFP.png"} />
                </div>


                {/* the part for the task section */}
                <div className="justify-left item-start" style={{ display: "grid", gridTemplateRows: "60% 40%", padding: "10px", margin: "1%" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "50% 50%", gap: "5px" }}>
                        <DashboardCard title={"Task Summary"} label={"Task progress"} result={"83%"} Icon={<FaTasks />} />
                        <DashboardCard title={"Project Summary"} label={"Project progress"} result={"53%"} Icon={<GoProject />} />
                    </div>
                    <div style={{ width: "100%", marginTop: "1%" }}>
                        <Card style={{ height: "100%", width: "100%", color: "black" }}>
                            <div className="justify-left item-start">
                                <p>test2</p>
                            </div>
                        </Card>
                    </div>

                </div>
            </div >
            <div className="flex-1 h-full w-full">
                <DashCalendar tasks={events}/>
            </div>
        </div >
    )
}