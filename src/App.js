import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Counters from "./components/counters";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 5 },
      { id: 3, value: 2 },
      { id: 4, value: 6 },
      { id: 5, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleZero = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //  counters[index] = { ...counter };
    counters[index].value = 0;
    this.setState({ counters });
  };

  render() {
    return (
      <div className="App">
        <Header
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onZero={this.handleZero}
        />
        <Footer />
      </div>
    );
  }
}
export default App;
