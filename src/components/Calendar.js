"use client"
import {useEffect, useState, useMemo} from "react";
import Card from "./Card.js";
import Button from "./Button.js";
import NavBar from "./NavBar.js";

export default function Calendar({tasks}) {
  const [startDate, setStartDate] = useState(firstDateOfWeek(new Date()));

  const [rangeType, setRangeType] = useState("week");

  useEffect(() => {
    let newStart = new Date();
    newStart.setHours(0, 0, 0, 0);
    if (rangeType === "week") {
      newStart = firstDateOfWeek(newStart);
    } else if (rangeType === "month") {
      newStart.setDate(1);
    } else if (rangeType === "year") {
      newStart.setMonth(0);
      newStart.setDate(1);
    }
    if (startDate.getTime() !== newStart.getTime()) {
      setStartDate(newStart);
    }
  }, [rangeType]);

  
  const sortedTasks = useMemo(() => (
    [...tasks].sort((b, a) => new Date(b.from) - new Date(a.from))
  ), [tasks]);

  function incrementDate() {
    const newDate = new Date(startDate);
    if (rangeType == "week") {
      newDate.setDate(newDate.getDate() + 7);
    } else if (rangeType == "day") {
      newDate.setDate(newDate.getDate() + 1);
    } else if (rangeType == "month") {
      newDate.setMonth(newDate.getMonth() + 1);
    } else if (rangeType == "year") {
      newDate.setFullYear(newDate.getFullYear() + 1);
    }
    setStartDate(newDate);
  }

  function decrementDate() {
    const newDate = new Date(startDate);
    if (rangeType == "week") {
      newDate.setDate(newDate.getDate() - 7);
    } else if (rangeType == "day") {
      newDate.setDate(newDate.getDate() - 1);
    } else if (rangeType == "month") {
      newDate.setMonth(newDate.getMonth() - 1)
    } else if (rangeType == "year") {
      newDate.setFullYear(newDate.getFullYear() - 1);
    }
    setStartDate(newDate);
  }

  function getTasksInRange() {
    let endDate = new Date(startDate);

    if (rangeType == "week") {
      endDate.setDate(startDate.getDate() + 8);
    } else if (rangeType == "day") {
      endDate.setDate(startDate.getDate() + 1);
    } else if (rangeType == "month") {
      endDate.setMonth(startDate.getMonth() + 1);
      endDate.setDate(0);
    } else if (rangeType == "year") {
      endDate.setFullYear(startDate.getFullYear() + 1, 0, 1);
    }
    

    let tracked_tasks = [...sortedTasks].filter(t => {      
      let fromIndex = 0;
      let toIndex = 0;
      let divisions = getNumberOfDivisions();

      if (rangeType == "week" || rangeType == "month") {
        fromIndex = (t.from - startDate) / (1000 * 60 * 60 * 24);
        toIndex = (t.to - startDate) / (1000 * 60 * 60 * 24);
      } else if (rangeType == "day") {
        fromIndex = (t.from - startDate) / (1000 * 60 * 60);
        toIndex = (t.to - startDate) / (1000 * 60 * 60);
      } else if (rangeType == "year") {
        fromIndex = monthsBetween(startDate, t.from);
        toIndex = monthsBetween(startDate, t.to);
      }

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

    let fTasks = tracked_tasks.filter(t => t.from < endDate && t.to > startDate);
    
    return fTasks;
  }

  function getNumberOfDivisions() {
    if (rangeType == "week") {
      return 7;
    } else if (rangeType == "day") {
      return 24;
    } else if (rangeType == "month") {
      return daysInMonth(startDate);
    } else if (rangeType == "year") {
      return 12;
    }
  }

  function getDivisionTitles() {
    let titles = [];
    if (rangeType == "week") {
      for (let i = 0; i < 7; i++) {
        let today = new Date(startDate)
        today.setHours(0, 0, 0, 0);
        today.setDate(today.getDate() + i);
        titles.push(today.toDateString());
      }
    } else if (rangeType == "day") {
      let today = new Date(startDate)
      for (let i = 0; i < 24; i++) {
        // titles.push(`${i.toString().padStart(2, "0")}:00 - ${(i+1).toString().padStart(2, "0")}:00`)
        titles.push(`${i.toString().padStart(2, "0")}:00`)
      }
    } else if (rangeType == "month") {
      let today = new Date(startDate)
      for (let i = 1; i < daysInMonth(today) + 1; i++) {
        titles.push(i);
      }
    } else if (rangeType == "year") {
      titles = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    }
    return titles;
  }

  function getRangeText() {
    let endDate = new Date(startDate);

    if (rangeType == "week") {
      endDate.setDate(startDate.getDate() + 8);
    } else if (rangeType == "day") {
      endDate.setDate(startDate.getDate() + 1);
    } else if (rangeType == "month") {
      endDate.setMonth(startDate.getMonth() + 1);
      endDate.setDate(0);
    } else if (rangeType == "year") {
      endDate.setFullYear(startDate.getFullYear() + 1, 0, 1);
    }
    return `${startDate.toDateString()} - ${endDate.toDateString()}`;
  }

  const calendarWidth = 1200;

  return (
    <Card style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <div style={{display: "flex", flexDirection: "column", gap: "5px", width: calendarWidth + "px", height: "700px"}}>
        <h1>{getRangeText()}</h1>
        {/*top bar*/}
        <div style={{display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center", marginTop: "10px", marginBottom: "10px"}}>
          <NavBar items={["day", "week", "month", "year"]} activeTab={rangeType} setActiveTab={setRangeType}/>
          <div style={{display: "flex", gap: "5px"}}>
            <Button text={"<"} onClick={decrementDate} />
            <Button text={">"} onClick={incrementDate}/> 
          </div>
        </div>

        {/*calendar body*/}
        <Card style={{height: "100%", }}>
          <div style={{
            display: "grid", 
            // borderStyle: "solid", 
            // borderWidth: "1px",
            overflowX: "hidden", 
            position: "relative",
            height: "100%", 
            gridTemplateColumns: `repeat(${getNumberOfDivisions()}, minmax(0, 1fr))`,
            borderRadius: "10px"

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
            <div style={{position: "absolute", marginTop: "40px"}}>
            {
              getTasksInRange().map((t) => (
                <CalendarTask key={t.id} task={t} startDate={startDate} divisions={getNumberOfDivisions()} rangeType={rangeType} calendarWidth={calendarWidth}/>
              ))
            }
            </div>

          </div>
        </Card>
      </div>
    </Card>
  )
}

function daysInMonth(d) {
  let lastDate = new Date(d);
  lastDate.setMonth(lastDate.getMonth() + 1);
  lastDate.setDate(0);
  return lastDate.getDate();
}

function CalendarTask({task, startDate, calendarWidth, divisions, rangeType}) {
  startDate = new Date(startDate);
  let fromIndex = 0;
  let toIndex = 0;
  
  if (rangeType == "week" || rangeType == "month") {
    fromIndex = (task.from - startDate) / (1000 * 60 * 60 * 24);
    toIndex = (task.to - startDate) / (1000 * 60 * 60 * 24);
  } else if (rangeType == "day") {
    fromIndex = (task.from - startDate) / (1000 * 60 * 60);
    toIndex = (task.to - startDate) / (1000 * 60 * 60);
  } else if (rangeType == "year") {
    fromIndex = monthsBetween(startDate, task.from);
    toIndex = monthsBetween(startDate, task.to);
  }
  
  if (rangeType == "month") {
    divisions += 1;
  }
  
  let left = fromIndex * calendarWidth / divisions;
  let width = (toIndex - fromIndex) * calendarWidth / divisions;
  let top = task.track * 60;

  return (
    <Card style={{width: width, height: "50px", position: "absolute", left, top, cursor: "pointer"}}>
      <h1 style={{width: width, height: "50px", position: "absolute", left: left >= 0 ? 0 : -left, top:0}}>{task.title}</h1>
    </Card>
  )
}

function monthsBetween(start, end) {
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  const days = (end.getDate() - start.getDate()) / daysInMonth(start); // fractional month
  return years * 12 + months + days;
}

function firstDateOfWeek(d) {
  let date = new Date(d)
  date.setHours(0, 0, 0, 0);

  let dayOfWeek = date.getDay()
  const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  date.setDate(date.getDate() + diff);
  return date;
}