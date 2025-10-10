import React from 'react';

const StateCard = () => {
    return (
        <div className='flex flex-col items-center bg-linear-to-br from-[#632EE3] to-[#9F62F2] py-15 px-25 text-white'>
            <h2 className='text-4xl font-bold text-center'>Trusted by Millions, Built for You</h2>
            <div className='flex flex-col md:flex-row gap-8 pt-10'>
                <div>
                    <p className='text-xl'>Total Downloads</p>
                    <div className='flex gap-4 py-3'>
                        <p className='text-5xl font-extrabold'>29.6M</p>
                        <i className="fa-solid fa-download text-5xl font-extrabold"></i>
                    </div>
                    <p className='text-xs'>21% more than last month</p>
                </div>
                <div>
                    <p className='text-xl'>Total Reviews</p>
                    <div className='flex gap-4 py-3'>
                        <p className='text-5xl font-extrabold'>906K</p>
                        <i className="fa-solid fa-star text-5xl font-extrabold"></i>
                    </div>
                    <p className='text-xs'>46% more than last month</p>
                </div>
                <div>
                    <p className='text-xl'>Active Apps</p>
                    <div className='flex gap-4 py-3'>
                        <p className='text-5xl font-extrabold'>132+</p>
                        <i className="fa-brands fa-google-play text-5xl font-extrabold"></i>
                    </div>
                    <p className='text-xs'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default StateCard;