import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import img1 from './../../utilities/hello-lightbulb-yB6WFHbkX40-unsplash.jpg';
import img2 from './../../utilities/savvas-kalimeris-hO3do8FKJkQ-unsplash.jpg';
import img3 from './../../utilities/ari-he-idIUCsynuS4-unsplash.jpg';
import img4 from './../../utilities/jake-melara-Yh6K2eTr_FY-unsplash.jpg';
import './banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      height="550px"
    />
    <Carousel.Caption className="d-flex aling-items-center">
    <div className="banner-content">
    <h3>Cover Your World && Need Help Selecting a Plan?</h3>
    <p className="m-3">In response, we created new plans — Liaison Travel Plus, Liaison Student Plus, Wander Frequent Traveler Plus, and Explore North America Plus — same great travel medical insurance, now with specially designed COVID-19 coverage</p>
    <div className="d-flex aling-items-center justify-content-center">
    <Link to="/login" style={{ textDecoration: 'none' }}>
    <Button variant="danger" className="d-flex aling-items-center"> <i className="fas fa-sign-in-alt me-1 fs-4 text-light"></i> Sinup Now</Button>
    </Link>
    </div>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
      height="550px"
    />

    <Carousel.Caption className="d-flex aling-items-center">
      <div className="banner-content">
      <h3 className="text-warning">Crimson Travel represents the Travel & Tourism sector globally</h3>
      <p className="m-3">As a non-profit membership-based organisation, our members and partners are the core of our organisation and include over 200 CEOs, Chairpersons, and Presidents of the world’s leading Travel & Tourism companies from all geographies and industries. </p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
      height="550px"
    />

    <Carousel.Caption className="d-flex aling-items-center">
    <div className="banner-content">
    <h3 className="text-success">Answer a few questions and we’ll guide you.</h3>
    <p className="m-3">As a non-profit membership-based organisation, our members and partners are the core of our organisation and include over 200 CEOs, Chairpersons, and Presidents of the world’s leading Travel & Tourism companies from all geographies and industries. </p>
    <div className="d-flex aling-items-center justify-content-center">
    <Button variant="warning" className="d-flex aling-items-center fw-bold text-light"> Explore Now <i className="fas fa-location-arrow ms-2 fs-7 text-light"></i></Button>
    </div>
    </div>
  </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
    className="d-block w-100"
    src={img4}
    alt="Third slide"
    height="550px"
  />

  <Carousel.Caption className="d-flex aling-items-center">
  <div className="banner-content text-start">
  <h3 className="mb-3 ms-4">I live OUTSIDE the USA, and:</h3>
  <ul>
  <li>I’m traveling to the USA</li>
  <li>My destination is not the USA, but I have a layover in the USA</li>
  <li>I won’t enter the USA any time during my trip</li>
  <li>In the USA</li>
  <li>In the USA and internationally</li>
  <li>Internationally</li>
  </ul>
  </div>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
    );
};

export default Banner;