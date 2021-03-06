import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import $ from 'jquery'
import Typist from 'react-typist'
import Typewriter from 'typewriter-effect/dist/core'
import { mapStateToProps, mapDispatchToProps, reducer } from './controller'
import './styles.css'

const styles = {
  display:'none',
  position:'fixed',
  bottom: '30vh',
  right:0,
  pointerEvents:'none',
  height:'25vh',
  width:'100%',
  //background:'url(./assets/dish.png)',
  //backgroundSize:'cover',
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
      onClick={() => {
        console.log('click')
      }}
      className='close'
      style={{ ...styles }}
    >
      <img
        src='./assets/dish.png'
        style={{
          //float:'left',
          width:'100%',
          imageRendering: 'pixelated'
        }}
        alt='dish'
      />

      {ringing && !visible && (
        <div className='dish-bubble'>
          <Typist
            cursor={{ show: false }}
            avgTypingDelay={50}
            loop={true}
          >
            Connecting ...
          </Typist>
        </div>)
      }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Dish)

export { reducer }
