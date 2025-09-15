import React from 'react'
import { Route, Routes as Rutes } from 'react-router-dom'
import ContactMe from './Components/ContactMe'

const App = () => {
  return (
    <div>App
      
      <Rutes>
        <Route path='/' element={<Home/>}/>
        <Route path='cntactme' element={<ContactMe/>}/>
      </Rutes>
    </div>
  )
}

export default App