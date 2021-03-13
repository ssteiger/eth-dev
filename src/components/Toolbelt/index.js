import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps, reducer } from './controller'

const styles = {
  shared: {
    position:'fixed',
    height:'100%',
    width:'100%',
    imageRendering:'pixelated',
    pointerEvents:'none',
    cursor:'url(https://unpkg.com/nes.css/assets/cursor-click.png), pointer',
    zIndex:1000
  },
  menuBottom: {
    position:'fixed',
    bottom:0,
    right:0,
    background:'url(./assets/menu_bottom.png) no-repeat bottom right fixed',
    backgroundSize:'contain'
  },
  menuRight: {
    bottom:0,
    left:0,
    background:'url(./assets/menu_right.png) no-repeat bottom right fixed',
    backgroundSize:'contain'
  },
  comIcon: {
    bottom:0,
    left:0,
    background:'url(./assets/icons/com_icon.png) no-repeat bottom right fixed',
    backgroundSize:'contain'
  },
  terminalIcon: {
    bottom:0,
    left:0,
    background:'url(./assets/icons/terminal_icon.png) no-repeat bottom right fixed',
    backgroundSize:'contain'
  },
  walletIcon: {
    bottom:0,
    left:0,
    background:'url(./assets/icons/wallet_icon.png) no-repeat bottom right fixed',
    backgroundSize:'contain'
  },
  musicIcon: {
    bottom:0,
    left:0,
    background:'url(./assets/icons/music_icon.png) no-repeat bottom right fixed',
    backgroundSize:'contain'
  },
  satelliteIcon: {
    bottom:0,
    left:0,
    background:'url(./assets/icons/satellite_icon.png) no-repeat bottom right fixed',
    backgroundSize:'contain'
  }
}

const Toolbelt = ({ visible, actions }) => {
  return (
    <>
      <div
        id='menuBottom'
        style={{
          ...styles.shared,
          ...styles.menuBottom
        }}
      />
      <div
        id='menuRight'
        style={{
          ...styles.shared,
          ...styles.menuRight
        }}
      />
      <div
        id='comIcon'
        style={{
          ...styles.shared,
          ...styles.comIcon
        }}
      />
      <div
        id='terminalIcon'
        style={{
          ...styles.shared,
          ...styles.terminalIcon
        }}
      />
      <div
        id='walletIcon'
        style={{
          ...styles.shared,
          ...styles.walletIcon
        }}
      />
      <div
        id='musicIcon'
        style={{
          ...styles.shared,
          ...styles.musicIcon
        }}
      />
      <div
        id='satelliteIcon'
        style={{
          ...styles.shared,
          ...styles.satelliteIcon
        }}
      />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbelt)

export { reducer }
