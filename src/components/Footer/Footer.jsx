import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footerContainer'>
      <div className="reserved">
        <p>All rights reserved © 2024</p>
      </div>
      <div className="footerLogo">
        <h2><a href="#">Dreamoment</a></h2>
      </div>
      <div className="privacy-disclaimer-contact">
        <a href="">privacy</a>
        <a href="">disclaimer</a>
        <a href="">contact</a>
      </div>
    </div>
  )
}

export default Footer