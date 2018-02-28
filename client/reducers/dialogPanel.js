export default function dialog (state = {
  text: 'Стартовый Диалог',
  answers: [ {linkTo: 1, text: 'Переход на серверные диалоги'} ]
}, action) {
  switch (action.type) {
    case 'NEXT_DIALOG':
      return action.dialog
    default: return state
  }
}
