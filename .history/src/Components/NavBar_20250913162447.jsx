import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
       <ul className='grid bg-slate-600 grid-cols-2 gap-4'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contactme">ContactMe</Link></li>
       </ul>
        </div>
  )
}

export default NavBar