import React, { Component } from "react";
import Header from "./layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from 'uuid';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, title: "Cài đặt React", completed: true },
        { id: 2, title: "Chạy React", completed: false },
        { id: 3, title: "Deploy React", completed: false },
      ],
      title: "Ứng dụng Todo List",
    };
  }

  handleCheckboxChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  handleDeleteTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className="container">
        <Header title={this.state.title} />
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          handleChange={this.handleCheckboxChange}
          handleDelete={this.handleDeleteTodo}
        />
      </div>
    );
  }
}

export default TodoApp;
