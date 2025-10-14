"use client"
import {useEffect, useState} from "react";
import Card from "./Card.js";

export default function Calendar({tasks}) {
  const [startDate, setStartDate] = useState(firstDateOfWeek(new Date()));

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

    let fTasks = tasks.filter(t => (
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
            <h1>{e.toDateString()}</h1>
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

function CalendarTask({task, weekStartDate}) {
  let fromIndex = dateToWeekIndex(task.from, weekStartDate);
  let toIndex = dateToWeekIndex(task.to, weekStartDate);
  let left = fromIndex * 1200 / 7
  let right = toIndex * 1200 / 7
  let width = right - left;


  return (
    <Card style={{width: width, height: "50px", position: "absolute", left}}>
      <h1>{task.title}</h1>
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

function Button({outerstyle, textStyle, text, icon, onClick}) {

  const defaultTouterStyle = {
    display: "flex",
    borderRadius: "12px",
    backgroundColor: "#000",
    padding: "6px 13px 6px 13px",
    height: "40px",
    alignItems: "center"
  };
  const combinedOuterStyle = {...defaultTouterStyle, ...outerstyle};

  const defaultTextStyle = {
    color : "#fff",
    userSelect : "none",
  };
  const combinedTextStyle = {...defaultTextStyle, ...textStyle};

  return (
    <div onClick={onClick} style={combinedOuterStyle}>
      <h1 style={combinedTextStyle}>{text}</h1>
    </div>
  )
}