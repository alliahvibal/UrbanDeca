import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import $ from "jquery";
import Pikaday from "pikaday";
import baguetteBox from "baguettebox.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "pikaday/css/pikaday.css";
import "baguettebox.js/dist/baguetteBox.min.css";
import "../assets/css/Hero-Carousel-images.css";
import "../assets/css/Team-icons.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <Navbar /> {/* Use the Navbar component */}
      <main className="page project-page">
        <section className="portfolio-block project animated-section">
          <div className="container">
            <div className="heading mb-5">
              <h2>About Us</h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="mb-5"></div>
                <div className="col-12 col-md-8 info">
                  <h3>Description</h3>
                  <p>
                    Nam a ultrices mauris. Nam efficitur, lorem a vehicula
                    interdum, ligula velit euismod lorem, vitae vehicula ligula
                    tortor eu leo. Maecenas porttitor massa ut vestibulum
                    euismod. Aliquam eget mi aliquam.
                  </p>
                  <p>
                    Lorem ipsum dapibus dolor non, malesuada mauris. Aliquam
                    eleifend mauris non odio mattis auctor. Aenean sit amet
                    elementum tellus, a facilisis ligula. Pellentesque ac
                    vehicula mauris.
                  </p>
                </div>
                <div className="col-12 col-md-3 offset-md-1 meta">
                  <div className="tags">
                    <span className="meta-heading">Author</span>
                    <a href="#">Alliah Vibal</a>
                    <a href="#">Final Project</a>
                    <span className="meta-heading">Date</span>
                    <span>12-06-2024</span>
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
            <a href="">About Us</a>
            <a href="">Contact</a>
            <a href="">Projects</a>
          </div>
          <div className="social-icons">
            <a href="">
              <i className="icon ion-social-facebook"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-instagram-outline"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default AboutUs;
