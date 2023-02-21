import './ToDoItem.css'
import ToDoDate from "./Components/ToDoDate/ToDoDate.js"

const ToDoItem = (props) =>{
    return (
        /*Määrame nimetused antud tulpadele*/
        <div className="todo-item">
            <ToDoDate date={props.example.date}></ToDoDate>
            <div className="todo-item__description">
                <h2>{props.example.title}</h2>
                <div className="todo-item__price">{props.example.priority}</div>
            </div>
        </div>
    )
}

export default ToDoItem