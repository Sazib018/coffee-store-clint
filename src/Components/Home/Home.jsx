import React from 'react';
import Banner from './Banner/Banner';
import BannerFeature from './Banner/BannerFeature';
import Instagram from './Instagram/Instagram';
import Propuler_Product from './Propuler_Product/Propuler_Product';

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
            <Propuler_Product></Propuler_Product>
            </div>
            <div>
                <Instagram></Instagram>
            </div>
        </div>
    );
};

export default Home;