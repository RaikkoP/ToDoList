import Card from '../Card/Card'
import TaskFilter from '../TaskFilter/TaskFilter'
import TaskItem from '../TaskItem/TaskItem'
import './Tasks.css'


const Tasks = (props) => {

    const filterer = (filter) => {
        console.log(filter)
    }

    return(
        <Card className="box">
            <TaskFilter filterData={filterer}></TaskFilter>
            <TaskItem taskData={props.data[0]}></TaskItem>
            <TaskItem taskData={props.data[1]}></TaskItem>
        </Card>
    )
}
export default Tasks