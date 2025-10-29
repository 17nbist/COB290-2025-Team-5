"use client";

import { useRouter } from "next/navigation";
import Card from "@/components/Card";

export default function TodayPage({ tasks, events }) {
  const router = useRouter();

  const today = new Date();
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

  const todaysTasks = tasks
    .filter((t) => new Date(t.from) < endOfDay && new Date(t.to) > startOfDay)
    .sort((a, b) => new Date(a.to) - new Date(b.to));

  const todaysEvents = events
    .filter((e) => new Date(e.from) < endOfDay && new Date(e.to) > startOfDay)
    .sort((a, b) => new Date(a.to) - new Date(b.to));

  const getTaskDueDate = (t) => {
    const now = new Date();
    const daysBetween = (t.to - now) / (1000 * 60 * 60 * 24);
    if (daysBetween < 1)
      return `Due at ${t.to.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    if (daysBetween <= 31) return `Due in ${Math.round(daysBetween)} days`;
    return `Due on ${t.to.toDateString()}`;
  };

  const getEventSubTitle = (e) =>
    `${e.from.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${e.to.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;

  // Task click handler
  const handleTaskClick = (task) => {
    router.push(`/task/${task.id}`); // This works under /app structure
  };

  return (
    <div className="flex gap-[110px]">
      {/* TASKS */}
      <div className="w-[344px] h-[545px]">
        <h1 className="text-[50px] font-[700] text-center mb-[20px]">Tasks</h1>
        <div className="flex flex-col gap-[18px]">
          {todaysTasks.map((t) => (
            <TaskEventCard
              key={t.id}
              title={t.title}
              subTitle={getTaskDueDate(t)}
              onClick={() => handleTaskClick(t)}
            />
          ))}
        </div>
      </div>

      {/* EVENTS */}
      <div className="w-[344px] h-[545px]">
        <h1 className="text-[50px] font-[700] text-center mb-[20px]">Events</h1>
        <div className="flex flex-col gap-[18px]">
          {todaysEvents.map((e) => (
            <TaskEventCard key={e.id} title={e.title} subTitle={getEventSubTitle(e)} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TaskEventCard({ title, subTitle, onClick }) {
  return (
    <Card
      onClick={onClick}
      style={{
        width: "344px",
        height: "102px",
        display: "flex",
        alignItems: "center",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <div>
        <h1 className="text-[24px] font-[700]">{title}</h1>
        <h1 className="text-[16px] font-[400] text-[#6B7280]">{subTitle}</h1>
      </div>
    </Card>
  );
}
