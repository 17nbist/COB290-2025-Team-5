"use client";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { useAuth } from "@/lib/AuthContext";
import {useRouter} from "next/navigation";

export default function ToDoPage() {
  const [openProjects, setOpenProjects] = useState({});
  const { user, allProjects, allTasks } = useAuth();
  const router = useRouter();

  const toggleProject = (name) => {
    setOpenProjects((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const projects = [];
  const idToIndex = {};

  allTasks
  .filter(t => t.members?.includes(user?.id))
  .forEach(task => {
    const project = allProjects.find(p => p.id === task.projectId);

    const checked = task.todos.filter(t => t.checked).length;
    const total = task.todos.length;

    if (idToIndex[task.projectId] == undefined) {
      idToIndex[task.projectId] = projects.length;
      projects.push({ id: project?.id, name: project?.title, tasks: [] });
    }

    projects[idToIndex[task.projectId]].tasks.push({text: `${task.title} ${checked}/${total}`, id: task.id});
  });

  const generalTasks = ["Task1", "Task2", "Task3", "Task4", "Task5"];

  useEffect(() => {
      document.title = 'To-Do | Make-It-All';
    }, []);

  return (
    <div className="flex justify-center items-start min-h-screen py-10 text-black">
      <div className="flex gap-10">
        {/* Projects Column */}
        <div className="w-[344px] flex flex-col items-center">
          <h1 className="text-[50px] font-bold text-center mb-8">Projects</h1>

          <div className="flex flex-col gap-6 w-full items-center">
            {projects.map((project) => (
              <div
                key={project.id}
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
                    {project.tasks.map((task) => (
                      <li
                        key={task.id}
                        className="bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg shadow-sm border border-gray-200 cursor-pointer transition-all"
                        onClick={() => router.push(`task/${task.id}`)}
                      >
                        {task.text}
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
