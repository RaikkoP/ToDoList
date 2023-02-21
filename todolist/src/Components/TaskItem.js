import './TaskItem.css'

const TaskItem = (props) => {

    


    return (
        <div className="todo-item">
            <div>{props.taskData.date.toString()}</div>
            <div className="todo-item__description">
                <h2>{props.taskData.task}</h2>
                <div className="todo-item__price">{props.taskData.priority}</div>
            </div>
        </div>
    )
}


export default TaskItem