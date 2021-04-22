import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onZero, onDelete, onIncrement,onDecrement,onAdd } = this.props;
    return (
      <div className="container lm-auto rm-auto">
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
            Total {"   "}
              <span className="badeg badge-pill badge-secondary">
                {this.props.counters.filter((c) => c.value > 0).length}
              </span>
            {"   "} Items In Basket         

        <table>
          <tbody>            
              {this.props.counters.map((counter,key1) => (
                <Counter
                  onDelete={onDelete}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  onZero={onZero}
                  key={key1}
                  counter={counter}                  
                ></Counter>
              ))}
            
          </tbody>
        </table>
        <button onClick={onAdd} className="btn btn-primary btn-sm m-2">
          Add New
        </button>
      </div>
    );
  }
}

export default Counters;
