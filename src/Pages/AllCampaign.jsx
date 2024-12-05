import { useLoaderData } from "react-router-dom";
import CampaignCard from "../Compnents/CampaignCard";

 

const AllCampaign = () => {
    const allCampaignData = useLoaderData() ; 
  
    console.log(allCampaignData);
    return (
        <div className="mt-28 w-10/12 mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 ">
           {
                allCampaignData.map(campaignCard => <CampaignCard key={campaignCard._id} campaignCard={campaignCard}></CampaignCard>)
           }
        </div>
        </div>
    );
};

export default AllCampaign;