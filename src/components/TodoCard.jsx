function TodoCard({todo, handleDelete}) {
  
  // function parsePriority() {
  //   const priority = todo.priority_id
  //   switch (priority) {
  //   case '1': return '🔴';
  //   case '2': return '🟠';
  //   case '3': return '🟡';
  //   case '4': return '🟢';
  //   case '5': return '🔵';
  //   }
  // }

  return (
    <div className="todo">
      <h1>{todo.task}</h1>
      <p>{
      todo.priority_id === 1 ? '🔴' : 
      todo.priority_id === 2 ? '🟠' :
      todo.priority_id === 3 ? '🟡' :
      todo.priority_id === 4 ? '🟢' :'🔵'
      }</p>
      <button className='delete' onClick={() =>handleDelete(todo)}>DELETE</button>
    </div>
  );


}
export default TodoCard