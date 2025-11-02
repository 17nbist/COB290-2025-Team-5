import Card from "../Card.js";
import CalendarTask from "./CalendarTask.js";

export default function CalendarBody({tasks, divisions, divisionTitles, rangeType, startDate, taskGap, taskOnClick}) {	
	return (
		<Card className={"dark:text-white"} style={{ height: "100%", width: "100%", overflowX: "auto", overflowY: "hidden" }}>
			<div
				style={{
				width: `${divisions * 200}px`,
				height: "100%",
				borderRadius: "10px",
				position: "relative",
				display: "grid",
				gridTemplateColumns: `repeat(${divisions}, 200px)`,
				}}
			>
				{/* Division headers */}
				{divisionTitles.map((e, i, arr) => (
				<div
					key={e}
					style={{
					borderRight: i !== arr.length - 1 ? "1px solid #0084ff" : "none",
					textAlign: "center",
					}}
				>
					<h1>{e}</h1>
				</div>
				))}

				{/* Tasks */}
				<div style={{ position: "absolute", top: "40px", left: 0, width: `${1*200}px` }}>
				{tasks.map((t) => (
					<CalendarTask
					key={t.id}
					task={t}
					startDate={startDate}
					divisions={divisions}
					rangeType={rangeType}
					gap={taskGap}
					taskOnClick={taskOnClick}
					/>
				))}
				</div>
			</div>
		</Card>
	);
}

