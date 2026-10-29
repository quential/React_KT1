import TaskItem, {type Task} from "./TaskItem.tsx";
import AddNewTask from "./AddNewTask.tsx";
import '../styles/TaskBoard.css'


const tasks: Task[] = [
    {id: 1, title: 'Полететь на хату', isCompleted: false},
    {id: 2, title: 'Съесть печеньку', isCompleted: true},
    {id: 3, title: 'Оплатить подписку Claude', isCompleted: true},
    {id: 4, title: 'Выучить React', isCompleted: false},
]

function TaskBoard() {
    return (
        <div className="task-board">
            <h2>Задачи</h2>
            <AddNewTask/>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <TaskItem task={task}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskBoard
