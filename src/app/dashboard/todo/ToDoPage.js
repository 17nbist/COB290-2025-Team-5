"use client";
import { useState } from "react";
import Card from "@/components/Card";

export default function ToDoPage() {
  const [openProjects, setOpenProjects] = useState({});

  const toggleProject = (name) => {
    setOpenProjects((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const projects = [
    {
      name: "App",
      tasks: ["Task 1 1/3", "Task 2 2/6", "Task 3 1/4"],
    },
    {
      name: "Other Project",
      tasks: ["Task 1 1/3", "Task 2 2/6", "Task 3 1/4"],
    },
  ];

  const generalTasks = ["Task1", "Task2", "Task3", "Task4", "Task5"];

  return (
    <div className="flex justify-center items-start min-h-screen py-10 text-black">
      <div className="flex gap-10">
        {/* Projects Column */}
        <div className="w-[344px] flex flex-col items-center">
          <h1 className="text-[50px] font-bold text-center mb-8">Projects</h1>

          <div className="flex flex-col gap-6 w-full items-center">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-white shadow-lg rounded-xl p-5 w-[344px] border border-gray-300"
              >
                <Card>
                {/* Project Card Header */}
                <button
                  onClick={() => toggleProject(project.name)}
                  className="w-full text-left text-xl font-semibold mb-3 flex justify-between focus:outline-none"
                >
                  {project.name}
                  <span className="text-lg">{openProjects[project.name] ? "▲" : "▼"}</span>
                </button>
                </Card>

                {/* Project Tasks */}
                {openProjects[project.name] && (
                  <ul className="space-y-2">
                    {project.tasks.map((task, i) => (
                      <li
                        key={i}
                        className="bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg shadow-sm border border-gray-200 cursor-pointer transition-all"
                      >
                        {task}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* General Column */}
        <div className="w-[344px] flex flex-col items-center">
          <h1 className="text-[50px] font-bold text-center mb-8">To-Do</h1>

          <div className="bg-white shadow-lg rounded-xl p-5 w-[344px] border border-gray-300">
            
            <ul className="space-y-2">
              <Card>
              {generalTasks.map((task, i) => (
                <li
                  key={i}
                  className="bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg shadow-sm border border-gray-200 cursor-pointer transition-all"
                >
                  {task}
                </li>
              ))}
              </Card>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
}
