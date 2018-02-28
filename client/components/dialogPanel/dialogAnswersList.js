import React from 'react'
import DialogText from './dialogText'

export default class DialogAnswersList extends React.Component {
  render () {
    return <ol style={ {padding: '0px'} }> {this.props.answers.map((answer) => {
      return <li key={answer.index}> <DialogText onAnswerClick={() => this.props.onAnswerClick(answer)} text={answer.text} />
      </li>
    })}
    </ol>
  }
}
