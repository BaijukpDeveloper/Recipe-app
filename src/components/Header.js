import React from 'react'

// importing navlink component form react-router-dom for navigation
import {NavLink} from "react-router-dom"
function Header() {
  return (
    <header>
    <div className="navbar-container">
      <div className="navbar-logo">
          <h1 className="logo">logo</h1>
      </div>
      <div className="navbar-menu">
          <ul className="navbar-menu-items">
            {/* header nav links  */}
              <NavLink to="/"><li>Home</li></NavLink>
              <NavLink to="/checkout"><li>Checkout</li></NavLink>
          </ul>
      </div>
    </div>
  </header>
  )
}

export default Header