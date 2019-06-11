import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
export default class UniCard extends React.Component {

  handleRemove = () => {
    const {removeUni, uni} = this.props
    removeUni(uni)
  }
  render () {
    const { uni } = this.props
    return (
      <Card className="uni-card">
        <Image size='small' centered className="uni-card-img" src={uni.src} />
        <Card.Header>{uni.name}</Card.Header>
        <Card.Content extra>
          <Button floated="bottom" onClick={this.handleRemove} size='mini' basic color='blue'>
            remove
          </Button>
        </Card.Content>
      </Card>
    )
  }
}
