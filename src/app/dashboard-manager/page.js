"use client";
import ProjectOverview from "./ProjectOverview";
import PieChart from "@/components/PieChart";
export default function Home() {
      var InputDataExample = {
    "labels" : ["Andrew H", "Rose S", "Mohammed K", "Tanaka M", "Ming Y"],
    "dataSetLabel" : "Tasks Assigned",
    "data" : [7,13,40, 3, 14, 34],
    "title" : "Employee workload"
      


}
  return (
    <div style={{ display: "grid",justifyItems: "center", justifyContent:"center", gridTemplateColumns: "70% 30%"}}>
       <div style={{ display: "grid",justifyItems: "center", justifyContent:"center", gridTemplateColumns: "auto auto", gap: "5px"}}>

      <ProjectOverview />
      <ProjectOverview />
    </div>
    
    <PieChart inputData={InputDataExample}/>
    </div>
  );
}