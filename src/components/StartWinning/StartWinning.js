import React from 'react';
import image1 from '../../assets/Draw SVG/draw-07.svg';

const StartWinning = () => {
    return (
        <div className='md:flex lg:flex justify-center items-center p-6 lg:p-10 mb-16 lg:mb-24 bg-[#F3F7F2]'>
            <div className='w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0 lg:mb-0 md:mr-6 lg:mr-6'>
                <img className='h-60' src={image1} alt='draw'></img>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/2'>
                <h2 className='text-3xl md:text-3xl lg:text-5xl text-semibold text-start mb-6'>Start winning more work</h2>
                <p className='text-start'>Ready to take your trade business to the next level? Checkatrade Brittany is your gateway to winning more work and standing out as a trusted professional. Join our platform to showcase your excellence, attract quality leads, and increase your chances of securing lucrative projects.</p>
            </div>
        </div>
    );
};

export default StartWinning;