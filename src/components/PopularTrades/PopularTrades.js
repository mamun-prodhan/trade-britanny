import React from 'react';
import img1 from '../../assets/icons/bathroom.png';
import img2 from '../../assets/icons/engineer.png';
import img3 from '../../assets/icons/carpenter.png';
import img4 from '../../assets/icons/broom.png';
import img5 from '../../assets/icons/paint-roller.png';
import img6 from '../../assets/icons/sewer.png';
import img7 from '../../assets/icons/draws.png';
import img8 from '../../assets/icons/thunder-bolt.png';
import img9 from '../../assets/icons/growth.png';
import img10 from '../../assets/icons/tools.png';
import img11 from '../../assets/icons/trowel.png';
import img12 from '../../assets/icons/car.png';
import img13 from '../../assets/icons/roof.png';
import img14 from '../../assets/icons/window.png';
import img15 from '../../assets/icons/heating.png';
import img16 from '../../assets/icons/kitchen.png';
import Trade from '../Trade/Trade';

const PopularTrades = () => {
    // trades data array of object
    const tradesData = [
        {
            image: img1,
            title: 'BATHROOM FITTERS'
        },
        {
            image: img2,
            title: 'BUILDERS'
        },
        {
            image: img3,
            title: 'CARPENTER'
        },
        {
            image: img4,
            title: 'CLEANERS'
        },
        {
            image: img5,
            title: 'DECORATORS'
        },
        {
            image: img6,
            title: 'DRAINAGE SPECIALIST'
        },
        {
            image: img7,
            title: 'FLOORING SPECIALIST'
        },
        {
            image: img8,
            title: 'ELECTRICIAN'
        },
        {
            image: img9,
            title: 'GARDENERS'
        },
        {
            image: img10,
            title: 'HANDYMAN'
        },
        {
            image: img11,
            title: 'PLASTERES'
        },
        {
            image: img12,
            title: 'PLUMBERS'
        },
        {
            image: img13,
            title: 'ROOFERS'
        },
        {
            image: img14,
            title: 'WINDOW FITTERS'
        },
        {
            image: img15,
            title: 'HEATING ENGINEERS'
        },
        {
            image: img16,
            title: 'KITCHEN FITTERS'
        },
        
    ]

    return (
        <div className='mb-16 md:mb-24 p-6 bg-[#F8FAF7]'>
            {/* heading */}
             <h2 className='mb-12 font-normal text-3xl lg:text-5xl text-center'>Popular trades</h2>
             {/* trade data card */}
             <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-10'>
                {
                    tradesData.map((trade, index) => <Trade
                    key={index}
                    trade={trade}
                    ></Trade>)
                }
             </div>
        </div>
    );
};

export default PopularTrades;