import { useState } from "react";
import "./App.css"
import NewTask from "./Components/NewTask/NewTask";
import Tasks from "./Components/Tasks/Tasks";


const DUMMY_INFO = [{
  id: 'e1',
  date: new Date(2023, 0 ,10),
  task:'Walk Grandma',
  priority:'low'
},
{
  id: 'e2',
  date: new Date(2024, 0, 10),
  task: 'Walk Grandpa',
  priority:'low'
},
{
  id: 'e3',
  date: new Date(2024, 0, 10),
  task: 'Walk Wife',
  priority:'low'
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


  


  return(
    <div className="box">
      <NewTask taskData={taskDataPrinter}></NewTask>
      <Tasks data={taskList}></Tasks>
    </div>
      
 
  )
  
  }
    

 

export default App;
