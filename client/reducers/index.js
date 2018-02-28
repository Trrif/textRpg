import { combineReducers } from 'redux'
import character from './characterPanel'
import dialog from './dialogPanel'

const reducers = combineReducers({character, dialog})
export default reducers
