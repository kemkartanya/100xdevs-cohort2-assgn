import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleOnChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const addTodo = (e) => {
    e.preventDefault();

    setTodos([...todos, todo]);
  };

  return (
    <>
      <form>
        <input
          name="title"
          value={todo.title}
          onChange={handleOnChange}
          placeholder="title"
        />
        <br />
        <input
          name="description"
          value={todo.description}
          onChange={handleOnChange}
          placeholder="description"
        />
        <br />
        <button onClick={addTodo}>add todo</button>
      </form>

      <ul>
        {todos?.map((todo) => (
          <li>
            <div>{todo?.id}</div>
            <div>{todo?.title}</div>
            <div>{todo?.description}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
