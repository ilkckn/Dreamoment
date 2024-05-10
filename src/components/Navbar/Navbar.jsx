import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbarContainer'>
      <nav>
        <div className="logo"><NavLink className="logoLink" to="/">Dreamoment</NavLink></div>
        <div className="links">
          <ul>
            <li><NavLink className="link" to="/">Home</NavLink></li>
            <li><NavLink className="link" to="/about">About</NavLink></li>
            <li><NavLink className="link" to="/tours">Tours</NavLink></li>
            <li><NavLink className="link" to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar