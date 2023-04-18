import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Main = () => {
    return (
        <div className=''>
            <Header/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Main;