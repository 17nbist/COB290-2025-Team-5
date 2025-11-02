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
    <div className="grid grid-cols-1 min-h-screen w-full m-0 p-0 overflow-auto box-border">
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

      <div className="main-container grid grid-cols-1 w-full">
        {/* LEFT SIDE */}
        <div className="left-side flex flex-col w-full min-h-screen bg-[#d2d2d2] dark:bg-[#303030] box-border p-2.5 gap-2.5 transition-colors duration-300">
          {/* Project overview */}
          <div className="overview-grid grid grid-cols-1 gap-2.5">
            <OverviewTable label={"project"} data={dataProject} stats={statsProject} />
            <OverviewTable label={"task"} data={dataTasks} stats={statsTasks} />
          </div>

          {/* Analytics of manager */}
          <div className="flex flex-col gap-5 p-2.5 flex-1">
            {/* Header and Input */}
            <div className="flex flex-col justify-center items-center bg-white dark:bg-[#404040] rounded-[10px] p-5 gap-[15px] transition-colors duration-300">
              <h1 className="text-center text-[clamp(1rem,2.5vw,1.5rem)] m-0 dark:text-white transition-colors duration-300">
                Here is an overview of all the projects you are currently enrolled in!
              </h1>
              <div className="flex gap-2.5 items-center justify-center flex-wrap">
                <label htmlFor="tentacles" className="text-[0.9rem] font-medium dark:text-white transition-colors duration-300">Benchmark:</label>
                <input
                  type="number"
                  id="tentacles"
                  onChange={(e) => setStandardVal(e.target.value)}
                  value={standardVal}
                  name="tentacles"
                  min="0"
                  max="100"
                  className="px-3 py-2 rounded-[5px] border border-gray-300 dark:border-gray-600 text-base w-[100px] dark:bg-[#505050] dark:text-white transition-colors duration-300"
                />
              </div>
            </div>

            {/* Chart */}
            <div className="flex justify-center items-center bg-white dark:bg-[#404040] rounded-[10px] p-5 min-h-[300px] w-full transition-colors duration-300">
<div className="w-full h-[400px] min-h-[300px] max-h-[500px]">
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
            <div className="flex justify-center items-center bg-white dark:bg-[#404040] rounded-[10px] p-5 transition-colors duration-300">
              <Card style={{
                padding: "15px",
                textAlign: "center",
                fontSize: "clamp(0.8rem, 1.8vw, 0.9rem)",
                width: "100%",
                maxWidth: "600px"
              }}>
                <p className="m-0 leading-[1.6] text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Each line shows weekly task progress vs your set benchmark.
                  Values below zero mean the project is <strong>behind</strong>, above zero means <strong>ahead</strong>.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-rows-[auto_auto] w-full bg-[#c4daff] dark:bg-[#404040] box-border p-2.5 gap-2.5 min-h-screen transition-colors duration-300">
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
            <div className="w-full h-full max-w-[350px] max-h-[350px] min-h-[250px]">
              <PieChart inputData={InputDataExample} />
            </div>
          </Card>

          {/* TASK FORM SECTION */}
          <div className="flex justify-center items-start rounded-[10px] w-full box-border p-2.5 min-h-[400px]">
            <div className="w-full max-w-[600px]">
              <TasksForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}