import TodoCard from './TodoCard'

function TodoList({todos, labels, handleDelete}) {

const filtered_labels = labels.map(label => label.id)

    return todos.filter(task => filtered_labels.includes(task.label_id)).map(todo => <TodoCard key={todo.id} labels={labels} handleDelete={handleDelete} todo={todo} /> )
}
export default TodoList