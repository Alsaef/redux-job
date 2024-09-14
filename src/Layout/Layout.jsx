import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';

const Layout = () => {
    return (
        <div>
            <NavBar/>
         <div className='min-h-screen'>
         <Outlet></Outlet>
         </div>
        </div>
    );
};

export default Layout;