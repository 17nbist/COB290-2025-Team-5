import Calendar from "@/components/Calendar";
export default function EventsPage({events, setEvents}) {
	return (
		<div>
			<Calendar tasks={events}/>
		</div>
	)
}