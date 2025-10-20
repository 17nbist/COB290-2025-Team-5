import Card from "../Card.js";
import CalendarTask from "./CalendarTask.js";

export default function CalendarBody({tasks, divisions, divisionTitles, rangeType, startDate, taskGap}) {	
	return (
		<Card style={{height: "100%", width: "100%"}}>
			<div style={{
				display: "grid",
				overflowX: "hidden",
				position: "relative",
				width: `100%`,
				height: "100%",
				gridTemplateColumns: `repeat(${divisions}, minmax(0, 1fr))`,
				borderRadius: "10px"
			}}>

				{/* dates and dividors */}
				{
					divisionTitles.map((e, i, arr) => (
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
				<div style={{position: "absolute", marginTop: "40px", width: "100%"}}>
				{
					tasks.map((t) => (
						<CalendarTask key={t.id} task={t} startDate={startDate} divisions={divisions} rangeType={rangeType} gap={taskGap}/>
					))
				}
				</div>

			</div>
		</Card>
	);
}

