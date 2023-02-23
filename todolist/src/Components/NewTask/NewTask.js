import React from 'react';
import TaskForm from '../TaskForm/TaskForm';

const NewTask = (props) => {

    const saveTaskData = (enteredTaskData) => {
        const taskData = {
            ...enteredTaskData,
        id: Math.random().toString()
        }
        props.taskData(taskData)
    }

    return(
        <div>
            <TaskForm onSaveTaskData={saveTaskData}></TaskForm>
        </div>
    )
}

export default NewTask