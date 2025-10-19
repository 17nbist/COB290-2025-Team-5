import Card from "../Card.js";
import {daysInMonth, monthsBetween, firstDateOfWeek} from "./calendarUtils.js";

export default function CalendarTask({task, startDate, calendarWidth, divisions, rangeType, taskWidth=55, gap=20}) {
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
  let top = task.track * (taskWidth + gap);

  return (
    <Card style={{width: width, height: taskWidth, position: "absolute", left, top, cursor: "pointer", padding: "5px"}}>
      <div style={{width: "100%", height: "100%", position: "absolute"}}>
        <h1
          className="truncate"
          style={{
            position: "absolute",
            top: "5px",
            left: left >=0 ? "5px" : -left,
            right: "5px",
            bottom: "5px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {task.title}
        </h1>
      </div>
    </Card>
  )
}