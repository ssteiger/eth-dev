import React, { useEffect } from 'react'
import './styles.css'

const styles = {
  moon: {
    position:'fixed',
    width:'100%',
    imageRendering:'pixelated',
    pointerEvents:'none',
    zIndex:2
  },
  citySkyline: {
    position:'fixed',
    bottom:0,
    left:0,
    right:0,
    width:'100%',
    imageRendering:'pixelated',
    pointerEvents:'none',
    zIndex:2
  }
}

const Background = () => {
  return (
    <>
      <img
        src='./assets/moon.png'
        alt='moon'
        style={{ ...styles.moon }}
      />
      <img
        src='./assets/city_skyline.png'
        alt='city_skyline'
        style={{
          ...styles.citySkyline
        }}
      />
    </>
  )
}

export default Background
