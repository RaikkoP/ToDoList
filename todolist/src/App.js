import "./App.css"
import NewTask from "./Components/NewTask/NewTask";
import Tasks from "./Components/Tasks/Tasks";



const App = () => {

  const DUMMY_INFO = {
    date: new Date(2023, 0 ,10),
    task:'Walk Grandma',
    priority:'low'
  }


  return(
    <div className="box">
      <NewTask></NewTask>
      <Tasks data={DUMMY_INFO}></Tasks>
    </div>
      
 
  )
  
}

export default App;
