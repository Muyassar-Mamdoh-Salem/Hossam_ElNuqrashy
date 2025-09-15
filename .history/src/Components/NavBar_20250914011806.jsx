import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
       <ul className='grid underline-none gap-4'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contactme">ContactMe</Link></li>
        <li><Link to="/Portfolio">Portfolio</Link></li>
       </ul>
        </div>
  )
}

export default NavBar