import React , { useEffect } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import { mapStateToProps, mapDispatchToProps, reducer } from './controller'

const styles = {
  shared: {
    menu: {
      position:'fixed',
      bottom:0,
      right:0,
      height:'100%',
      width:'100%',
      imageRendering:'pixelated',
      pointerEvents:'none',
      cursor:'url(https://unpkg.com/nes.css/assets/cursor-click.png), pointer',
      zIndex:1000
    },
    icon: {
      position:'fixed',
      bottom:'20px',
      imageRendering:'pixelated',
      cursor:'url(https://unpkg.com/nes.css/assets/cursor-click.png), pointer',
      zIndex:1000,
    }
  },
  menuBottom: {
    background:'url(./assets/layers/menu_bottom.png) no-repeat bottom right fixed',
    backgroundSize:'contain'
  },
  menuRight: {
    background:'url(./assets/layers/menu_right.png) no-repeat bottom right fixed',
    backgroundSize:'contain'
  },
  comIcon: {
    right:'700px',
    height:'68px',
    width:'60px',
    background:'url(./assets/trimmed/icons/com_icon_trimmed.png) no-repeat bottom left',
    backgroundSize:'cover'
  },
  terminalIcon: {
    right:'calc(700px - 60px - 40px)',
    height:'61px',
    width:'78px',
    background:'url(./assets/trimmed/icons/terminal_icon_trimmed.png) no-repeat bottom left',
    backgroundSize:'cover'
  },
  walletIcon: {
    right:'calc(700px - 180px - 40px)',
    height:'60px',
    width:'99px',
    background:'url(./assets/trimmed/icons/wallet_icon_trimmed.png) no-repeat bottom left',
    backgroundSize:'cover'
  },
  musicIcon: {
    right:'calc(700px - 290px - 40px)',
    height:'57px',
    width:'88px',
    background:'url(./assets/trimmed/icons/music_icon_trimmed.png) no-repeat bottom left',
    backgroundSize:'cover'

  },
  dishIcon: {
    right:'calc(700px - 375px - 40px)',
    height:'57px',
    width:'61px',
    background:'url(./assets/trimmed/icons/dish_icon_trimmed.png) no-repeat bottom left',
    backgroundSize:'cover'
  }
}

const Toolbelt = ({ visible, actions }) => {

  const setIconHoverEffect = () => {
    $('#toolbelt .icon').hover(
      function() {
        $(this).css('bottom', '30px')
      },
      function() {
        $(this).css('bottom', '20px')
      }
    )
  }

  useEffect(() => {
    setIconHoverEffect()
  }, [])

  console.log('Toolbelt:')
  console.log({ visible })

  useEffect(() => {
    if (visible) {
      console.log('now slide up')
      $('#toolbelt').slideUp('slow')
      $('#toolbelt').show()
    } else {
      console.log('now slide down')
      //$('#toolbelt').slideDown('slow')
    }
  }, [visible])

  return (
    <div
      id='toolbelt'
      style={{
        display:'none'
      }}
    >
      <div
        id='menuBottom'
        style={{
          ...styles.shared.menu,
          ...styles.menuBottom
        }}
      />
      <div
        id='menuRight'
        style={{
          ...styles.shared.menu,
          ...styles.menuRight
        }}
      />
      <div
        id='comIcon'
        className='icon'
        role='button'
        onClick={() => {
          actions.toggleTerminalVisibility()
        }}
        style={{
          ...styles.shared.icon,
          ...styles.comIcon
        }}
      />
      <div
        id='terminalIcon'
        className='icon'
        role='button'
        onClick={() => {
          console.log('click terminalIcon')
        }}
        style={{
          ...styles.shared.icon,
          ...styles.terminalIcon
        }}
      />
      <div
        id='walletIcon'
        className='icon'
        role='button'
        onClick={() => {
          console.log('click walletIcon')
        }}
        style={{
          ...styles.shared.icon,
          ...styles.walletIcon
        }}
      />
      <div
        id='musicIcon'
        className='icon'
        role='button'
        onClick={() => {
          console.log('click musicIcon')
        }}
        style={{
          ...styles.shared.icon,
          ...styles.musicIcon
        }}
      />
      <div
        id='dishIcon'
        className='icon'
        role='button'
        onClick={() => {
          actions.toggleDishVisibility()
        }}
        style={{
          ...styles.shared.icon,
          ...styles.dishIcon
        }}
      />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbelt)

export { reducer }
