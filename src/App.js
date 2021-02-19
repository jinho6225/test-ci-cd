import React, { useEffect, useState } from "react";
import List from "./List";

function App() {
  const [todo, setTodo] = useState({ title: "", completed: false });
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        let fileteredData = data.filter((todo, id) => todo.userId === 2);
        setTodos(fileteredData);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title === "") {
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: todo.title,
      completed: false,
      userId: 2,
    };

    setTodos([...todos, newTodo]);
    setTodo({
      title: "",
      completed: false,
    });
  };
  const isCompleted = (id) => {
    let newTodos = todos.map((todo, i) => {
      if (todo.id === id) {
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
  const removeTask = (id) => {
    let newArr = todos.filter((el, i) => el.id !== id);
    setTodos(newArr);
  };

  return (
    <div className="App">
      <h2 className="todo_list">Todo List</h2>
      <form>
        <label htmlFor="input_field">What needs to be done?</label>
        <br />
        <input
          id="input_field"
          className="input_field"
          type="text"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <button className="add_btn" onClick={handleSubmit}>
          ADD
        </button>
      </form>
      <List todos={todos} isCompleted={isCompleted} removeTask={removeTask} />
    </div>
  );
}

export default App;
