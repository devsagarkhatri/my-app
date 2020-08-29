import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  handleZero = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    this.state.counters[index].map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    const { onReset, onZero, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        <table>
          <tbody>
            <tr className="td">
              {this.props.counters.map((counter) => (
                <Counter
                  onDelete={onDelete}
                  onIncrement={onIncrement}
                  onZero={onZero}
                  counter={counter}
                ></Counter>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Counters;
