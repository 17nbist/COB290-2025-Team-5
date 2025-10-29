"use client";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";

export default function TaskViewToDo({ task }) {
  const router = useRouter();
  const { updateTodo } = useAuth();

  return (
    <div className="w-full flex justify-center">
      <Card
        className="border border-black hover:bg-gray-100 transition-colors duration-200"
        style={{
          color: "black",
          padding: "24px",
          width: "100%",
          maxWidth: "800px",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="flex flex-col gap-[16px] w-full">
          {/* Dynamic task title button (centered) */}
            <h1>{task?.title || "Task Title"}</h1>

          {
            task.todos.map(t => (
              <ToDo key={t.id} todo={t} task={task} updateTodo={updateTodo}/>
            ))
          }
        </div>
      </Card>
    </div>
  );
}

function ToDo({todo, task, updateTodo}) {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <h1 style={{textDecorationLine: todo.checked? "line-through" : "none"}}>{todo.title}</h1>
        <Button text={todo.checked? "undo" : "mark as done"} onClick={() => updateTodo(task.id, todo.id)}/>
      </div>
    </Card>
  )
}