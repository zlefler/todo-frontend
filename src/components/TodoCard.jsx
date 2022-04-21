function TodoCard({todo}) {
    return (
        <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{todo.task}</h5>
    <p className="card-text">{todo.priority_id}</p>
    <p className="card-text">{todo.label_id}</p>
    <button className="btn btn-primary">Complete</button>
    <button className='btn btn-secondary'>Edit</button>

  </div>
</div>
    )

}
export default TodoCard