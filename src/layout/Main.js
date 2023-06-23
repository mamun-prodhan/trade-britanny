import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Steps from '../components/Steps/Steps';

const Main = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <Outlet></Outlet>
            <Steps></Steps> 
        </div>
    );
};

export default Main;