import './TaskItem.css'

const TaskItem = () => {
    return (
        <div className="todo-item">
            <div>Date</div>
            <div className="todo-item__description">
                <h2>Task</h2>
                <div className="todo-item__price">Priority</div>
            </div>
        </div>
    )
}


export default TaskItem