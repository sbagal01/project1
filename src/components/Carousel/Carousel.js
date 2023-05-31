import React from 'react'
import img_2 from './img_2.jpg';
export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" style={{height:"400px"}}>
      <img src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406__340.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" style={{height:"400px"}}>
      <img src="images/img_1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" style={{height:"400px"}}>
      <img src={img_2} className="d-block w-100" alt="..." />
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
    </div>
  )
}
