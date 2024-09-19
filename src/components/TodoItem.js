import React from "react";

const TodoItem = ({ todo, handleChange, handleDelete }) => {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        name="task-item"
        checked={todo.completed}
        onChange={() => handleChange(todo.id)}
        id={`task-item-${todo.id}`}
      />
      <span className={todo.completed ? "task-completed" : ""}>
        {todo.title}
      </span>
      <button
        className="btn-delete-task"
        onClick={() => handleDelete(todo.id)}
        title="Delete this task"
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
