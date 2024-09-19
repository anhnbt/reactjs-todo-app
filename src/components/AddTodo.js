import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      isValid: false,
    };
  }

  handleChange = (e) => {
    this.setState(
      (prevState) => {
        return {
          title: e.target.value,
        };
      },
      () => this.checkFormValid()
    );
  };

  checkFormValid = () => {
    const isValid = !!this.state.title;
    this.setState({ isValid });
  };

  addTodo = (e) => {
    e.preventDefault();
    if (this.state.isValid) {
      this.props.addTodo(this.state.title);
      this.setState({ title: "", isValid: false });
    }
  }

  render() {
    return (
      <div>
        <form
          action="#"
          method="post"
          className="form-container"
          onSubmit={this.addTodo}
        >
          <input
            className="form-input"
            type="text"
            name="title"
            id="title"
            placeholder="Please enter Task!"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <button
            disabled={!this.state.isValid}
            className="form-btn"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
