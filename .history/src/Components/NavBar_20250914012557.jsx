import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' container-fluid  mt-4 mb-4 grid grid-cols-2  bg-[#DEE8CE]' >
       <div>
        <img className='rounded-lg w-14 h-14 mx-auto ' src="logo.jpg" alt="logo" />
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