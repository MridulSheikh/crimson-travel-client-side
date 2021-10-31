import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './serviceBox.css'
const ServiceBox = () => {
    return (
        <div className="mt-4">
        <Row className="w-100 text-center m-0">
        <Col xs={12} md={4} className="text-center p-md-5 py-5 odd">
        <i className="fas fa-plane fs-1 text-warning"></i>
        <h3 className="mt-3">Trip Insurance</h3>
        <p className="mt-3">Trip cancellation and interruption insurance for U.S. residents. Cover your trip cost, medical expenses, and belongings for domestic and international trips.</p>
        </Col>
        <Col xs={12} md={4} className="text-center p-md-5 py-5 even " >
        <i className="fas fa-plus-circle fs-1 text-warning"></i>
        <h3 className="mt-3">travel Medical Insurance</h3>
        <p className="mt-3">Trip cancellation and interruption insurance for U.S. residents. Cover your trip cost, medical expenses, and belongings for domestic and international trips.</p>
        </Col>
        <Col xs={12} md={4} className="text-center p-md-5 py-5  odd" >
        <i className="fas fa-book-medical fs-1 text-warning"></i>
        <h3 className="mt-3">Student Travel Insurance</h3>
        <p className="mt-3">Trip cancellation and interruption insurance for U.S. residents. Cover your trip cost, medical expenses, and belongings for domestic and international trips.</p>
        </Col>
        <Col xs={12} md={4} className="text-center p-md-5 py-5 even" >
        <i className="fas fa-redo-alt fs-1 text-warning"></i>
        <h3 className="mt-3">Annual Travel Insurance</h3>
        <p className="mt-3">Trip cancellation and interruption insurance for U.S. residents. Cover your trip cost, medical expenses, and belongings for domestic and international trips.</p>
        </Col>
        <Col xs={12} md={4} className="text-center p-md-5 py-5 odd" >
        <i className="fas fa-atlas fs-1 text-warning"></i>
        <h3 className="mt-3">Visitor Insurance</h3>
        <p className="mt-3">Trip cancellation and interruption insurance for U.S. residents. Cover your trip cost, medical expenses, and belongings for domestic and international trips.</p>
        </Col>
        <Col xs={12} md={4} className="text-center p-md-5 py-5 even" >
        <i className="fas fa-users fs-1 text-warning"></i>
        <h3 className="mt-3">Group Travel Insurance</h3>
        <p className="mt-3">Trip cancellation and interruption insurance for U.S. residents. Cover your trip cost, medical expenses, and belongings for domestic and international trips.</p>
        </Col>
      </Row>
        </div>
    );
};

export default ServiceBox;