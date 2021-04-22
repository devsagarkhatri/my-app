import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header";
// import Footer from "./components/Footer";
import CounterPanel from "./components/Counter App/counterPanel";
import Movies from "./components/Vidly App/movies";
import Todos from "./components/Todo App/todos";
import Chart from "./components/Charts/chart";
import NotFound from "./../src/components/notFound";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content container row m-auto">
          <Switch>
            <Route path="/Home" render={() => <Movies />} />
            <Route path="/Counter" render={() => <CounterPanel />} />
            <Route path="/Todo" render={() => <Todos />} />
            <Route path="/Chart" render={() => <Chart />} />
            <Route path="/not-found" render={() => <NotFound />} />
            <Route path="/" exact render={() => <Movies />} />
            <Redirect from="/" to="/Home" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        
      </div>
    );
  }
}
export default App;
