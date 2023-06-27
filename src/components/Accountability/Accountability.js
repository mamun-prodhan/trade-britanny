import React from 'react';
import image1 from '../../assets/Draw SVG/draw-05.svg'

const Accountability = () => {
    return (
        <div className='md:flex lg:flex justify-center items-center p-6 lg:p-10 mb-16 lg:mb-24 bg-[#F3F7F2]'>
            <div className='w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0 lg:mb-0 md:mr-6 lg:mr-6 text-center'>
                <img className='h-60 float-left' src={image1} alt='draw'></img>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/2'>
                <h2 className='text-3xl md:text-3xl lg:text-5xl text-semibold text-start mb-6'>Accountability through feedback</h2>
                <p className='text-start'>Once a job is in progress, a bit of accountability goes a long way. MyBuilders feedback system ensures that tradespeople are rewarded for good work and held accountable for any problems. Our tradespeople relish the opportunity to build an outstanding reputation on MyBuilder, and your feedback makes that possible.
                </p>
            </div>
        </div>
    );
};

export default Accountability;