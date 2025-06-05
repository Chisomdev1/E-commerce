import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PaymentInfo = () => {
  const [copiedField, setCopiedField] = useState("");

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(""), 2000);
    });
  };

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    const sanitized = stored.map((item) => ({
      ...item,
      price: typeof item.price === "number" ? item.price : 0,
      quantity: typeof item.quantity === "number" ? item.quantity : 1,
    }));
    setCart(sanitized);
  }, []);

  const total = cart.reduce((acc, item) => {
    const price = typeof item.price === "number" ? item.price : 0;
    const quantity = typeof item.quantity === "number" ? item.quantity : 0;
    return acc + price * quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-[#fffdf5] flex flex-col justify-between">

      <Navbar />

      {/* Main Content */}
      <main className="flex-grow p-4 flex justify-center mt-[7rem] inter">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
          <div className="border border-yellow-500 bg-yellow-50 rounded-md p-4 mb-4 text-center text-sm">
            <span className="text-yellow-600 font-medium">👋 Hello, we are waiting...</span>
            <p className="text-gray-700 mt-2">
              Please transfer the exact amount of your order to the account below and check your email for payment confirmation.
            </p>
          </div>

          <div className="space-y-4">

            {/* Account Number */}
            <div>
              <p className="text-gray-500 text-sm">Account Number</p>
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">1222222222</p>
                <div className="flex items-center space-x-2">
                  {copiedField === "account" ? (
                    <span className="text-green-600 text-xs font-medium">Copied!</span>
                  ) : (
                    <button
                      onClick={() => handleCopy("1222222222", "account")}
                      className="text-sm text-yellow-600 border border-yellow-600 rounded px-2 py-1 hover:bg-yellow-100"
                    >
                      Copy Account
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Bank Name */}
            <div>
              <p className="text-gray-500 text-sm">Bank Name</p>
              <p className="font-semibold">First Bank of Nigeria</p>
            </div>

            {/* Beneficiary */}
            <div>
              <p className="text-gray-500 text-sm">Beneficiary Name</p>
              <p className="font-semibold">Name on Account</p>
            </div>

            <hr />

            {/* Grand Total */}
            <div>
              <p className="text-gray-500 text-sm">Grand Total</p>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold">₦{total.toFixed(2)}</p>
                <div className="flex items-center space-x-2">
                  {copiedField === "amount" ? (
                    <span className="text-green-600 text-xs font-medium">Copied!</span>
                  ) : (
                    <button
                      onClick={() => handleCopy(total.toFixed(2), "amount")}
                      className="text-sm text-yellow-600 border border-yellow-600 rounded px-2 py-1 hover:bg-yellow-100"
                    >
                      Copy Amount
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Instruction + WhatsApp Link */}
            <p className="text-xs text-gray-600 mt-4">
              Please kindly transfer the exact amount of{" "}
              <span className="text-yellow-600 font-medium">{total.toFixed(2)}</span> to avoid cancellation of your order, and click{" "}
              <a
                href="https://wa.me/2348020895339?text=Hello%2C%20I%20just%20made%20a%20payment%20of%20%E2%82%A6<span>₦{Number(product.price).toFixed(2)}</span>%20to%20Omoflexy%20Bead%20Empire."
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 font-medium underline cursor-pointer"
              >
                Money sent
              </a>{" "}
              for email confirmation.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentInfo;
