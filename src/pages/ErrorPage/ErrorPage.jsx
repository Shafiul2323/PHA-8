import React from 'react';
import ErrorImage from '../../assets/error-404.png'
import Navber from '../../components/Header/Navber';
import Footer from '../../components/Footer/Footer';
import CopyrightFooter from '../../components/Footer/CopyrightFooter';

const ErrorPage = () => {
    return (
        <div>
            <Navber></Navber>
            <div className='flex flex-col items-center bg-[#E9E9E9] h-screen'>
                <img src={ErrorImage} className='py-10'/>
                <h2 className='text-5xl font-semibold'>Oops, page not found!</h2>
                <p className='text-gray-500 py-5'>The page you are looking for is not available.</p>
                <a href="" className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</a>
            </div>
            <Footer></Footer>
            <CopyrightFooter></CopyrightFooter>
        </div>
    );
};

export default ErrorPage;