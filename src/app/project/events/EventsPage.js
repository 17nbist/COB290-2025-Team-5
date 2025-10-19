import Calendar from "@/components/Calendar/Calendar";
export default function EventsPage({events, setEvents}) {
	return (
		<div>
			<Calendar tasks={events} startRangeType="Day" addOnClick={()=>{}}/>
		</div>
	)
}