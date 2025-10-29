"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
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

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Home() {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "70% 30%", height: "100vh", width: "100vw", margin: 0, padding: 0, overflow: "hidden", boxSizing: "border-box", }} >
      {/* LEFT SIDE */}
      <div style={{ display: "grid", gridTemplateRows: "auto 1fr", width: "100%", minHeight: "100hv", backgroundColor: "#ffffffff", boxSizing: "border-box", padding: "10px", gap: "10px", }}>
        {/* Project overview */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", backgroundColor: "red", gap: "10px" }} >
          <ProjectOverview />
          <ProjectOverview />
        </div>

        {/* Analytics placeholder */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ffffffff", borderRadius: "10px", width: "100%", minHeight: "250px", }} >
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{ display: "grid", gridTemplateRows: "40% 60%", width: "100%", height: "100%", backgroundColor: "#c4daff", overflow: "hidden", boxSizing: "border-box", padding: "10px", gap: "10px", }}
      >
        {/* PIE CHART SECTION */}
        <Card style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", boxSizing: "border-box", overflow: "hidden", }} >
          <div style={{ width: "80%", height: "100%", maxWidth: "350px", maxHeight: "350px", }}>
            <PieChart inputData={InputDataExample} />
          </div>
        </Card>

        {/* TASK FORM SECTION */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px", width: "100%", height: "100%", boxSizing: "border-box", overflowY: "auto", }}>
          <div style={{ width: "100%", height: "90%" }}>

            <TaskForm />
          </div>
        </div>
      </div>
    </div>
  );
}
