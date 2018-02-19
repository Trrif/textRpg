import React from 'react'
import {Card, Image, Popup, Container} from 'semantic-ui-react'
import styled from 'styled-components'

const Div = styled.div`
text-align:center;
`
export default class Item extends React.Component {
  render () {
    return <Container> <Popup
      position="right center"
      trigger={<Image verticalAlign='middle' size='mini' src={this.props.item.type + '.svg'} />}
      content={<Card>
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
      </Card>}
    />
    </Container>
  }
}
