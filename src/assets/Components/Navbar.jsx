import React, { useState } from "react";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 py-4 px-4  shadow-xl/30 shadow-black-500/50  ">
      {/* Container for the Navbar */}
      <div className="container mx-auto flex items-center justify-between ">
        <h1 className="text-white text-2xl font-bold">Navbar</h1>
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <a href="#" className="hover:text-yellow-700 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-700 transition duration-300" >
              product
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-700 transition duration-300">
              reviews
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-700 transition duration-300">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-700 transition duration-300">
              Services
            </a>
          </li>
        </ul>
        <div className="hidden md:flex items-center">
          <input 
            type="text"
            placeholder="Search... "
            className="px-4 py-2 rounded-l focus:outline-none text-white bg-gray-700 placeholder-gray-400 hover:bg-gray-600 transition duration-300"
          />
          <button className="bg-gray-600 hover:bg-gray-300 text-white hover:text-black px-4 py-2 rounded-r">
            Search
          </button>
        </div>
        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden ">
          <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col  items-center space-y-4 text-white p-4 md:ml-4">
          <li>
            <a href="#" className="hover:text-yellow-700 transition duration-300 block py-2">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-700 transition duration-300 block py-2">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-700 transition duration-300 block py-2">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-700 transition duration-300 block py-2">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-700 transition duration-300 block py-2">
              Services
            </a>
          </li>
        </ul>
      </div>
     
    </nav>
  );
};

export default Navbar;
