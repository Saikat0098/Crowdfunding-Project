import React, { useContext } from 'react';
import { FaCode, FaCss3Alt, FaHtml5, FaJsSquare } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { HiH2 } from 'react-icons/hi2';

const MyDonations = () => {

  const {user} = useContext(AuthContext) ; 


  const myDonationData = useLoaderData() ; 

  const myDonation = myDonationData.filter(info => info.email === user?.email ) ; 


 

  return (
    <div className='w-10/12 mx-auto'>
      {user?.email ? <div className=" mx-auto grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 p-6 bg-gray-100 min-h-screen">
      {myDonation.map((card, index) => (
        <div
          key={index}
          className="w-64 bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105"
        >
          {/* Curved Gradient Header */}
          <div className={` ${card.gradient} flex items-center justify-center`}>
             <img src={card.thumbnail} alt="" />
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{card.description}</p>
            <button
              className={`text-white px-4 py-2 rounded-full text-sm hover:opacity-90`}
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div> : <div className='min-h-screen flex justify-center items-center'>
    <span className="loading loading-bars loading-lg"></span>

      </div>}
    </div>
  );
};

export default MyDonations;
