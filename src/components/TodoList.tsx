import TodoCard from './TodoCard'

type Task = {
    task: string,
    label_id: string,
    priority_id: string,
    id?: string
  }

  type Label = {
    label_name: string,
    id?: string
  }

  function TodoList(todos: Task[], labels: Label[], handleDelete: any, onEditSubmit: any) {
  
const filtered_labels = labels.map(label => label.id)

    return <>
    {todos.filter(task => filtered_labels.includes(task.label_id)).map(
        todo => <TodoCard onEditSubmit={onEditSubmit} key={todo.id} labels={labels} handleDelete={handleDelete} todo={todo} /> )}
        </>
}
export default TodoList