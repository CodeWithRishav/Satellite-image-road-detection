import React from 'react'
import {Link} from "react-router-dom"
import '../index.css';
import {ImMagicWand} from "react-icons/im"

const Header = () => {
  return (
    <div className="relative">
    <div className='flex justify-between items-center p-4 shadow-md '>
    
    <nav className=''>
      <div className='flex'>
    <Link className="site-logo text-3xl ml-12 font-bold text-[#4DFFEA] pr-2" to="/">DeHazer</Link>
    <ImMagicWand className='icon mt-1'/>
    </div>
    </nav>


     <nav className=''>
     <Link to="/" className='font-bold px-2 text-white'>Home</Link> 
     <Link to="/about" className='font-bold px-2 text-white'>About</Link> 
    <Link to="/dehaze" className='font-bold px-2 text-white'>Dehaze</Link> 
    <Link to="/services" className='font-bold p-4 px-2 text-white'>Services</Link>
    <Link to="/team" className='font-bold px-2 text-white'>Team</Link> 
      <Link to="/login" className='login font-bold p-4 px-2'>Login</Link>

      {/* <Link to="/register" className='font-bold text-white'>Register</Link> */}
     </nav>
     </div>
    </div>
  )
}

export default Header