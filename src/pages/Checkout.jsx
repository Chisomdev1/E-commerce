import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Recommendation from "../components/Recommendation";
import Footer from "../components/Footer";
import { getProducts } from "../utils/LocalStorage"; // or your actual import
import { ToastContainer, toast } from 'react-toastify'



export default function Checkout() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    const sanitized = stored.map((item) => ({
      ...item,
      product_name: item.product_name || "Unnamed Product",
      price: typeof item.price === "number" ? item.price : 0,
      quantity: typeof item.quantity === "number" ? item.quantity : 1,
    }));
    setCart(sanitized);
  }, []);

  const colors = cart.map(item => {
    const product = getProducts().find(p => p.id === item.id);
    return product?.colors || [];
  });

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("storage"));
  };

  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const total = cart.reduce((acc, item) => {
    const price = typeof item.price === "number" ? item.price : 0;
    const quantity = typeof item.quantity === "number" ? item.quantity : 0;
    return acc + price * quantity;
  }, 0);


  const notify = () => toast("Your cart is empty!");
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col md:flex-row mt-[7rem] p-4 gap-6 inter">

      <ToastContainer toastClassName="poppins" />

        {/* Cart Items */}
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item, idx) => (
                <li
                  key={item.id}
                  className="border p-4 rounded shadow-sm flex items-center justify-between gap-4"
                >
                  <img
                    src={item.product_image}
                    alt={item.product_name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h2 className="font-medium text-lg">
                      {item.product_name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Color:
                      <select
                        value={item.color}
                        onChange={e => {
                          const newColor = e.target.value;
                          // Update cart state and localStorage
                          const updatedCart = [...cart];
                          updatedCart[idx] = { ...item, color: newColor };
                          setCart(updatedCart);
                          localStorage.setItem("cart", JSON.stringify(updatedCart));
                          window.dispatchEvent(new Event("storage"));
                        }}
                        className="ml-2 border rounded px-2 py-1"
                      >
                        {colors.map(color => (
                          <option key={color} value={color}> {color}</option>
                        ))}
                      </select>
                    </p>
                    <p className="text-sm text-gray-600 inline-flex items-center">
                      Price: {item.price.toFixed(2)}
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
                    {(item.price * item.quantity).toFixed(2)}
                  </div>


                  <div className="text-sm text-gray-500 mt-2 justify-end flex gap-4">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm inline-block"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Order Summary */}
        <div className="w-full md:w-1/3 border p-4 rounded shadow-sm">
          <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>₦{total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-base font-bold mb-4">
            <span>
              Cart Total <span className="text-sm">({cart.length} items)</span>
            </span>
            <span>₦{total.toFixed(2)}</span>
          </div>

          <button
            className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-500"
            onClick={() => {
              if (cart.length === 0) {
                notify();
              } else {
                navigate("/shippinginfo");
              }
            }}
          >
            CHECKOUT
          </button>
        </div>
      </div>
      <Recommendation />
      <Footer />
    </div>
  );
}
