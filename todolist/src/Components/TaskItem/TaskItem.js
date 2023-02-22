import TaskDate from '../TaskDate/TaskDate'
import './TaskItem.css'

const TaskItem = (props) => {


    return (
        <div className="todo-item">
            <TaskDate  taskData={props.taskData}/>
            <div className="todo-item__description">
                <h2>{props.taskData.task}</h2>
                <div className="todo-item__priority">{props.taskData.priority}</div>
                <button type="button">X</button>
            </div>
        </div>
    )
}


export default TaskItem