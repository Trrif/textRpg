import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'
import * as actions from './actions'
import App from './components'
let store = createStore(reducers)
const dispose = store.subscribe(() => {
  console.log(store.getState())
}
)
store.dispatch(actions.backpackPush({use: (dispatch, item, index, actions) => {
  dispatch(actions.backpackItemUse(index))
  dispatch(actions.equipItem(item))
},
delete: (dispatch, index, actions) => {
  dispatch(actions.backpackItemUse(index))
},
type: 'weapon',
name: 'Оружие',
description: 'рандомное',
stats: {agility: 2, strength: 2, intelligent: 1, attackPower: 1}}))

store.dispatch(actions.backpackPush({use: (dispatch, item, index, actions) => {
  dispatch(actions.backpackItemUse(index))
  dispatch(actions.equipItem(item))
},
delete: (dispatch, index, actions) => {
  dispatch(actions.backpackItemUse(index))
},
type: 'hat',
name: 'Шляпа',
description: 'усатая',
stats: {agility: 2, strength: -2, intelligent: 1, attackPower: 1}}))

store.dispatch(actions.backpackPush({use: (dispatch, item, index, actions) => {
  dispatch(actions.backpackItemUse(index))
  dispatch(actions.equipItem(item))
},
delete: (dispatch, index, actions) => {
  dispatch(actions.backpackItemUse(index))
},
type: 'pants',
name: 'Штаны',
description: 'за 40 гривен',
stats: {agility: 2, strength: 2, intelligent: -1, attackPower: -1}}))
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)
