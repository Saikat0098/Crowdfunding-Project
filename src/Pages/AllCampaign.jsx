import { Link, useLoaderData } from "react-router-dom";
import CampaignCard from "../Compnents/CampaignCard";

const AllCampaign = () => {
  const allCampaignData = useLoaderData();

  console.log(allCampaignData);
  return (
    
      <div className="overflow-x-auto p-6 bg-blue-100 min-h-screen flex items-center justify-center">
        <table className="table w-full max-w-4xl border-separate border-spacing-0">
          <thead>
            <tr className="bg-blue-500 text-white">
            <th className="p-3 text-left">Number</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Main Donation</th>
           
              <th className="p-3 text-left">More Details</th>
            </tr>
          </thead>
          <tbody>
            {allCampaignData.map((data, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-blue-50"
                } hover:bg-blue-200 transition-colors`}
              >
                
                <td className="p-3">{index + 1 }</td>
                <td className="p-3">{data.title}</td>
                <td className="p-3">{data.deadline}</td>
                <td className="p-3 text-center">{data.minDonation}</td>
                
                <td className="p-2 md:p-3">
                  <Link to={`/campaignDetails/${data._id}`}>
                    <button className="bg-[#3B9DF8] hover:bg-blue-700 text-white font-medium 
                    
                    md:py-3 md:px-6 rounded-full shadow-lg transition-colors">
                      See More &rarr;
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 
   
  );
};

export default AllCampaign;
