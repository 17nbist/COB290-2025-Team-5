import Card from "@/components/Card";
import { FaTasks } from 'react-icons/fa';
import { GoProject } from 'react-icons/go';
import Image from "next/image";
import PieChartWork from "@/components/PieChartWork";

export default function DashboardProfileCard({ Title, Name, Position, TaskAllocated, ProjectAllocated, ProfilePicLink }) {
    return (

        <>
            <Card
                style={{
                    height: "100%",
                    width: "100%",
                    maxWidth: "400px",
                    margin: "0 auto",
                }}
                >
                <div
                    style={{
                    display: "grid",
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    gridTemplateRows: "auto 1fr auto auto",
                    
                    textAlign: "center",
                    }}
                >
                    {/* Top Bar */}
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}
                    >
                    <p style={{ fontSize: "1rem", fontWeight: 600 }}>{Title}</p>
                    <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 20 20"
                        fill="#000000"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998Z" />
                    </svg>
                    </div>

                    {/* Middle Section */}
                    <div
                    style={{
                        display: "grid",
                        justifyContent: "center",
                        margin: "1rem 0",
                        rowGap: "0.5rem",
                    }}
                    >
                    <div style={{ justifySelf: "center" }}>
                        <Image
                        src={ProfilePicLink}
                        alt="Profile Picture"
                        width={100}
                        height={100}
                        style={{
                            borderRadius: "50%",
                            objectFit: "cover",
                            maxWidth: "100%",
                            height: "auto",
                        }}
                        />
                    </div>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: "1.1rem" }}>{Name}</p>
                    <p style={{ margin: 0, color: "#555" }}>{Position}</p>
                    </div>

                    {/* Bottom Info */}
                    <div
                    className="grid"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "8px",
                        paddingBottom: "12px", 
                        paddingTop: "4px", 
                        boxSizing: "border-box",
                    }}
                    >
                    <div
                        style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        }}
                    >
                        <Card
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                            padding: "6px 14px",
                            borderRadius: "9999px",
                            backgroundColor: "#f8f9fa",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            width: "fit-content",
                            fontSize: "0.9rem",
                        }}
                        >
                        <FaTasks size={16} color="#333" />
                        <span>{TaskAllocated}</span>
                        </Card>
                    </div>

                    <div
                        style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        }}
                    >
                        <Card
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                            padding: "6px 14px",
                            borderRadius: "9999px",
                            backgroundColor: "#f8f9fa",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            width: "fit-content",
                            fontSize: "0.9rem",
                        }}
                        >
                        <GoProject size={16} color="#333" />
                        <span>{ProjectAllocated}</span>
                        </Card>
                    </div>
                    </div>
                </div>
                </Card>

        </>
    )
}