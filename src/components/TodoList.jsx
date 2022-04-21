import TodoCard from './TodoCard'

function TodoList({todos}) {
    return (todos ? todos.map(todo => <TodoCard key={todo.id} todo={todo} /> ) : null )
}
export default TodoList