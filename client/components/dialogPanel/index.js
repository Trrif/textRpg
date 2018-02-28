import React from 'react'
import DialogAnswersList from './dialogAnswersList'
import DialogText from './dialogText'
import Styled from 'styled-components'
const Div = Styled.div`
margin-bottom: 20px;
`
export default class DialogPanel extends React.Component {
  render () {
    return <div>
      <Div>
        <DialogText text={this.props.dialog.text} />
      </Div>
      <DialogAnswersList onAnswerClick={this.props.nextDialog} answers={this.props.dialog.answers} />
    </div>
  }
}
