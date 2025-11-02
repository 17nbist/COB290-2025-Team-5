"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import OverviewTable from "./OverviewTable";
import PieChart from "@/components/PieChart";
import Card from "@/components/Card";
import TasksForm from '@/components/TaskForm';
import { useEffect, useState } from 'react';

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

const initialChartData = [
  {
    name: 'Week 0',
    mobileDev: 4,
    frontEnd: 5,
    databaseOpt: 3,
    authSystem: 2,
    benchmark: null,
    amt: 14,
  },
  {
    name: 'Week 1',
    mobileDev: 6,
    frontEnd: 4,
    databaseOpt: 5,
    authSystem: 3,
    benchmark: null,
    amt: 18,
  },
  {
    name: 'Week 2',
    mobileDev: 7,
    frontEnd: 6,
    databaseOpt: 4,
    authSystem: 4,
    benchmark: null,
    amt: 21,
  },
  {
    name: 'Week 3',
    mobileDev: 5,
    frontEnd: 7,
    databaseOpt: 6,
    authSystem: 5,
    benchmark: null,
    amt: 23,
  },
  {
    name: 'Week 4',
    mobileDev: 8,
    frontEnd: 5,
    databaseOpt: 7,
    authSystem: 6,
    benchmark: null,
    amt: 26,
  },
  {
    name: 'Week 5',
    mobileDev: 6,
    frontEnd: 8,
    databaseOpt: 5,
    authSystem: 7,
    benchmark: null,
    amt: 26,
  },
  {
    name: 'Week 6',
    mobileDev: 9,
    frontEnd: 7,
    databaseOpt: 6,
    authSystem: 8,
    benchmark: null,
    amt: 30,
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

const statsTasks = [
  { value: 45, label: "Total Tasks" },
  { value: 25, label: "Completed" },
  { value: 14, label: "In Progress" },
  { value: 6, label: "Pending Review" },
];

export default function Home() {
  const [standardVal, setStandardVal] = useState("3");
  const [chartData, setChartData] = useState(initialChartData);

  function standarData(data, standardValue) {
    const dataForTable = []
    for (let i = 0; i < data.length; i++) {
      const obj = {}
      for (const [key, value] of Object.entries(data[i])) {
        if (key == "name") {
          obj[key] = value
        } else if (key == "benchmark") {
          obj[key] = standardValue
        }
        else {
          if (i > 0) {
            obj[key] = value - standardValue
          } else {
            obj[key] = value - standardValue
          }
        }
      }
      obj["benchmark"] = standardValue
      dataForTable.push(obj);
    }
    return dataForTable
  }

  useEffect(() => {
    const newData = standarData(initialChartData, standardVal);
    setChartData(newData);
  }, [standardVal]);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr",
      minHeight: "100vh",
      width: "100%",
      margin: 0,
      padding: 0,
      overflow: "auto",
      boxSizing: "border-box",
    }}>
      <style jsx>{`
        @media (min-width: 1024px) {
          .main-container {
            grid-template-columns: 70% 30% !important;
            height: 100vh !important;
            overflow: hidden !important;
          }
          .left-side {
            overflow-y: auto !important;
          }
          .overview-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .overview-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div className="main-container" style={{ display: "grid", gridTemplateColumns: "1fr", width: "100%" }}>
        {/* LEFT SIDE */}
        <div className="left-side" style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#ffffffff",
          boxSizing: "border-box",
          padding: "10px",
          gap: "10px",
        }}>
          {/* Project overview */}
          <div className="overview-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "10px"
          }}>
            <OverviewTable label={"project"} data={dataProject} stats={statsProject} />
            <OverviewTable label={"task"} data={dataTasks} stats={statsTasks} />
          </div>

          {/* Analytics of manager */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "10px",
            flex: 1
          }}>
            {/* Header and Input */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffffffff",
              borderRadius: "10px",
              padding: "20px",
              gap: "15px"
            }}>
              <h1 style={{
                textAlign: "center",
                fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                margin: 0
              }}>
                Here is an overview of all the projects you are currently enrolled in!
              </h1>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
                <label htmlFor="tentacles" style={{ fontSize: "0.9rem", fontWeight: "500" }}>Benchmark:</label>
                <input
                  type="number"
                  id="tentacles"
                  onChange={(e) => setStandardVal(e.target.value)}
                  value={standardVal}
                  name="tentacles"
                  min="0"
                  max="100"
                  style={{
                    padding: "8px 12px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontSize: "1rem",
                    width: "100px"
                  }}
                />
              </div>
            </div>

            {/* Chart */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffffffff",
              borderRadius: "10px",
              padding: "20px",
              minHeight: "300px",
              width: "100%"
            }}>
<div style={{ 
  width: "100%", 
  height: "400px",
  minHeight: "300px",
  maxHeight: "500px"
}}>
  <ResponsiveContainer width="100%" height="100%">
    <LineChart
      data={chartData}
      margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)" }} />
      <YAxis width={50} style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)" }} />
      <Tooltip />
      <Legend wrapperStyle={{ fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)" }} />
      <Line type="monotone" dataKey="frontEnd" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="mobileDev" stroke="#82ca9d" />
      <Line type="monotone" dataKey="authSystem" stroke="#ca8282ff" />
      <Line type="monotone" dataKey="databaseOpt" stroke="#caba82ff" />
    </LineChart>
  </ResponsiveContainer>

              </div>
            </div>

            {/* Info Card */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffffffff",
              borderRadius: "10px",
              padding: "20px"
            }}>
              <Card style={{
                padding: "15px",
                textAlign: "center",
                fontSize: "clamp(0.8rem, 1.8vw, 0.9rem)",
                color: "#555",
                width: "100%",
                maxWidth: "600px"
              }}>
                <p style={{ margin: 0, lineHeight: 1.6 }}>
                  Each line shows weekly task progress vs your set benchmark.
                  Values below zero mean the project is <strong>behind</strong>, above zero means <strong>ahead</strong>.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div style={{
          display: "grid",
          gridTemplateRows: "auto auto",
          width: "100%",
          backgroundColor: "#c4daff",
          boxSizing: "border-box",
          padding: "10px",
          gap: "10px",
          minHeight: "100vh"
        }}>
          {/* PIE CHART SECTION */}
          <Card style={{
            width: "100%",
            minHeight: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "20px"
          }}>
            <div style={{
              width: "100%",
              height: "100%",
              maxWidth: "350px",
              maxHeight: "350px",
              minHeight: "250px"
            }}>
              <PieChart inputData={InputDataExample} />
            </div>
          </Card>

          {/* TASK FORM SECTION */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            borderRadius: "10px",
            width: "100%",
            boxSizing: "border-box",
            padding: "10px",
            minHeight: "400px"
          }}>
            <div style={{ width: "100%", maxWidth: "600px" }}>
              <TasksForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}