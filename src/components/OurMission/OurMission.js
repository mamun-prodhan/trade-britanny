import React from 'react';
import image from '../../assets/Draw SVG/draw-03.svg';
import shield from '../../assets/icons/shield2.png';
import like from '../../assets/icons/like.png';
import link from '../../assets/icons/link.png';
import love from '../../assets/icons/love.png';
import MissionSteps from '../MissionSteps/MissionSteps';

const OurMission = () => {
    // stepsData array of objects
    const stepsData = [
        {
            image: shield,
            step: "STEP 1",
            title: "Building Trust",
            description: "Connecting Contractors and Users with Confidence",
        },
        {
            image: like,
            step: "STEP 2",
            title: "Ensuring Credibility",
            description:
                "A Platform for Reliable Contractors and Trustworthy Users",
        },
        {
            image: link,
            step: "STEP 3",
            title: "Creating Connections",
            description: "Where Trust and Credibility Meet for Contractors and Users",
        },
        {
            image: love,
            step: "STEP 4",
            title: "Empowering Relationships",
            description:
                "Bridging the Gap between Contractors and Users with Trust and Credibility",
        },
    ];
    return (
        <div className='mb-16 md:mb-24 p-6 bg-[#F8FAF7]'>
            {/* heading */}
            <h2 className='mb-12 font-normal text-3xl lg:text-5xl text-center text-[#15A802]'>Our Mission</h2>
            <p className='font-semibold text-xl mb-16'>We help homeowners choose great builders,and we help great builders succeed</p>
            <img className='md:w-1/2 lg:w-1/2 md:h-1/2 lg:h-1/2 m-auto mb-16' src={image} alt='icon'></img>
            <div className='md:w-1/2 lg:w-1/2 mx-auto lg:gap-4 mb-16 md:mb-24 lg:mb-24'>
                <p>There are plenty of tradespeople out there, but finding a good one is like looking for a needle in a haystack. At MyBuilder, we take the hassle out of finding the right tradesperson with our unique matchmaking system. Once your job is posted, we alert relevant tradespeople and those interested get in touch. You see full work history and customer feedback comments, helping you choose the best builder for your job.</p>
            </div>
            <div>
                {/* steps card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-24 lg:mb-24">
                    {stepsData.map((step, index) => (
                        <MissionSteps key={index} step={step}></MissionSteps>
                    ))}
                </div>
            </div>
            <div className='md:w-1/2 lg:w-1/2 mx-auto lg:gap-4 mb-16 md:mb-24 lg:mb-24'>
                <p>And if you think life is any easier for builders looking for work, think again. Finding clients can seem like an impossible task and traditional advertising and directories almost never works. The trades need to focus on doing great work for their customers, without having to worry about where the next job will come from. MyBuilders feedback system means that today's client helps MyBuilder tradespeople win tomorrow's work.</p>
            </div>

        </div>
    );
};

export default OurMission;