import React from 'react';
import Navbar from '../Compnents/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
       <div>
         <div className='w-11/12 mx-auto'>
          <Navbar></Navbar>
         
        </div>
        <Outlet></Outlet>
       </div>
    );
};

export default MainLayout;