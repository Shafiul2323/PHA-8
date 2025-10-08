import React from 'react';
import LogoImage from '../../assets/logo.png'
import GithubLogo from '../../assets/github.png'
import { Link } from 'react-router-dom';

const Navber = () => {
    const links = <>
        <li>
            <Link to="/" className="text-xl text-gray-500 font-semibold">
                <i className="fa-regular fa-house"></i> Home
            </Link>
        </li>
        <li>
            <Link to="/apps" className="text-xl text-gray-500 font-semibold">
                <i className="fa-brands fa-app-store"></i> Apps
            </Link>
        </li>
        <li>
            <Link to="/installations" className="text-xl text-gray-500 font-semibold">
                <i className="fa-regular fa-circle-down"></i> Installation
            </Link>
        </li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-17 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="flex items-center cursor-pointer text-xl gap-2"><img className='w-12 h-12' src={LogoImage} /><span className='font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/jannatmollah' target='_blank' className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]"><img src={GithubLogo} /><span className='text-white font-semibold'>Contribute</span></a>
            </div>
        </div>
    );
};

export default Navber;