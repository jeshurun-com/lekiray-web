import React from "react";

function Features() {
  const features = [
    {
      icon: "📍",
      title: "Explore By Location",
      description: "Search rentals near you or in your desired area.",
    },
    {
      icon: "🗺️",
      title: "Map Integration",
      description:
        "View properties on a map to explore neighborhoods and accessibility.",
    },
    {
      icon: "💡",
      title: "Easy To Use",
      description:
        "Enjoy a safe, intuitive platform designed for your convenience.",
    },
  ];

  return (
    <div id="features" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-red-500">Key Features</h2>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center p-6 border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="text-red-600 text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
