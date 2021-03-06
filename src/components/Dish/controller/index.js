import dotProp from 'dot-prop-immutable'

export const TOGGLE_VISIBLITY = 'dish/TOGGLE_VISIBLITY'
export const TOGGLE_RINGING = 'dish/TOGGLE_RINGING'

const initialState = {
  visible: true,
  ringing: false
}

const mapStateToProps = state => {
  const { dish } = state
  return {
    ...dish
  }
}

const reducer = (state = initialState, action) => {
  const newState = { ...state }

  switch (action.type) {
    case TOGGLE_VISIBLITY:
      newState.visible = !state.visible
      return newState
    case TOGGLE_RINGING:
      newState.ringing = !state.ringing
      return newState
    default:
      return newState
  }
}

const actionCreators = {
  toggleVisiblity: () => ({
    type: TOGGLE_VISIBLITY
  }),
  toggleRinging: () => ({
    type: TOGGLE_RINGING
  })
}

const dispatchers = {
  toggleVisiblity: () => {
    return actionCreators.toggleVisiblity()
  },
  toggleRinging: () => {
    return actionCreators.toggleRinging()
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    toggleVisiblity() {
      dispatch(actionCreators.toggleVisiblity())
    },
    toggleRinging() {
      dispatch(actionCreators.toggleRinging())
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
