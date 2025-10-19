import Calendar from "@/components/Calendar/Calendar";
export default function TasksPage({tasks, setTasks}) {
	return (
		<div>
			<Calendar tasks={tasks} addOnClick={()=>{}}/>
		</div>
	)
}