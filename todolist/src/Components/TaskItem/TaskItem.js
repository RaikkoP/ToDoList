import TaskDate from '../TaskDate/TaskDate'
import Card from '../Card/Card.js'
import './TaskItem.css'
import React, { useState } from 'react';

const TaskItem = (props) => {

    const [priority, setPriority] = useState(props.taskData.priority)

    const clickHandler = () => {
       
    }

    return (
        <Card className="todo-item">
            <TaskDate  taskData={props.taskData}/>
            <div className="todo-item__description">
                <h2>{props.taskData.task}</h2>
                <div className="todo-item__priority">{props.taskData.priority}</div>
            </div>
            <button onClick={clickHandler}>X</button>
        </Card>
    )
}


export default TaskItem