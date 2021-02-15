function List({ todos, isCompleted, removeTask }) {
  return (
    <>
      <ul>
        {todos.map((todo, idx) => {
          return (
            <li key={idx}>
              <span
                onClick={() => {
                  isCompleted(idx);
                }}
                className={todo.completed === true ? "strike" : ""}
              >
                {todo.task}
              </span>
              <button
                onClick={() => {
                  removeTask(idx);
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
