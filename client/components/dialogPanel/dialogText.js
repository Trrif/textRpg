import React from 'react'
import { Button } from 'semantic-ui-react'
import Styled from 'styled-components'
const Div = Styled.div`
background-color: #4A4A4A;
color: #fff;
padding: 15px;
border-radius: 5px;
text-align: center;
`
export default class DialogText extends React.Component {
  render () {
    return this.props.onAnswerClick !== undefined ? <Button onClick={this.props.onAnswerClick} fluid> {this.props.text} </Button >
      : <Div> {this.props.text} </Div>
  }
}
