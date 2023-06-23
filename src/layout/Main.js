import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Steps from '../components/Steps/Steps';
import PostJobBanner from '../components/PostJobBanner/PostJobBanner';
import PopularTrades from '../components/PopularTrades/PopularTrades';
import TalkToUs from '../components/TalkToUs/TalkToUs';

const Main = () => {
    return (
        <div className='max-w-screen mx-auto'>
            <Banner></Banner>
            <Outlet></Outlet>
            <Steps></Steps> 
            <PostJobBanner></PostJobBanner>
            <PopularTrades></PopularTrades>
            <TalkToUs></TalkToUs>
        </div>
    );
};

export default Main;