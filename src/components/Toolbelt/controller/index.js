import dotProp from 'dot-prop-immutable'

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
  toggleVisiblity: () => ({
    type: TOGGLE_VISIBLITY
  })
}

const dispatchers = {
  toggleVisiblity: () => {
    return actionCreators.toggleVisiblity()
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    toggleVisiblity() {
      dispatch(actionCreators.toggleVisiblity())
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
