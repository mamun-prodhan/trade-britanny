import React from 'react';
import image1 from '../../assets/Draw SVG/draw-06.svg'

const SophisticatedMatching = () => {
    return (
        <div className='md:flex lg:flex md:flex-row-reverse lg:flex-row-reverse justify-center items-center p-6 lg:p-10 mb-16 lg:mb-24 bg-[#F3F7F2]'>
            <div className='w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0 lg:mb-0 text-center'>
                <img className='h-60 float-right' src={image1} alt='draw'></img>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/2 md:mr-6 lg:mr-6'>
                <h2 className='text-3xl md:text-3xl lg:text-5xl text-semibold text-start mb-6'>Sophisticated matching</h2>
                <p className='text-start'>After you post a job, our matching system identifies and alerts relevant tradespeople, who can then express interest in your job. You can review interested tradespeople by reading their profiles, work history and feedback. Contact details are exchanged only when you say so.</p>
            </div>
        </div>
    );
};

export default SophisticatedMatching;