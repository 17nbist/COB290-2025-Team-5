"use client";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import { useState } from "react";

export default function TaskViewToDo({ task }) {
  const router = useRouter();
  const { user, updateTodo, userIsProjectLeader, addTodoToTask } = useAuth();
  const [todoTitle, setTodoTitle] = useState("");
  const [showModal, setShowModal] = useState(false);

  const adminPerms =
    user.isManager === true || userIsProjectLeader?.(task.projectId, user.id);

  function addTodo() {
    if (todoTitle.trim() === "") return;
    addTodoToTask(task.id, { title: todoTitle, checked: false });
    setTodoTitle("");
    setShowModal(false);
  }

  return (
    <div className="w-full flex justify-center">
      <Card
        className="
          border border-black 
          bg-white hover:bg-gray-100 transition-colors duration-200
          dark:bg-[#767676] dark:border-gray-500 dark:hover:bg-[#656565]
        "
        style={{
          padding: "24px",
          width: "100%",
          maxWidth: "800px",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="flex flex-col gap-[16px] w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-center dark:text-white">
              {task?.title || "Task Title"}
            </h1>
            {adminPerms && (
              <Button
                outerStyle={{ width: "47px", height: "47px" }}
                textStyle={{ fontSize: "30px" }}
                text={"+"}
                onClick={() => setShowModal(true)}
              />
            )}
          </div>

          {task?.todos?.map((t) => (
            <ToDo key={t.id} todo={t} task={task} updateTodo={updateTodo} />
          ))}
        </div>
      </Card>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Card className="dark:bg-[#767676] dark:border-gray-500" style={{ width: "40%" }}>
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-[30px] font-[600] dark:text-white">Add A Todo</h1>
            <div className="flex flex-col">
              <div className="textInput-group">
                <label className="label flex flex-col dark:text-white">
                  Title:
                  <input
                    required
                    type="text"
                    value={todoTitle}
                    onChange={(e) => setTodoTitle(e.target.value)}
                    name="text"
                    autoComplete="off"
                    className="
                      rounded-[3px] border border-gray-400
                      focus:outline-none focus:ring-2 focus:ring-gray-500
                      dark:border-gray-600 dark:bg-[#5c5c5c] dark:text-white
                    "
                  />
                </label>
              </div>
            </div>
            <div className="flex w-full justify-end">
              <div className="flex gap-2">
                <Button onClick={() => setShowModal(false)} text={"Cancel"} />
                <Button onClick={addTodo} text={"Add"} />
              </div>
            </div>
          </div>
        </Card>
      </Modal>
    </div>
  );
}

function ToDo({ todo, task, updateTodo }) {
  return (
    <Card
      className="
        dark:bg-[#767676] dark:border-gray-500
      "
    >
      <div className="flex justify-between items-center">
        <h1
          className="dark:text-white"
          style={{
            textDecorationLine: todo.checked ? "line-through" : "none",
          }}
        >
          {todo.title}
        </h1>
        <Button
          text={todo.checked ? "Undo" : "Mark as done"}
          onClick={() => updateTodo(task.id, todo.id)}
        />
      </div>
    </Card>
  );
}
