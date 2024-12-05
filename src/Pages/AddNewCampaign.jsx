import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddNewCampaign = () => {
  const { user ,  monUserId, setMonUserId, setUser } = useContext(AuthContext);

 // const userEmail = "user@example.com"; // Replace with dynamic data if needed
  const userName = "John Doe"; // Replace with dynamic data if needed
  const userUID = monUserId;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const addCampaign = Object.fromEntries(formData.entries());
    console.log(addCampaign);

    // console.log(user);

    // console.log(addCampaign);

    fetch("http://localhost:5500/addCampaignData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCampaign),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const users = result.user ; 
         setUser(users)
        setMonUserId(userUID);
        // console.log(userUID);
      });
  };

  return (
    <div className="min-h-screen mt-11 p-8 bg-sky-100 flex justify-center items-center">
      <div className="card w-full max-w-xl bg-white shadow-lg rounded-lg p-4">
        <h1 className="text-lg font-bold text-center mb-4">Add New Campaign</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Image URL</span>
            </label>
            <input
              type="text"
              name="thumbnail"
              placeholder="Enter image URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Campaign Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Campaign title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Campaign Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Type</span>
            </label>
            <select
              name="type"
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
              placeholder="Campaign description"
              className="textarea textarea-bordered w-full"
              rows="2"
              required
            ></textarea>
          </div>

          {/* Inline Row: Minimum Donation and Deadline */}
          <div className="grid grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Min Donation</span>
              </label>
              <input
                type="number"
                name="minDonation"
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
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Inline Row: User Email and Name */}
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
                value={userName}
                className="input input-bordered w-full bg-gray-100"
                readOnly
              />
              <div className="hidden">
                <input type="text" name="userUID" value={userUID} />
              </div>
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
  );
};

export default AddNewCampaign;
