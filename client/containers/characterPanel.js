import { connect } from 'react-redux'
import CharacterPanel from '../components/characterPanel'
import * as actions from '../actions/characterPanel'
const mapStateToProps = state => {
  return {
    stats: state.character.stats.map((stat) => {
      let overallItemStats = 0
      state.character.items.map((item) => {
        overallItemStats = overallItemStats + item.stats[stat.type]
        return item
      })
      return { ...stat, value: stat.value + overallItemStats }
    }),
    health: state.character.health,
    name: state.character.name,
    items: state.character.items,
    backpack: state.character.backpack
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    backpackItemUse: (index, item) => {
      item.use(dispatch, item, index, actions)
    },
    backpackItemDelete: (index, item) => {
      item.delete(dispatch, index, actions)
    }
  }
}

const CharacterPanelContainer = connect(mapStateToProps, mapDispatchToProps)(CharacterPanel)
export default CharacterPanelContainer
