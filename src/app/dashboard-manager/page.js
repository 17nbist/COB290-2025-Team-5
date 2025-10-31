"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import OverviewTable from "./OverviewTable";
import PieChart from "@/components/PieChart";
import Card from "@/components/Card";
import TaskForm from "@/components/TaskForm";
// import { each } from 'chart.js/dist/helpers/helpers.core';

const InputDataExample = {
  labels: ["Andrew H", "Rose S", "Mohammed K", "Tanaka M", "Ming Y"],
  dataSetLabel: "Tasks Assigned",
  data: [7, 13, 40, 3, 14, 34],
  title: "Employee workload",
};
const input = {
  project1: [2, 3, 5, 1, 3, 4],
  project2: [2, 3, 5, 1, 3, 4],
  project3: [1, 4, 6, 7, 5, 1],
  project4: [3, 2, 4, 3, 4, 5],
  project5: [2, 3, 4, 5, 6, 7],
}

// function calcProject(inp){
//   keys = inp.keys()
//   for each k in keys
// }
const data = [
  {
    name: 'week 0',
    mobileDev: 4000,
    frontEnd: 2400,
    databaseOpt: 3200,
    authSystem: 3400,
    amt: 2400,
  },
  {
    name: 'week 1',
    mobileDev: 3000,
    frontEnd: 1398,
    authSystem:2400,
    databaseOpt: 2300,
    amt: 2210,
  },
  {
    name: 'week 2',
    mobileDev: 2000,
    frontEnd: 9800,
    authSystem: 7400,
    databaseOpt: 8500,
    amt: 2290,
  },
  {
    name: 'week 3',
    mobileDev: 2780,
    frontEnd: 3908,
    authSystem: 4400,
    databaseOpt: 2760,
    amt: 2000,
  },
  {
    name: 'week 4',
    mobileDev: 1890,
    frontEnd: 4800,
    authSystem: 2400,
    databaseOpt: 3560,
    amt: 2181,
  },
  {
    name: 'week 5',
    mobileDev: 2390,
    frontEnd: 3800,
    authSystem: 1400,
    databaseOpt: 4000,
    amt: 2500,
  },
  {
    name: 'week 6',
    mobileDev: 3490,
    frontEnd: 4300,
    authSystem: 3400,
    databaseOpt: 6000,
    amt: 2100,
  },
];

const dataProject = [
    { name: "Website Design", progress: 0.6, status: "On Track" },
    { name: "Mobile App", progress: 0.2, status: "Behind" },
    { name: "Internal Dashboard", progress: 0.9, status: "Almost Completed" },
];

const statsProject = [
    { value: 5, label: "Total Project" },
    { value: 3, label: "Completed" },
    { value: 1, label: "In Progress" },
    { value: 1, label: "Pending Review" },
];

const dataTasks = [
    { name: "Add Overview to Dashboard", progress: 0.2, status: "Behind" },
    { name: "Fix hallucination rate", progress: 0.7, status: "On Track" },
    { name: "fix data breach", progress: 0.8, status: "Almost Completed" },
];

const statsTasks= [
    { value: 45, label: "Total Tasks" },
    { value: 25, label: "Completed" },
    { value: 14, label: "In Progress" },
    { value: 6, label: "Pending Review" },
];
export default function Home() {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "70% 30%", height: "100vh", width: "100vw", margin: 0, padding: 0, overflow: "hidden", boxSizing: "border-box", }} >
      {/* LEFT SIDE */}
      <div style={{ display: "grid", gridTemplateRows: "auto 1fr", width: "100%", minHeight: "100hv", backgroundColor: "#ffffffff", boxSizing: "border-box", padding: "10px", gap: "10px", }}>
        {/* Project overview */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", backgroundColor: "red", gap: "10px" }} >
          <OverviewTable label={"project"} data={dataProject} stats={statsProject}/>
          <OverviewTable label={"task"} data={dataTasks} stats={statsTasks}/>
        </div>

        {/* Analytics of manager */}
        <div>
          <h1  style={{textAlign: "center", padding: "5%"}}>Here is an overview of all the projects you are currently enrolled in! </h1>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ffffffff", borderRadius: "10px", width: "100%", minHeight: "250px", }} >
            <LineChart
              style={{ width: '100%', maxWidth: '800px', height: '100%', maxHeight: '40vh', aspectRatio: 1.618 }}
              responsive
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis width="auto" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="frontEnd" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="mobileDev" stroke="#82ca9d" />
              <Line type="monotone" dataKey="authSystem" stroke="#ca8282ff" />
              <Line type="monotone" dataKey="databaseOpt" stroke="#caba82ff" />
            </LineChart>
          </div>
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
