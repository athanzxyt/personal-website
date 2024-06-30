// Navbar.jsx

import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-row space-x-4">
      <NavLink exact to="/" className={({isActive}) => isActive ? "nav-item active": "nav-item" }>About</NavLink>
      <NavLink exact to="/projects" className={({isActive}) => isActive ? "nav-item active": "nav-item" }>Projects</NavLink>
      <NavLink exact to="/blogs" className={({isActive}) => isActive ? "nav-item active": "nav-item" }>Blogs</NavLink>
    </nav>
  )
}

export default Navbar;