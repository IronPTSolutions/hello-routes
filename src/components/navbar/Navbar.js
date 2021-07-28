import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Hello Routes</a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about?name=julio">About</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" exact to="/users/23231323123123/detail">User Detail</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
