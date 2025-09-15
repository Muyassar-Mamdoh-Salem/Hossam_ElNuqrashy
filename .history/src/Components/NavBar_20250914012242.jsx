import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='grid grid-cols-2' >
       <div>
        <img className='rounded-full w-32 h-15 mx-auto' src="logo.jpg" alt="logo" />
       </div>
       <ul className='grid md:grid-cols-3  justify-items-center  underline-none gap-4'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contactme">ContactMe</Link></li>
        <li><Link to="/Portfolio">Portfolio</Link></li>
       </ul>
      
        </div>
  )
}

export default NavBar