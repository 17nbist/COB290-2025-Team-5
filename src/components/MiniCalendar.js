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
      <h2 style={{ margin: 0, fontSize: "1.2rem" }}>
        Today – {today.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })}
      </h2>

      {todayTasks.length === 0 ? (
        <p style={{ color: "#777" }}>No tasks today 🎉</p>
      ) : (
        todayTasks.map(t => (
          <Card
            key={t.id}
            style={{
              padding: "10px",
              backgroundColor: "#f9fafb",
              border: "1px solid #ddd",
              cursor: "pointer",
            }}
            hoverStyle={{ backgroundColor: "#f1f5f9" }}
          >
            <h3 style={{ margin: "0 0 4px 0", fontSize: "1rem" }}>{t.title}</h3>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#555" }}>
              {new Date(t.from).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} –{" "}
              {new Date(t.to).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </p>
          </Card>
        ))
      )}
    </Card>
  );
}
