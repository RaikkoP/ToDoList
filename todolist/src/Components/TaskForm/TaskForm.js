import React, { useState } from "react";
import "./TaskForm.css"

const TaskForm = (props) => {

    const [userInput, setUserInput] = useState({
        enteredTask: '',
        enteredDate: '',
        enteredPriority: ''
    })
    console.log(userInput)

    //const [task, setTask] = useState('')
    //const [date, setDate] = useState('')
    //const [priority, setPriority] = useState('')

    const taskChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTask: event.target.value
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    }

    const priorityChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredPriority: event.target.value
        })
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