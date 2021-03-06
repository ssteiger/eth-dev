import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps, reducer } from './controller'
import './styles.css'

const styles = {
  position:'fixed',
  bottom:10,
  right:0,
  width:'calc(100% - 250px)',
  display: 'none'
}

const Toolbelt = ({ visible, actions }) => {
  console.log('in toolbelt: ')
  console.log({ visible, actions })

  return (
    <img
      id='toolbelt'
      src='./assets/toolbelt.png'
      alt='toolbelt'
      style={{ ...styles }}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbelt)

export { reducer }
