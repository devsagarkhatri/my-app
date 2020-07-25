import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import "./TodoItem.css";

class Todos extends Component {
  constructor() {
    super();

    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log("Changed", id);
  }

  render() {
    const TodoItems = this.state.todos.map((Item) => (
      <TodoItem key={Item.id} item={Item} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{TodoItems}</div>;
  }
}

export default Todos;
