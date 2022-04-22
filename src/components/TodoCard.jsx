import {useState, useEffect} from 'react'

function TodoCard({todo, labels, handleDelete, onEditSubmit}) {
const [label, setLabel] = useState('')
const [edit, setEdit] = useState(false)
const [editText, setEditText] = useState('')
useEffect(() => {
  setLabel(labels.find(label => label.id === todo.label_id).label_name)
}, [todo.id])

function handleEditClick() {
  setEdit(edit => !edit)
}

function handleEditSubmit(e) {
  setEdit(edit => !edit)
  onEditSubmit(todo, editText)
}

function handleEditChange(e) {
  setEditText(e.target.value)
}

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
      {edit ? 
      <form onSubmit={(e) => handleEditSubmit(e)} name='edit-form'>
        <input type='text' value={editText} onChange={(e) => handleEditChange(e)} name='new_task' />
        <button type='submit'>Save</button>
      </form> : 
      <div>
      <h1>{todo.task}</h1>
      <button className='delete' onClick={() => handleDelete(todo.id)}>DELETE</button>
      <button className='edit' onClick={() => handleEditClick()} >edit</button> 
      </div>}
    </div>
  );


}
export default TodoCard