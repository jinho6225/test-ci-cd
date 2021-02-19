function List({ todos, isCompleted, removeTask }) {
  return (
    <>
      <ul>
        {todos?.map((todo, idx) => {
          return (
            <li key={idx}>
              <span
                onClick={() => {
                  isCompleted(todo.id);
                }}
                className={todo.completed === true ? "strike" : ""}
              >
                {todo.title}
              </span>{" "}
              <button
                onClick={() => {
                  removeTask(todo.id);
                }}
              >
                Del
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default List;
