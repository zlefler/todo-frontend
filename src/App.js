import './App.css';
import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import NewTodoForm from './components/NewTodoForm';
import Header from './components/Header';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:9292/${id}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function onSubmit(newTask) {
    fetch(`http://localhost:9292/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => setTodos([...todos, data]));
  }

  return (
    <div>
      <Header />
      <NewTodoForm onSubmit={onSubmit} />
      <TodoList handleDelete={handleDelete} todos={todos} />
    </div>
  );
}

export default App;
