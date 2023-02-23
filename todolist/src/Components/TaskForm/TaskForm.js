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

    const submitHandler = (event) => {
        event.preventDefault();
        const TaskData = {
          task: userInput.enteredTask,
          date: new Date(userInput.enteredDate),
          priority: userInput.enteredPriority
        };
        console.log(TaskData);
        setUserInput({
          enteredTask: '',
          enteredDate: '',
          enteredPriority: '0'
        });
      };
      

    return(
        <form onSubmit={submitHandler} className="box">
            <div>
                <div>
                    <label>Task</label>
                    <input type="text" value={userInput.enteredTask} onChange={taskChangeHandler}></input>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" value={userInput.enteredDate} onChange={dateChangeHandler} min="2023-01-01" max="2025-12-31"></input>
                </div>
                <div>
                    <label>Priority</label>
                    <select value={userInput.enteredPriority} onChange={priorityChangeHandler}>
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