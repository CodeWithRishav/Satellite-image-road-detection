import React from 'react'
import {Link} from "react-router-dom"
import '../index.css';

const Header = () => {
  return (
    <div className="relative">
    <div className='flex justify-between items-center p-4 shadow-md '>
    
     <Link className="site-logo font-bold" to="/">Home</Link>
     <nav className=''>
      {/* <Link to="/home">Home</Link>
      <Link to="/about">About</Link> */}
      <Link to="/login" className='font-bold p-2'>Login</Link>
      <Link to="/register" className='font-bold'>Register</Link>

     </nav>
     </div>
    </div>
  )
}

export default Header