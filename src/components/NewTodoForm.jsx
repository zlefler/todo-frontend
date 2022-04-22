import {useState} from 'react'

function NewTodoForm({onSubmit}) {
const [task, setTask] = useState('')
const [label, setLabel] = useState('1')
const [priority, setPriority] = useState('1')

function handleTaskChange(text) {
    setTask(text)
}

function handleSubmit(e) {
    e.preventDefault()
    const newTask = {
        task: task,
        label_id: label,
        priority_id: priority
    }
    onSubmit(newTask)
}

    return <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="task">New task</label>
<input type="text" onChange={(e) =>handleTaskChange(e.target.value)} value={task} name="task"/>
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
<button type='submit'>Add</button>
    </form>
}
export default NewTodoForm