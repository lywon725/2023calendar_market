import React from 'react';
import { Outlet } from "react-router-dom";


import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';


function Layout() {
    return (
        <>
        <Navbar />
        <br/><br/><br/><br/>
        <Outlet />
        <Footer />
        </>

    )
}

export default Layout
