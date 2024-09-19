import React, { useState, useEffect } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Check form validity whenever title changes
    setIsValid(!!title);
  }, [title]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (isValid) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <div>
      <form
        action="#"
        method="post"
        className="task-form-container"
        onSubmit={addTodoHandler}
      >
        <input
          className="task-form-input"
          type="text"
          name="title"
          id="title"
          placeholder="Add a new task..."
          value={title}
          onChange={handleChange}
        />
        <button
          disabled={!isValid}
          className="btn-add-task"
          type="submit"
          title="Add a new task to your list"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
