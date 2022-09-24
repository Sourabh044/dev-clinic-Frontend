import './css/Navbar.css';
import React from 'react';

// import carimage1 from './images/slider2.jpg';
// import carimage2 from './images/slider1.jpg';
// import carimage3 from './images/slider3.jpg';

function NavbarTwo() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#">Dev Clinic</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Home</a> */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">About</a> */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Services</a> */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Contact Us</a> */}
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavbarTwo
