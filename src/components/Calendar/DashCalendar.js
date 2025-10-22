"use client"
import {useEffect, useState, useMemo} from "react";
import Card from "../Card.js";
import NavBar from "../NavBar.js";
import {daysInMonth, monthsBetween, firstDateOfWeek} from "./calendarUtils.js";
import CalendarTask from "./CalendarTask.js";
import Button from "@/components/Button.js";

export default function DashCalendar({tasks}) {
  const [startDate, setStartDate] = useState(() => {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return startOfDay
    }
  );


  const sortedTasks = useMemo(() => (
    [...tasks].sort((b, a) => new Date(b.from) - new Date(a.from))
  ), [tasks]);

  function getTasksInRange() {
    let endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 1);

    let fTasks = [...sortedTasks].filter(t => t.from < endDate && t.to > startDate);

    let tracked_tasks = fTasks.filter(t => {
      let fromIndex = 0;
      let toIndex = 0;
      let divisions = getNumberOfDivisions();

      fromIndex = (t.from - startDate) / (1000 * 60 * 60);
      toIndex = (t.to - startDate) / (1000 * 60 * 60);

      const widthFraction = (toIndex - fromIndex) / divisions;
      return widthFraction >= 1/18;
    });

    let tracks = [];

    for (let i = 0; i < tracked_tasks.length; i++) {
      if (i == 0) {
        tracks.push({end: tracked_tasks[i].to});
        tracked_tasks[i].track = 0;
      } else {
        let foundTrack = false;
        for (let j = 0; j < tracks.length; j++) {

          if (tracked_tasks[i].from >= tracks[j].end) {
            foundTrack = true;
            tracks[j].end = tracked_tasks[i].to;
            tracked_tasks[i].track = j;
          }
        }

        if (!foundTrack) {
          tracks.push({end: tracked_tasks[i].to})
          tracked_tasks[i].track = tracks.length - 1;
        }
      }
    }

    return tracked_tasks;
  }

  function getNumberOfDivisions() {
    return 24;
  }

  function getDivisionTitles() {
    let titles = [];
    let today = new Date(startDate)
    for (let i = 0; i < 24; i++) {
      titles.push(`${i.toString().padStart(2, "0")}`)
    }
    return titles;
  }

  function getRangeText() {
    let endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 1);
    return `${startDate.toDateString()} - ${endDate.toDateString()}`;
  }

  return (
      <Card style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", padding: "10px"}}>
        <div style={{display: "flex", flexDirection: "column", gap: "10px", width: "100%", height: "100%"}}>
          <div className="flex items-center justify-between">
            <h1 className="font-[600] text-[15px]">Today&apos;s Events</h1>
            <Button outerStyle={{height: "30px"}} textStyle={{fontSize: "10px"}} text={"Full Calendar"} onClick={() => {window.location.hash = "Calendar"}}/>
          </div>
          
          <div style={{
            display: "grid",
            overflowX: "hidden",
            position: "relative",
            gridTemplateColumns: `repeat(${getNumberOfDivisions()}, minmax(0, 1fr))`,
            borderRadius: "10px",
            marginTop: "5px",
            width: "100%",
            height: "100%"
          }}>

            {/* dates and dividors */}
            {
              getDivisionTitles().map((e, i, arr) => (
                <div key={e}
                  style={{
                    borderRight: i !== arr.length - 1 ? "1px solid #ddd" : "none",
                  }}
                >
                <h1 style={{textAlign: "center"}}>{e}</h1>
                </div>
              ))
            }

            {/* tasks */}
            <div style={{position: "absolute", marginTop: "40px", width: "100%"}}>
            {
              getTasksInRange().map((t) => (
                <CalendarTask key={t.id} task={t} startDate={startDate} divisions={getNumberOfDivisions()} rangeType={"Day"} gap={1} taskWidth={40}/>
              ))
            }
            </div>
          </div>
        </div>
      </Card>
  )
}