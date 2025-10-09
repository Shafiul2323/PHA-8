import React, { Suspense } from 'react';
import AppCard from '../../components/AppCard/AppCard';
import { Link } from 'react-router';

const TrendingApps = ({ AppsData }) => {
    return (
        <div className='text-center'>
            <div className='bg-[#E9E9E9]'>
                <div className='bg-[#E9E9E9]'>
                    <div className='flex flex-col items-center text-center py-10'>
                        <div className='flex gap-4'>
                            <h2 className='text-4xl font-bold'>Our All Applications</h2>
                            <i class="fa-solid fa-arrow-trend-up text-4xl text-[#743DE7]"></i>
                        </div>
                        <p className='text-gray-500 pt-2'>Explore All Trending Apps on the Market developed by us</p>
                    </div>
                </div>
                <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-[#E9E9E9] px-17 py-5 mx-auto'>
                        {
                            AppsData.map(AppData => <AppCard key={AppData.id} AppData={AppData}></AppCard>)
                        }
                    </div>
                </Suspense>
                <Link to="/apps" className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold text-center px-25 mb-10">Show All</Link>
            </div>
        </div>
    );
};

export default TrendingApps;