import React from 'react';
import About from '../../commponent/about/About';
import Banner from '../../commponent/Banner/Banner';
import Discount from '../../commponent/discount/Discount';
import ServiceBox from '../../commponent/serviceBox/ServiceBox';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Discount></Discount>
            <ServiceBox></ServiceBox>
        </div>
    );
};

export default Home;