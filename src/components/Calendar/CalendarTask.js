import Card from "../Card.js";
import {daysInMonth, monthsBetween, firstDateOfWeek} from "./calendarUtils.js";

export default function CalendarTask({task, startDate, calendarWidth, divisions, rangeType}) {
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
    fromIndex = monthsBetween(startDate, task.from);
    toIndex = monthsBetween(startDate, task.to);
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