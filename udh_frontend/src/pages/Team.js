import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/css/Hero-Carousel-images.css';
import '../assets/css/Team-icons.css';

const Team = () => {
  return (
    <React.Fragment>
      <Navbar /> {/* Use the Navbar component */}
      <main className="page">
        {/* Developer Section */}
        <section className="portfolio-block project">
          <div className="container">
            <div className="animated-section">
              <div className="heading mb-5">
                <h2>The Developer</h2>
              </div>
              <img
                src={require('../assets/image/deca-titles.png')}
                width="100%"
                alt="developer"
              />
            </div>
            <div className="mb-5"></div>
            <p
              className="mb-4 info custom-indent"
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '18px',
                fontWeight: 'bold',
                lineHeight: '1.6',
                color: '#333',
                textAlign: 'justify',
                marginBottom: '20px',
                letterSpacing: '0.5px',
              }}
            >
              Our development team consists of 4th-year Information Systems students from
              New Era University. These students are passionate about creating innovative
              and efficient solutions. With a solid foundation in computer science and
              software engineering, they apply their academic knowledge to real-world
              challenges, ensuring that the application meets the highest standards of
              functionality and user experience.
            </p>
            <p
              className="mb-4 info custom-indent"
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '18px',
                fontWeight: 'bold',
                lineHeight: '1.6',
                color: '#333',
                textAlign: 'justify',
                marginBottom: '20px',
                letterSpacing: '0.5px',
              }}
            >
              The team works collaboratively to design, build, and test new features, as
              well as enhance existing ones. They are focused on delivering a user-friendly,
              fast, and responsive application. Through their coursework and hands-on
              experience, they are developing practical skills in coding, project management,
              and teamwork.
            </p>
            <p
              className="mb-4 info custom-indent"
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '18px',
                fontWeight: 'bold',
                lineHeight: '1.6',
                color: '#333',
                textAlign: 'justify',
                marginBottom: '20px',
                letterSpacing: '0.5px',
              }}
            >
              These students are dedicated to learning and growing in the field of software
              development. They actively seek opportunities to expand their knowledge, attend
              workshops, and stay updated with the latest trends in technology, ensuring that
              the application continues to evolve and improve with time.
            </p>
          </div>
        </section>
   

          {/* Team Section */}
          <div className="container py-4 py-xl-5">
            
          <div style={{
            textAlign: 'center',
            fontSize: '40px',
            fontWeight: 'bold',
            color: '#f1c40f',  // Navbar color
            padding: '20px 0',
          }}>
            Our Team
          </div>

          <br></br>

          <div className="row gy-4 row-cols-2 row-cols-md-4">
          {/* Team Member 1 */}
<div className="col">
  <div className="card border-0 shadow-none">
    <div className="card-body text-center d-flex flex-column align-items-center p-0">
      <img
        className="rounded-circle mb-3 fit-cover"
        width="130"
        height="130"
        src={require('../assets/image/dominique.jpg')}
        alt="Dominique"
      />
      <h5 className="fw-bold text-orange card-title mb-0">
        <strong>Dominique Althea Bonaobra</strong>
      </h5>
      <p className="text-muted card-text mb-2">Web Developer</p>
      <ul className="list-inline fs-6 text-muted w-100 mb-0">
        {/* Facebook Icon */}
        <li className="list-inline-item text-center">
          <a
            href="https://www.facebook.com/dominique.althea"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-facebook"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
            </svg>
          </a>
        </li>
        {/* Twitter Icon */}
        <li className="list-inline-item text-center">
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-twitter"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1-.78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
            </svg>
          </a>
        </li>
        {/* Instagram Icon */}
        <li className="list-inline-item text-center">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-instagram"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42C12.731.222 12.15.088 11.298.048 10.445.01 10.173 0 8 0z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

<div className="col">
  <div className="card border-0 shadow-none">
    <div className="card-body text-center d-flex flex-column align-items-center p-0">
      <img
        className="rounded-circle mb-3 fit-cover"
        width="130"
        height="130"
        src={require('../assets/image/kate.jpg')}
        alt="Dominique"
      />
      <h5 className="fw-bold text-orange card-title mb-0">
        <strong>Kate Ann Nicolas</strong>
      </h5>
      <p className="text-muted card-text mb-2">Web Developer</p>
      <ul className="list-inline fs-6 text-muted w-100 mb-0">
        {/* Facebook Icon */}
        <li className="list-inline-item text-center">
          <a
            href="https://www.facebook.com/nicolas.kateann"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-facebook"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
            </svg>
          </a>
        </li>
        {/* Twitter Icon */}
        <li className="list-inline-item text-center">
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-twitter"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1-.78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
            </svg>
          </a>
        </li>
        {/* Instagram Icon */}
        <li className="list-inline-item text-center">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-instagram"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42C12.731.222 12.15.088 11.298.048 10.445.01 10.173 0 8 0z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

<div className="col">
  <div className="card border-0 shadow-none">
    <div className="card-body text-center d-flex flex-column align-items-center p-0">
      <img
        className="rounded-circle mb-3 fit-cover"
        width="130"
        height="130"
        src={require('../assets/image/sharm.jpg')}
        alt="Dominique"
      />
      <h5 className="fw-bold text-orange card-title mb-0">
        <strong>Sharmaine Joy Tagalag</strong>
      </h5>
      <p className="text-muted card-text mb-2">Web Developer</p>
      <ul className="list-inline fs-6 text-muted w-100 mb-0">
        {/* Facebook Icon */}
        <li className="list-inline-item text-center">
          <a
            href="https://www.facebook.com/SharmyJ"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-facebook"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
            </svg>
          </a>
        </li>
        {/* Twitter Icon */}
        <li className="list-inline-item text-center">
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-twitter"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1-.78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
            </svg>
          </a>
        </li>
        {/* Instagram Icon */}
        <li className="list-inline-item text-center">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center social-icon" 
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-instagram"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42C12.731.222 12.15.088 11.298.048 10.445.01 10.173 0 8 0z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

<div className="col">
  <div className="card border-0 shadow-none">
    <div className="card-body text-center d-flex flex-column align-items-center p-0">
      <img
        className="rounded-circle mb-3 fit-cover"
        width="130"
        height="130"
        src={require('../assets/image/amaya.jpg')}
        alt="Dominique"
      />
      <h5 className="fw-bold text-orange card-title mb-0">
        <strong>Alliah Mae Vibal</strong>
      </h5>
      <p className="text-muted card-text mb-2">Web Developer</p>
      <ul className="list-inline fs-6 text-muted w-100 mb-0">
        {/* Facebook Icon */}
        <li className="list-inline-item text-center">
          <a
            href="https://www.facebook.com/amayavibal02"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-facebook"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
            </svg>
          </a>
        </li>
        {/* Twitter Icon */}
        <li className="list-inline-item text-center">
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-twitter"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1-.78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
            </svg>
          </a>
        </li>
        {/* Instagram Icon */}
        <li className="list-inline-item text-center">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-instagram"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42C12.731.222 12.15.088 11.298.048 10.445.01 10.173 0 8 0z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Team;
