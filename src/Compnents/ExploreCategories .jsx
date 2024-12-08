 
import { FaUserAlt, FaLightbulb, FaBriefcase, FaPaintBrush } from "react-icons/fa";

const ExploreCategories = () => {
  const categories = [
    { name: "Personal Issue", icon: <FaUserAlt />, description: "Discover ways to solve personal challenges effectively." },
    { name: "Startup", icon: <FaLightbulb />, description: "Innovative solutions and guidance for startups." },
    { name: "Business", icon: <FaBriefcase />, description: "Strategies and tools for growing your business." },
    { name: "Creative Ideas", icon: <FaPaintBrush />, description: "Unlock your creativity with innovative ideas." },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-sm text-indigo-600 font-semibold tracking-wide uppercase mb-4">Explore Opportunities</h2>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Find Your Perfect Category</h1>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Whether you are tackling personal challenges, building a startup, growing a business, or exploring creative ideas, we are here to help you unlock new possibilities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
            >
              <div className="text-indigo-600 text-4xl mb-6">{category.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800">{category.name}</h3>
              <p className="text-gray-500 mt-4">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-gray-500">
            Join Over <span className="font-bold text-gray-800">50,000+</span> Successful Individuals and Teams
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default ExploreCategories;
