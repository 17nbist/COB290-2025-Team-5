"use client";
import ProjectOverview from "./ProjectOverview";
import PieChart from "@/components/PieChart";
import Card from "@/components/Card";
const InputDataExample = {
  "labels": ["Andrew H", "Rose S", "Mohammed K", "Tanaka M", "Ming Y"],
  "dataSetLabel": "Tasks Assigned",
  "data": [7, 13, 40, 3, 14, 34],
  "title": "Employee workload"

}
export default function Home() {

  return (
    <div style={{ display: "grid", justifyItems: "center", justifyContent: "center", gridTemplateColumns: "70% 30%", backgroundColor: "white", minHeight: "100vh", width: "100vw" }}>
      <div style={{ display: "grid", justifyItems: "center", justifyContent: "center", gridTemplateRows: "40% 60%" }}>
        {/* project section */}
        <div style={{ display: "grid", justifyItems: "center", justifyContent: "center", gridTemplateColumns: "auto auto", gap: "5px" }}>
          <ProjectOverview />
          <ProjectOverview />
        </div>
        {/* analytics */}
        <div style={{ display: "grid", justifyItems: "center", justifyContent: "center", alignItems: "center" }}>this is analytics</div>
      </div>

      <div style={{ display: "grid", justifyItems: "center", justifyContent: "center", gridTemplateRows: "40% 60%", backgroundColor: "smoke" }}>
        <Card style={{ backgroundColor: "#f5f5f5" }}>
          <PieChart inputData={InputDataExample} />
        </Card>
        <div style={{ display: "grid", justifyItems: "center", justifyContent: "center", alignItems: "center" }}>this is the chatbot</div>
      </div>
    </div>
  );
}