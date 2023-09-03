import React from 'react'
import {Link} from "react-router-dom"
import '../index.css';

const Header = () => {
  return (
    <div className='flex justify-between align-center '>
    
     <Link className="site-logo" to="/">#ImageDehaze</Link>
     <nav>
      {/* <Link to="/home">Home</Link>
      <Link to="/about">About</Link> */}
      <Link to="/login">Login</Link>
     </nav>

    </div>
  )
}

export default Header