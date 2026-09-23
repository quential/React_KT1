export interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
}

interface TaskItemProps {
    task: Task;
}

function TaskItem({task}: TaskItemProps){
    return(
        <div className="task-item">
            <span style={{textDecoration: task.isCompleted ? 'line-through' : 'none'}}>{task.title}</span>
        </div>
    )
}

export default TaskItem