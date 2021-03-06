import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './redux/configureStore'

import Background from './components/Background'
import Terminal from './components/Terminal'
import Toolbelt from './components/Toolbelt'
import Dish from './components/Dish'
import DialogModal from './components/DialogModal/index'

import './App.css'

const styles = {
  app: {
    height:'100vh',
    background:'url(./assets/background_0.png)',
    backgroundSize:'cover',
    zIndex:1
  },
  motorcycle: {
    position:'fixed',
    bottom:0,
    left:'45%',
    right:0,
    pointerEvents:'none',
    height:'600px',
    width:'250px',
    background:'url(./assets/motorcycle_0.png)',
    backgroundSize:'cover',
    cursor:'pointer',
    imageRendering:'pixelated',
    zIndex:1000
  },
  toolbelt: {
    position:'fixed',
    bottom:10,
    right:0,
    width:'calc(100% - 250px)'
  }
}

const store = configureStore()

const App = () => {
  return (
    <ReduxProvider store={store} key='reduxProvider'>
      <div style={{ ...styles.app }}>

        <Background />

        <DialogModal />

        <div
          id='motorcycle'
          style={{ ...styles.motorcycle }}
        >
        </div>

        <Terminal />

        <Dish />

        <Toolbelt />

      </div>
    </ReduxProvider>
  );
}

export default App
