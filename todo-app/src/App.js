import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const Addtodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList(...list, newTodo);
    setInput("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => Addtodo(input)}>Add</button>
        <ul>
          {list.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <button>&times;</button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
