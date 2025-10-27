import Card from "../Card.js";
import {daysInMonth, monthsBetween, firstDateOfWeek} from "./calendarUtils.js";

export default function CalendarTask({task, startDate, divisions, rangeType, taskWidth=55, gap=20, taskOnClick}) {
  startDate = new Date(startDate);
  let fromIndex = 0;
  let toIndex = 0;

  if (rangeType == "Week" || rangeType == "Month") {
    fromIndex = (task.from - startDate) / (1000 * 60 * 60 * 24);
    toIndex = (task.to - startDate) / (1000 * 60 * 60 * 24);
  } else if (rangeType == "Day" || rangeType == "8h") {
    fromIndex = (task.from - startDate) / (1000 * 60 * 60);
    toIndex = (task.to - startDate) / (1000 * 60 * 60);
  } else if (rangeType == "Year") {
    fromIndex = monthsBetween(startDate, task.from);
    toIndex = monthsBetween(startDate, task.to);
  }

  let left = fromIndex / divisions * 100;
  let width = (toIndex - fromIndex) / divisions * 100;
  
  let textLeft = left >= 0 ? "5px" : `${-fromIndex/(toIndex - fromIndex) * 100}%`

  let top = task.track * (taskWidth + gap);

  console.log({
    task: task.title,
    fromIndex,
    toIndex,
    divisions,
    left,
    width,
    textLeft
  });

  return (
    <Card style={{width: width + "%", height: taskWidth, position: "absolute", left: left + "%", top, cursor: "pointer", padding: "5px"}} onClick={taskOnClick? () => taskOnClick(task): ()=>{}}>
      <h1
        className="truncate"
        style={{
          position: "absolute",
          top: "5px",
          left: textLeft,
          right: "5px",
          bottom: "5px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {task.title}
      </h1>
    </Card>
  )
}