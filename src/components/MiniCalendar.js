"use client";
import Card from "./Card.js";
import {useEffect, useState, useMemo} from "react";

export default function MiniCalendar({ tasks }) {
  const today = new Date();
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

  const todayTasks = tasks
    .filter(t => new Date(t.from) < endOfDay && new Date(t.to) > startOfDay)
    .sort((a, b) => new Date(a.from) - new Date(b.from));

  return (
    <Card
      style={{
        width: "280px",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h2 className="text-black dark:text-white" style={{ margin: 0, fontSize: "1.2rem" }}>
        Today – {today.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })}
      </h2>

      {todayTasks.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No tasks today 🎉</p>
      ) : (
        todayTasks.map(t => (
          <Card
            key={t.id}
            className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
            style={{
              padding: "10px",
              border: "1px solid",
              cursor: "pointer",
            }}
            hoverStyle={{ backgroundColor: "rgba(241, 245, 249, 0.5)" }}
          >
            <h3 className="text-black dark:text-white" style={{ margin: "0 0 4px 0", fontSize: "1rem" }}>{t.title}</h3>
            <p className="text-gray-600 dark:text-gray-400" style={{ margin: 0, fontSize: "0.9rem" }}>
              {new Date(t.from).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} –{" "}
              {new Date(t.to).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </p>
          </Card>
        ))
      )}
    </Card>
  );
}
