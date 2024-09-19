import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleChange, handleDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          handleChange={handleChange}
          handleDelete={handleDelete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
