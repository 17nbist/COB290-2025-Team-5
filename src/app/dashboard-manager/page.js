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
    <div className="box-border" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridTemplateRows: "repeat(8, 1fr)", gap: "1rem", padding: "2rem", width: "70%", height: "100%" }}>
      <div style={{ gridRow: "2/6", gridColumn: "2/3" }}>
        {/* project section */}
        <ProjectOverview />
      </div>
      <div style={{ gridRow: "2/6", gridColumn: "2/3" }}>
        {/* project section */}
        <ProjectOverview />
      </div>
      <div style={{ gridRow: "2/6", gridColumn: "1/3" }}>
        <Card style={{ backgroundColor: "#f5f5f5" }}>
          <PieChart inputData={InputDataExample} />
        </Card>
      </div>
      {/* analytics */}
      <div style={{ gridRow: "4/6", gridColumn: "2/3" }}>
        this is analytics</div>

      <div style={{ gridRow: "4/6", gridColumn: "1/3" }}>this is the chatbot</div>
    </div>

  );
}