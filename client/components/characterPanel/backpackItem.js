import React from 'react'
import styled, {css} from 'styled-components'
import { Image, Card, Button, Icon, Popup, Label } from 'semantic-ui-react'

const Stat = styled.div`
font-size: 1.5em;
color: white;
width: 30px;
${props => props.agility && css`
  background: #33CC66;
`}
${props => props.strength && css`
  background: #FF3300;
`}
${props => props.intelligent && css`
  background: #6633CC;
`}
${props => props.attackPower && css`
  background: #FF9933;
`}
`
const Div = styled.div`
text-align:center;
`
export default class BackpackItem extends React.Component {
  render () {
    return <Popup
      position="top center"
      trigger={<Card>
        <Card.Content>
          <Image floated='right' size='mini' src={this.props.backpackItem.type + '.svg'} />
          <Card.Header>
            {this.props.backpackItem.name}
          </Card.Header>
          <Card.Meta>
            {this.props.backpackItem.type}
          </Card.Meta>
          <Card.Description>
            {this.props.backpackItem.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra style={{textAlign: 'center'}}>
          {'Ловкость: ' + this.props.backpackItem.stats.agility}
          <br/>
          {'Сила: ' + this.props.backpackItem.stats.strength}
          <br/>
          {'Интеллект: ' + this.props.backpackItem.stats.intelligent}
          <br/>
          {'Сила атаки: ' + this.props.backpackItem.stats.attackPower}
          <Button color='green' onClick={this.props.backpackItemUse}>{(this.props.backpackItem.type === 'potion') ? 'Использовать' : 'Надеть'} </Button>
          <Button color='red' onClick={this.props.backpackItemDelete} icon='trash' />
        </Card.Content>
      </Card>}
      content={<div><Card>
        <Card.Content>
          <Image floated='right' size='mini' src={this.props.item.type + '.svg'} />
          <Card.Header>
            {this.props.item.name}
          </Card.Header>
          <Card.Meta>
            {this.props.item.type}
          </Card.Meta>
          <Card.Description>
            {this.props.item.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Div> {'Ловкость: ' + this.props.item.stats.agility}
            <br/>
            {'Сила: ' + this.props.item.stats.strength}
            <br/>
            {'Интеллект: ' + this.props.item.stats.intelligent}
            <br/>
            {'Сила атаки: ' + this.props.item.stats.attackPower}
          </Div>
        </Card.Content>
      </Card> <Label style={{textAlign: 'center'}} attached='bottom' content={'Ловкость: ' + (this.props.backpackItem.stats.agility - this.props.item.stats.agility) + ', ' +
      'Сила: ' + (this.props.backpackItem.stats.strength - this.props.item.stats.strength) + ', ' +
      'Интеллект: ' + (this.props.backpackItem.stats.intelligent - this.props.item.stats.intelligent) + ', ' +
      'Сила атаки: ' + (this.props.backpackItem.stats.attackPower - this.props.item.stats.attackPower)}/></div>}
    />
  }
}
