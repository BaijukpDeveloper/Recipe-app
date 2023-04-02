import React from 'react'

// importing navlink component form react-router-dom for navigation
import {NavLink} from "react-router-dom"
function Header() {
  return (
    <header>
    <div class="navbar-container">
      <div class="navbar-logo">
          <h1 class="logo">logo</h1>
      </div>
      <div class="navbar-menu">
          <ul class="navbar-menu-items">
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