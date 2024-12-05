import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLoaderData, useParams } from "react-router-dom";

const MyCampaign = () => {

  const { user, setUser, userUid, setUserUid, monUserId, setMonUserId } =
    useContext(AuthContext);

    const campaignData = useLoaderData() ; 
 
 
    const currentUserCampaign = campaignData.filter(info => info.userEmail === user?.email )
 
 console.log(currentUserCampaign);
    
    const [campaign , setCampaign ] = useState(currentUserCampaign) ; 

   console.log(campaign);
 

  // const data = [
  //   {
  //     name: "Vincent Williamson",
  //     age: 31,
  //     job: "iOS Developer",
  //     location: "Washington",
  //   },
  //   {
  //     name: "Tyler Reyes",
  //     age: 22,
  //     job: "UI/UX Designer",
  //     location: "New York",
  //   },
  //   {
  //     name: "Justin Block",
  //     age: 26,
  //     job: "Front-End Developer",
  //     location: "Los Angeles",
  //   },
  //   {
  //     name: "Sean Quarman",
  //     age: 25,
  //     job: "Web Designer",
  //     location: "San Francisco",
  //   },
  //   {
  //     name: "Keith Cartor",
  //     age: 20,
  //     job: "Graphic Designer",
  //     location: "New York, NY",
  //   },
  //   {
  //     name: "Austin Medina",
  //     age: 32,
  //     job: "Photographer",
  //     location: "New York",
  //   },
  //   {
  //     name: "Adam Henderson",
  //     age: 35,
  //     job: "UI/UX Designer",
  //     location: "Washington",
  //   },
  //   {
  //     name: "Louis Smith",
  //     age: 27,
  //     job: "Photographer",
  //     location: "San Francisco",
  //   },
  // ];

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
              <td className="p-3"><Link>
                  Update 
              </Link></td>
              <td className="p-3">
                <Link>
                  Delete
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
