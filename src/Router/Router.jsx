import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayOut/MainLayout";
import Home from "../Home/Home";
import AllCampaign from "../Pages/AllCampaign";
import AddNewCampaign from "../Pages/AddNewCampaign";
import MyCampaign from "../Pages/MyCampaign";
import MyDonations from "../Pages/MyDonations";
import CampaignCard from "../Compnents/CampaignCards";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import CampaignDetails from "../Pages/CampaignDetails";
import UpdateCampaign from "../Pages/UpdateCampaign";
 

 

 const routs = createBrowserRouter([
     {
        path:'/',
        element:<MainLayout></MainLayout> , 
        children:[
            {
                path:'/' , 
                element:<Home></Home>
                 
            } , 
            {
                path: 'allCampaign' , 
                element: <AllCampaign></AllCampaign> , 
                loader: ()=> fetch('http://localhost:5500/addCampaignData')
            } , 
            {
                path:'addNewCampaign' , 
                element: <AddNewCampaign></AddNewCampaign>
            } , 
            // {
            //     path:'campaignCard' , 
            //     element:<CampaignCard></CampaignCard> , 
            //     loader: ()=> fetch('http://localhost:5500/addCampaignData')

            // } , 
            {
                path:'myCampaign' , 
                element: <MyCampaign></MyCampaign> , 
                loader: ()=> fetch('http://localhost:5500/addCampaignData')
            } , 
            {
                path:'myDonations' , 
                element:<MyDonations></MyDonations>
            } , 
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signUp',
                element:<SignUp></SignUp>
            } , 

            {
                path:'campaignDetails/:_id' , 
                element:<CampaignDetails></CampaignDetails> , 
                loader: ()=> fetch(`http://localhost:5500/addCampaignData/`)
            } , 
            {
                path:'updateCampaign/:_id' ,
                element: <UpdateCampaign></UpdateCampaign> , 
                loader: ({params}) => fetch(`http://localhost:5500/addCampaignData/${params._id}`)

                
            }

        ]
     }
 ]) ; 

 export default routs ; 