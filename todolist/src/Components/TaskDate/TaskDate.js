import './TaskDate.css'

const TaskDate = (props) => {

    const day = props.taskData.date.toLocaleString('en-US', {day: '2-digit'})
    const month = props.taskData.date.toLocaleString('en-US', {month: 'long'})
    const year = props.taskData.date.getFullYear()


    return(
        <div className={"ToDoDate"}>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
         </div>
    )
}

export default TaskDate