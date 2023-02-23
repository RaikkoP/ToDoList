import { useState } from "react";
import "./App.css"
import NewTask from "./Components/NewTask/NewTask";
import Tasks from "./Components/Tasks/Tasks";



const App = () => {

  const [filterPriority, setFilterPriority] = useState('3')

  const DUMMY_INFO = [{
    date: new Date(2023, 0 ,10),
    task:'Walk Grandma',
    priority:'low'
  },
  {
    date: new Date(2024, 0, 10),
    task: 'Walk Grandpa',
    priority:'low'
  }
]
  const taskDataPrinter = (TASKDATA) => {
    console.log('In App.js')
    console.log(TASKDATA)
  }

  const filterDataPrinter = (FILTERDATA) => {
    setFilterPriority(FILTERDATA)
    console.log(filterPriority)
  }

  


  return(
    <div className="box">
      <NewTask taskData={taskDataPrinter}></NewTask>
      <Tasks data={DUMMY_INFO} filterData={filterDataPrinter}></Tasks>
    </div>
      
 
  )
  
  }
    

 

export default App;
