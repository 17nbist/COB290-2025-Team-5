"use client"
import {useEffect, useState, useMemo} from "react";
import Card from "./Card.js";
import Button from "./Button.js";
import NavBar from "./NavBar.js";

export default function Calendar({tasks}) {
  const [startDate, setStartDate] = useState(firstDateOfWeek(new Date()));

  const [rangeType, setRangeType] = useState("Week");

  useEffect(() => {
    let newStart = new Date();
    newStart.setHours(0, 0, 0, 0);
    if (rangeType === "Week") {
      newStart = firstDateOfWeek(newStart);
    } else if (rangeType === "Month") {
      newStart.setDate(1);
    } else if (rangeType === "Year") {
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
    if (rangeType == "Week") {
      newDate.setDate(newDate.getDate() + 7);
    } else if (rangeType == "Day") {
      newDate.setDate(newDate.getDate() + 1);
    } else if (rangeType == "Month") {
      newDate.setMonth(newDate.getMonth() + 1);
    } else if (rangeType == "Year") {
      newDate.setFullYear(newDate.getFullYear() + 1);
    }
    setStartDate(newDate);
  }

  function decrementDate() {
    const newDate = new Date(startDate);
    if (rangeType == "Week") {
      newDate.setDate(newDate.getDate() - 7);
    } else if (rangeType == "Day") {
      newDate.setDate(newDate.getDate() - 1);
    } else if (rangeType == "Month") {
      newDate.setMonth(newDate.getMonth() - 1)
    } else if (rangeType == "Year") {
      newDate.setFullYear(newDate.getFullYear() - 1);
    }
    setStartDate(newDate);
  }

  function getTasksInRange() {
    let endDate = new Date(startDate);

    if (rangeType == "Week") {
      endDate.setDate(startDate.getDate() + 8);
    } else if (rangeType == "Day") {
      endDate.setDate(startDate.getDate() + 1);
    } else if (rangeType == "Month") {
      endDate.setMonth(startDate.getMonth() + 1);
      endDate.setDate(0);
    } else if (rangeType == "Year") {
      endDate.setFullYear(startDate.getFullYear() + 1, 0, 1);
    }


    let tracked_tasks = [...sortedTasks].filter(t => {
      let fromIndex = 0;
      let toIndex = 0;
      let divisions = getNumberOfDivisions();

      if (rangeType == "Week" || rangeType == "Month") {
        fromIndex = (t.from - startDate) / (1000 * 60 * 60 * 24);
        toIndex = (t.to - startDate) / (1000 * 60 * 60 * 24);
      } else if (rangeType == "Day") {
        fromIndex = (t.from - startDate) / (1000 * 60 * 60);
        toIndex = (t.to - startDate) / (1000 * 60 * 60);
      } else if (rangeType == "Year") {
        fromIndex = MonthsBetween(startDate, t.from);
        toIndex = MonthsBetween(startDate, t.to);
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
    if (rangeType == "Week") {
      return 7;
    } else if (rangeType == "Day") {
      return 24;
    } else if (rangeType == "Month") {
      return DaysInMonth(startDate);
    } else if (rangeType == "Year") {
      return 12;
    }
  }

  function getDivisionTitles() {
    let titles = [];
    if (rangeType == "Week") {
      for (let i = 0; i < 7; i++) {
        let toDay = new Date(startDate)
        toDay.setHours(0, 0, 0, 0);
        toDay.setDate(toDay.getDate() + i);
        titles.push(toDay.toDateString());
      }
    } else if (rangeType == "Day") {
      let toDay = new Date(startDate)
      for (let i = 0; i < 24; i++) {
        // titles.push(`${i.toString().padStart(2, "0")}:00 - ${(i+1).toString().padStart(2, "0")}:00`)
        titles.push(`${i.toString().padStart(2, "0")}:00`)
      }
    } else if (rangeType == "Month") {
      let toDay = new Date(startDate)
      for (let i = 1; i < DaysInMonth(toDay) + 1; i++) {
        titles.push(i);
      }
    } else if (rangeType == "Year") {
      titles = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    }
    return titles;
  }

  function getRangeText() {
    let endDate = new Date(startDate);

    if (rangeType == "Week") {
      endDate.setDate(startDate.getDate() + 8);
    } else if (rangeType == "Day") {
      endDate.setDate(startDate.getDate() + 1);
    } else if (rangeType == "Month") {
      endDate.setMonth(startDate.getMonth() + 1);
      endDate.setDate(0);
    } else if (rangeType == "Year") {
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
          <NavBar items={["Day", "Week", "Month", "Year"]} activeTab={rangeType} setActiveTab={setRangeType}/>
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

function DaysInMonth(d) {
  let lastDate = new Date(d);
  lastDate.setMonth(lastDate.getMonth() + 1);
  lastDate.setDate(0);
  return lastDate.getDate();
}

function CalendarTask({task, startDate, calendarWidth, divisions, rangeType}) {
  startDate = new Date(startDate);
  let fromIndex = 0;
  let toIndex = 0;

  if (rangeType == "Week" || rangeType == "Month") {
    fromIndex = (task.from - startDate) / (1000 * 60 * 60 * 24);
    toIndex = (task.to - startDate) / (1000 * 60 * 60 * 24);
  } else if (rangeType == "Day") {
    fromIndex = (task.from - startDate) / (1000 * 60 * 60);
    toIndex = (task.to - startDate) / (1000 * 60 * 60);
  } else if (rangeType == "Year") {
    fromIndex = MonthsBetween(startDate, task.from);
    toIndex = MonthsBetween(startDate, task.to);
  }

  if (rangeType == "Month") {
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

function MonthsBetween(start, end) {
  const Years = end.getFullYear() - start.getFullYear();
  const Months = end.getMonth() - start.getMonth();
  const Days = (end.getDate() - start.getDate()) / DaysInMonth(start); // fractional Month
  return Years * 12 + Months + Days;
}

function firstDateOfWeek(d) {
  let date = new Date(d)
  date.setHours(0, 0, 0, 0);

  let DayOfWeek = date.getDay()
  const diff = DayOfWeek === 0 ? -6 : 1 - DayOfWeek;
  date.setDate(date.getDate() + diff);
  return date;
}
