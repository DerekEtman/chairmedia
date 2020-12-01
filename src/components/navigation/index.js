import { Link } from "gatsby"
import React from "react"

export default function Navigation() {
  return (
    <nav className="nav-container">
      <Link to="/about/">About</Link>

      <Link to="/contact/">Contact</Link>
    </nav>
  )
}
