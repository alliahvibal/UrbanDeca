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
                {/* Carousel Section */}
                <div id="carouselExampleControls" className="carousel slide mb-5" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img
                        src="https://img1.wsimg.com/isteam/ip/20c5c599-70b5-4a1a-b07d-d3315230c84a/blob-01f1c29.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:632"
                        className="d-block w-100"
                        alt="DecaHomes 1"
                        style={{
                          height: "700px",
                          width: "200px",
                          objectFit: "contain", // Ensures the image fits within the carousel without distortion
                        }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://pinoydeal.ph/oc-content/uploads/920/172413_original.jpg"
                        className="d-block w-100"
                        alt="DecaHomes 2"
                        style={{
                          height: "700px",
                          width: "200px",
                          objectFit: "contain", // Ensures the image fits within the carousel without distortion
                        }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://img1.wsimg.com/isteam/ip/20c5c599-70b5-4a1a-b07d-d3315230c84a/1.png/:/cr=t:12.41%25,l:0%25,w:100%25,h:75.19%25/rs=w:600,h:451,cg:true"
                        className="d-block w-100"
                        alt="DecaHomes 3"
                        style={{
                          height: "700px",
                          width: "200px",
                          objectFit: "contain", // Ensures the image fits within the carousel without distortion
                        }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/filipinohomes/developers3/331%208990%20Housing%20Development%20Corp/Urban%20Deca%20Homes%20Tipolo,tisa%20/gallery/studio%20/220466553.unnamed.jpg"
                        className="d-block w-100"
                        alt="DecaHomes 4"
                        style={{
                          height: "700px",
                          width: "200px",
                          objectFit: "contain", // Ensures the image fits within the carousel without distortion
                        }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://th.bing.com/th/id/OIP.ncBrHmUx09oEeond0w02iAHaEM?rs=1&pid=ImgDetMain"
                        className="d-block w-100"
                        alt="DecaHomes 5"
                        style={{
                          height: "700px",
                          width: "200px",
                          objectFit: "contain", // Ensures the image fits within the carousel without distortion
                        }}
                      />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

                <br>
                </br>
                <br>
                </br>

                {/* Description Section */}
                <div className="col-12 col-md-8 info">
                  <h3>URBAN DECA HOMES</h3>
                  <p>
                  
                  Embrace a world’s of living of much less but good life, Urban Deca Homes, the rising underserved with a community of authentic and rich Filipino Culture. Discover true and heartwarming people of the country. 
                  Urban Deca Homes possibly the most practical choice community with its practical top security features, lot of amenities and facilities, lowest equity option, low monthly amortization and supported by government housing finance institution (Pag-ibig Financing).
                  No compromises.                  
                  </p>
                  <p>
                  So enter, experience and embrace the best of both worlds only in Urban Deca Homes! 
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
                <br>
                </br>
                <br>
                </br>
                <hr/>
                <br>
                </br>
                <br>
                </br>
                <div className="container">
                    <div className="row">
                      {/* Card 1 */}
                      <div className="col-12 col-md-4 mb-4">
                        <div className="card h-100">
                          <img
                            src="https://img1.wsimg.com/isteam/ip/20c5c599-70b5-4a1a-b07d-d3315230c84a/pexels-rdne-stock-project-8293778.jpg/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365"
                            className="card-img-top"
                            alt="Urban Deca Homes"
                            style={{
                              height: "250px", // Set a fixed height for the image
                              objectFit: "cover", // Ensure the image covers the area without distortion
                            }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">QUALITY</h5>
                            <p className="card-text">
                            Each unit are fully finished and equipped align to the basic needs of every Filipino families
                            </p>
                            <p>
                              
                            </p>
                          </div>
                        </div>
                      </div>



                      {/* Card 2 */}
                      <div className="col-12 col-md-4 mb-4">
                        <div className="card h-100">
                          <img
                            src="https://img1.wsimg.com/isteam/ip/20c5c599-70b5-4a1a-b07d-d3315230c84a/pexels-cottonbro-studio-3943723.jpg/:/cr=t:16.68%25,l:0%25,w:100%25,h:66.64%25/rs=w:365,h:365,cg:true"
                            className="card-img-top"
                            alt="Urban Deca Homes"
                            style={{
                              height: "250px", // Set a fixed height for the image
                              objectFit: "cover", // Ensure the image covers the area without distortion
                            }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">AFFORDABILITY</h5>
                            <p className="card-text">
                              We offer low to zero down payment in multiple payment terms such as In-House, Bank and PagIbig Financing
                            </p>
                            <p>
                              
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="col-12 col-md-4 mb-4">
                        <div className="card h-100">
                          <img
                            src="https://img1.wsimg.com/isteam/ip/20c5c599-70b5-4a1a-b07d-d3315230c84a/pexels-meo-fernando-3214989.jpg/:/cr=t:0%25,l:16.74%25,w:66.52%25,h:100%25/rs=w:365,h:365,cg:true"
                            className="card-img-top"
                            alt="Urban Deca Homes"
                            style={{
                              height: "250px", // Set a fixed height for the image
                              objectFit: "cover", // Ensure the image covers the area without distortion
                            }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">ACCESSIBILITY</h5>
                            <p className="card-text">
                            We are located in every part of Metro Manila with easy access to any mode of transportation
                            </p>
                            <p>
                              
                            </p>
                          </div>
                        </div>
                      </div>
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
