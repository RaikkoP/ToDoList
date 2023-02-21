import "./ToDoListForm.css"
import React, { useState } from 'react';

const ToDoListForm = (props) => {

    const [enteredName, setEnteredName] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [enteredPriority, setEnteredPriority] = useState(0)

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
        console.log(enteredName)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        console.log(enteredDate)
    }
    const priorityChangeHandler = (event) => {
        setEnteredPriority(event.target.value)
        console.log(enteredPriority)
    }
    
    const submitHandler = (event) => {
        event.preventDefault()
        const taskData = {
            name: enteredName,
            date: enteredDate,
            priority: enteredPriority
        }
        props.FormData(taskData)
        setEnteredName('')
        setEnteredDate('')
        setEnteredPriority(0)
    }

    let buttonClick = false;

    const checkIf = (state) => {
        buttonClick = state;
    }
   
    
    return(
        <form onSubmit={submitHandler} className="form-visual">
            <div className="form-section">
                <div>
                    <label>New Task</label>
                    <br></br>
                    <input className="form-selections" type="text" onChange={nameChangeHandler} value={enteredName}/>
                </div>
                <div>
                    <label>Date</label>
                    <br></br>
                    <input className="form-selections" type="date" min="2023-01-18" max="2025-12-31" onChange={dateChangeHandler} value={enteredDate}/>
                </div>
                <div>
                    <label className="label">Select task priority</label>
                    <br></br>
                    <select className="form-selections" onChange={priorityChangeHandler} value={enteredPriority}>
                        <option value={"low"}>low</option>
                        <option value={"medium"}>medium</option>
                        <option value={"high"}>high</option>
                    </select>
                </div>
                <div>
                    <button onClick={checkIf(true)} className="btn">Add Task</button>
                </div>
            </div>
        </form>
    )
}

export default ToDoListForm;