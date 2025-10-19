
"use client";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import PieChart from "@/components/PieChart";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaTasks } from 'react-icons/fa';
import { GoProject } from 'react-icons/go';

import DashboardProfileCard from "./DashboardProfileCard";


export default function ProfileOverview({ name, position, taskAllocated, ProjectAllocated }) {
        
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "25vw", width: "60vw" }}>
            <div style={{ display: "grid", gridTemplateColumns: "30% 70%", height: "100%", width: "100%" }}>

                {/* the part for the profile section */}
                <div style={{ padding: "10px" }}>

                    <Card style={{ height: "100%", width: "100%", padding: "10%", margin: "1%", }}>
                        <div style={{ display: "grid", height: "100%", width: "100%", position: "relative", gridTemplateRows: "10% 70% 10% 10%" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
                                <div style={{ justifySelf: "start" }}>
                                    <p>Profile</p>
                                </div>
                                <div style={{ justifySelf: "end" }}>
                                    <p><svg width="24px" height="24px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile_round [#1342]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -2159.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598" id="profile_round-[#1342]"> </path> </g> </g> </g> </g></svg></p>
                                </div>
                            </div>
                            <div style={{ display: "grid", justifyContent: "center", gridTemplateRows: "auto auto auto", rowGap: "px", marginBottom: "0%", marginTop: "30%", marginBottom: "10%" }}>
                                <div style={{ justifySelf: "center" }}>
                                    <Image src="/defaultPFP.png" alt="Profile Picture" width={80} height={80} />
                                </div>

                                <p className="center" style={{ margin: "0", textAlign: "center" }}>{name}</p>
                                <p className="center" style={{ margin: "0", textAlign: "center" }}>{position}</p>
                            </div>
                            <div className="grid" style={{ gridTemplateColumns: "auto auto", justifyContent: "center", gap: "5px" }}>
                                <div className="task" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                    <Card style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "8px",
                                        padding: "6px 14px",
                                        borderRadius: "9999px",
                                        backgroundColor: "#f8f9fa",
                                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                        width: "fit-content",
                                    }}>
                                        <FaTasks size={18} color="#333" aria-label="tasks icon" />
                                        <span style={{ fontWeight: "500", color: "#333" }}>{taskAllocated}</span>
                                    </Card>
                                </div>
                                <div className="Project" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                    <Card style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "8px",
                                        padding: "6px 14px",
                                        borderRadius: "9999px",
                                        backgroundColor: "#f8f9fa",
                                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                        width: "fit-content",
                                    }}>
                                        <GoProject size={18} color="#333" aria-label="tasks icon" />
                                        <span style={{ fontWeight: "500", color: "#333" }}>{ProjectAllocated}</span>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>


                {/* the part for the task section */}
                <div className="justify-left item-start" style={{ display: "grid", gridTemplateRows: "60% 40%", padding: "10px", margin: "1%" }}>
                    {/* add in the different type of cards the 2 top and the one bottom */}
                    <div style={{ display: "grid", gridTemplateColumns: "50% 50%", gap: "5px" }}>
                        {/* <Card style={{ height: "100%", width: "100%", overflow: "hidden" }}>
                            <div style={{ display: "grid", height: "100%", width: "100%", position: "relative", gap: "15px", gridTemplateRows: " auto auto " }}>
                                <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
                                    <div style={{ justifySelf: "start" }}>
                                        <p>Profile</p>
                                    </div>
                                    <div style={{ justifySelf: "end" }}>
                                        <p><svg width="24px" height="24px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile_round [#1342]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -2159.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598" id="profile_round-[#1342]"> </path> </g> </g> </g> </g></svg></p>
                                    </div>
                                </div>
                                <div className="grid bottom-left" style={{ lineHeight: "1", alignItems: "flex-start", bottom: "10px", left: "15px", display: "flex", flexDirection: "column", gridTemplateRows: "auto auto", rowGap: "0px", marginTop: "18%", padding: "0" }}>
                                    <span style={{ fontSize: "40px", fontFamily: "bold" }}>83%</span>
                                    <span>Tasks Completed</span>
                                </div>
                            </div>
                        </Card>
                        <Card style={{ height: "100%", width: "100%", padding: "10px" }}>
                            <div className="justify-left item-start">
                                <p>test2</p>
                            </div>
                        </Card> */}
                        <DashboardProfileCard title={"Task Summary"} label={"Task progress"} result={"83%"} Icon = {<FaTasks/>}/>
                        <DashboardProfileCard title={"Project Summary"} label={"Project progress"} result={"53%"} Icon = {<GoProject/>}/>
                    </div>
                    <div style={{ width: "100%", marginTop: "1%" }}>
                        <Card style={{ height: "100%", width: "100%" }}>
                            <div className="justify-left item-start">
                                <p>test2</p>
                            </div>
                        </Card>
                    </div>

                </div>

            </div >
        </div >
    )
}