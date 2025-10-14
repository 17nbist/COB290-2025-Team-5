"use client"
import {useEffect, useState} from "react";

export default function Calendar({tasks}) {
  const [startDate, setStartDate] = useState(() => {
    let date = new Date();
    date.setHours(0, 0, 0, 0);

    let dayOfWeek = date.getDay()
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    date.setDate(date.getDate() + diff);
    return date;
  });

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
        borderStyle: "solid", borderWidth: "1px", 
        height: "100%", 
        gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
        backgroundColor: "#000",
        gridColumngap : "1px"

      }}>
        {
          getDatesInRange().map(e => (
            <h1>{e.toDateString()}</h1>
          ))
        }
      </div>
    </div>
  )
}

function CalendarTask() {
  return (
    <div>

    </div>
  )
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