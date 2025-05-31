import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Shipping_Info = () => {
  return (
    <div className="min-h-screen bg-amber-50 p-4 md:p-8 mt-[7rem] inter">
      <Navbar />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shipping Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-md shadow border border-yellow-200">
          <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="input" />
              <input type="text" placeholder="Last Name" className="input" />
            </div>
            <input type="email" placeholder="Email Address" className="input" />
            <input type="tel" placeholder="Phone Number" className="input" defaultValue="+234" />
            <input type="text" placeholder="Address" className="input" />
            <select className="input">
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Kano">Kano</option>
            </select>
            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-6 rounded transition"
            >
              Save
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-md shadow border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="mb-2 flex justify-between">
            <span>Subtotal</span>
            <span>₦1000.00</span>
          </div>
          <div className="mb-4 flex justify-between font-bold">
            <span>Cart Total (₦)</span>
            <span>₦1000.00</span>
          </div>
          <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded transition">
            CHECKOUT
          </button>
        </div>
      </div>

      {/* Shipping Info */}
      <div className="max-w-4xl mx-auto mt-10 bg-white border border-gray-200 p-6 rounded-md shadow">
        <h2 className="font-medium">Shipping info</h2>
        <p className="mt-2 mb-1">5 - 7 Business days shipping time</p>
        <p className="font-semibold">₦1000.00</p>
        <p className="text-xs text-gray-500 mt-2">
          Total Delivery Time = Production Time + Shipping Time
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Shipping_Info