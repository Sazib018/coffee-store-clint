import React from 'react';
import Banner from './Banner/Banner';
import BannerFeature from './Banner/BannerFeature';
import Instagram from './Instagram/Instagram';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <BannerFeature></BannerFeature>
            </div>
            <div>
                <Instagram></Instagram>
            </div>
        </div>
    );
};

export default Home;