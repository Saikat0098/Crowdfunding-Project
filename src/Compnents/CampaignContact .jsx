import React from "react";
import Swal from "sweetalert2";

const CampaignContact = () => {
    const handleSubmit =(e)=>{
       e.preventDefault() ; 
       Swal.fire({
        title: 'success!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  return (
    <div
    className="  flex items-center justify-center px-4 py-12"
    
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
   
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
        <p className="text-green-400 text-sm uppercase font-semibold">Upcoming Events</p>
        <h2 className="text-4xl font-bold mt-4">Startup Campaign Starts In:</h2>
        <p className="text-gray-400 mt-6 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <p className="mt-8 text-2xl font-semibold text-red-500">Expired</p>
      </div>
  
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <input
            type="text"
            placeholder="Your Subject"
            className="input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-400"
          />
          <textarea
            placeholder="Your message"
            className="textarea textarea-bordered w-full focus:outline-none focus:ring focus:ring-blue-400"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="btn bg-green-500 hover:bg-green-600 text-white font-medium w-full py-3 rounded-lg shadow-md transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
  
  
  );
};

export default CampaignContact;
