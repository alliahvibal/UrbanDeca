import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/image/logo.png';
import '../assets/bootstrap/css/bootstrap.min.css?h=3d143f778ec749519f74424dd4367985';
import '../assets/css/Hero-Carousel-images.css?h=4f3cfa46e40e236365345fc77963f4b8';
import '../assets/css/pikaday.min.css?h=b5d8dc0127f2418450262e222d5852b3';
import '../assets/css/Team-icons.css?h=befd8a398792e305b7ffd4a176b5b585';
import 'pikaday/css/pikaday.css';
import 'baguettebox.js/dist/baguetteBox.min.css';
import '../assets/css/Team-icons.css';

function Navbar() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient" style={{ height: '100px' }}>
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img className="logo me-2" src={logo} width="50px" alt="Logo" />
            Urban Deca Homes
          </Link>
  
          {/* Hamburger button */}
          <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;