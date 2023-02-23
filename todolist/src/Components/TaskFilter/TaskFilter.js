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
            <option value="3">All</option>
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
        </select>
    )
}



export default TaskFilter