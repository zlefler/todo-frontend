function TodoCard({todo, handleDelete}) {
  
  return (
    <div className="todo">
      <h1>{todo.task}</h1>
      <p>Priority: {todo.priority_id}</p>
      <button className='delete' onClick={() =>handleDelete(todo)}>DELETE</button>
    </div>
  );


}
export default TodoCard