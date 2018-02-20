import React from 'react'
import StatList from './statList'
import ItemList from './itemList'
import Health from './health'
import BackpackItemList from './backpackItemList'
import BackpackPotionList from './backpackPotionList'
import { Card, Modal, Header, Image, Grid, Label, Divider } from 'semantic-ui-react'

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
                    {this.props.name}
                    <Health health={this.props.health}/>
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
                <Divider style={{color: 'white'}} horizontal>Зелья</Divider>
                <BackpackPotionList backpackItemDelete={this.props.backpackItemDelete} backpackItemUse={this.props.backpackItemUse} backpackPotions={this.props.backpack.filter((item, index) => { if (item.type === 'potion') { item.index = index; return true } })} />
                <Divider style={{color: 'white'}} horizontal>Предметы</Divider>
                <BackpackItemList items={this.props.items} backpackItemDelete={this.props.backpackItemDelete} backpackItemUse={this.props.backpackItemUse} backpackItems={this.props.backpack.filter((item, index) => { if (item.type !== 'potion') { item.index = index; return true } })} />
              </Card.Group>
            </Modal.Content>
          </Modal>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  }
}
