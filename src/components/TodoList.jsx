import TodoCard from './TodoCard'

function TodoList({todos, handleDelete}) {
    return (todos ? todos.map(todo => <TodoCard key={todo.id} handleDelete={handleDelete} todo={todo} /> ) : null )
}
export default TodoList