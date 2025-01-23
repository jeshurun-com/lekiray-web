import React from "react";

function About() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Lekiray is a rental marketplace app designed to connect property
            owners with potential renters. The app facilitates listing and
            renting of homes, workspaces, and commercial properties, providing a
            seamless experience for both parties.
          </p>
        </div>
        {/* Image Section */}
        <div>
          <img
            src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your actual image link
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
