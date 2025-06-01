import React, { useState } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import CartIcon from "./CartIcon";

import logo from "../assets/image/logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="bg-[#D4AF37] place-items-end w-full px-3 py-2 poppins">
        <p>
          Contact <span>About</span>
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-blue-600">
            <img src={logo} alt="" className="w-35 h-14" />
          </div>
          <div className="hidden md:flex space-x-3 items-center poppins">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Beaded Bags |
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Beaded Bracelet |
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Beaded Necklace |
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Beaded Top
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-3 items-center">
            {/* Search Bar */}

            <div className="px-3 py-1 border border-gray-300 rounded-[20px] focus:outline-none focus:ring-2 poppins focus:ring-blue-500 inline-flex items-center">
              <input type="text" placeholder="Search for Beads" />

              <div className="bg-black rounded-[20px] p-1">
                <Search className="w-6 h-6 text-white cursor-pointer" />
              </div>
            </div>

            {/* Icons */}
            <div className="flex space-x-4 items-center">
              <CartIcon className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer" />
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pt-2 pb-4 space-y-3">
          <div className="inline-flex items-center">
            <div className="px-3 py-1 border border-gray-300 rounded-[20px] focus:outline-none focus:ring-2 poppins focus:ring-blue-500 inline-flex items-center">
              <input type="text" placeholder="Search for Beads" />

              <div className="bg-black rounded-[20px] p-1">
                <Search className="w-6 h-6 text-white cursor-pointer" />
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600" />
            </div>
          </div>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Beaded Bags
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Beaded Bracelet
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Beaded Necklace
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Beaded Top
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
