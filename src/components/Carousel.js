import React from 'react'
import carimage1 from './images/slider2.jpg'
import carimage2 from './images/slider1.jpg'
import carimage3 from './images/slider3.jpg'

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carimage1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='animated bounceInRight'>First slide label</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, ad exercitationem? Minus, cum molestias maxime modi veniam necessitatibus voluptas similique excepturi aliquam assumenda, est vel delectus, facere quasi fuga! Omnis.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={carimage2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='animated bounceInRight'>Second slide label</h5>
        <p className='d-none d-md-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati distinctio eligendi asperiores a maxime est aspernatur molestias tempore rerum. Repudiandae repellendus similique totam beatae, voluptatum soluta. Sit, id iste?</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={carimage3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='animated bounceInRight'>Third slide label</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum magni porro magnam recusandae. Impedit aliquid, exercitationem aspernatur eius repellat labore architecto ratione libero sunt recusandae aliquam laudantium consectetur numquam nostrum.</p>
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
</div>
  )
}

export default Carousel;
