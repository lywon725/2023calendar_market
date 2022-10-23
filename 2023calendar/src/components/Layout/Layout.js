import React from 'react';
import { Link, Outlet } from "react-router-dom";


import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';


function Layout() {
    return (
        <>
        <Navbar />
        <Outlet />
        </>

    )
}

export default Layout
