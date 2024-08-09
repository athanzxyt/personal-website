// components/Navbar.jsx

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
    <nav className="flex flex-row justify-between md:justify-start md:space-x-4">
      <Link
        href="/"
        className={`nav-item ${isActive("/") ? "active" : ""}`}
      >
        About
      </Link>
      <Link
        href="/projects"
        className={`nav-item ${isActive("/projects") ? "active" : ""}`}
      >
        Projects
      </Link>
      <Link
        href="/experience"
        className={`nav-item ${isActive("/experience") ? "active" : ""}`}
      >
        Experience
      </Link>
      <Link
        href="/blogs"
        className={`nav-item ${isActive("/blogs") ? "active" : ""}`}
      >
        Blogs
      </Link>
    </nav>
  );
}

export default Navbar;