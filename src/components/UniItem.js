import React from 'react'
import { Item, Button } from 'semantic-ui-react'
export default class UniItem extends React.Component {
  render (){
    const {uni} = this.props
    return (
      <Item >
        <Item.Image size='tiny' src={uni.src}/>
        <Item.Content>
          <Item.Header as='a'>{uni.name}</Item.Header>
          <Item.Meta>Location</Item.Meta>
          <Item.Description>{uni.location}</Item.Description>
          <Button basic size='small' color='blue' floated='right'>
            Save
          </Button>
        </Item.Content>
      </Item>
    )
  }
}
