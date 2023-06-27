import React from 'react';
import image1 from '../../assets/Draw SVG/draw-01.svg';

const CareFullySelectedJob = () => {
    return (
        <div className='md:flex lg:flex justify-center items-center p-6 lg:p-10 mb-16 lg:mb-24 bg-[#F3F7F2]'>
            <div className='w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0 lg:mb-0 md:mr-6 lg:mr-6'>
                <img className='h-60' src={image1} alt='draw'></img>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/2'>
                <h2 className='text-3xl md:text-3xl lg:text-5xl text-semibold text-start mb-6'>Carefully selected tradespeople</h2>
                <p className='text-start'>We are picky at MyBuilder and turn down over a third of tradespeople who apply to join. We evaluate each one to assess whether they meet our high standards, because our reputation is only as good as our tradespeople.</p>
            </div>
        </div>
    );
};

export default CareFullySelectedJob;