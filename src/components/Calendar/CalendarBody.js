import Card from "../Card.js";
import CalendarTask from "./CalendarTask.js";

export default function CalendarBody({tasks, divisions, divisionTitles, rangeType, startDate, taskGap}) {	
	return (
		<Card style={{height: "100%", width: "100%"}}>
			<div style={{
				width: `100%`,
				height: "100%",
				borderRadius: "10px",
				overflowX: "hidden",
				position: "relative",
			}}>

				<div style={{
					display: "grid",
					position: "absolute",
					width: `100%`,
					gridTemplateColumns: `repeat(${divisions}, minmax(0, 1fr))`,
					zIndex: 2,
				}}>

					{/* dates and dividors */}
					{
						divisionTitles.map((e, i, arr) => (
							<div key={e}
								style={{
									borderRight: i !== arr.length - 1 ? "1px solid #ddd" : "none",
									backgroundColor: "#fff",
								}}
							>
							<h1 style={{textAlign: "center"}}>{e}</h1>
							</div>
						))
					}

				</div>
				
				<div style={{
					display: "grid",
					position: "absolute",
					width: `100%`,
					height: "100%",
					gridTemplateColumns: `repeat(${divisions}, minmax(0, 1fr))`,
				}}>

					{/* dates and dividors */}
					{
						divisionTitles.map((e, i, arr) => (
							<div key={e}
								style={{
									borderRight: i !== arr.length - 1 ? "1px solid #ddd" : "none",
								}}
							>
							</div>
						))
					}

				</div>

				<div style={{
					display: "grid",
					position: "absolute",
					width: `100%`,
					height: "100%",
					gridTemplateColumns: `repeat(${divisions}, minmax(0, 1fr))`,
					overflowY: "auto",
					overflowX: "hidden",
				}}>

					{/* tasks */}
					<div style={{position: "absolute", marginTop: "40px", width: "100%"}}>
						{
							tasks.map((t) => (
								<CalendarTask key={t.id} task={t} startDate={startDate} divisions={divisions} rangeType={rangeType} gap={taskGap}/>
							))
						}
					</div>
				</div>
					

			</div>
		</Card>
	);
}

