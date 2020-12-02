import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav className="nav-container" style={{border:"1px solid black"}}>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link>
    </nav>
  )
}
