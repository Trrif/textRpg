import React from 'react'
import StatList from './statList'
import ItemList from './itemList'
import Name from './name'
import Health from './health'
import BackpackItemList from './backpackItemList'
import { Card, Modal, Header, Button, Icon, Image, Grid, Label, Container } from 'semantic-ui-react'

export default class CharacterPanel extends React.Component {
  render () {
    return <Grid columns={1}>
      <Grid.Row>
        <Grid.Column>
          <Modal style={{border: '1px solid gray', borderRadius: '5px'}} trigger={<div>
            <Image label={<Label style={{textAlign: 'center'}} attached='bottom' content={this.props.health.value + ' / ' + this.props.health.maxValue} color='red'/>} style={{cursor: 'pointer'}} size='tiny' src='character.svg' />
          </div>} basic size='small'>
            <Header textAlign='center' content='Панель персонажа' />
            <Modal.Content>
              <Grid columns={2} textAlign='center'>
                <Grid.Row>
                  <Grid.Column>
                    <Name name={this.props.name}/>
                    <br/>
                    <StatList stats={this.props.stats} />
                  </Grid.Column>
                  <Grid.Column>
                    <ItemList items={this.props.items} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Content>
          </Modal>
          <Modal style={{border: '1px solid gray', borderRadius: '5px'}} trigger={<Image style={{cursor: 'pointer'}} size='tiny' src='backpack.svg'/>} basic size='small'>
            <Header textAlign='center' content='Рюкзак' />
            <Modal.Content>
              <Card.Group itemsPerRow={3}>
                <BackpackItemList items={this.props.items} backpackItemDelete={this.props.backpackItemDelete} backpackItemUse={this.props.backpackItemUse} backpackItems={this.props.backpack} />
              </Card.Group>
            </Modal.Content>
          </Modal>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  }
}
