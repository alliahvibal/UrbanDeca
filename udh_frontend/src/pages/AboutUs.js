import React, { useEffect, useState, lazy, Suspense } from "react";
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

const LazyImage = ({ src, alt, ...props }) => (
  <img src={src} alt={alt} loading="lazy" {...props} />
);

const AboutUs = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>
      <main className="page project-page">
        <section className="portfolio-block project animated-section">
          <div className="container">
            <div className="heading mb-5">
              <h2>About Us</h2>
            </div>
            <div className="container">
            <div className="row">
              <LazyImage
                src={require("../assets/image/deca-titles.png")}
                alt="DecaHomes 1"
                className="d-block w-100"
                style={{
                height: "700px",
                width: "100%",
                objectFit: "cover",
                }}
              />
              </div>
            </div>

            <h1
              style={{
                textAlign: "center",
                fontSize: "36px",
                fontWeight: "bold",
                color: "#333",
                marginTop: "40px",
              }}
            >
              WHY CHOOSE US?
            </h1>
            <br></br>
            <br></br>
            <div className="container">
              <div className="row">
                {/* Card 1 */}
                <div className="col-12 col-md-4 mb-4">
                  <div className="card h-100">
                    <img
                      src={require("../assets/image/key.webp")}
                      className="card-img-top"
                      alt="Urban Deca Homes"
                      loading="lazy"
                      style={{
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">QUALITY</h5>
                      <p className="card-text">
                        Each unit are fully finished and equipped align to the
                        basic needs of every Filipino families
                      </p>
                      <p></p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-12 col-md-4 mb-4">
                  <div className="card h-100">
                    <img
                      src={require("../assets/image/piggy.webp")}
                      className="card-img-top"
                      alt="Urban Deca Homes"
                      loading="lazy"
                      style={{
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">AFFORDABILITY</h5>
                      <p className="card-text">
                        We offer low to zero down payment in multiple payment
                        terms such as In-House, Bank and PagIbig Financing
                      </p>
                      <p></p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-12 col-md-4 mb-4">
                  <div className="card h-100">
                    <img
                      src={require("../assets/image/city.webp")}
                      className="card-img-top"
                      alt="Urban Deca Homes"
                      loading="lazy"
                      style={{
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">ACCESSIBILITY</h5>
                      <p className="card-text">
                        We are located in every part of Metro Manila with easy
                        access to any mode of transportation
                      </p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-8 info">
                  <h3
                    style={{
                      fontSize: "36px",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    URBAN DECA HOMES
                  </h3>
                  <p>
                    Embrace a world’s of living of much less but good life,
                    Urban Deca Homes, the rising underserved with a community of
                    authentic and rich Filipino Culture. Discover true and
                    heartwarming people of the country. Urban Deca Homes
                    possibly the most practical choice community with its
                    practical top security features, lot of amenities and
                    facilities, lowest equity option, low monthly amortization
                    and supported by government housing finance institution
                    (Pag-ibig Financing). No compromises.
                  </p>
                  <p>
                    So enter, experience and embrace the best of both worlds
                    only in Urban Deca Homes!
                  </p>
                </div>

                <div className="col-12 col-md-3 offset-md-1 meta">
                  <div className="tags">
                    <span className="meta-heading">Final Project</span>
                    <span className="meta-heading">Author</span>
                    <a href="#">Alliah Vibal</a>
                    <a href="#">Sharmaine Joy Tagalag</a>
                    <a href="#">Dominique Althea Bonaobra</a>
                    <a href="#">Kate Ann Nicolas</a>
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
