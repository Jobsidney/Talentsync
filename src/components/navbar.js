import React from 'react'
import Logo from './imageSvgs/Logo'
import LogoComplete from './LogoComplete'

function Navbar() {
  return (
    <div className='default-padding'>
      <nav className=''>
        <LogoComplete/>
        <ul >
            <li className="navlinks">Product</li>
            <li className="navlinks">Solution</li>
            <li className="navlinks">Resources</li>
            <li className="navlinks">Pricing</li>
        </ul>

        <div className="btns">
            <button className='default-btn white-bg-btn'>Talk to sales</button>
            <button className="signup default-btn blue-bg-btn">Sign up for free</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
