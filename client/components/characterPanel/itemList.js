import React from 'react'
import Item from './item'

export default class ItemList extends React.Component {
  render () {
    return this.props.items.map((item) =>
      <Item item={item} key={item.type}/>
    )
  }
}
