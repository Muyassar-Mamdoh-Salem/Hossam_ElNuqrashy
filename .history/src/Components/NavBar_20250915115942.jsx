import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' container-fluid mb-10   p-4 grid grid-cols-2 items-center bg-[#DEE8CE] rounded-lg' >
       <div>
        <Link to="/"><img className='rounded-lg w-14 h-14 mx-auto ' src="logo.jpg" alt="logo" /> </Link>
       </div>
       <ul className='grid md:grid-cols-4  justify-items-center  underline-none gap-4 text-2xl text-wh '>
        <li className='hover:text-[#BB6653] '><Link to="/">Home</Link></li>
        <li className='hover:text-[#BB6653]'><Link to="/contactme">ContactMe</Link ></li>
        <li className='hover:text-[#BB6653]' ><Link to="/Portfolio">Portfolio</Link></li>
        <li className='hover:text-[#BB6653]' ><Link to="/About">About</Link></li>
       </ul>
      
        </div>
  )
}

export default NavBar