import { useState } from 'react'
import './TaskFilter.css'
 
const TaskFilter = (props) => {

    const [filter, setFilter] = useState('3')

    const filterHandler = (event) => {
        setFilter(event.target.value)
    }

    props.filterData(filter)

    return(
        <select onChange={filterHandler}>
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
    )
}



export default TaskFilter