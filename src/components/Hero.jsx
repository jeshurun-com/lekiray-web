import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      id="hero"
      className="snap-start relative h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Header */}
      <header className="flex justify-between items-center w-full p-5 bg-white/90 fixed top-0 z-50">
        {/* Logo */}
        <div className="text-red-500 font-bold text-2xl capitalize">lekiray</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-5">
          <a href="#hero" className="text-black font-medium hover:text-red-500">
            HOME
          </a>
          <a href="#about" className="text-black font-medium hover:text-red-500">
            ABOUT
          </a>
          <a
            href="#features"
            className="text-black font-medium hover:text-red-500"
          >
            FEATURES
          </a>
          <a
            href="#download"
            className="text-black font-medium hover:text-red-500"
          >
            DOWNLOAD
          </a>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="cursor-pointer" />
          ) : (
            <FaBars className="cursor-pointer" />
          )}
        </button>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white w-full absolute top-16 left-0 py-5 shadow-lg z-40 transition-transform duration-300 ease-in-out">
          <a
            href="#hero"
            className="block text-black font-medium hover:text-red-500 px-5 py-3 border-b border-gray-300"
          >
            HOME
          </a>
          <a
            href="#about"
            className="block text-black font-medium hover:text-red-500 px-5 py-3 border-b border-gray-300"
          >
            ABOUT
          </a>
          <a
            href="#features"
            className="block text-black font-medium hover:text-red-500 px-5 py-3 border-b border-gray-300"
          >
            FEATURES
          </a>
          <a
            href="#download"
            className="block text-black font-medium hover:text-red-500 px-5 py-3"
          >
            DOWNLOAD
          </a>
        </nav>
      )}

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-grow text-center text-white mt-20 md:mt-0">
        <h1 className="md:text-4xl text-3xl sm:text-4xl lg:text-5xl font-medium mb-8">
          <Typewriter
            words={[
              "Discover Your Ideal Rental Space with Ease!",
              "Find Your Space, Anytime, Anywhere!",
            ]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={40}
            delaySpeed={3500}
          />
        </h1>
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
}

export default Hero;
