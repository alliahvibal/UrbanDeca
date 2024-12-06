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
  const [slideIndex, setSlideIndex] = useState(1);

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("carousel-item");
    const dots = document
      .getElementsByClassName("carousel-indicators")[0]
      .getElementsByTagName("li");
    let newSlideIndex = n;

    if (n > slides.length) newSlideIndex = 1;
    if (n < 1) newSlideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    slides[newSlideIndex - 1].classList.add("active");
    dots[newSlideIndex - 1].classList.add("active");
    setSlideIndex(newSlideIndex);
  };

  const plusSlides = (n) => showSlides(slideIndex + n);
  const currentSlide = (n) => showSlides(n);

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
              <div
                id="myCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <ol className="carousel-indicators">
                  {[...Array(6)].map((_, index) => (
                    <li
                      key={index}
                      data-bs-target="#myCarousel"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      onClick={() => currentSlide(index + 1)}
                    ></li>
                  ))}
                </ol>
                <div className="carousel-inner">
                  {[
                    "perspective3.jpg",
                    "perspective1.jpg",
                    "perspective2.jpg",
                    "perspective4.jpg",
                    "perspective6.jpg",
                    "perspective7.jpg",
                  ].map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img
                        src={`../assets/image/${image}`}
                        className="d-block w-100"
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#myCarousel"
                  role="button"
                  onClick={() => plusSlides(-1)}
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#myCarousel"
                  role="button"
                  onClick={() => plusSlides(1)}
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
              <div className="container">
                <div className="row align-items-end no-gutters">
                  {[
                    "perspective3.jpg",
                    "perspective1.jpg",
                    "perspective2.jpg",
                    "perspective4.jpg",
                    "perspective6.jpg",
                    "perspective7.jpg",
                  ].map((image, index) => (
                    <div key={index} className="col">
                      <img
                        src={`../assets/image/${image}`}
                        style={{ width: "100%" }}
                        onClick={() => currentSlide(index + 1)}
                        alt="perspective"
                      />
                    </div>
                  ))}
                </div>
              </div>
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
                    <span>22-05-2023</span>
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
