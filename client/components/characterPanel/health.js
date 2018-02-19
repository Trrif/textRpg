import React from 'react'

export default class Health extends React.Component {
  render () {
    return <div> {this.props.health.description} : {this.props.health.value} / {this.props.health.maxValue} </div>
  }
}
