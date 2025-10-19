import Card from "../Card.js";
import CalendarTask from "./CalendarTask.js";

export default function CalendarBody({tasks, divisions, divisionTitles, rangeType, calendarWidth, startDate}) {

	
	return (
		<Card style={{height: "100%"}}>
			<div style={{
				display: "grid",
				overflowX: "hidden",
				position: "relative",
				width: `${calendarWidth}px`,
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
				<div style={{position: "absolute", marginTop: "40px"}}>
				{
					tasks.map((t) => (
						<CalendarTask key={t.id} task={t} startDate={startDate} divisions={divisions} rangeType={rangeType} calendarWidth={calendarWidth}/>
					))
				}
				</div>

			</div>
		</Card>
	);
}

