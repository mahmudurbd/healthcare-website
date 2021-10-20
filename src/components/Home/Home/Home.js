import React from 'react';
import Banner from '../Banner/Banner';
import Help from '../Help/Help';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Help></Help>
            <Services></Services>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;