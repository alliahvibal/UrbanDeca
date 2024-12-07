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

// Images
import unit1 from '../assets/image/sample-unit1.jpg';
import unit2 from '../assets/image/sample-unit2.jpg';
import unit3 from '../assets/image/sample-unit3.jpg';

const styles = {
    zoomHover: {
        transition: 'transform 0.2s',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    }
};

const Home = () => {
    useEffect(() => {
        // Initialize lightbox
        try {
            baguetteBox.run('.gallery', {
                animation: 'slideIn'
            });
        } catch (error) {
            console.error('Lightbox initialization error:', error);
        }

        // jQuery counter animation
        try {
            $('.counter').each(function() {
                const $this = $(this);
                const countTo = $this.find('.count-number').attr('data-to');
                
                $({ countNum: 0 }).animate({
                    countNum: parseInt(countTo) || 0
                }, {
                    duration: 800,
                    easing: 'linear',
                    step: function() {
                        $this.find('.count-number').text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.find('.count-number').text(this.countNum);
                    }
                });
            });
        } catch (error) {
            console.error('Counter animation error:', error);
        }

        // Cleanup
        return () => {
            try {
                baguetteBox.destroy();
            } catch (error) {
                console.error('Lightbox cleanup error:', error);
            }
        };
        
    }, []);
    
    return (
        <React.Fragment>
            <Navbar /> {/* Navbar component */}
            <main className="page landing-page">
  <div className="carousel slide" data-bs-ride="carousel" id="carousel-2" data-bs-interval="3000" style={{ height: '600px' }}>
    <div className="carousel-inner h-100">
      <div className="carousel-item active h-100">
        <img 
          className="w-100 d-block position-absolute h-100 fit-cover"
          src={require('../assets/image/slide-img1.jpg')} 
          alt="Slide Image" 
          style={{ zIndex: -1 }} 
        />
        <div className="container d-flex flex-column justify-content-center h-100">
          <div className="row animated-section">
            <div className="text-center align-items-center">
              <h1 
                className="text-uppercase text-light fw-bold custom-shadow"
                style={{ fontSize: '3rem', paddingTop: '250px' }}
              >
                Urban Deca Homes
              </h1>
              <p className="my-3 text-light">
                Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum. Donec ad fusce augue interdum.
              </p>
              <a 
                className="btn btn-orange btn-lg me-2"
                role="button" 
                href="contact.html"
              >
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item h-100">
        <img 
          className="w-100 d-block position-absolute h-100 fit-cover"
          src={require('../assets/image/slide-img2.jpg')} 
          alt="Slide Image"
          style={{ zIndex: -1 }}
        />
      </div>
      <div className="carousel-item h-100">
        <img 
          className="w-100 d-block position-absolute h-100 fit-cover"
          src={require('../assets/image/ortigas-site.jpg')} 
          alt="Slide Image"
          style={{ zIndex: -1 }}
        />
      </div>
    </div>
    <div>
      <a 
        className="carousel-control-prev"
        href="#carousel-2" 
        role="button" 
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a 
        className="carousel-control-next"
        href="#carousel-2" 
        role="button" 
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
    <ol className="carousel-indicators">
      <li data-bs-target="#carousel-2" data-bs-slide-to="0" className="active"></li>
      <li data-bs-target="#carousel-2" data-bs-slide-to="1"></li>
      <li data-bs-target="#carousel-2" data-bs-slide-to="2"></li>
    </ol>
  </div>
  <section className="portfolio-block block-intro">
    <div className="container">
      <div 
        className=""
        style={{ backgroundImage: `url('../assets/image/logo-black.png')`, height: '70px', width: '70px' }}
      ></div>
      <div className="about-me">
        <p className="">
          Lorem <strong>Team Byron</strong> ipsum dolor sit amet, consectetur adipisicing elit. Doloribus cumque ipsum consequuntur beatae architecto recusandae!
        </p>
      </div>
    </div>
  </section>
  <section className="portfolio-block photography">
  <div className="container">
    <div className="row g-0">
      {[unit1, unit2, unit3].map((image, index) => (
        <div key={index} className="col-md-6 col-lg-4 item">
          <div className="image-container" style={styles.zoomHover}>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img 
                className="img-fluid"
                src={image}
                alt={`Sample Unit ${index + 1}`}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<div className="mb-5"></div>

<section className="portfolio-block">
  <div className="container">
    <div className="row text-center">
      <h2 className="fw-bold mb-3" style={{ fontSize: '1.5rem' }}>
        Why Urban Deca Homes?
      </h2>
      <hr />
    </div>
    <div className="row text-center">
      <ul className="list-group info" style={{ fontSize: '1rem' }}>
        <li className="list-group-item border-0">
          <span>Lifetime/ Perpetual Ownership</span>
        </li>
        <li className="list-group-item border-0">
          <span>Exclusive Elevator Key Card Access</span>
        </li>
        <li className="list-group-item border-0">
          <span>Security Guards roving 24/7.</span>
        </li>
        <li className="list-group-item border-0">
          <span>Free Home Loan Assistance</span>
        </li>
        <li className="list-group-item border-0">
          <span>Flexible Payment Scheme</span>
        </li>
      </ul>
    </div>
  </div>
</section>

<section className="py-4 py-xl-5 text-white text-center">
  <div
    className="counter-bg"
    style={{
      backgroundImage: `url(${require('../assets/image/perspective6.jpg')})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '100%',
      width: '100%',
      backgroundAttachment: 'fixed',
      backgroundBlendMode: 'overlay',
      backgroundColor: 'rgba(54, 54, 54, 0.89)',
      paddingTop: '20px',
    }}
  >
    <div className="pb-2 pb-lg-1">
      <h2 className="fw-bold mb-2">
        NO. 1 MASS HOUSING DEVELOPER IN THE PHILIPPINES
      </h2>
    </div>
    <div className="row row-cols-2 row-cols-md-4">
      <div className="col">
        <div className="p-3">
          <div className="counter">
            <i className="fa fa-code fa-2x"></i>
            <h4
              className="timer display-5 fw-bold text-white mb-0 count-number"
              data-to="58"
              data-speed="800"
            ></h4>
            <p className="mb-0">Completed Projects</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="p-3">
          <div className="counter">
            <i className="fa fa-code fa-2x"></i>
            <h4
              className="timer display-5 fw-bold text-white mb-0 count-number"
              data-to="20"
              data-speed="800"
            ></h4>
            <p className="mb-0">Ongoing Projects</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="p-3">
          <div className="counter">
            <i className="fa fa-code fa-2x"></i>
            <h4
              className="timer display-5 fw-bold text-white mb-0 count-number"
              data-to="17"
              data-speed="800"
            ></h4>
            <p className="mb-0">Years of Corporate Existence</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="p-3">
          <div className="counter">
            <i className="fa fa-code fa-2x"></i>
            <h4
              className="timer display-5 fw-bold text-white mb-0 count-number"
              data-to="84951"
              data-speed="500"
            ></h4>
            <p className="mb-0">Housing Units Sold</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="portfolio-block">
  <div className="container">
    <div className="heading">
      <h2>Condo Features</h2>
    </div>
    <div className="row">
      {/* Design Feature */}
      <div className="col-md-4 slide-in-from-right">
        <div className="card special-skill-item border-0">
          <div className="card-header bg-transparent border-0">
            <i className="icon ion-ios-star-outline pop-icon"></i>
          </div>
          <div className="card-body">
            <h3 className="card-title">Design</h3>
            <p className="card-text">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
            </p>
          </div>
        </div>
      </div>
      
      {/* Affordability Feature */}
      <div className="col-md-4 slide-in-from-right">
        <div className="card special-skill-item border-0">
          <div className="card-header bg-transparent border-0">
            <i className="icon ion-ios-lightbulb-outline bell-icon"></i>
          </div>
          <div className="card-body">
            <h3 className="card-title">Affordability</h3>
            <p className="card-text">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
            </p>
          </div>
        </div>
      </div>

      {/* Quality Feature */}
      <div className="col-md-4 slide-in-from-left">
        <div className="card special-skill-item border-0">
          <div className="card-header bg-transparent border-0">
            <i className="icon ion-ios-gear-outline rotate-icon"></i>
          </div>
          <div className="card-body">
            <h3 className="card-title">Quality</h3>
            <p className="card-text">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</main>
<section className="portfolio-block website gradient">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-12 col-lg-5 offset-lg-1 text">
        <h3>Urban Deca Homes</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efr nunc, vivamus vel accumsan dui. Quisque ac dolor cursus, volutpat nisl vel, porttitor eros.
        </p>
      </div>
      <div className="col-md-12 col-lg-5">
        <img src={require('../assets/image/8990-logo.png')} height="250px" alt="8990_logo" />
      </div>
    </div>
  </div>
</section>

<footer className="page-footer">
  <div className="container">
    <div className="links">
            <a href="">About Us</a>
            <a href="">Contact</a>
            <a href="">Projects</a>
    </div>
    <div className="social-icons">
      <a href="#"><i className="icon ion-social-facebook"></i></a>
      <a href="#"><i className="icon ion-social-instagram-outline"></i></a>
      <a href="#"><i className="icon ion-social-twitter"></i></a>
    </div>
  </div>
</footer>
</React.Fragment>
    );
}

export default Home;
