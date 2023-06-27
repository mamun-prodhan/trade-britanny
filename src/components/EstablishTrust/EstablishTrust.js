import React from 'react';
import image1 from '../../assets/Draw SVG/draw-02.svg';

const EstablishTrust = () => {
    return (
        <div className='md:flex lg:flex md:flex-row-reverse lg:flex-row-reverse justify-center items-center p-6 lg:p-10 mb-16 lg:mb-24 bg-[#F3F7F2]'>
        <div className='w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0 lg:mb-0 text-center'>
            <img className='h-60 float-right' src={image1} alt='draw'></img>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/2 md:mr-6 lg:mr-6'>
            <h2 className='text-3xl md:text-3xl lg:text-5xl text-semibold text-start mb-6'>Establish Trust and Gain Credibility</h2>
            <p className='text-start'>We're committed to maintaining our reputation by carefully selecting the most trustworthy and skilled professionals. Join our network today to establish trust and gain credibility with customers who value quality workmanship</p>
        </div>
    </div>
    );
};

export default EstablishTrust;