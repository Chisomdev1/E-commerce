import React from 'react';
import { FaTruck, FaSmile, FaShieldAlt, FaStar } from 'react-icons/fa';
import beadImage from '../assets/image/beaded_designs.png'; // adjust path to your image

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f7] text-black px-6 py-12 grid md:grid-cols-2 inter">
      {/* Top Features */}
      <div className="flex flex-wrap justify-around border-b pb-8 mb-8 md:mr-9">
        <Feature img={<FaStar />} label="Newly made for you" />
        <Feature icon={<FaShieldAlt />} label="Safe & Trustworthy" />
        <Feature icon={<FaTruck />} label="Fast Delivery" />
        <Feature icon={<FaSmile />} label="Friendly Services" />
      </div>

      {/* Bottom Footer Content */}
      <div className="flex flex-wrap items-start justify-between md:w-[89%]">
        {/* Contacts */}
        <div className="md:mb-4 ">
          <h3 className="font-bold mb-2">Contacts</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">TikTok</a></li>
            <li><a href="#" className="hover:underline">WhatsApp</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="md:mb-4">
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul>
            <li><a href="#" className="hover:underline font-semibold">About</a></li>
          </ul>
        </div>

        {/* Beaded Image with Logo Text */}
        <div className="w-full md:w-auto">
          <div className="relative w-[290px] h-[270px]">
            <img
              src={beadImage}
              alt="Beaded Design"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const Feature = ({ icon, label }) => (
  <div className="flex flex-col items-center text-center space-y-2 w-32">
    <div className="text-2xl">{icon}</div>
    <p className="text-sm">{label}</p>
  </div>
);

export default Footer;
