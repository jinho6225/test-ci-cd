import React, { useState } from "react";
import List from "./List";

function App() {
  const [todo, setTodo] = useState({ task: "", completed: false });
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task === "") {
      return;
    }
    setTodos([...todos, todo]);
    setTodo({ task: "", completed: false });
  };
  const isCompleted = (idx) => {
    let newTodos = todos.map((todo, i) => {
      if (idx === i) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };
  const removeTask = (idx) => {
    let newArr = todos.filter((el, i) => i !== idx);
    setTodos(newArr);
  };

  return (
    <div className="App">
      <h2 className="todo_list">Todo List</h2>
      <form>
        <input
          className="input_field"
          type="text"
          value={todo.task}
          onChange={(e) => setTodo({ ...todo, task: e.target.value })}
        />
        <input
          className="add_btn"
          type="submit"
          value="ADD"
          onClick={handleSubmit}
        />
      </form>
      <List todos={todos} isCompleted={isCompleted} removeTask={removeTask} />
    </div>
  );
}

export default App;
