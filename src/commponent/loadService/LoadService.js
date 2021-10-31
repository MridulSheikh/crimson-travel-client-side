import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import ServiceCard from '../serviceCard/ServiceCard';

const LoadService = () => {
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch('https://spooky-wizard-78521.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <Row xs={1} md={3} className="g-0 m-md-3">
            {
                service?.map(service => <ServiceCard
                      key={service._id}
                      service={service}
                    ></ServiceCard>)
            }
        </Row>
    );
};

export default LoadService;