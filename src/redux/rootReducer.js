import { combineReducers } from 'redux'

import { reducer as terminal } from '../components/Terminal'
import { reducer as dialogModal } from '../components/DialogModal'
import { reducer as toolbelt } from '../components/Toolbelt'
import { reducer as dish } from '../components/Dish'

const rootReducer = combineReducers({
  terminal,
  dialogModal,
  toolbelt,
  dish
})

export default rootReducer
