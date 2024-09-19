import React from "react";

export default class TodoItem extends React.Component {
  render() {
    return (
      <li className="todo-item">
        <input type="checkbox" 
        name="todo-item" 
        checked={this.props.todo.completed}
        onChange={() => this.props.handleChange(this.props.todo.id)}
        id={`todo-item-${this.props.todo.id}`}
         />
        <span className={this.props.todo.completed ? 'completed' : null}>{this.props.todo.title}</span>
        <button className="btn" onClick={() => this.props.handleDelete(this.props.todo.id)}>x</button>
      </li>
    );
  }
}
