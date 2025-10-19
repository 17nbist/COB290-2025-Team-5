import Card from "@/components/Card";

export default function TodayPage({tasks, events}) {
	const today = new Date();
	const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
	const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

	const todaysTasks = tasks.filter((t) => (
			new Date(t.from) < endOfDay && new Date(t.to) > startOfDay
		)).sort((t1, t2) => 
			new Date(t1.to) - new Date(t2.to)
		);
		

	const todaysEvents = events.filter((e) => 
			new Date(e.from) < endOfDay && new Date(e.to) > startOfDay
		).sort((e1, e2) => 
			new Date(e1.to) - new Date(e2.to)
		);

	function getTaskDueDate(t) {
		const now = new Date();
		const daysBetween = (t.to - now) / (1000 * 60 * 60 * 24);
		if (daysBetween < 1) {
			return `Due at ${t.to.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
		}
		if (daysBetween <= 31) {
			return `Due in ${Math.round(daysBetween)} days`;
		}
		return `Due on ${t.to.toDateString()}`;
	}

	function getEventSubTitle(e) {
		return `${e.from.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${e.to.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
	}

	return (
		<div style={{display: "flex", gap: "110px"}}>
			<div style={{width: "344px", height: "545px", }}>
				<h1 className="text-[50px] font-[700]" style={{textAlign: "center", marginBottom: "20px"}}>Tasks</h1>
				<div style={{display: "flex", flexDirection: "column", gap: "18px"}}>
					{todaysTasks.map((t) => (
						<TaskEventCard key={t.id} title={t.title} subTitle={getTaskDueDate(t)}/>
					))}
				</div>
			</div>

			<div style={{width: "344px", height: "545px", }}>
				<h1 className="text-[50px] font-[700]" style={{textAlign: "center", marginBottom: "20px"}}>Events</h1>
				<div style={{display: "flex", flexDirection: "column", gap: "18px"}}>
					{todaysEvents.map((e) => (
						<TaskEventCard key={e.id} title={e.title} subTitle={getEventSubTitle(e)}/>
					))}
				</div>
			</div>
		</div>
	);
}

function TaskEventCard({title, subTitle, onClick}) {
	return (
		<Card style={{width: "344px", height: "102px", display: "flex", alignItems: "center"}} onClick={onClick}>
			<div>
				<h1 className="text-[24px] font-[700]">{title}</h1>
				<h1 className="text-[16px] font-[400] text-[#6B7280]">{subTitle}</h1>
			</div>
		</Card>
	);
}