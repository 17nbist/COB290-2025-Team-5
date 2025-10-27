import Calendar from "@/components/Calendar/Calendar";
export default function EventsPage({events, setEvents}) {
	return (
		<div style={{width: "80%", height: "80%"}}>
			<Calendar tasks={events} startRangeType={"Day"} addOnClick={()=>{}}/>
		</div>
	)
}