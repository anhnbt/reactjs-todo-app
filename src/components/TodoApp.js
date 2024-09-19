import React, { useState } from "react";
import Header from "./layout/Header";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Install React and set up the project environment", completed: true },
    { id: 2, title: "Run the React application locally on the development server", completed: false },
    { id: 3, title: "Deploy the React application to a production environment", completed: false },
  ]);
  const [title] = useState("To-do-list");

  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className="todo-container">
      <Header title={title} />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        handleChange={handleCheckboxChange}
        handleDelete={handleDeleteTodo}
      />
    </div>
  );
};

export default TodoApp;
