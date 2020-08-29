import React, { Component } from "react";
import "./../../index.css";
import Counters from "./counters";

class CounterPanel extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 5 },
      { id: 3, value: 2 },
      { id: 4, value: 6 },
      { id: 5, value: 0 },
      { id: 6, value: 6 },
    ],
  };
  handleIncrement = (c) => {
    const counters = [...this.state.counters];
    const index = counters.findIndex(c);
    const val = { ...counters[index].value };
    const id1 = { ...counters[index].id };
    counters[index] = { id: id1, value: val + 1 };
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleZero = (c) => {
    const counters = [...this.state.counters];
    const index = counters.findIndex(c);

    const counterNew = this.state.counters.map((c1) => {
      if (c1.findIndex(c) === index) {
        c1.value = 0;
      }

      return c1;
    });
    counters[index] = counterNew;
    this.setState({ counters });
  };

  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => counter !== c);
    this.setState({ counters });
  };

  render() {
    return (
      <div className="container-fullwidth">
        <nav className="navbar navbar-light bg-primary">
          <a href="#" className="navbar-brand">
            Navbar{"   "}
            <span className="badeg badge-pill badge-secondary">
              {this.state.counters.filter((c) => c.value > 0).length}
            </span>
          </a>
        </nav>

        <Counters
          key={this.state.counters.id}
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onZero={this.handleZero}
        />
      </div>
    );
  }
}

export default CounterPanel;
