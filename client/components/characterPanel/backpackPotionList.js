import React from 'react'
import BackpackPotion from './backpackPotion'

export default class BackpackPotionList extends React.Component {
  render () {
    return (this.props.backpackPotions.length) ? this.props.backpackPotions.map((backpackPotion, index) =>
      <BackpackPotion backpackItemDelete= {() => this.props.backpackItemDelete(backpackPotion.index, backpackPotion)}
        backpackItemUse={() => this.props.backpackItemUse(backpackPotion.index, backpackPotion)}
        backpackPotion={backpackPotion}
        key={index} />
    ) : 'Пусто'
  }
}
