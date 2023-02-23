import Card from '../Card/Card'
import TaskFilter from '../TaskFilter/TaskFilter'
import TaskItem from '../TaskItem/TaskItem'
import './Tasks.css'


const Tasks = (props) => {

    const filterer = (filter) => {
        props.filterData(filter)
    }

    return(
        <Card className="box">
            <TaskFilter filterData={filterer}></TaskFilter>
            {props.data.map((data) => {
                return <TaskItem
                taskData={data}>
                </TaskItem>
            })}
        </Card>
    )
}
export default Tasks