import { combineReducers } from 'redux'

function character (state = {
  stats: [
    { type: 'agility', value: 5, description: 'Ловкость' },
    { type: 'strength', value: 5, description: 'Сила' },
    { type: 'intelligent', value: 5, description: 'Интеллект' },
    { type: 'attackPower', value: 5, description: 'Сила атаки' }
  ],
  health: { value: 30, maxValue: 30, description: 'Здоровье' },
  name: 'Алексей',
  backpack: [],
  items: [
    {use: (dispatch, item, index, actions) => {
      dispatch(actions.backpackItemUse(index))
      dispatch(actions.equipItem(item))
    },
    delete: (dispatch, index, actions) => {
      dispatch(actions.backpackItemUse(index))
    },
    type: 'hat',
    name: 'Шапка',
    description: 'Пусто',
    stats: {agility: 0, strength: 0, intelligent: 0, attackPower: 0}},
    {use: (dispatch, item, index, actions) => {
      dispatch(actions.backpackItemUse(index))
      dispatch(actions.equipItem(item))
    },
    delete: (dispatch, index, actions) => {
      dispatch(actions.backpackItemUse(index))
    },
    type: 'coat',
    name: 'Куртка',
    description: 'Обычная куртка',
    stats: {agility: 0, strength: 0, intelligent: 0, attackPower: 0}},

    {use: (dispatch, item, index, actions) => {
      dispatch(actions.backpackItemUse(index))
      dispatch(actions.equipItem(item))
    },
    delete: (dispatch, index, actions) => {
      dispatch(actions.backpackItemUse(index))
    },
    type: 'pants',
    name: 'Штаны',
    description: 'Обычные штаны',
    stats: {agility: 0, strength: 0, intelligent: 0, attackPower: 0}},
    {use: (dispatch, item, index, actions) => {
      dispatch(actions.backpackItemUse(index))
      dispatch(actions.equipItem(item))
    },
    delete: (dispatch, index, actions) => {
      dispatch(actions.backpackItemUse(index))
    },
    type: 'boots',
    name: 'Ботинки',
    description: 'Обычные ботинки',
    stats: {agility: 0, strength: 0, intelligent: 0, attackPower: 0}},
    {use: (dispatch, item, index, actions) => {
      dispatch(actions.backpackItemUse(index))
      dispatch(actions.equipItem(item))
    },
    delete: (dispatch, index, actions) => {
      dispatch(actions.backpackItemUse(index))
    },
    type: 'weapon',
    name: 'Оружие',
    description: 'Палка',
    stats: {agility: 0, strength: 0, intelligent: 0, attackPower: 1}}
  ]
}, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.name }

    case 'CHANGE_STAT':
      return { ...state,
        stats: state.stats.map((stat) => {
          return (stat.type === action.stat.type) ? { ...stat, value: stat.value + action.stat.value } : stat
        }) }

    case 'EQUIP_ITEM':
      return { ...state,
        items: state.items.map((item) => {
          return (item.type === action.item.type) ? action.item : item
        }),
        backpack: [ ...state.backpack, state.items.find((item) => { if (item.type === action.item.type) { return true } }) ]}

    case 'CHANGE_HEALTH':
      return { ...state,
        health: (action.value + state.health.value > state.health.maxValue) ? { ...state.health, value: state.health.maxValue } : { ...state.health, value: state.health.value + action.value } }

    case 'BACKPACK_ITEM_USE':
      return { ...state,
        backpack: state.backpack.filter((a, index) => { if (index !== action.index) { return true } }) }

    case 'BACKPACK_PUSH':
      return { ...state, backpack: [ ...state.backpack, action.item ] }

    default: return state
  }
}
const reducers = combineReducers({character})
export default reducers
