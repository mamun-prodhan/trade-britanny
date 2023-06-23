import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner/Banner';

const Main = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <Outlet></Outlet> 
        </div>
    );
};

export default Main;