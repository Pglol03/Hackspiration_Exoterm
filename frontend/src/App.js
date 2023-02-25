import React from 'react'
import Heatmap from './components/Map'
import ConnectionSpeed from './components/ConnectionSpeed'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <ConnectionSpeed/>
      <Heatmap/>
    </div>
  )
}

export default App