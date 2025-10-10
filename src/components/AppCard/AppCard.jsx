import React from 'react';
import { Link } from 'react-router';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const AppCard = ({ AppData }) => {

    const {id, image, title, downloads, ratingAvg } = AppData || {};
    return (
        <Link to={`/apps/${id}`}>
            <div className='flex gap-4 mb-4'>
                <div className="card bg-base-100 w-76 shadow-sm">
                    <div className='flex flex-col items-center'>
                        <figure>
                            <img src={image} className='w-70 h-70 rounded-2xl mt-3' />
                        </figure>
                        <h2 className="card-title text-center mt-4">{title}</h2>
                    </div>
                    <div className='flex justify-between px-4 my-2'>
                        <div className='flex gap-1 items-center bg-gray-200 py-1 px-3 rounded-xl'>
                            <MdOutlineFileDownload className='text-xl text-[#743DE7]'/>
                            <p>{downloads} M</p>
                        </div>
                        <div className='flex gap-1 items-center bg-gray-200 py-1 px-3 rounded-xl'>
                            <FaStar className='text-yellow-500'/>
                            <p>{ratingAvg}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;