import {useState, useEffect} from 'react'

function TodoCard({todo, labels, handleDelete}) {
const [label, setLabel] = useState('')
useEffect(() => {
  setLabel(labels.find(label => label.id === todo.label_id).label_name)
}, [todo.id])

  return (
    <div className="todo">
           <div className='label'>
        <p className='label-text'>{label}</p>
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