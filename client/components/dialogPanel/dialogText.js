import React from 'react'
import Styled, { css } from 'styled-components'
const Div = Styled.div`
background-color: #4A4A4A;
color: #fff;
padding: 15px;
border-radius: 5px;
${props => props.answer && css`
  cursor: pointer;
  margin-bottom: 1px;
`}
`
export default class DialogText extends React.Component {
  render () {
    return this.props.onAnswerClick !== undefined ? <Div onClick={this.props.onAnswerClick} answer> {this.props.text} </Div>
      : <Div> {this.props.text} </Div>
  }
}
