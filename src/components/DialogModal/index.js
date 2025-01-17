import React from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import { CodeContainer } from './components'
import { mapStateToProps, mapDispatchToProps, reducer } from './controller'

const DialogModal = ({ dialogVisible, dialogs, currentDialog, actions }) => {

  /*
  console.log('in DialogModal')
  console.log({ name: currentDialog.name })
  console.log({ currentIndex: currentDialog.index })
  console.log({ length: dialogs[currentDialog.name].length })
  */

  const scrollToBottom = (element) => {
    $(element).animate({ scrollTop: $(document).height() }, 'slow')
  }

  // TODO: move this into reducer
  const isEndOfDialog = dialogs[currentDialog.name].length - 1 === currentDialog.index

  return (
    <div
      style={{
        position:'fixed',
        top:'5%',
        left:'20%',
        right:'20%',
        height:'90vh',
        zIndex:100
      }}
    >
      {dialogVisible && (
        <div
          id='speechContainer'
          style={{
            height:'80vh',
            overflowY:'scroll',
            padding:'15px'
          }}
        >
          {dialogs[currentDialog.name].map((dialog, index) => {
            const { avatar, alignment, text } = dialog
            if (index <= currentDialog.index) {
              return (
                <div
                  style={{
                    float:alignment,
                    width:'100%',
                    margin:'15px 0'
                  }}
                >
                  {alignment === 'left' && (
                    <img
                      src={`./assets/${avatar}`}
                      alt='avatar'
                      style={{
                        minWidth:'120px',
                        imageRendering:'pixelated',
                        transform:alignment === 'right' ? 'scaleX(-1)' : 'scaleX(1)'
                      }}
                    />
                  )}
                  <div
                    className={`nes-balloon from-${alignment}`}
                    style={{
                      width:'calc(100% - 160px)'
                    }}
                  >
                    <p>
                      {text}
                    </p>
                  </div>
                  {alignment === 'right' && (
                    <img
                      src={`./assets/${avatar}`}
                      alt='avatar'
                      style={{
                        minWidth:'120px',
                        imageRendering:'pixelated',
                        transform:alignment === 'right' ? 'scaleX(-1)' : 'scaleX(1)'
                      }}
                    />
                  )}
                </div>
              )
            }
          })}
          {!(currentDialog.name === 'welcomeCall' && isEndOfDialog) &&
          (
            <button
              type='button'
              className='nes-btn'
              id='confirmButton'
              onClick={() => {
                if (isEndOfDialog) {
                  actions.toggleRinging()
                  actions.toggleDialogVisibility()
                }
                if (!isEndOfDialog) {
                  actions.continueCurrentDialog()
                }
                scrollToBottom('#speechContainer')
              }}
              style={{ float: 'right' }}
            >
              Continue ...
            </button>
          )}

          {
            currentDialog.name === 'welcomeCall' && isEndOfDialog && (
              <button
                type='button'
                className='nes-btn is-warning'
                onClick={() => {
                  actions.toggleDialogVisibility()
                  actions.toggleToolbeltVisibility()
                }}
                style={{ float: 'right' }}
              >
                Setup network dish
              </button>
            )
          }
        </div>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogModal)

export { reducer }
