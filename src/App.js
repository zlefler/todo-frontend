import './App.css';
import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import NewTodoForm from './components/NewTodoForm';
import Header from './components/Header';
import FilterList from './components/FilterList';
import SortForm from './components/SortForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [labels, setLabels] = useState([]);
  const [filteredLabels, setFilteredLabels] = useState([]);
  const [sortOption, setSortOption] = useState('');

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
  }

  function onEditSubmit(todo, editText) {
    const newTodo = {
      task: editText,
      priority_id: todo.priority_id,
      label_id: todo.label_id,
    };
    fetch(`http://localhost:9292/todos/${todo.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((data) =>
        setTodos(
          todos.map((currentTodo) =>
            currentTodo.id === todo.id ? data : currentTodo
          )
        )
      );
  }

  function onSortChange(value) {
    fetch(`http://localhost:9292/todos/${value}`, { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => setTodos(data));
    setSortOption(value);
  }

  return (
    <div>
      <Header />
      <NewTodoForm onSubmit={onSubmit} />
      <FilterList onCheck={onCheck} labels={labels} />
      <SortForm onSortChange={onSortChange} sortOption={sortOption} />
      <TodoList
        sortOption={sortOption}
        onEditSubmit={onEditSubmit}
        handleDelete={onDelete}
        labels={filteredLabels}
        todos={todos}
      />
    </div>
  );
}

export default App;
