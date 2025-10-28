"use client";
import { useEffect, useState } from "react";

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

  useEffect(() => {
      document.title = 'To-Do | Make-It-All';
    }, []);

  return (
    <div className="flex justify-center items-start min-h-screen py-10 text-black">
      <div className="flex gap-[110px] mt-10">
        {/* Projects Column */}
        <div className="w-[344px] flex flex-col items-center">
          <h1 className="text-[50px] font-[700] text-center mb-[20px]">
            Projects
          </h1>

          <div className="flex flex-col gap-[18px] w-full items-center relative">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-white shadow-md p-5 w-[344px] border border-black"
              >
                <button
                  onClick={() => toggleProject(project.name)}
                  className="w-full text-left text-xl font-semibold mb-2 focus:outline-none flex justify-between"
                >
                  {project.name}
                  <span className="text-lg">
                    {openProjects[project.name] ? "▲" : "▼"}
                  </span>
                </button>

                {openProjects[project.name] && (
                  <div className="mt-3">
                    <ul className="space-y-2">
                      {project.tasks.map((task, i) => (
                        <li
                          key={i}
                          className="bg-white hover:bg-gray-50 px-3 py-2 border border-gray-200 cursor-pointer transition-all"
                        >
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* General Column */}
        <div className="w-[344px] flex flex-col items-center">
          <h1 className="text-[50px] font-[700] text-center mb-[20px]">
            General
          </h1>

          <div className="bg-white shadow-md p-5 w-[344px] border border-black">
            <h3 className="text-xl font-semibold mb-3">To-Do List</h3>
            <ul className="space-y-2">
              {generalTasks.map((task, i) => (
                <li
                  key={i}
                  className="bg-white hover:bg-gray-50 px-3 py-2 border border-gray-200 cursor-pointer transition-all"
                >
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
