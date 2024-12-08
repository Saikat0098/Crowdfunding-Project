import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllCampaign = () => {
  const allCampaignData = useLoaderData();
  const [sortedCampaignData, setsortedCampaignData] = useState(allCampaignData);

  const handleSort = () => {
    const sortedData = [...sortedCampaignData].sort(
      (a, b) => b.minDonation - a.minDonation
    );
    setsortedCampaignData(sortedData);
  };

  return (
    <div className="p-4 bg-blue-100 min-h-screen flex flex-col mt-28 items-center">
      <div className="w-full max-w-6xl">
       
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-lg sm:text-2xl font-bold text-blue-700">
            All Campaigns
          </h1>
          <button
            onClick={handleSort}
            className="btn btn-primary mt-3 sm:mt-0 sm:w-auto w-full"
          >
            Sort by Min Donation
          </button>
        </div>

      
        <div className="overflow-hidden rounded-lg shadow-lg bg-white">
          <table className="hidden sm:table w-full border-collapse">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-3 text-left">Number</th>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Min Donation</th>
                <th className="p-3 text-left">More Details</th>
              </tr>
            </thead>
            <tbody>
              {sortedCampaignData.map((data, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-blue-50"
                  } hover:bg-blue-200 transition-colors`}
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{data.title}</td>
                  <td className="p-3">{data.deadline}</td>
                  <td className="p-3 text-center">${data.minDonation}</td>
                  <td className="p-3 text-center">
                    <Link to={`/campaignDetails/${data._id}`}>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full shadow-lg transition-colors">
                        See More &rarr;
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

    
          <div className="sm:hidden flex flex-col gap-4">
            {sortedCampaignData.map((data, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg flex flex-col gap-2"
              >
                <div className="flex justify-between">
                  <span className="font-bold text-blue-700">#{index + 1}</span>
                  <span className="text-sm text-gray-500">{data.deadline}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-800">
                  {data.title}
                </h2>
                <p className="text-sm text-gray-600">
                  Min Donation: ${data.minDonation}
                </p>
                <Link to={`/campaignDetails/${data._id}`}>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full shadow-lg transition-colors">
                    See More &rarr;
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCampaign;




 