import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Products from '../Products/Products/Products';
import Review from '../Review/Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Features></Features>
            <Review></Review>
        </div>
    );
};

export default Home;