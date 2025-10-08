import React from 'react';
import Navber from '../components/Header/Navber';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import CopyrightFooter from '../components/Footer/CopyrightFooter';



const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            <CopyrightFooter></CopyrightFooter>
        </div>
    );
};

export default Root;