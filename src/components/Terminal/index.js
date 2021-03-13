import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import $ from 'jquery'
import Typist from 'react-typist'
import Typewriter from 'typewriter-effect/dist/core'
import { mapStateToProps, mapDispatchToProps, reducer } from './controller'
import './styles.css'

const styles = {
  position:'fixed',
  bottom:0,
  left:0,
  //pointerEvents:'none',
  height:'600px',
  width:'250px',
  background:'url(./assets/terminal.png)',
  backgroundSize:'cover',
  cursor:'url(https://unpkg.com/nes.css/assets/cursor-click.png), pointer',
  imageRendering:'pixelated',
  zIndex:1000
}

const Terminal = ({ ringing, visible, actions }) => {

  const toggleVisiblity = () => {
    actions.toggleVisiblity()
    $('#terminal').toggleClass('close').promise().done(() => {
      console.log('effect done')
    })
  }

  useEffect(() => {
    if (ringing) {
      new Typewriter('#terminal > .nes-balloon', {
        strings: ['Incoming call ...'],
        cursor: '',
        autoStart: true,
        loop: true,
        delay: 90, // delay between each key when typing
        deleteSpeed: 10
      })
    }
  }, [ringing])

  return (
    <div
      id='terminal'
      onClick={() => {
        if (!(ringing && visible)) {
          toggleVisiblity()
        }
        if (ringing) {
          actions.toggleRinging()
        }
      }}
      className='close'
      style={{ ...styles }}
    >
      {ringing && (
        <div
          class={`nes-balloon from-left`}
          style={{
            width:'100%',
            marginLeft:'60px'
          }}
          onClick={() => {
            actions.toggleVisiblity()
            actions.setCurrentDialog({ name: 'welcomeCall' })
          }}
        >
          <Typist
            cursor={{ show: false }}
            avgTypingDelay={50}
            loop={true}
          >
            Incoming transmission ...
          </Typist>
        </div>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Terminal)

export { reducer }
