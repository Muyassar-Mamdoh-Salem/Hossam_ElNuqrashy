import React from 'react'

const App = () => {
  return (
    <div>App
      
      <Rutes>
        <Route path='/' element={<Home/>}/>
        <Route path='cntact' element={<Home/>}/>
      </Rutes>
    </div>
  )
}

export default App