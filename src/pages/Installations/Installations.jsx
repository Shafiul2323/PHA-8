import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import testImage from '../../assets/AppIcon1.webp'

const Installations = () => {


    return (
        <div className='bg-[#E9E9E9] h-screen px-17 mx-auto'>
            <div className='bg-[#E9E9E9]'>
                <div className='flex flex-col items-center text-center py-10'>
                    <div className='flex gap-4'>
                        <h2 className='text-4xl font-bold'>Your Installed Apps</h2>
                        <i class="fa-brands fa-dropbox text-4xl text-[#743DE7]"></i>
                    </div>
                    <p className='text-gray-500 pt-2'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex items-center justify-between'>
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
                <div className='flex items-center justify-between bg-white py-3 px-3 rounded-2xl'>
                    <div className='flex items-center gap-4'>
                        <img src={testImage} className='w-15 h-15 rounded-2xl'/>
                        <div>
                            <h2 className='font-medium'>Forest: Focus for Productivity</h2>
                            <div className='flex gap-3'>
                                <div className='flex gap-1 items-center'>
                                    <MdOutlineFileDownload />
                                    <p>10</p>
                                </div>
                                <div className='flex gap-1 items-cente'>
                                    <FaStar />
                                    <p>4.7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='btn shadow-xl hover:shadow-2xl skeleton bg-success btn-success text-white'>Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default Installations;