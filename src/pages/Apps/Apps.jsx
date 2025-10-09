import React, { Suspense } from 'react';
import VScodeLogo from '../../assets/VSCode.png'
import { useLoaderData } from 'react-router';
import AppCard from '../../components/AppCard/AppCard';

const Apps = () => {
    const AppsData = useLoaderData();

    return (
        <div className='bg-[#E9E9E9]'>
            <div>
                <div className='flex flex-col items-center text-center py-10'>
                    <div className='flex gap-4'>
                        <h2 className='text-4xl font-bold'>Our All Applications</h2>
                        <img src={VScodeLogo} className='w-10 h-10' />
                    </div>
                    <p className='text-gray-500 pt-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex items-center justify-between px-17'>
                    <p className='text-xl font-semibold underline text-[#743DE7]'><span>0</span> Apps Found</p>
                    <label className="input">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
                <div className='divider border-t-2 border-gray-200'></div>
            </div>

            <Suspense>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-17 py-5 mx-auto'>
                    {
                        AppsData.map(AppData => <AppCard key={AppData.id} AppData={AppData}></AppCard>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Apps;