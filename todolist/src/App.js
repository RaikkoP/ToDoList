import "./App.css"
import TaskItem from "./Components/TaskItem/TaskItem";
import Tasks from "./Components/Tasks/Tasks";


const App = () => {

  const DUMMY_INFO = {
    date: new Date(2023, 0 ,10),
    task:'Walk Grandma',
    priority:'low'
  }


  return(
    <div className="App">
      <Tasks data={DUMMY_INFO}></Tasks>
    </div>
      
 
  )
  
}

export default App;
