import React from 'react'
import carimage1 from './images/slider2.jpg'
import carimage2 from './images/slider1.jpg'
import carimage3 from './images/slider3.jpg'

const Carousel = () => {
  return (
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="false">
      <div className="carousel-inner border rounded-4">
        <div className="carousel-item active">
          <img src={carimage1} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5 className="display-1 text-dark"><strong>Good Doctors</strong></h5>
            <p className='lead'>We have a team of the best Doctors</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={carimage2} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5 className="display-1 text-dark"><strong>Good Faculty</strong></h5>
            <p className='lead'>World Class Technology</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={carimage3} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5 className="display-1"><strong>Highly Qualified</strong></h5>
            <p className='lead'>Ours Doctors are very Experienced and they know how to handle it.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    </div>
  )
}

export default Carousel;
