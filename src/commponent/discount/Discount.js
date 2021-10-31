import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Discount = () => {
    return (
        <div className="mt-3">
        <Row className="mx-0">
        <Col sm={6} className="d-flex align-items-center justify-content-center p-0">
        <div className="ms-3">
        <h2>Services and Discounts</h2>
        <p>Seven Corners has partnered with industry-leading companies focused on providing excellence in travel-related services.</p>
        <p className="mt-4">You can receive a variety of benefits and services to help make your life and travels a little easier. The best part is, you don’t need to be a customer to utilize them.</p>
        </div>
        </Col>
        <Col sm={6}  className="d-flex align-items-center justify-content-center p-0">
        <img src="https://sampleletters.website/wp-content/uploads/2015/02/discount-offer.jpg" alt="" width="100%" height="100%" />
        </Col>
      </Row>
        </div>
    );
};

export default Discount;