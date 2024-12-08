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
import PrivetRout from "./PrivetRout";
import NotFound from "../Pages/NotFound";
 

 

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
                loader: ()=> fetch('https://help-people-server-side.vercel.app/addCampaignData')
            } , 
            {
                path:'addNewCampaign' , 
                element: <PrivetRout>
                    <AddNewCampaign></AddNewCampaign>
                </PrivetRout>
            } , 
            
            {
                path:'myCampaign' , 
                element: <PrivetRout>
                    <MyCampaign></MyCampaign>
                </PrivetRout> , 
                loader: ()=> fetch('https://help-people-server-side.vercel.app/addCampaignData')
            } , 
            {
                path:'myDonations' , 
                element:<PrivetRout>
                    <MyDonations></MyDonations>
                </PrivetRout> , 
                loader: ()=> fetch('https://help-people-server-side.vercel.app/myDonation')
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
                loader: ()=> fetch(`https://help-people-server-side.vercel.app/addCampaignData/`)
            } , 
            {
                path:'updateCampaign/:_id' ,
                element: <UpdateCampaign></UpdateCampaign> , 
                loader: ({params}) => fetch(`https://help-people-server-side.vercel.app/addCampaignData/${params._id}`)

                
            } , 
            {
                path: '*' , 
                element : <NotFound></NotFound>
              } ,

        ]
     }
 ]) ; 

 export default routs ; 