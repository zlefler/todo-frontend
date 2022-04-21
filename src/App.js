import './App.css';
import {useEffect, useState} from 'react'
import TodoList from './components/TodoList'



function App() {

useEffect(() => {
  fetch('http://localhost:9292/')
  .then(res => res.json())
  .then(data => console.log(data))
}, [])

  return (
   <TodoList />
  );
}

export default App;
