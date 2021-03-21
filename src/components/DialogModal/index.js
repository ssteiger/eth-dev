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
            const { avatar, alignment, text, code, choices } = dialog

            const isLastVisibleDialog = index === currentDialog.index

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
                        transform:'scaleX(1)'
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
                      {code && (
                        <CodeContainer language={'bash'} children={code} />
                      )}
                    </p>
                  </div>
                  {alignment === 'right' && (
                    <img
                      src={`./assets/${avatar}`}
                      alt='avatar'
                      style={{
                        minWidth:'120px',
                        imageRendering:'pixelated',
                        transform:'scaleX(-1)'
                      }}
                    />
                  )}

                  {isLastVisibleDialog && choices && choices.length && (
                    choices.map(choice => {
                      return (
                        <button
                          type='button'
                          className='nes-btn is-warning'
                          id={choice.id}
                          onClick={() => {
                            actions.continueCurrentDialog()
                            scrollToBottom('#speechContainer')
                          }}
                          style={{ float: 'right' }}
                        >
                          {choice.buttonText}
                        </button>
                      )
                    })
                  )}
                  {
                    isLastVisibleDialog && !choices && (
                      <button
                        type='button'
                        className='nes-btn'
                        id='continue'
                        onClick={() => {
                          actions.continueCurrentDialog()
                          scrollToBottom('#speechContainer')
                        }}
                        style={{ float: 'right' }}
                      >
                        Continue ...
                      </button>
                    )
                  }
                </div>
              )
            }
          })
          }
        </div>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogModal)

export { reducer }
