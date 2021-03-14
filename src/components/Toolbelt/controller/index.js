import { actionCreators as terminalActionCreators } from '../../Terminal/controller'
import { actionCreators as dishActionCreators } from '../../Dish/controller'

export const TOGGLE_VISIBLITY = 'toolbelt/TOGGLE_VISIBLITY'

const initialState = {
  visible: false
}

const mapStateToProps = state => {
  const { toolbelt, dialogModal } = state
  return {
    ...toolbelt,
    dialogModal
  }
}

const reducer = (state = initialState, action) => {
  const newState = { ...state }

  switch (action.type) {
    case TOGGLE_VISIBLITY:
      newState.visible = !state.visible
      return newState
    default:
      return newState
  }
}

const actionCreators = {
  toggleVisibility: () => ({
    type: TOGGLE_VISIBLITY
  })
}

const dispatchers = {
  toggleVisibility: () => {
    return actionCreators.toggleVisibility()
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    toggleVisibility() {
      dispatch(actionCreators.toggleVisibility())
    },
    toggleDishVisibility() {
      dispatch(dishActionCreators.toggleVisibility())
    },
    toggleTerminalVisibility() {
      dispatch(terminalActionCreators.toggleVisibility())
    }
  }
})

export {
  reducer,
  mapStateToProps,
  actionCreators,
  dispatchers,
  mapDispatchToProps
}
