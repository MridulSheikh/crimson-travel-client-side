import React from 'react';
import LoadService from '../loadService/LoadService';
import ServiceBaner from '../serviceBanner/ServiceBaner';

const Service = () => {
    return (
        <div>
        <ServiceBaner />
        <LoadService></LoadService>
        </div>
    );
};

export default Service;