import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./containers/SearchContainer";
import Home from "./containers/HomeContainer";
import About from "./containers/About";
import Dashboard from "./containers/Dashboard";
import Navbar from "./components/Navbar";

export default class App extends React.Component {
  state = {
    loggedIn: false
  };

  render() {
    const { loggedIn } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar loggedIn={loggedIn} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/search" component={Search} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}
