import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/image/logo.png';
import '../assets/bootstrap/css/bootstrap.min.css?h=3d143f778ec749519f74424dd4367985';
import '../assets/css/Hero-Carousel-images.css?h=4f3cfa46e40e236365345fc77963f4b8';
import '../assets/css/pikaday.min.css?h=b5d8dc0127f2418450262e222d5852b3';
import '../assets/css/Team-icons.css?h=befd8a398792e305b7ffd4a176b5b585';

function Navbar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient" style={{ height: '100px' }}>
            <div className="container">
                <img className="navbar-brand logo" src={logo} width="50px" alt="Logo" />
                <Link className="navbar-brand logo" to="/">Urban Deca Homes</Link>
                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav">
                    <span className="visually-hidden">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/aboutus">About Us</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/team">Team</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
