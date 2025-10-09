import React from 'react';

const Installations = () => {


    return (
        <div className='bg-[#E9E9E9] h-screen'>
            <div className='bg-[#E9E9E9]'>
                <div className='flex flex-col items-center text-center py-10'>
                    <div className='flex gap-4'>
                        <h2 className='text-4xl font-bold'>Your Installed Apps</h2>
                        <i class="fa-brands fa-dropbox text-4xl text-[#743DE7]"></i>
                    </div>
                    <p className='text-gray-500 pt-2'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex items-center justify-between px-17'>
                    <p className='text-xl font-semibold underline text-[#743DE7]'><span>0</span> Apps Found</p>
                    <select defaultValue="Sort by Size" className="select">
                        <option disabled={true}>Sort by Size</option>
                        <option>Low-High</option>
                        <option>High-Low</option>
                    </select>
                </div>
                <div className='divider border-t-2 border-gray-200'></div>
            </div>

            <div>
                {/* <p>Product add dynamically</p> */}
            </div>
        </div>
    );
};

export default Installations;