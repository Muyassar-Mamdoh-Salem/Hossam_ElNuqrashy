import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactMe from './Components/ContactMe'

const App = () => {
  return (
    <div>App
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='cntactme' element={<ContactMe/>}/>
      </Routes>
    </div>
  )
}

export default App