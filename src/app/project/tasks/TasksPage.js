import Calendar from "@/components/Calendar/Calendar";
export default function TasksPage({tasks, setTasks}) {
	return (
		<div style={{width: "80%", height: "80%", backgroundColor: "#fff"}}>
			<Calendar tasks={tasks} addOnClick={()=>{}} excludeNav={["8h"]}/>
		</div>
	)
}