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
           <div className='label'>
        <p className='label-text'>{
          todo.label_id === 1 ? 'Work ' :
          todo.label_id === 2 ? 'School ' :
          todo.label_id === 3 ? 'Home ' :
          todo.label_id === 4 ? 'Computer ' : 'Errands '}
        </p>
        </div>
      <p className='priority'>{
      todo.priority_id === 1 ? '🔴' : 
      todo.priority_id === 2 ? '🟠' :
      todo.priority_id === 3 ? '🟡' :
      todo.priority_id === 4 ? '🟢' :'🔵'
      }</p>
      <h1>{todo.task}</h1>
      <button className='delete' onClick={() =>handleDelete(todo.id)}>DELETE</button>
    </div>
  );


}
export default TodoCard