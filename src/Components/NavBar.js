import React from "react";

const NavBar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 shadow-md bg-white sticky top-0 z-50">
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Hotel Logo"
            className="h-12 w-12 object-contain"
          />
          <h1 className="text-lg md:text-xl font-bold text-gray-900">
            Sagar Darshan Guest House
          </h1>
        </a>
        {/* <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <a href="#about" className="hover:text-red-600">
              About Us
            </a>
          </li>
          <li>
            <a href="#booking" className="hover:text-red-600">
              Online Room Booking
            </a>
          </li>
          <li>
            <a href="#faqs" className="hover:text-red-600">
              FAQs
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-red-600">
              Contact Us
            </a>
          </li>
        </ul> */}
      </nav>
    </div>
  );
};

export default NavBar;
