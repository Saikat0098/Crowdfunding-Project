import { useEffect, useState } from "react";
import CampaignCard from "./CampaignCard";
 

 const CampaignCards = () => {
    

    const [campaignCards , setCampaignCards] = useState([]) ;
    const currentDate = new Date();
    const runningCampaigns = campaignCards
    .filter((campaign) => new Date(campaign.deadline) > currentDate)

    useEffect(()=>{
        fetch('https://help-people-server-side.vercel.app/addCampaignData')
        .then(res => res.json())
        .then(data =>  setCampaignCards(data))
    },[])

    return (
     

        <div>
            <h2 className="font-bold text-3xl pb-10 text-center">Running Campaign </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 ">
           {
               runningCampaigns.slice(0-6).map(campaignCard => <CampaignCard key={campaignCard._id} campaignCard={campaignCard}></CampaignCard>)
           }
        </div>
        </div>
    );
};

export default CampaignCards;