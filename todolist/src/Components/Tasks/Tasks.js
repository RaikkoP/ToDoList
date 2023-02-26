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

    return(
        <Card className="box">
            <TaskFilter filterData={filterChangeHandler}></TaskFilter>
            {props.data.map((taskData) => {
                return <TaskItem
                id={taskData.id}
                task={taskData.task}
                date={taskData.date}
                priority={taskData.priority}
                ></TaskItem>
            })}
        </Card>
    )
}
export default Tasks