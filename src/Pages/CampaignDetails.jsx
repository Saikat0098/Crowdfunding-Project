import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const CampaignDetails = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const email = user?.email;

  const singleCampaignData = useLoaderData();
  const { _id } = useParams();
  let details = singleCampaignData?.find((single) => single._id == _id);
  const { type, title, minDonation, thumbnail, description, deadline } =
    details;

  const handelDonation = () => {
    const myDonationDetails = {
      title,
      type,
      minDonation,
      email,
      thumbnail,
      description,
    };
    console.log(myDonationDetails);

    fetch("http://localhost:5500/myDonation", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(myDonationDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          Swal.fire({
            title: 'success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
     
         
      });
  };

  //   console.log(singleCampaignData.title);

  return (
    <div className="flex justify-center py-6">
      <div className="group relative bg-gradient-to-b from-white to-gray-50 w-full max-w-2xl shadow-xl rounded-2xl overflow-hidden transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl">
        {/* Image Section */}
        <figure className="relative h-72 md:h-96 overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-t-2xl"
          />
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-lg font-semibold px-4 py-2 rounded-full shadow-md">
            #{type}
          </div>
        </figure>

        {/* Card Content */}
        <div className="p-6 md:p-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition duration-300">
            {title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg line-clamp-4">
            {description}
          </p>
          <div className="flex justify-between text-base text-gray-500 mt-4">
            <span>
              <strong>Deadline: {deadline}</strong> {}
            </span>
            <span>
              <strong>Min Donation:</strong>{" "}
              <span className="text-blue-600">${minDonation}</span>
            </span>
          </div>
        </div>

        {/* Footer Action */}
        <div className="px-6 md:px-8 py-4 bg-gray-100 border-t">
          <Link>
            <button onClick={handelDonation} className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg font-medium py-3 rounded-md shadow-md transition duration-300">
               Donation Now &rarr;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;

 