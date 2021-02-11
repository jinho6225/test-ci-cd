function List({ todos }) {
  return (
    <>
      {todos.map((todo, idx) => {
        return <li key={idx}>{todo}</li>;
      })}
    </>
  );
}

export default List;
