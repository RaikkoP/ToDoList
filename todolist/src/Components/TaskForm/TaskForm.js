import React, { useState } from "react";
import "./TaskForm.css"

const TaskForm = (props) => {

    const [task, setTask] = useState('')
    const [date, setDate] = useState('')
    const [priority, setPriority] = useState('')

    const taskChangeHandler = (event) => {
        setTask(event.target.value)
        console.log(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
        console.log(event.target.value)
    }

    const priorityChangeHandler = (event) => {
        setPriority(event.target.value)
        console.log(event.target.value)
    }

    return(
        <form className="box">
            <div>
                <div>
                    <label>Task</label>
                    <input type="text" onChange={taskChangeHandler}></input>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} min="2023-01-01" max="2025-12-31"></input>
                </div>
                <div>
                    <label>Priority</label>
                    <select onChange={priorityChangeHandler}>
                        <option value= '0'>Low</option>
                        <option value= '1'>Medium</option>
                        <option value= '2'>High</option>
                    </select>
                </div>
            </div>
            <div>
                <button type="submit">Add Task</button>
            </div>
        </form>
    )
}

export default TaskForm