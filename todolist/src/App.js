import "./App.css"
import TaskItem from "./Components/TaskItem/TaskItem";


const App = () => {

  const data = {
    date: new Date(2023, 0 ,10),
    task:'Walk Grandma',
    priority:'low'
  }


  return(
    <div className="App">
      <TaskItem taskData={data}></TaskItem>
      <TaskItem taskData={data}></TaskItem>
    </div>
      
 
  )
  
}

export default App;
