import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Steps from '../components/Steps/Steps';
import PostJobBanner from '../components/PostJobBanner/PostJobBanner';
import PopularTrades from '../components/PopularTrades/PopularTrades';
import TalkToUs from '../components/TalkToUs/TalkToUs';
import CareFullySelectedJob from '../components/CareFullySelectedJob/CareFullySelectedJob';
import SophisticatedMatching from '../components/SophisticatedMatching/SophisticatedMatching';
import Accountability from '../components/Accountability/Accountability';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import HowTradeWorks from '../components/HowTradeWorks/HowTradeWorks';
import StartWinning from '../components/StartWinning/StartWinning';
import EstablishTrust from '../components/EstablishTrust/EstablishTrust';
import ShowCaseWork from '../components/ShowCaseWork/ShowCaseWork';
import DreamCustomer from '../components/DreamCustomer/DreamCustomer';
import OurMission from '../components/OurMission/OurMission';
import FindSuccessBanner from '../components/FindSuccessBanner/FindSuccessBanner';

const Main = () => {
    return (
        <div className='max-w-screen mx-auto'>
            {/* how it works user */}
            <Banner></Banner>
            <Steps></Steps>
            <div className='bg-[#F3F7F2]'>
            <CareFullySelectedJob></CareFullySelectedJob> 
            <SophisticatedMatching></SophisticatedMatching>
            <Accountability></Accountability>
            </div>
            <PostJobBanner></PostJobBanner>
            <PopularTrades></PopularTrades>
            <TalkToUs></TalkToUs>

            {/* how it works, contractor */}
            <HowItWorks></HowItWorks>
            <HowTradeWorks></HowTradeWorks>
            <StartWinning></StartWinning>
            <EstablishTrust></EstablishTrust>
            <ShowCaseWork></ShowCaseWork>
            <DreamCustomer></DreamCustomer>
            <PopularTrades></PopularTrades>
            <TalkToUs></TalkToUs>

            {/* Our mission */}
            <OurMission></OurMission>
            <FindSuccessBanner></FindSuccessBanner>
            <PopularTrades></PopularTrades>
            <TalkToUs></TalkToUs>


        </div>
    );
};

export default Main;