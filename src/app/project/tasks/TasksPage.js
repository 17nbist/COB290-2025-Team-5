import Calendar from "@/components/Calendar/Calendar";
export default function TasksPage({tasks, setTasks}) {
	return (
		<div style={{width: "80%", height: "80%"}}>
			<Calendar tasks={tasks} addOnClick={()=>{}}/>
		</div>
	)
}