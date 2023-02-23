import React from "react";
import "./TaskForm.css"

const TaskForm = (props) => {

    return(
        <form className="box">
            <div>
                <div>
                    <label>Task</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" min="2023-01-01" max="2025-12-31"></input>
                </div>
                <div>
                    <label>Priority</label>
                    <select>
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