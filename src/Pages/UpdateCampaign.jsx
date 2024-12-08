import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const UpdateCampaign = () => {
  const updateData =  useLoaderData();

  const {_id , title } = updateData;

  const {user} = useContext(AuthContext)

  const handleUpdate = (e)=>{
    e.preventDefault();
     
    const formData = new FormData(e.target);
    const  updateDataCampaign = Object.fromEntries(formData.entries());

    


    fetch(`https://help-people-server-side.vercel.app/addCampaignData/${_id}` , {
      method:"PUT" ,
      headers:{
          'content-type' : 'application/json'
      } ,
      body: JSON.stringify(updateDataCampaign)
   })
   .then(res => res.json())
   .then(data => {
       console.log(data);
    })

  }
 
 
    return (
        <div>
              <div className="min-h-screen mt-11 p-8 bg-sky-100 flex justify-center items-center">
      <div className="card w-full max-w-xl bg-white shadow-lg rounded-lg p-4">
        <h1 className="text-lg font-bold text-center mb-4"> Update Campaign</h1>
        <form onSubmit={handleUpdate}  className="space-y-3">
          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Image URL</span>
            </label>
            <input
              type="text"
              name="thumbnail"
              defaultValue={updateData.thumbnail}
              placeholder="Enter image URL"
              className="input input-bordered w-full"
              required
            />
          </div>

         
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Title</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              placeholder="Campaign title"
              className="input input-bordered w-full"
              required
            />
          </div>

          
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Type</span>
            </label>
            <select
              name="type"
              defaultValue={updateData.type}
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled selected>
                Select type
              </option>
              <option value="personal issue">Personal Issue</option>
              <option value="startup">Startup</option>
              <option value="business">Business</option>
              <option value="creative ideas">Creative Ideas</option>
            </select>
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Description</span>
            </label>
            <textarea
              name="description"
              defaultValue={updateData.description}
              placeholder="Campaign description"
              className="textarea textarea-bordered w-full"
              rows="2"
              required
            ></textarea>
          </div>

          
          <div className="grid grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Min Donation</span>
              </label>
              <input
                type="number"
                name="minDonation"
                defaultValue={updateData.minDonation}
                placeholder="Amount"
                className="input input-bordered w-full"
                min="1"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Deadline</span>
              </label>
              <input
                type="date"
                name="deadline"
                defaultValue={updateData.deadline}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/*  User Email and Name */}
          <div className="grid grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="userEmail"
                value={user?.email}
                
                className="input input-bordered w-full bg-gray-100"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Name</span>
              </label>
              <input
                type="text"
                name="userName"
                value={user?.displayName}
                className="input input-bordered w-full bg-gray-100"
                readOnly
              />
             
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-2">
            <button
              type="submit"
              className=" p-3 rounded-lg text-white bg-[#3B9DF8] w-full"
            >
              Add Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
            
        </div>
    );
};

export default UpdateCampaign;