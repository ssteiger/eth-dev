import React from 'react'

const styles = {
  shared: {
    position:'fixed',
    top:0,
    left:0,
    height:'100%',
    width:'100%',
    pointerEvents:'none',
    imageRendering:'pixelated',
  },
  nightSky0: {
    background:'url(./assets/night_sky_0.png) no-repeat center center fixed',
    backgroundSize:'cover',
    zIndex:1
  },
  nightSky1: {
    background:'url(./assets/night_sky_1.png) no-repeat center center fixed',
    backgroundSize:'cover',
    zIndex:2
  },
  fog: {
    background:'url(./assets/fog.png) no-repeat center center fixed',
    backgroundSize:'cover',
    zIndex:3
  },
  citySkyline0: {
    background:'url(./assets/city_0.png) no-repeat center center fixed',
    backgroundSize:'cover',
    zIndex:4
  },
  citySkyline1: {
    background:'url(./assets/city_1.png) no-repeat center center fixed',
    backgroundSize:'cover',
    zIndex:5
  },
  citySkyline2: {
    background:'url(./assets/city_2.png) no-repeat center center fixed',
    backgroundSize:'cover',
    zIndex:6
  },
  citySkyline3: {
    background:'url(./assets/city_3.png) no-repeat center center fixed',
    backgroundSize:'cover',
    zIndex:7
  },
  street: {
    background:'url(./assets/street.png) no-repeat center center fixed',
    backgroundSize:'cover',
    zIndex:8
  }
}

const Background = () => {
  return (
    <>
      <div
        style={{
          ...styles.shared,
          ...styles.nightSky0
        }}
      />
      <div
        style={{
          ...styles.shared,
          ...styles.nightSky1
        }}
      />
      <div
        style={{
          ...styles.shared,
          ...styles.fog
        }}
      />
      <div
        style={{
          ...styles.shared,
          ...styles.citySkyline0
        }}
      />
      <div
        style={{
          ...styles.shared,
          ...styles.citySkyline1
        }}
      />
      <div
        style={{
          ...styles.shared,
          ...styles.citySkyline2
        }}
      />
      <div
        style={{
          ...styles.shared,
          ...styles.citySkyline3
        }}
      />
      <div
        style={{
          ...styles.shared,
          ...styles.street
        }}
      />
    </>
  )
}

export default Background
