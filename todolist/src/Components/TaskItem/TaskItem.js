import TaskDate from '../TaskDate/TaskDate'
import Card from '../Card/Card.js'
import './TaskItem.css'

const TaskItem = (props) => {


    const clickHandler = () => {
        props.onDeleteTask(props.id);
    }
    

    return (
        <Card className="todo-item">
            <TaskDate  taskData={props.date}/>
            <div className="todo-item__description">
                <h2>{props.task}</h2>
                <div className="todo-item__priority">{props.priority}</div>
            </div>
            <button onClick={clickHandler}>X</button>
        </Card>
    )
}


export default TaskItem