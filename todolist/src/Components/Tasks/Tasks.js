import Card from '../Card/Card'
import TaskItem from '../TaskItem/TaskItem'
import './Tasks.css'


const Tasks = (props) => {

    return(
        <Card className="box">
            <TaskItem taskData={props.data}></TaskItem>
            <TaskItem taskData={props.data}></TaskItem>
        </Card>
    )
}
export default Tasks