import { Link } from "react-router-dom";

const CampaignCard = ({ campaignCard }) => {
  const { thumbnail, title, type, description, minDonation, deadline, _id } = campaignCard;

  const currentDate = new Date();
  const deadlineDate = new Date(deadline);

  const isDeadlineOver = deadlineDate > currentDate;
 
  if (!isDeadlineOver) {
    return null;
  }

  return (
    <div className="flex justify-center">
      <div className="group relative bg-gradient-to-b from-white to-gray-50 w-full sm:w-80 md:w-96 shadow-xl rounded-lg overflow-hidden transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl">
        {/* Image Section */}
        <figure className="relative h-60 overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full shadow-md">
            #{type}
          </div>
        </figure>

        {/* Card Content */}
        <div className="p-5 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition duration-300">
            {title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
          <div className="flex justify-between text-sm text-gray-500">
            <span>
              <strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}
            </span>
            <span>
              <strong>Min Donation:</strong> <span className="text-blue-600">${minDonation}</span>
            </span>
          </div>
        </div>

        {/* Footer Action */}
        <div className="px-5 py-4 bg-gray-100 border-t">
          <Link to={`/campaignDetails/${_id}`}>
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 rounded-md shadow-md transition duration-300">
              See More &rarr;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
