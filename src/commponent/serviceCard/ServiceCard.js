import React from 'react';
import { Card, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
   const {_id,  service, slogun,  duration, img}= props.service
    return (
        <Col className="p-md-2">
      <Card>
        <Card.Img variant="top" src={img} height="300px" />
        <Card.Body>
          <Card.Title>{service}</Card.Title>
          <Card.Text>
            <p><i className="far fa-clock text-danger"></i>{duration}</p>
            <p>{slogun}</p>
           <Link to={`/Details/${_id}`}>
           <Button variant="outline-success w-100">Vew Details</Button>
           </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default ServiceCard;