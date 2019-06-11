import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
export default class Navbar extends React.Component {

  renderLogOutOrLogIn = logged_in => {
    const {student} = this.props
    let studentHolder = ''
    student ? studentHolder = student.name : studentHolder = "username"
    if (logged_in) {
      return (
        <Menu.Menu position="right">
          <Menu.Item name={"Welcome, " + studentHolder } />
          <Menu.Item name="log Out" onClick={this.props.handleLogOut}/>
        </Menu.Menu>
        )
    } else {
      return (
        <Menu.Menu position="right">
          <Menu.Item name="Sign Up" />
          <Menu.Item name="Log In" />
        </Menu.Menu>
        )
    }
  };

  render() {
    // debugger
    const { logged_in } = this.props;
    return (
      <Menu>
        <Menu.Item>
          <Link to="/">Unify</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/search">Search</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Menu position="right">
          {this.renderLogOutOrLogIn(logged_in)}
        </Menu.Menu>
      </Menu>
    );
  }
}
