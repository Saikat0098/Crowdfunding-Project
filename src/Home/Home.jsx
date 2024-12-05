import CampaignCard from "../Compnents/CampaignCards";
import HeroSection from "../Compnents/HeroSection ";


const Home = () => {
    return (
        <div>
             <HeroSection></HeroSection>

             <main className='mt-28 w-10/12 mx-auto'>
                <CampaignCard></CampaignCard>
             </main>
             
        </div>
        
    );
};

export default Home;