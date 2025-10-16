import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <> 
    <header className='header'>
      <div className='logo'> Jarurat Care</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/patients">Patients</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
    </>
  )
}
