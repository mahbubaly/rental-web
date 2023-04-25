import React, { useState } from 'react';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';

const Main = () => {

    const navigation = useNavigation();
    return (
        <div className='container mx-auto'>
            <Header />
            <div className='mx-auto flex justify-center  items-center bg-white'>{
                navigation.state === "loading" && "loading..."
            } </div>
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;