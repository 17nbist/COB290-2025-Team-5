import Calendar from "@/components/Calendar";
export default function TasksPage({tasks, setTasks}) {
	return (
		<div>
			<Calendar tasks={tasks}/>
		</div>
	)
}