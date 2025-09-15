import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
       <ul className='gri'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contactme">ContactMe</Link></li>
       </ul>
        </div>
  )
}

export default NavBar