import React from 'react'
import appStore from '/util/appStore'
import Body from './components/Body'
import {Provider} from 'react-redux'


function App() {

  return (
   <Provider store ={appStore}><Body/></Provider>  
  )
}

export default App
