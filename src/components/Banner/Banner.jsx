import React from 'react';
import BannerImage from '../../assets/hero.png'
import GooglePlayLogo from '../../assets/GooglePlay.png'
import AppleStoreLogo from '../../assets/AppleStore.png'

const Banner = () => {
    return (
        <div className='flex flex-col bg-[#E9E9E9]'>
            <div className='flex flex-col items-center py-10'>
                <div className='space-y-5 text-center'>
                    <h1 className='text-6xl font-bold'>We Build <br /><span className='text-[#632ee3]'>Productive</span> <span className='text-[#392f5a]'>Apps</span></h1>
                    <p className='italic max-w-8/12 mx-auto text-xl pb-5'>At <span class="font-bold">HERO.IO</span> , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact</p>
                </div>
                <div className='flex gap-5'>
                    <a href="" className='btn btn-xs bg-white hover:bg-gray-200 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-xl'><img src={GooglePlayLogo} className='w-8 h-8'/>Google Play</a>
                    <a href="" className='btn btn-xs bg-white hover:bg-gray-200 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-xl'><img src={AppleStoreLogo} className='w-8 h-8'/>Google Play</a>
                </div>
            </div>
            <img src={BannerImage} className='w-3xl mx-auto'/>
        </div>
    );
};

export default Banner;