import React from 'react'
import Stat from './stat'

export default class StatList extends React.Component {
  render () {
    return this.props.stats.map((stat) =>
      <Stat stat={stat} key={stat.type}/>
    )
  }
}
