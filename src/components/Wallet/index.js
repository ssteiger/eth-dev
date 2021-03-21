import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Typist from 'react-typist'
import Typewriter from 'typewriter-effect/dist/core'
import $ from 'jquery'
import { mapStateToProps, mapDispatchToProps, reducer } from './controller'
import './styles.css'

const styles = {
  position:'fixed',
  bottom:0,
  right:'10px',
  //pointerEvents:'none',
  height:'450px',
  width:'303px',
  background:'url(./assets/trimmed/wallet_trimmed.png)',
  backgroundSize:'cover',
  cursor:'url(https://unpkg.com/nes.css/assets/cursor-click.png), pointer',
  imageRendering:'pixelated',
  zIndex:1050
}

const Wallet = ({ visible, actions }) => {
  const toggleVisibility = () => {
    $('#wallet').toggleClass('close').promise().done(() => {
      console.log('effect done')
    })
  }

  useEffect(() => {
    toggleVisibility()
  }, [visible])

  return (
    <div
      id='wallet'
      onClick={() => {
        actions.toggleVisibility()
      }}
      style={{ ...styles }}
    >
      <div style={{ paddingTop: '80px', paddingLeft: '35px' }}>
        <span style={{ color: 'white' }}>hello test</span>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)

export { reducer }
