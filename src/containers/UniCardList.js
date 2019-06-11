import React from 'react'
import UniCard from '../components/UniCard'
import {Card} from 'semantic-ui-react'
export default class UniCardList extends React.Component {

  render () {
    const { universities, course, removeUni } = this.props
    return (
      <Card.Group itemsPerRow={5}>
        {universities.map(
          uni => <UniCard uni={uni} key={uni.id} course={course} removeUni={removeUni}/> )}
      </Card.Group>
    )
  }
}
