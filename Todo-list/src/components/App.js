import React, { useState } from "react";
import Header from "./Header";
import "../styles/App.css";
import Form from "./Form";
import TodosList from "./TodosList";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div id="main">
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
          <div>
            <TodosList
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
