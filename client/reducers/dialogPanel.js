export default function dialog (state = {
  text: 'Тестовое окно',
  index: 1,
  answers: [ {index: 1, text: 'тест 1'} ]
}, action) {
  switch (action.type) {
    case 'NEXT_DIALOG':
      return action.dialog
    default: return state
  }
}
