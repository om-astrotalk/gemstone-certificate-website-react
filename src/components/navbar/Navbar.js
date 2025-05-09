// Navbar.jsx
import React, { useState } from 'react';
import "./navbar.scss";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Know Your Gemstone", path: "/know-your-gemstone" },
  { label: "Verify Certificate", path: "/verify-certificate" },
  { label: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='navbar-wrapper'>
      <h1 className="text-gradient">GemVerify</h1>

      <div className="navbar-menu desktop-only">
        {menuItems.map((item) => (
          < NavLink  key={item.path} to={item.path} className="navbar-link">
            {item.label}
          </ NavLink >
        ))}
      </div>

      <div className='login-signup-wrapper desktop-only'>
        <span className='login-button'>Login</span>
        <span className='signUp-button'>Sign Up</span>
      </div>

      <div className="mobile-menu mobile-only" onClick={() => setMobileMenuOpen(true)}>
        <FiMenu size={24} />
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-header">
            <h2 className="text-gradient">GemVerify</h2>
            <FiX size={24} onClick={() => setMobileMenuOpen(false)} className="close-icon" />
          </div>
          <div className="mobile-menu-items">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path} className="navbar-link" onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className='mobile-login-signup'>
            <span className='login-button'>Login</span>
            <span className='signUp-button'>Sign Up</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
