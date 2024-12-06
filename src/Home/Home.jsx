import CampaignCard from "../Compnents/CampaignCards";
import ExploreCategories from "../Compnents/ExploreCategories ";
import HeroSection from "../Compnents/HeroSection ";


const Home = () => {
    return (
        <div>
        
        <div className="w-11/12 mx-auto">
        <HeroSection></HeroSection>
        </div>

             <main >
                <div className='mt-28 w-10/12 mx-auto'>
               
                <CampaignCard></CampaignCard>
                </div>
                <ExploreCategories></ExploreCategories>
             </main>
             
        </div>
        
    );
};

export default Home;