export const EQUIP_ITEM = 'EQUIP_ITEM'
export const CHANGE_STAT = 'CHANGE_STAT'
export const CHANGE_NAME = 'CHANGE_NAME'
export const CHANGE_HEALTH = 'CHANGE_HEALTH'
export const BACKPACK_PUSH = 'BACKPACK_PUSH'
export const BACKPACK_ITEM_USE = 'BACKPACK_ITEM_USE'

export function backpackItemUse (index) {
  return { type: 'BACKPACK_ITEM_USE', index }
}
export function backpackPush (item) {
  return { type: 'BACKPACK_PUSH', item }
}
export function changeHealth (value) {
  return { type: 'CHANGE_HEALTH', value }
}
export function changeName (name) {
  return { type: 'CHANGE_NAME', name }
}

export function changeStat (stat) {
  return { type: 'CHANGE_STAT', stat }
}

export function equipItem (item) {
  return { type: 'EQUIP_ITEM', item }
}
