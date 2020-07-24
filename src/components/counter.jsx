import React, { Component } from "react";
//import { count } from "console";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: [],
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  tagZero = () => {
    this.setState({ tags: [], count: 0 });
  };

  render() {
    console.log(this.props.counter.value);

    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm m-3"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-3"
        >
          Delete
        </button>

        <button
          onClick={() => this.props.onZero(this.props.counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Make Zero
        </button>
      </div>
    );
  }

  renderTags() {
    if (this.props.counter.tags.length === 0) return this.formatCount();
    return (
      <ul>
        {this.props.counter.tags.map((tag) => (
          <li key={tag}></li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
