import React from 'react';

function Hero() {
  return (
    <div className="h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
      <header className="flex justify-between items-center w-full p-5 bg-white/90">
        <div className="text-red-500 font-bold text-2xl">lekiray</div>
        <nav className="flex space-x-5">
          <a href="#" className="text-black font-bold hover:text-red-500">HOME</a>
          <a href="#" className="text-black font-bold hover:text-red-500">ABOUT</a>
          <a href="#" className="text-black font-bold hover:text-red-500">FEATURES</a>
          <a href="#" className="text-black font-bold hover:text-red-500">DOWNLOAD</a>
        </nav>
      </header>

      <div className="flex flex-col items-center justify-center flex-grow text-center text-white">
        <h1 className="text-4xl font-bold mb-5">FIND YOUR SPACE, ANYTIME, ANYWHERE.</h1>
        <div className="flex space-x-5">
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
    </div>
  );
};

export default Hero;