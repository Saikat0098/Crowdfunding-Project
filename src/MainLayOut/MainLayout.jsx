import React from 'react';
import Navbar from '../Compnents/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Compnents/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
       <div>
        <div>
        <Toaster></Toaster>
        </div>
         <div className='w-11/12 mx-auto'>
          <Navbar></Navbar>
        
          
         
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
       </div>
    );
};

export default MainLayout;