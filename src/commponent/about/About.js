import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="mt-5">
        <Row className="mx-0">
        <Col sm={6}>
        <img src="https://www.seekpng.com/png/detail/372-3724683_so-anytime-jimi-talked-about-how-she-was.png" alt="" width="100%" />
        </Col>
        <Col sm={6} className="d-flex align-items-center">
        <div className="mt-3">
        <h2>Travel Insurance for Coronavirus</h2>
        <span className="fw-bold">our plans and services can help with the CDC’s COVID-19 testing requirements</span>
        <p>In response, we created new plans — Liaison Travel Plus, Liaison Student Plus, Wander Frequent Traveler Plus, and Explore North America Plus — same great travel medical insurance, now with specially designed COVID-19 coverage.</p>
        <p>The COVID-19 benefit covers medical expenses for:</p>
        <ul>
        <li>COVID-19 (the disease);</li>
        <li>SARS-Cov-2 (the virus); and</li>
        <li>Any mutation or variation of SARS-CoV-2.</li>
        </ul>
        <p>Each plan also includes Emergency Medical Evacuation and Repatriation, Emergency Medical Reunion, Return of Children, Return of Mortal Remains, and Local Burial or Cremation if you contract COVID-19. Other illnesses and injuries are covered as well.</p>
        </div>
        </Col>
      </Row>
        </div>
    );
};

export default About;