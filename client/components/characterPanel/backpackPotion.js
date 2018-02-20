import React from 'react'
import { Image, Card, Button } from 'semantic-ui-react'

export default class BackpackPotion extends React.Component {
  render () {
    return <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='potion.svg' />
        <Card.Header>
          {this.props.backpackPotion.name}
        </Card.Header>
        <Card.Meta>
          {this.props.backpackPotion.type}
        </Card.Meta>
        <Card.Description>
          {this.props.backpackPotion.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra style={{textAlign: 'center'}}>
        <Button color='green' onClick={this.props.backpackItemUse}> Выпить </Button>
        <Button color='red' onClick={this.props.backpackItemDelete} icon='trash' />
      </Card.Content>
    </Card>
  }
}
