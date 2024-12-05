import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routs from './Router/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

 

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>  
     <RouterProvider router={routs} /> 
  </AuthProvider>
  </StrictMode>,
)
