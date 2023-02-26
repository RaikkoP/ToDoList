import { useState } from 'react'
import Card from '../Card/Card'
import TaskFilter from '../TaskFilter/TaskFilter'
import TaskItem from '../TaskItem/TaskItem'
import './Tasks.css'


const Tasks = (props) => {

    const [filteredPriority, setFilteredPriority] = useState('3')

    const filterChangeHandler = (filter) => {
        console.log('Filter change handled by Tasks.js')
        console.log(filter + 'in Tasks.js')
        setFilteredPriority(filter)
    }

    const deleteTaskHandler = (taskId) => {
        props.onDeleteTask(taskId);
    }

    return(
        <Card className="box">
            <TaskFilter filterData={filterChangeHandler}></TaskFilter>
            {props.data
        .filter(taskData => taskData.priority === filteredPriority || filteredPriority === 'all').map((taskData) => {
                return <TaskItem
                id={taskData.id}
                task={taskData.task}
                date={taskData.date}
                priority={taskData.priority}
                onDeleteTask={deleteTaskHandler}
                ></TaskItem>
            })}
        </Card>
    )
}
export default Tasks