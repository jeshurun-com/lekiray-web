import React from "react";

function Download() {
  return (
    <div id="download"
      className="snap-start py-16 px-6 bg-gray-100 text-center"
      style={{ backgroundColor: "#F7F7F7" }}
    >
      <h2 className="text-3xl font-bold text-red-500 mb-5">Download the App</h2>
      <p className="text-gray-600 mb-8">
        Experience the ease of finding your next rental. Get the app now!
      </p>
      <div className="flex justify-center space-x-5">
        {/* Google Play Button */}
        <a
          href="https://play.google.com/store"
          className="w-40"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="w-full"
          />
        </a>

        {/* App Store Button */}
        <a
          href="https://www.apple.com/app-store/"
          className="w-40"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.prod.website-files.com/5e794b4cf4f3316cdb57bab0/5e794b4cb9b0b21eaa1ca4fc_app-store.svg"
            alt="Download on the App Store"
            className="w-full"
          />
        </a>
      </div>
    </div>
  );
}

export default Download;
