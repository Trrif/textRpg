import React from 'react'

export default class Stat extends React.Component {
  render () {
    return <div> {this.props.stat.description} : {this.props.stat.value} </div>
  }
}
