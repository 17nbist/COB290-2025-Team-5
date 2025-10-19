import Card from "@/components/Card";

export default function TodayPage({tasks, events}) {
	return (
		<div style={{display: "flex", gap: "82px"}}>
			<div style={{width: "344px", height: "545px", }}>
				<h1 style={{textAlign: "center", marginBottom: "50px"}}>Tasks</h1>
				<div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
					{tasks.map((t) => (
						<TaskEventCard key={t.id} title={t.title} subTitle={"Due in 21 Days"}/>
					))}
				</div>
			</div>

			<div style={{width: "344px", height: "545px", }}>
				<h1 style={{textAlign: "center", marginBottom: "50px"}}>Events</h1>
				<div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
					{events.map((e) => (
						<TaskEventCard key={e.id} title={e.title} subTitle={"Due in 21 Days"}/>
					))}
				</div>
			</div>
		</div>
	);
}

function TaskEventCard({title, subTitle}) {
	return (
		<Card style={{width: "344px", height: "102px", display: "flex", alignItems: "center"}}>
			<div>
				<h1 style={{}}>{title}</h1>
				<h1 style={{}}>{subTitle}</h1>
			</div>
		</Card>
	);
}