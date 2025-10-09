import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { MdReviews } from "react-icons/md";
import Barchart from '../../components/Barchart/Barchart';

const AppDetails = () => {
    const { id } = useParams();
    const AppId = parseInt(id);
    const AppsData = useLoaderData();
    const AppData = AppsData.find(App => App.id === AppId);
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings = [] } = AppData || {};



    return (
        <div className='bg-[#E9E9E9] py-10 px-17'>
            <div className='flex flex-col md:flex-row items-center gap-25'>
                <img src={image} className='w-70 h-70 rounded-2xl shadow-2xl' />
                <div>
                    <h2 className='text-3xl font-bold'>{title}</h2>
                    <p className='text-xl pt-4 font-medium'>Developed by <span className='text-[#743DE7]'>{companyName}</span></p>
                    <div className="divider divider-primary"></div>
                    <div className='flex '>
                        <div>
                            <p className='text-xl text-gray-500'>Downloads</p>
                            <div className='flex gap-2'>
                                <h2 className='text-4xl font-extrabold'>{downloads}</h2>
                                <i className="fa-solid fa-download text-4xl text-[#743DE7] ml-8"></i>
                            </div>
                        </div>

                        <div className="divider divider-horizontal"></div>

                        <div>
                            <p className='text-xl text-gray-500'>Avarage Ratings</p>
                            <div className='flex gap-2'>
                                <h2 className='text-4xl font-extrabold'>{ratingAvg}</h2>
                                <i className="fa-solid fa-star text-4xl text-[#743DE7] ml-8"></i>
                            </div>
                        </div>

                        <div className="divider divider-horizontal"></div>

                        <div>
                            <p className='text-xl text-gray-500'>Total Reviews</p>
                            <div className='flex gap-2'>
                                <h2 className='text-4xl font-extrabold'>{reviews}</h2>
                                <MdReviews className='text-4xl text-[#743DE7] ml-8' />
                            </div>
                        </div>
                    </div>
                    <button className='btn shadow-xl hover:shadow-2xl btn-xl skeleton bg-success btn-success text-white mt-8'>Install Now ({size} MB)</button>
                </div>
            </div>
            <div className="divider"></div>
            <div>
                <h2 className='text-4xl font-extrabold text-[#392F5A] pb-4'>Ratings</h2>
                <Barchart ratings={ratings}/>
            </div>

            <div className="divider"></div>
            <div>
                <h2 className='text-4xl font-extrabold text-[#392F5A] pb-4'>Description</h2>
                <p className='text-xl text-gray-500'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;