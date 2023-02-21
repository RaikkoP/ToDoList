
import "./App.css"
import ToDoItem from "./Components/ToDoItem/ToDoItem.js"

function App() {
  
  const exampleData = [
    {
      date: new Date(2023,0,10),
      title: 'Read a book',
      priority: 'medium'
    },
    {
      date: new Date(2023,0,10),
      title: 'Walk Grandmother',
      priority: 'low'
    }
  ]

  return(
    <div>
      <ToDoItem example={exampleData[0]}></ToDoItem>
      <ToDoItem example={exampleData[1]}></ToDoItem>
    </div>
  )
  
}

export default App;
