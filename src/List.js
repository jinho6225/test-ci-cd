function List({ todos, removeTodo }) {
  return (
    <>
      {todos.map((todo, idx) => {
        return (
          <li
            key={idx}
            onClick={() => {
              removeTodo(todo);
            }}
          >
            {todo.task}
          </li>
        );
      })}
    </>
  );
}

export default List;
