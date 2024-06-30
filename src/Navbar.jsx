import React from "react";

function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <a href="#about" className="hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
        </li>
        <li>
          <a href="#blogs" className="hover:bg-gray-700 px-3 py-2 rounded-md">Blogs</a>
        </li>
        <li>
          <a href="#uses" className="hover:bg-gray-700 px-3 py-2 rounded-md">Uses</a>
        </li>
        <li>
          <a href="#newsletter" className="hover:bg-gray-700 px-3 py-2 rounded-md">Newsletter</a>
        </li>
        <li>
          <a href="#contact" className="hover:bg-gray-700 px-3 py-2 rounded-md">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;