import React from 'react';
import logo from '../Images/header-logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-md"
        style={{ backgroundColor: '#2C0047', color: 'white' }}
      >
        <div className="container">
          {/* Navbar brand/logo */}
          <Link to={''} className="nav-link" style={{ color: 'white' }}> <img className="img-fluid" src={logo} alt="" /></Link>
           
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {/* Centered navigation links */}
          <div className="navbar-collapse collapse " id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item ms-5">
                <Link to={'home'} className="nav-link" style={{ color: 'white','font-size':'20px' }}>Home</Link>
              </li>
              <li className="nav-item ms-3">
                <Link to={'artist'} className="nav-link" style={{ color: 'white','font-size':'20px' }}>Artist</Link>
              </li>
              <li className="nav-item ms-3">
                <Link to={'about'} className="nav-link" style={{ color: 'white','font-size':'20px' }}>About</Link>
              </li>
              <li className="nav-item ms-3">
                <Link to={'contact'} className="nav-link" style={{ color: 'white','font-size':'20px' }}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
