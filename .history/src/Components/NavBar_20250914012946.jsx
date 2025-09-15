import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' container-fluid   p-4 grid grid-cols-2 items-center bg-[#DEE8CE]' >
       <div>
        <img className='rounded-lg w-14 h-14 mx-auto ' src="logo.jpg" alt="logo" />
       </div>
       <ul className='grid md:grid-cols-3  justify-items-center  underline-none gap-4 text-2xl '>
        <li className='hover:text-blue-600 '><Link to="/">Home</Link></li>
        <li ><Link to="/contactme">ContactMe</Link></li>
        <li ><Link to="/Portfolio">Portfolio</Link></li>
       </ul>
      
        </div>
  )
}

export default NavBar