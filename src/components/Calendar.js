"use client"
import {useEffect, useState, useMemo} from "react";
import Card from "./Card.js";
import Button from "./Button.js";

export default function Calendar({tasks}) {
  const [startDate, setStartDate] = useState(firstDateOfWeek(new Date()));
  
    const sortedTasks = useMemo(() => (
      [...tasks].sort((b, a) => new Date(b.from) - new Date(a.from))
    ), [tasks]);

  function incrementDate() {
    setStartDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() + 7);
      return newDate;
    });
  }

  function decrementDate() {
    setStartDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
    });
  }

  function getDatesInRange() {
    let dates = [];
    for (let i = 0; i < 7; i++) {
      let today = new Date(startDate)
      today.setDate(today.getDate() + i);
      dates.push(today);
    }
    return dates;
  }

  function getTasksInRange() {
    let endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 8);

    let tracked_tasks = [...sortedTasks];

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

    let fTasks = sortedTasks.filter(t => (
      t.from < endDate && t.to >= startDate
    ));
    
    return fTasks;
  }

  const calendarWidth = 1200;

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "5px", width: calendarWidth + "px", height: "700px"}}>
      <h1>{startDate.toDateString()}</h1>
      {/*top bar*/}
      <div style={{display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center"}}>
        <h1> Week </h1>
        <div style={{display: "flex", gap: "5px"}}>
          <Button text={"<"} onClick={decrementDate} />
          <Button text={">"} onClick={incrementDate}/> 
        </div>
      </div>

      {/*calendar body*/}
      <div style={{
        display: "grid", 
        borderStyle: "solid", 
        borderWidth: "1px",
        overflowX: "hidden", 
        position: "relative",
        height: "100%", 
        gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
        borderRadius: "10px"

      }}>

        {/* dates and dividors */}
        {
          getDatesInRange().map((e, i) => (
            <div key={e.toDateString()}
              style={{
                borderRight: i !== 6 ? "1px solid #ddd" : "none",
              }}
            >
            <h1 style={{textAlign: "center"}}>{e.toDateString()}</h1>
            </div>
          ))
        }

        {/* tasks */}
        <div style={{position: "absolute", marginTop: "40px"}}>
        {
          getTasksInRange().map((t) => (
            <CalendarTask key={t.id} task={t} weekStartDate={startDate} />
          ))
        }
        </div>

      </div>
    </div>
  )
}

function CalendarTask({task, weekStartDate, calendarWidth}) {
  let fromIndex = dateToWeekIndex(task.from, weekStartDate);
  let toIndex = dateToWeekIndex(task.to, weekStartDate);
  console.log(toIndex);
  let left = fromIndex * 1200 / 7
  let right = toIndex * 1200 / 7
  let width = right - left;
  let top = task.track * 60;

  return (
    <Card style={{width: width, height: "50px", position: "absolute", left, top}}>
      <h1 style={{width: width, height: "50px", position: "absolute", left: left >= 0 ? 0 : -left, top:0}}>{task.title}</h1>
    </Card>
  )
}

function dateToWeekIndex(d, weekStartDate) {
  weekStartDate = new Date(weekStartDate);
  weekStartDate.setHours(0, 0, 0, 0);
  return daysBetween(weekStartDate, d);
}

function daysBetween(d1, d2) {
  return (d2 - d1) / (1000 * 60 * 60 * 24)
}

function firstDateOfWeek(d) {
  let date = new Date(d)
  date.setHours(0, 0, 0, 0);

  let dayOfWeek = date.getDay()
  const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  date.setDate(date.getDate() + diff);
  return date;
}