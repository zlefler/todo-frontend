import './App.css';
import {useEffect, useState} from 'react'
import TodoList from './components/TodoList'



function App() {
const [todos, setTodos] = useState([])


useEffect(() => {
  fetch('http://localhost:9292/')
  .then(res => res.json())
  .then(data => setTodos(data))
}, [])

function handleDelete(id) {
  fetch(`http://localhost:9292/${id}`, {
    method: 'DELETE'
  })
  setTodos(todos.filter(todo => todo.id !== id))
}

  return (
   <TodoList handleDelete={handleDelete} todos={todos} />
  );
}

export default App;
