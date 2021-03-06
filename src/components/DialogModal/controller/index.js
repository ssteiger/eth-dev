import dotProp from 'dot-prop-immutable'
import deepcopy from 'deepcopy'
import * as merge from 'deepmerge'
import { actionCreators as terminalActionCreators } from '../../Terminal/controller'

export const TOGGLE_DIALOG_VISIBILITY = 'dialogModal/TOGGLE_DIALOG_VISIBILITY'
export const CURRENT_DIALOG_SET = 'dialogModal/CURRENT_DIALOG_SET'
export const CURRENT_DIALOG_CONTINUE = 'dialogModal/CURRENT_DIALOG_CONTINUE'

const initialState = {
  dialogVisible: true,
  currentDialog: {
    name: 'intro',
    //name: 'welcomeCall',
    index: 0
  },
  dialogs: {
    intro: [
      {
        avatar: 'punk5950.png',
        alignment: 'left',
        text: `It's been a long time...`
      },
      {
        avatar: 'punk5950.png',
        alignment: 'left',
        text:  'Crypto City.'
      },
      {
        avatar: 'punk5950.png',
        alignment: 'left',
        text: `Where the central headquarter of the byzantine generals, NFT addicts and some of the largest mining districts in the world live side by side.`
      },
      {
        avatar: 'punk5950.png',
        alignment: 'left',
        text: 'Feels good to be back...'
      },
      {
        avatar: 'punk5950.png',
        alignment: 'left',
        text: 'Feels like home...'
      },
    ],
    welcomeCall: [
      {
        avatar: 'punk_anon.png',
        alignment: 'right',
        text: 'Hey! I heard you where back in town...'
      },
      {
        avatar: 'punk_anon.png',
        alignment: 'right',
        text:  'Listen - We need your help.'
      },
      {
        avatar: 'punk_anon.png',
        alignment: 'right',
        text: 'The byzantine generals are out of their minds!'
      },
      {
        avatar: 'punk_anon.png',
        alignment: 'right',
        text: 'Can you connect to the city network?'
      },
      {
        avatar: 'punk5950.png',
        alignment: 'left',
        text: 'Ok, no problem.'
      }
    ]
  }
}

const mapStateToProps = state => {
  const { dialogModal } = state
  return {
    ...dialogModal
  }
}

const reducer = (state = initialState, action) => {
  let newState = deepcopy(state)
  const { payload } = action

  switch (action.type) {
    case TOGGLE_DIALOG_VISIBILITY:
      newState.dialogVisible = !state.dialogVisible
      return newState
    case CURRENT_DIALOG_SET:
      newState.currentDialog.name = payload.name
      newState.currentDialog.index = 0
      newState.dialogVisible = true
      return newState
    case CURRENT_DIALOG_CONTINUE:
      if (state.currentDialog.index < state.dialogs[state.currentDialog.name].length) {
        newState.currentDialog.index = state.currentDialog.index + 1
      }
      return newState
    default:
      return newState
  }
}

const actionCreators = {
  toggleDialogVisibility: () => ({
    type: TOGGLE_DIALOG_VISIBILITY
  }),
  setCurrentDialog: (payload) => ({
    type: CURRENT_DIALOG_SET,
    payload
  }),
  continueCurrentDialog: () => ({
    type: CURRENT_DIALOG_CONTINUE
  })
}

const dispatchers = {
  toggleDialogVisibility: () => {
    return actionCreators.toggleDialogVisibility()
  },
  setCurrentDialog: (payload) => {
    return actionCreators.setCurrentDialog(payload)
  },
  continueCurrentDialog: () => {
    return actionCreators.continueCurrentDialog()
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    toggleDialogVisibility() {
      dispatch(actionCreators.toggleDialogVisibility())
    },
    setCurrentDialog(payload) {
      dispatch(actionCreators.setCurrentDialog(payload))
    },
    continueCurrentDialog() {
      dispatch(actionCreators.continueCurrentDialog())
    },
    toggleRinging() {
      dispatch(terminalActionCreators.toggleRinging())
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
