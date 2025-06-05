import React from "react";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import image1 from "../assets/image/image1.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      {/* Header Section */}

      <div className="md:mt-[7rem] mt-[7.6rem] ">
        <img
          src={image1}
          alt="Beaded Bag"
          className="w-full h-50 object-cover"
        />
      </div>

      {/* Trending Beads Section */}
      <div className="px-3 md:px-16 py-8">
        <h2 className="text-xl font-semibold mb-6 inter">🔥 Trending Beads</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map(
            ({ id, product_name, category, price, image }) => (
              <Link
                to={`/product/${id}`}
                key={id}
                className=""
              >
                <div className="w-full h-40 bg-white flex items-center justify-center mb-4 relative">
                <span className="absolute top-2 left-2 bg-[#F4EBD0] text-white text-xs px-1 py-1 rounded-[4px]">
                🔥
              </span>
                  <img
                    src={image}
                    alt={product_name}
                    className="w-100 h-80 object-contain"
                  />
                </div>
                <div className="bg-[#FEF9E9] p-4">
                  <h3 className="text-sm font-medium inter">{product_name}</h3>
                  <div className="md:inline-flex justify-between items-center w-full">
                    <p className="font-semibold text-black mt-1 inter">
                    ₦{price}
                    </p>
                    <p className="text-gray-700 text-xs inter">{category}</p>
                  </div>
                  </div>
              </Link>
            )
          )}
        </div>
        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 border bg-[#D4AF37] text-[#FFFFFF] rounded poppins inline-flex items-center">
            Show More
            <FaArrowDown className="ml-2"/>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
