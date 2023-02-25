import React from 'react'
import Heatmap from './components/Map'
import ConnectionSpeed from './components/ConnectionSpeed'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import "./App.css"


const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <ConnectionSpeed/>
      <Heatmap/>
      <Footer/>
    </div>
  )
}

export default App