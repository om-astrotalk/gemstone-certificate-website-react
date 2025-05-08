import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'
const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Know Your Gemstone", path: "/know-your-gemstone" },
    { label: "Verify Certificate", path: "/verify-certificate" },
    { label: "Contact Us", path: "/contact" },
  ];



const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      
      <h1 className="text-gradient">GemVerify</h1>
     
      <div className="navbar-menu">
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path} className="navbar-link">
            {item.label}
          </Link>
        ))}
      </div>

      <div className='login-signup-wrapper'>
        <span className='login-button'>
            Login
        </span>
        <span className='signUp-button'>
            Sign Up
        </span>
      </div>

    </div>
  )
}

export default Navbar
