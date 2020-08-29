import React, { Component } from "react";
//import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
//import Counters from "./components/Counter App/counters";
import Footer from "./components/Footer";
//import CounterPanel from "./components/Counter App/counterPanel";
import "bootstrap/dist/css/bootstrap.css";
import Movies from "./components/Vidly App/movies";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container row m-auto">
          <Movies />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
