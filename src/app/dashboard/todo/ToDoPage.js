"use client";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";

export default function ToDoPage() {
  const [openProjects, setOpenProjects] = useState({});
  const [newTask, setNewTask] = useState("");
  const [generalTasks, setGeneralTasks] = useState([
    "Task1",
    "Task2",
    "Task3",
    "Task4",
    "Task5",
  ]);
  const { user, allProjects, allTasks } = useAuth();
  const router = useRouter();

  const toggleProject = (name) => {
    setOpenProjects((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setGeneralTasks((prev) => [...prev, newTask]);
      setNewTask("");
    }
  };

  const projects = [];
  const idToIndex = {};

  allTasks
    .filter((t) => t.members?.includes(user?.id))
    .forEach((task) => {
      const project = allProjects.find((p) => p.id === task.projectId);

      const checked = task.todos.filter((t) => t.checked).length;
      const total = task.todos.length;

      if (idToIndex[task.projectId] === undefined) {
        idToIndex[task.projectId] = projects.length;
        projects.push({ id: project?.id, name: project?.title, tasks: [] });
      }

      projects[idToIndex[task.projectId]].tasks.push({
        text: `${task.title} ${checked}/${total}`,
        id: task.id,
      });
    });

  useEffect(() => {
    document.title = "To-Do | Make-It-All";
  }, []);

  return (
    <div className="flex justify-center items-start min-h-screen py-10 dark:text-white text-black bg-transparent px-4 sm:px-6 md:px-10">
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        {/* Projects Column */}
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 dark:text-white">Projects</h1>

          <div className="flex flex-col gap-6 w-full items-center">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-[#444444] shadow-lg rounded-xl p-5 w-full max-w-sm border border-gray-300"
              >
                <Card>
                  {/* Project Card Header */}
                  <button
                    onClick={() => toggleProject(project.name)}
                    className="w-full text-left text-lg sm:text-xl font-semibold mb-3 flex justify-between focus:outline-none"
                  >
                    {project.name}
                    <span className="text-lg">{openProjects[project.name] ? "▲" : "▼"}</span>
                  </button>
                </Card>

                {/* Animated Project Tasks */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openProjects[project.name]
                      ? "max-h-96 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-2">
                    {project.tasks.map((task) => (
                      <li
                        key={task.id}
                        className="dark:bg-[#444444] bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg shadow-sm border border-gray-200 cursor-pointer transition-all"
                        onClick={() => router.push(`task/${task.id}`)}
                      >
                        {task.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Column */}
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 dark:text-white">To-Do</h1>

          <div className="bg-white dark:bg-[#444444] shadow-lg rounded-xl p-5 w-full max-w-sm border border-gray-300">
            {/* Add Task Input + Button */}
            <div className="flex flex-col sm:flex-row mb-4 gap-2">
              <input
                type="text"
                placeholder="Create to-do..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addTask();
                }}
                className="flex-grow border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={addTask}
                className="bg-[#878787] hover:bg-[#a9a9a9] dark:bg-[#333333] dark:hover:bg-[#878787] text-white font-medium px-4 py-2 rounded-md transition-all"
              >
                Add
              </button>
            </div>

            {/* Task List */}
            <ul className="space-y-2">
              <Card>
                {generalTasks.map((task, i) => (
                  <li
                    key={i}
                    className="dark:bg-[#444444] bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg shadow-sm border border-gray-200 cursor-pointer transition-all"
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
