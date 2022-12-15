import {useState} from 'react'

type Task = {
    task: string,
    label_id: string,
    priority_id: string,
    id?: string
  }

function NewTodoForm(onTodoSubmit: (newTask: Task)=> null) {
const [task, setTask] = useState('')
const [label, setLabel] = useState('3')
const [priority, setPriority] = useState('3')

function handleTaskChange(text: string) {
    setTask(text)
}


function handleSubmit(e: Event) {
    e.preventDefault()
    const newTask = {
        task: task,
        label_id: label,
        priority_id: priority
    }
    console.log(priority);
    onTodoSubmit(newTask)
}

    return <div className='todo-form'>
    <form onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}>
<textarea placeholder="What's next?" rows={3} onChange={(e) =>handleTaskChange(e.target.value)} value={task} name="task"/>
<label htmlFor="label">Label</label>
<select name="label" onChange={(e) => setLabel(e.target.value)} value={label} id="label">
    <option value="1">Work</option>
    <option value="2">School</option>
    <option value="3">Home</option>
    <option value="4">Computer</option>
    <option value="5">Errands</option>
</select>
<label htmlFor="priority">Priority</label>
<select name="priority" onChange={(e) => setPriority(e.target.value)} value={priority} id="priority">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
</select>
<button className='add-todo' type='submit'>Add</button>
    </form>
    </div>
}
export default NewTodoForm