import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './redux/configureStore'

import Background from './components/Background'
import Terminal from './components/Terminal'
import Toolbelt from './components/Toolbelt'
import Dish from './components/Dish'
import DialogModal from './components/DialogModal/index'

const store = configureStore()

const App = () => {
  return (
    <ReduxProvider store={store} key='reduxProvider'>
      <div id='App'>

        <Background />

        <DialogModal />

        <Terminal />

        <Dish />

        <Toolbelt />

      </div>
    </ReduxProvider>
  );
}

export default App
