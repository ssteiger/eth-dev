import { combineReducers } from 'redux'

import { reducer as terminal } from '../components/Terminal'
import { reducer as dialogModal } from '../components/DialogModal'

const rootReducer = combineReducers({
  terminal,
  dialogModal
})

export default rootReducer
