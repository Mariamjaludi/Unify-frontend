import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
export default class Navbar extends React.Component {

  renderLogOutOrLogIn = loggedIn => {
    if (loggedIn) {
      return (
        <Menu.Menu position="right">
          <Menu.Item name="Welcome, Username" />
          <Menu.Item name="log Out" />
        </Menu.Menu>
        )
    } else {
      return (
        <Menu.Menu position="right">
          <Menu.Item name="Sign Up" />;
          <Menu.Item name="Log In" />;
        </Menu.Menu>
        )
    }
  };

  render() {
    const { loggedIn } = this.props;
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
          {this.renderLogOutOrLogIn()}
        </Menu.Menu>
      </Menu>
    );
  }
}
