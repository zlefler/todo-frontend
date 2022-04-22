import {useState} from 'react'

function NewTodoForm() {
const [task, setTask] = useState('')
const [label, setLabel] = useState('')
const [priority, setPriority] = useState('')

function handleTaskChange(text) {
    setTask(text)
}

function handleSubmit(e) {
    e.preventDefault()
    const newTask = {
        task: task,
        label: label,
        priority: priority
    }
}

    return <form onSubmit={() => handleSubmit()}>
        <label for="task">New task</label>
<input type="text" onChange={(e) =>handleTaskChange(e.target.value)} value={task} name="task"/>
<label for="label">Label</label>
<select name="label" onChange={(e) => setLabel(e.target.value)} value={label} id="label">
    <option value="1">Work</option>
    <option value="2">School</option>
    <option value="3">Home</option>
    <option value="4">Computer</option>
    <option value="5">Errands</option>
</select>
<label for="priority">Priority</label>
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