import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import $ from 'jquery'
import Typist from 'react-typist'
import Typewriter from 'typewriter-effect/dist/core'
import { mapStateToProps, mapDispatchToProps, reducer } from './controller'
import './styles.css'

const styles = {
  //display:'none',
  position:'fixed',
  top:0,
  left:0,
  height:'100%',
  width:'100%',
  pointerEvents:'none',
  background:'url(./assets/dish.png) no-repeat bottom right fixed',
  backgroundSize:'contain',
  cursor:'url(https://unpkg.com/nes.css/assets/cursor-click.png), pointer',
  imageRendering:'pixelated',
  zIndex:1000
}

const Dish = ({ ringing, visible,  actions }) => {
  useEffect(() => {
    if (ringing) {
      new Typewriter('#dish > .dish-bubble', {
        strings: ['Connecting ...'],
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
      id='dish'
      className='close'
      style={{ ...styles }}
    >
      {/*
      <div className='dish-bubble'>
        <Typist
          cursor={{ show: false }}
          avgTypingDelay={50}
          loop={true}
        >
          Connecting ...
        </Typist>
      </div>
      */}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Dish)

export { reducer }
