import React, { Component } from "react";
import "./../../index.css";
import Counters from "./counters";

class CounterPanel extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
      { id: 5, value: 1 },
    ],
  };

  handleIncrement = (c) => {
    var res = [ ...this.state.counters ];
    res[c-1].value = res[c-1].value + 1 ;
    this.setState({ counters:res });
  };

  handleDecrement = (c) => {
    var res = [ ...this.state.counters ];
    res[c-1].value=res[c-1].value>0 ? res[c-1].value - 1 : 0 ;
    this.setState({ counters:res });    
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleZero = (c) => {
    var res = [ ...this.state.counters ];
    res[c-1].value = 0 ;
    this.setState({ counters:res });  
  };

  handleDelete = (counter) => {
    const counters = [...this.state.counters].filter((c) => counter !== c.id);  
    this.setState({ counters });
  };
  
  handleAdd = () => {
    var res = [ ...this.state.counters ];    
    res.push({ id:res.length+1 , value:1});
    this.setState({ counters:res });  
  }
  render() {
    return (
      <div className="container">
       <nav className="headMenu main_head sticky-top show navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="main_head navbar-brand lm-auto rm-auto" href="#">
              Merchandise Counter App
            </a>
          </nav>
        <br/><br/>
        <Counters
          key={this.state.counters.id}
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onZero={this.handleZero}
          onAdd={this.handleAdd}
        />
      </div>
    );
  }
}

export default CounterPanel;
