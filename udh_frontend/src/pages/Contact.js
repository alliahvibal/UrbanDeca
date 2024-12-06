import React, { useEffect, useState } from 'react';
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

const Contact = () => {
  return (
    <React.Fragment>
    <Navbar /> {/* Use the Navbar component */}
      <main className="page">
        <section className="py-4 py-xl-5">
          <div className="container">
            <div className="row">
              <div className="col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.1502969872504!2d121.09942861095024!3d14.590510277264208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c70cbe380fb9%3A0x98033d983d90daf9!2sUrban%20Deca%20Homes%20Ortigas%20Pasig!5e0!3m2!1sen!2sph!4v1690461782745!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="slide-in-from-right">
                  <form className="p-3 p-xl-4" method="post">
                    <h4>Contact us</h4>
                    <p className="text-muted">
                      Eros ligula lobortis elementum amet commodo ac nibh ornare,
                      eu lobortis.
                    </p>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="6"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-orange" type="button">
                        Send
                      </button>
                    </div>
                  </form>
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
            <a href="#">
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

export default Contact;
