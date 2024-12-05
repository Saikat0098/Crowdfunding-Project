import React from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

const CampaignDetails = () => {
  const navigate = useNavigate();

  const singleCampaignData = useLoaderData();
  const { _id } = useParams();
  let details = singleCampaignData?.find((single) => single._id == _id);

  //   console.log(singleCampaignData.title);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-8"
      style={{
        background: "linear-gradient(to right, #3B9DF8, #6E74F9)",
      }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="text-white space-y-6">
          <p>Type : {details.type}</p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            {details.title}
          </h1>
          <p className="text-lg sm:text-xl font-light  ">
            {details.description}
          <span className="font-semibold block pb-4">${details.minDonation}</span>

          </p>

        
          <Link to=''>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-colors  ">
              Donate Now &rarr;
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="  md:w-[500px] md:h-[500px] bg-orange-500 rounded-[70%_20%_50%_30%] flex items-center justify-center text-black font-bold text-xl  overflow-hidden shadow-lg">
            <img
              src={details.thumbnail}
              alt="Investing illustration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
