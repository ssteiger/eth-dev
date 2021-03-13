import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import $ from 'jquery'
import { mapStateToProps, mapDispatchToProps, reducer } from './controller'
import './styles.css'

const styles = {
  avatar: {
    float:'left',
    width:'120px',
    imageRendering: 'pixelated'
  },
  speechBubble: {
    float:'left',
    width:'calc(100% - 120px)',
    backgroundColor:'#fff',
    padding:'10px',
    lineHeight:'2em',
    boxShadow:'0 -4px #fff, 0 -8px #212529, 4px 0 #fff, 4px -4px #212529, 8px 0 #212529, 0 4px #fff, 0 8px #212529, -4px 0 #fff, -4px 4px #212529, -8px 0 #212529, -4px -4px #212529, 4px 4px #212529',
  }
}

const DialogModal = ({ dialogVisible, dialogs, currentDialog, actions }) => {

  console.log('in DialogModal')
  console.log({ name: currentDialog.name })
  console.log({ currentIndex: currentDialog.index })
  console.log({ length: dialogs[currentDialog.name].length })

  const isEndOfDialog = dialogs[currentDialog.name].length - 1 === currentDialog.index

  return (
    <div
      style={{
        position:'fixed',
        top:'5%',
        left:'20%',
        right:'20%',
        height:'90vh',
        //backgroundColor: '#fff',
        //backgroundSize:'cover',
        zIndex:100
      }}
    >
      {dialogVisible && (
        <div
          id='speech-container'
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
                    class={`nes-balloon from-${alignment}`}
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
            <Button
              id='confirmButton'
              onClick={() => {
                if (isEndOfDialog) {
                  actions.toggleRinging()
                  actions.toggleDialogVisibility()
                } else {
                  actions.continueCurrentDialog()
                }
              }}
            >
              Continue ...
            </Button>
          )}

          {
            currentDialog.name === 'welcomeCall' && isEndOfDialog &&
            <Button
              onClick={() => {
                actions.toggleDialogVisibility()
                $('#toolbelt').show('slow').promise().done(() => {
                   $('#dish').show('slow')
                })
              }}
              style={{ float: 'right' }}
            >
              Setup network dish
            </Button>
          }
        </div>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogModal)

export { reducer }
