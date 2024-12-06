import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import $ from 'jquery';
import Pikaday from 'pikaday';
import baguetteBox from 'baguettebox.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'pikaday/css/pikaday.css';
import 'baguettebox.js/dist/baguetteBox.min.css';
import '../assets/css/Hero-Carousel-images.css';
import '../assets/css/Team-icons.css';

const Project = () => {
    return (
        <React.Fragment>
            <Navbar /> {/* Use the Navbar component */}
            <main className="page">
                <section className="portfolio-block projects-cards animated-section">
                    <div className="container">
                        <div className="heading mb-5">
                            <h2>PROJECTS</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <div className="card border-0">
                                    <a href="deca-ortigas.html">
                                        <img className="card-img-top scale-on-hover" src={require('../assets/image/ortigas-site-wide.png')} alt="Card Image" height="280px" width="100px" />
                                    </a>
                                    <div className="card-body">
                                        <h6><a href="deca-ortigas.html">Urban Deca Homes Ortigas</a></h6>
                                        <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="card border-0">
                                    <a href="deca-manila.html">
                                        <img className="card-img-top scale-on-hover" src={require('../assets/image/manila-site.webp')} height="280px" width="100px" alt="Card Image" />
                                    </a>
                                    <div className="card-body">
                                        <h6><a href="deca-manila.html">Urban Deca Homes Manila</a></h6>
                                        <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="card border-0">
                                    <a href="deca-litex.html">
                                        <img className="card-img-top scale-on-hover" src={require('../assets/image/litex-site.png')} height="280px" width="100px" alt="Card Image" />
                                    </a>
                                    <div className="card-body">
                                        <h6><a href="deca-litex.html">Urban Deca Homes Commonwealth</a></h6>
                                        <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="card border-0">
                                    <a href="deca-cubao.html">
                                        <img className="card-img-top scale-on-hover" src={require('../assets/image/cubao-site.jpg')} height="280px" width="100px" alt="Card Image" />
                                    </a>
                                    <div className="card-body">
                                        <h6><a href="deca-cubao.html">Deca Tower Cubao</a></h6>
                                        <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="page-footer">
                <div className="container">
                    <div className="links">
                        <a href="about.html">About</a>
                        <a href="contact.html">Contact</a>
                        <a href="projects.html">Projects</a>
                    </div>
                    <div className="social-icons">
                        <a href=""><i className="icon ion-social-facebook"></i></a>
                        <a href="#"><i className="icon ion-social-instagram-outline"></i></a>
                        <a href="#"><i className="icon ion-social-twitter"></i></a>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Project;