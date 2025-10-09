import React from 'react';
import { Link } from 'react-router';

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
                        <p className='bg-gray-200 py-1 px-3 rounded-xl'>{downloads}</p>
                        <p className='bg-gray-200 py-1 px-3 rounded-xl'>{ratingAvg}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;