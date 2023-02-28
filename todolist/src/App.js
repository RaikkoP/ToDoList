import { useState } from "react";
import "./App.css"
import NewTask from "./Components/NewTask/NewTask";
import Tasks from "./Components/Tasks/Tasks";


const DUMMY_INFO = [{
  id: 'e1',
  date: new Date(2023, 0 ,10),
  task:'Walk Dog',
  priority:'high'
},
{
  id: 'e2',
  date: new Date(2024, 0, 10),
  task: 'Cook dinner',
  priority:'low'
},
{
  id: 'e3',
  date: new Date(2024, 0, 10),
  task: 'Hit the gym',
  priority:'medium'
}
]



const App = () => {

  const [taskList, setTaskList] = useState(DUMMY_INFO)

  const taskDataPrinter = (TASKDATA) => {
    console.log('In App.js')
    
    setTaskList((previousTask) => {
      return [TASKDATA, ...taskList]
  })
  console.log(taskList)
}

const deleteTaskHandler = (taskId) => {
  setTaskList((previousTasks) => {
    return previousTasks.filter(task => task.id !== taskId);
  });
}


  


  return(
    <div className="box">
      <NewTask taskData={taskDataPrinter}></NewTask>
      <Tasks data={taskList}  onDeleteTask={deleteTaskHandler}></Tasks>
    </div>
      
 
  )
  
  }
    

 

export default App;
