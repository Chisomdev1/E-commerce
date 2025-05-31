import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CartPage() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col md:flex-row p-4 gap-6 inter">
        {/* Cart Items */}
        <div className="w-full md:w-2/3 mt-[7rem]">
          {[1, 2].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-b pb-4 mb-4"
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                className="accent-yellow-500 mt-2"
                defaultChecked={index === 1}
              />

              {/* Image Placeholder */}
              <div className="w-20 h-20 bg-gray-100 flex items-center justify-center">
                <span className="text-2xl">🖼️</span>
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <p className="font-medium text-sm">Bags</p>
                <p className="text-sm mt-2">
                  <span className="font-semibold">Color:</span> White
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold text-black">₦1000.00</span>
                  <div className="flex items-center border px-2 py-1 rounded">
                    <button className="text-gray-500">-</button>
                    <span className="mx-2">1</span>
                    <button className="text-gray-500">+</button>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mt-2 justify-end flex gap-4">
                  <button>Delete</button>
                  <button>Move to favorite</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/3 border p-4 rounded shadow-sm">
          <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>₦1000.00</span>
          </div>
          <div className="flex justify-between text-base font-bold mb-4">
            <span>
              Cart Total <span className="text-sm">(2 items)</span>
            </span>
            <span>₦1000.00</span>
          </div>
          <button className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-500">
            CHECKOUT
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
