import React, { useContext } from 'react';
import { FaCode, FaCss3Alt, FaHtml5, FaJsSquare } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { HiH2 } from 'react-icons/hi2';

const MyDonations = () => {

  const {user} = useContext(AuthContext) ; 


  const myDonationData = useLoaderData() ; 

  const myDonation = myDonationData.filter(info => info.email === user?.email ) ; 


 

  return (
    <div className='w-10/12 mx-auto mt-8'>
     {

      user?.email ?
       <div className=' mx-auto grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 p-6 bg-gray-100 min-h-scree'>
           {
            myDonation.map((card , index ) => <div key={index} className="flex justify-center">
            <div className="group relative bg-gradient-to-b from-white to-gray-50 w-full sm:w-80 md:w-96 shadow-xl rounded-lg overflow-hidden transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl">
              {/* Image Section */}
              <figure className="relative h-60 overflow-hidden">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full shadow-md">
                  #{card.type}
                </div>
              </figure>
        
              {/* Card Content */}
              <div className="p-5 space-y-4">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition duration-300">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">{card.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    <strong>Deadline:</strong> {new Date(card.deadline).toLocaleDateString()}
                  </span>
                  <span>
                    <strong>Min Donation:</strong> <span className="text-blue-600">${card.minDonation}</span>
                  </span>
                </div>
              </div>
        
              
            </div>
          </div> )
           }
      </div> : ""
     }
  </div>
 
  );
};

export default MyDonations;
