import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const CampaignCard = ({ campaignCard }) => {
 

 

  const {thumbnail , title , type , description , minDonation , deadline , _id } = campaignCard ; 

 

  return (
    <div>
      <div className="card bg-base-100 w-96 h-[460px] shadow-xl">
        <figure className="h-60">
          <img
            src={thumbnail}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge    w-36">#{type}</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
             <Link to={`/campaignDetails/${_id}`}>
             <button
          
          className="bg-[#3B9DF8] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-colors"
        >
           See More &rarr;
        </button>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
