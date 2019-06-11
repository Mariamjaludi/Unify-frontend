import React from 'react'
import {Item} from 'semantic-ui-react'
import UniItem from '../components/UniItem'
export default class UniList extends React.Component {

  render () {
    const {universities} = this.props
    return (
      <Item.Group className="uni-list">
        {universities.map( uni => <UniItem uni={uni} /> )}
      </Item.Group>
    )
  }
}
