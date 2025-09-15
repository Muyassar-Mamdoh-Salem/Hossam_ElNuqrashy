import React from 'react'

const App = () => {
  return (
    <div>App
      
      <Rutes>
        <Route path='/' element={<Home/>}/>
        <Route path='cntactme' element={<Contact/>}/>
      </Rutes>
    </div>
  )
}

export default App