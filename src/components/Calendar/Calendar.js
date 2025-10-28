"use client"
import {useEffect, useState, useMemo} from "react";
import Card from "../Card.js";
import Button from "../Button.js";
import NavBar from "../NavBar.js";
import CalendarBody from "./CalendarBody.js";
import {daysInMonth, monthsBetween, firstDateOfWeek} from "./calendarUtils.js";

export default function Calendar({tasks, startRangeType="Week", addOnClick, excludeNav=[], taskOnClick}) {
  const [startDate, setStartDate] = useState(firstDateOfWeek(new Date()));

  const rangeTypes = ["8h", "Day", "Week" , "Month", "Year"].filter(e => !(excludeNav.includes(e)));
  const [rangeType, setRangeType] = useState(startRangeType);

  useEffect(() => {
    let newStart = new Date();
    
    if (rangeType === "Week") {
      newStart = firstDateOfWeek(newStart);
      newStart.setHours(0, 0, 0, 0);
    } else if (rangeType === "Month") {
      newStart.setDate(1);
      newStart.setHours(0, 0, 0, 0);
    } else if (rangeType === "Year") {
      newStart.setMonth(0);
      newStart.setDate(1);
      newStart.setHours(0, 0, 0, 0);
    } else if (rangeType === "8h") {
      newStart.setHours(newStart.getHours(), 0, 0, 0)
    } else if (rangeType == "Day") {
      newStart.setHours(0, 0, 0, 0);
    }

    if (startDate.getTime() !== newStart.getTime()) {
      setStartDate(newStart);
    }
  }, [rangeType]);


  const sortedTasks = useMemo(() => (
    [...(tasks || [])].sort((a, b) => new Date(a.from) - new Date(b.from))
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
    } else if (rangeType == "8h") {
      newDate.setHours(newDate.getHours() + 8, 0, 0, 0)
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
    } else if (rangeType == "8h") {
      newDate.setHours(newDate.getHours() - 8, 0, 0, 0)
    }
    setStartDate(newDate);
  }

  function getTasksInRange() {
    let endDate = new Date(startDate);

    if (rangeType == "Week") {
      endDate.setDate(startDate.getDate() + 7);
    } else if (rangeType == "Day") {
      endDate.setDate(startDate.getDate() + 1);
    } else if (rangeType == "Month") {
      endDate.setMonth(startDate.getMonth() + 1);
      endDate.setDate(0);
    } else if (rangeType == "Year") {
      endDate.setFullYear(startDate.getFullYear() + 1, 0, 1);
    } else if (rangeType == "8h") {
      endDate.setHours(endDate.getHours() + 8, 0, 0, 0)
    }


    let tracked_tasks = [...sortedTasks].filter(t => {
      let fromIndex = 0;
      let toIndex = 0;
      let divisions = getNumberOfDivisions();

      if (rangeType == "Week" || rangeType == "Month") {
        fromIndex = (t.from - startDate) / (1000 * 60 * 60 * 24);
        toIndex = (t.to - startDate) / (1000 * 60 * 60 * 24);
      } else if (rangeType == "Day" || rangeType == "8h") {
        fromIndex = (t.from - startDate) / (1000 * 60 * 60);
        toIndex = (t.to - startDate) / (1000 * 60 * 60);
      } else if (rangeType == "Year") {
        fromIndex = monthsBetween(startDate, t.from);
        toIndex = monthsBetween(startDate, t.to);
      }

      const widthFraction = (toIndex - fromIndex) / divisions;
      return widthFraction >= 1/30;
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
            break;
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
      return daysInMonth(startDate);
    } else if (rangeType == "Year") {
      return 12;
    } else if (rangeType == "8h") {
      return 8;
    }
  }

  function getDivisionTitles() {
    let titles = [];
    if (rangeType == "Week") {
      for (let i = 0; i < 7; i++) {
        let today = new Date(startDate)
        today.setHours(0, 0, 0, 0);
        today.setDate(today.getDate() + i);
        titles.push(today.toDateString());
      }
    } else if (rangeType == "Day") {
      let today = new Date(startDate)
      for (let i = 0; i < 24; i++) {
        titles.push(`${i.toString().padStart(2, "0")}:00`)
      }
    } else if (rangeType == "Month") {
      let today = new Date(startDate)
      for (let i = 1; i < daysInMonth(today) + 1; i++) {
        titles.push(i);
      }
    } else if (rangeType == "Year") {
      titles = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    } else if (rangeType == "8h") {
      let now = new Date(startDate)
      now.setHours(now.getHours(), 0, 0, 0, 0)
      for (let i = 0; i < 8; i++) {
        titles.push(`${now.getHours().toString().padStart(2, "0")}:00`)
        now.setHours(now.getHours() + 1, 0, 0, 0, 0) 
      }
    }
    return titles;
  }

function getRangeText() {
    let endDate = new Date(startDate);

    if (rangeType === "Week") {
      endDate.setDate(startDate.getDate() + 8);
    } else if (rangeType === "Day") {
      endDate.setDate(startDate.getDate() + 1);
    } else if (rangeType === "Month") {
      endDate.setMonth(startDate.getMonth() + 1);
      endDate.setDate(0);
    } else if (rangeType === "Year") {
      endDate.setFullYear(startDate.getFullYear() + 1, 0, 1);
    } else if (rangeType === "8h") {
      endDate.setHours(startDate.getHours() + 8);
    }

    if (rangeType === "8h") {
      const dateOpts = {
        weekday: "short",
        month: "short",
        day: "numeric",
      };
      const timeOpts = {
        hour: "2-digit",
        minute: "2-digit",
      };

      return `${startDate.toLocaleDateString(undefined, dateOpts)} ${startDate.toLocaleTimeString(undefined, timeOpts)} - ${endDate.toLocaleDateString(undefined, dateOpts)} ${endDate.toLocaleTimeString(undefined, timeOpts)}`;
    } else {
      return `${startDate.toDateString()} - ${endDate.toDateString()}`;
    }
  }

  return (
    <Card style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
      <div style={{display: "flex", flexDirection: "column", gap: "5px", width: "100%", height: "100%"}}>
        <h1>{getRangeText()}</h1>
        {/*top bar*/}
        <div style={{display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center", marginTop: "10px", marginBottom: "10px"}}>
          <NavBar items={rangeTypes} activeTab={rangeType} setActiveTab={setRangeType}/>
          <div style={{display: "flex", gap: "5px"}}>
            <Button text={"<"} onClick={decrementDate} />
            <Button text={">"} onClick={incrementDate} />
          </div>
        </div>

        {addOnClick && <Button onClick={addOnClick} outerStyle={{marginBottom: "10px"}} textStyle={{fontSize: "20px", fontWeight: "500"}} text={"+"} />}

        {/*calendar body*/}
        <div className="flex-1">
          <CalendarBody tasks={getTasksInRange()} divisions={getNumberOfDivisions()} rangeType={rangeType} divisionTitles={getDivisionTitles()} startDate={startDate} taskOnClick={taskOnClick}/>
        </div>
      </div>
    </Card>
  )
}