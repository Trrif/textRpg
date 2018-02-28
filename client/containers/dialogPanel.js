import { connect } from 'react-redux'
import DialogPanel from '../components/dialogPanel'
import * as actions from '../actions/dialog'
import * as characterActions from '../actions/character'
const mapStateToProps = state => {
  return {
    dialog: state.dialog
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    nextDialog: (currentDialog) => {
      console.log('ss')
      fetch('/nextDialog', {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(currentDialog)
      }).then(response => {
        return response.json()
      }).then(response => {
        dispatch(actions.nextDialog(response))
      })
    }
  }
}

const DialogPanelContainer = connect(mapStateToProps, mapDispatchToProps)(DialogPanel)
export default DialogPanelContainer
