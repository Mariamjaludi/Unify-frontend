import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import api from './api';

import "./App.css";

import Search from "./containers/SearchContainer";
import Home from "./containers/HomeContainer";
import About from "./containers/About";
import Dashboard from "./containers/Dashboard";
import Navbar from "./components/Navbar";
import SignUp from './containers/SignUp';

class App extends React.Component {
  state = {
    logged_in: false,
    student: null,
    logInClicked: false
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

  }

  createStudent = student => {
    return api.signup(student)
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
            }, () => this.props.history.push('/search'))
        }
      })
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
            }, () => this.props.history.push('/search'))
        }
      })
  };

  goToSignUp = () => {
    this.props.history.push('/signup')
  }

  openLogIn = () => {
    this.props.history.push('/')
    this.setState({logInClicked: true})
  }
  handleLogOut = () => {
    localStorage.clear("token");
    this.setState({
      logged_in: false,
      student: ''
    });
  }

  render() {
    const { logged_in, student, logInClicked } = this.state;
    const { findStudent, handleLogOut, goToSignUp, openLogIn } = this
    return (
        <div className="App">
          <Navbar
            student={student}
            logged_in={logged_in}
            handleLogOut={handleLogOut}
            goToSignUp={goToSignUp}
          />
          <Switch>
            <Route
              path="/"
              exact
              component={routerProps => (
                <Home
                  {...routerProps}
                  logInClicked={logInClicked}
                  findStudent={findStudent}
                />
              )}
            />
            <Route path="/about" component={About} />
            <Route
              path="/search"
              component={routerProps => (
                <Search
                  {...routerProps}
                  student={student}
                />
              )}
            />
            <Route path="/dashboard" component={Dashboard} />
            <Route
              path="/signup"
              component={routerProps => (
                <SignUp
                  {...routerProps}
                  createStudent={this.createStudent}
                />
              )}
            />
          </Switch>
        </div>
    );
  }
}

export default withRouter(App)
