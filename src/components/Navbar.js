import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
export default class Navbar extends React.Component {

  render () {
    return (
      <Menu fixed="top">
        <Menu.Item>Unify</Menu.Item>
        <Menu.Item>
          <Link to='/about'>
            About
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/search'>
            Search
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/dashboard'>
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
