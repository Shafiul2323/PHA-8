import React from 'react';
import applogo from '../../assets/AppIcon1.webp'

const AppCard = () => {
    return (
        <div className='flex gap-4'>
            <div className="card bg-base-100 w-80 shadow-sm">
                <figure>
                    <img src={applogo} className='w-70 h-70 rounded-2xl mt-3'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;