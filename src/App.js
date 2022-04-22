import './App.css';
import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import NewTodoForm from './components/NewTodoForm';
import Header from './components/Header';
import FilterList from './components/FilterList';

function App() {
  const [todos, setTodos] = useState([]);
  const [labels, setLabels] = useState([]);
  const [filteredLabels, setFilteredLabels] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:9292/labels')
      .then((res) => res.json())
      .then((data) => {
        setLabels(data);
        setFilteredLabels(data);
      });
  }, []);

  function onDelete(id) {
    fetch(`http://localhost:9292/todos/${id}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function onSubmit(newTask) {
    fetch(`http://localhost:9292/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => setTodos([...todos, data]));
  }

  function onCheck(checkedLabel, isChecked) {
    isChecked
      ? setFilteredLabels([...filteredLabels, checkedLabel])
      : setFilteredLabels(
          filteredLabels.filter((label) => label.id !== checkedLabel.id)
        );
    console.log(isChecked);
  }
  return (
    <div>
      <Header />
      <NewTodoForm onSubmit={onSubmit} />
      <FilterList onCheck={onCheck} labels={labels} />
      <TodoList handleDelete={onDelete} labels={filteredLabels} todos={todos} />
    </div>
  );
}

export default App;
