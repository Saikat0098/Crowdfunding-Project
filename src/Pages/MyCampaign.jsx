import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { RxUpdate } from "react-icons/rx";
import { MdDeleteSweep } from "react-icons/md";

const MyCampaign = () => {
  const { user, setUser, userUid, setUserUid, monUserId, setMonUserId } =
    useContext(AuthContext);

  const campaignData = useLoaderData(); 


  const currentUserCampaign = campaignData.filter(
    (info) => info.userEmail === user?.email
  );

  console.log(currentUserCampaign);

  const [campaign, setCampaign] = useState(currentUserCampaign);

  console.log(campaign);

  const handleDelete = (id) => {
 

    fetch(`http://localhost:5500/addCampaignData/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
       
      });
  };

  return (
    <div className="overflow-x-auto p-6 bg-blue-100 min-h-screen flex items-center justify-center">
      <table className="table w-full max-w-4xl border-separate border-spacing-0">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Main Donation</th>
            <th className="p-3 text-left">Update</th>
            <th className="p-3 text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentUserCampaign.map((data, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-blue-50"
              } hover:bg-blue-200 transition-colors`}
            >
              <td className="p-3">{data.title}</td>
              <td className="p-3">{data.deadline}</td>
              <td className="p-3">{data.minDonation}</td>
              <td className="p-3">
                <Link to={`/updateCampaign/${data._id}`}>
                  <button>
                    {" "}
                    <RxUpdate
                      size={"25px"}
                      className="hover:bg-green-500 rounded-full"
                    />
                  </button>
                </Link>
              </td>
              <td className="p-3">
                <Link>
                  <button onClick={() => handleDelete(data._id)}>
                    {" "}
                    <MdDeleteSweep
                      size={"42px"}
                      className="hover:bg-red-500 p-2 rounded-full"
                    />
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

export default MyCampaign;
