import React from 'react';
import Nav from '../Common/Nav/Nav';
import Footer from '../Common/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Mainlayouts = () => {
    return (
        <div>
           <div>
            <Nav></Nav>
            </div> 
           <div>
            <Outlet></Outlet>
            </div> 
           <div>
            <Footer></Footer>
            </div> 
        </div>
    );
};

export default Mainlayouts;