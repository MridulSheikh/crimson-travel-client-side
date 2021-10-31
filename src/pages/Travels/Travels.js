import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Travel.css'
const Travels = () => {
    return (
        <div className="travel">
        <Row>
        <Col xs={12} md={6}>
        <div className="d-flex aling-items-center justify-content-center">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/travel2-1585330768.jpg?resize=480:*" alt="" width="80%" />
        </div>
        </Col>
        <Col xs={12} md={6}>
        <div className="d-flex aling-items-center justify-content-center w-100">
        <div className="mt-3">
        <h1 className="mb-3">Traveling with Crimson Travel</h1>
        <p>Service animals are accepted in cabin for qualified individuals with a disability. A service animal is a dog, regardless of breed or type, that is</p>
        <ul>
        <li>over the age of 4 months</li>
        <li>ondividually trained to do work or perform tasks for the benefit of a qualified individual with a disability, including a physical, sensory, psychiatric, intellectual or other mental disability</li>
        </ul>
        <p>If you’re traveling with a service dog, the dog should sit in the floor space in front of your assigned seat and cannot extend into the aisles or the foot space of adjacent travelers. You may use an approved in-cabin kennel for smaller dogs provided its use meets stowage requirements. Exit row seating is prohibited.</p>
        </div>
        </div>
        </Col>
      </Row>
        </div>
    );
};

export default Travels;