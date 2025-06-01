import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Recommendation from "../components/Recommendation";
import Footer from "../components/Footer";

export default function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("storage"));
  };

  const increaseQty = (id) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart
      .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
      .filter(item => item.quantity > 0);
    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    updateCart(updated);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col md:flex-row mt-[7rem] p-4 gap-6 inter">
        {/* Cart Items */}

        {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="border p-4 rounded shadow-sm flex items-center justify-between gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="font-medium text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                  <p className="text-sm text-gray-600">
                    Price: ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
                <div className="text-right font-medium w-24">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-xl font-semibold text-right">
            Total: ${total.toFixed(2)}
          </div>
        </>
      )}

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
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-500">
            CHECKOUT
          </button>
        </div>
      </div>
      <Recommendation />
      <Footer />
    </div>
  );
}
