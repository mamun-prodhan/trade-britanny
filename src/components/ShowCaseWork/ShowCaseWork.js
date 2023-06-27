import React from 'react';
import image1 from '../../assets/Draw SVG/draw-04.svg'

const ShowCaseWork = () => {
    return (
        <div className='md:flex lg:flex justify-center items-center p-6 lg:p-10 mb-16 lg:mb-24 bg-[#F3F7F2]'>
        <div className='w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0 lg:mb-0 md:mr-6 lg:mr-6'>
            <img className='h-60' src={image1} alt='draw'></img>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/2'>
            <h2 className='text-3xl md:text-3xl lg:text-5xl text-semibold text-start mb-6'>Showcase Your Excellent Work</h2>
            <p className='text-start'>Your exceptional craftsmanship deserves recognition. With Findatrade Brittany, you can showcase your excellent work to a wide audience of discerning customers. Our premium platform allows you to highlight your skills, display stunning project galleries, and share before-and-after photos that leave a lasting impression.</p>
        </div>
    </div>
    );
};

export default ShowCaseWork;