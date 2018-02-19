import React from 'react'
import BackpackItem from './backpackItem'

export default class BackpackItemList extends React.Component {
  render () {
    return (this.props.backpackItems.length) ? this.props.backpackItems.map((backpackItem, index) =>
      <BackpackItem backpackItemDelete= {() => this.props.backpackItemDelete(backpackItem.index, backpackItem)}
        backpackItemUse={() => this.props.backpackItemUse(backpackItem.index, backpackItem)}
        backpackItem={backpackItem}
        key={index}
        item={this.props.items.find((item) => { if (item.type === backpackItem.type) { return true } })} />
    ) : 'Пусто'
  }
}
