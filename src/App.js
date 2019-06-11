import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import api from './api';

import "./App.css";

import Search from "./containers/SearchContainer";
import Home from "./containers/HomeContainer";
import About from "./containers/About";
import Dashboard from "./containers/Dashboard";
import Navbar from "./components/Navbar";


class App extends React.Component {
  state = {
    logged_in: false,
    student: null
  };

  componentDidMount () {
    const token = localStorage.getItem("token");
    if (token) {
      api.getCurrentStudent(token)
        .then(student => {
          this.setState({
            logged_in: true,
            student: student.student
          });
      });
    }
    // debugger
  }

  findStudent = (name, password) => {
    debugger
    return api.login(name, password)
      .then(data => {
        if (data.error) {
          alert(data.error)
        }
        else {
          localStorage.setItem('token', data.jwt)
          // debugger
            this.setState({
              logged_in: true,
              student: data.student
            }, () => this.props.history.push('/dashboard'))
        }
      })
  };

  handleLogOut = () => {
    localStorage.clear("token");
    this.setState({
      logged_in: false,
      student: ''
    });
  }

  render() {
    const { logged_in, student } = this.state;
    const { findStudent, handleLogOut } = this
    return (
        <div className="App">
          <Navbar
            student={student}
            logged_in={logged_in}
            handleLogOut={handleLogOut}
          />
          <Switch>
            <Route
              path="/"
              exact
              component={routerProps => (
                <Home
                  {...routerProps}
                  findStudent={findStudent}
                />
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/search" component={Search} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
    );
  }
}

export default withRouter(App)
