"use client";
import ProjectOverview from "./ProjectOverview";
import PieChart from "@/components/PieChart";
import Card from "@/components/Card";
import TaskForm from "@/components/TaskForm";

const InputDataExample = {
  labels: ["Andrew H", "Rose S", "Mohammed K", "Tanaka M", "Ming Y"],
  dataSetLabel: "Tasks Assigned",
  data: [7, 13, 40, 3, 14, 34],
  title: "Employee workload",
};

export default function Home() {
  return (
    <div
      style={{ display: "grid",  gridTemplateColumns: "70% 30%",  height: "100vh",  width: "100vw", margin: 0, padding: 0, overflow: "hidden",  boxSizing: "border-box", }} >
      {/* LEFT SIDE */}
      <div style={{ display: "grid", gridTemplateRows: "30% 70%",   width: "100%",  height: "100%",backgroundColor: "#ffffffff",  boxSizing: "border-box", padding: "10px",  gap: "10px",  }}>
        {/* Project overview */}
        <div style={{ display: "grid",  gridTemplateColumns: "1fr 1fr",  gap: "10px"}} >
          <ProjectOverview />
          <ProjectOverview />
        </div>

        {/* Analytics placeholder */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ffffffff", borderRadius: "10px", width: "100%", height: "100%", }} >
          this is analytics
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{ display: "grid", gridTemplateRows: "40% 60%", width: "100%", height: "100%", backgroundColor: "#c4daff", overflow: "hidden", boxSizing: "border-box", padding: "10px", gap: "10px", }}
      >
        {/* PIE CHART SECTION */}
        <Card style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", boxSizing: "border-box", overflow: "hidden", }} >
          <div style={{ width: "80%", height: "80%", maxWidth: "350px", maxHeight: "350px", }}>
            <PieChart inputData={InputDataExample} />
          </div>
        </Card>

        {/* TASK FORM SECTION */}
        <div style={{display: "flex",   justifyContent: "center",  alignItems: "center",  borderRadius: "10px",    width: "100%", height: "100%",  boxSizing: "border-box", overflowY: "auto", }}>
          <div style={{ width: "100%", height: "90%" }}>
            
            <TaskForm />
          </div>
        </div>
      </div>
    </div>
  );
}
