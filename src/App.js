import React, { useState } from "react";
import List from "./List";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div className="App">
      <h2 className="todo_list">Todo List</h2>
      <form>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="submit" value="ADD" onClick={handleSubmit} />
        <ul>
          <List todos={todos} />
        </ul>
      </form>
    </div>
  );
}

export default App;
