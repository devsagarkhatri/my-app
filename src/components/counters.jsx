import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onZero, onDelete, onIncrement } = this.props;
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={this.props.onIncrement}
            onZero={this.props.onZero}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
