import React from 'react';
import { FaCode, FaCss3Alt, FaHtml5, FaJsSquare } from 'react-icons/fa';

const MyDonations = () => {
  const cards = [
    {
      icon: <FaCode size={50} className="text-white" />,
      title: 'HTML',
      description: 'Learn the basics of building structure for web pages.',
      gradient: 'bg-gradient-to-r from-orange-500 to-red-500',
      buttonColor: 'bg-orange-500',
    },
    {
      icon: <FaCss3Alt size={50} className="text-white" />,
      title: 'CSS',
      description: 'Style your websites and bring designs to life.',
      gradient: 'bg-gradient-to-r from-purple-500 to-indigo-500',
      buttonColor: 'bg-purple-500',
    },
    {
      icon: <FaHtml5 size={50} className="text-white" />,
      title: 'HTML5',
      description: 'Master the latest version of HTML for better performance.',
      gradient: 'bg-gradient-to-r from-blue-500 to-purple-500',
      buttonColor: 'bg-blue-500',
    },
    {
      icon: <FaJsSquare size={50} className="text-white" />,
      title: 'JavaScript',
      description: 'Add interactivity and logic to your web projects.',
      gradient: 'bg-gradient-to-r from-green-400 to-teal-500',
      buttonColor: 'bg-green-500',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-6 bg-gray-100 min-h-screen">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-64 bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105"
        >
          {/* Curved Gradient Header */}
          <div className={`h-32 ${card.gradient} flex items-center justify-center`}>
            {card.icon}
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{card.description}</p>
            <button
              className={`text-white px-4 py-2 rounded-full text-sm ${card.buttonColor} hover:opacity-90`}
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyDonations;
