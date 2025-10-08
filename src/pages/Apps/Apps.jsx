import React from 'react';
import VScodeLogo from '../../assets/VSCode.png'

const Apps = () => {
    return (
        <div>
            <div className='bg-[#E9E9E9]'>
                <div className='flex flex-col items-center text-center py-10'>
                    <div className='flex gap-4'>
                        <h2 className='text-4xl font-bold'>Our All Applications</h2>
                        <img src={VScodeLogo} className='w-10 h-10'/>
                    </div>
                    <p className='text-gray-500 pt-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default Apps;