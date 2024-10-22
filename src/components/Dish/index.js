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
  top:0,
  left:0,
  height:'100%',
  width:'100%',
  pointerEvents:'none',
  background:'url(./assets/layers/dish.png) no-repeat bottom right fixed',
  backgroundSize:'contain',
  cursor:'url(https://unpkg.com/nes.css/assets/cursor-click.png), pointer',
  imageRendering:'pixelated',
  zIndex:1000
}

const Dish = ({ connecting, visible, actions }) => {
  const activateConnectiongAnimation = () => {
    new Typewriter('#dish > .dish-bubble', {
      strings: ['Connecting ...'],
      cursor: '',
      autoStart: true,
      loop: true,
      delay: 90, // delay between each key when typing
      deleteSpeed: 10
    })
  }

  useEffect(() => {
    if (connecting) {
      activateConnectiongAnimation()
    }
  }, [connecting])

  return (
    <div
      id='dish'
      className='close'
      style={{
        ...styles,
        display: visible ? 'block' : 'none',
      }}
    >
      {connecting && (
        <div
          className={`nes-balloon from-left`}
          style={{
            width:'100%',
            marginRight:'60px'
          }}
        >
          <Typist
            cursor={{ show: false }}
            avgTypingDelay={50}
            loop={true}
          >
            Connecting ...
          </Typist>
        </div>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Dish)

export { reducer }
