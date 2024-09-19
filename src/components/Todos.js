import { Component } from "react";
import TodoItem from "./TodoItem";

export default class Todos extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            handleChange={this.props.handleChange}
            handleDelete={this.props.handleDelete}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    );
  }
}
