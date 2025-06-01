import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import Recommendation from "../components/Recommendation";
import Footer from "../components/Footer";

const Products_Detail = () => {

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = cart.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      cart[itemIndex].quantity += 1;
    } else {
      cart.push({ id, name: product.name, price: product.price, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage")); // trigger update
  };


  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      const products = JSON.parse(stored);
      const found = products.find((item) => item.id === parseInt(id));
      setProduct(found);
    }
  }, [id]);

  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header */}
      <Navbar />

      {/* Main Product Section */}
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-[7rem]">
        {/* Product Image */}
        <div className="flex items-center justify-center bg-yellow-50 p-12">
          <div className="bg-gray-200 w-60 h-60 flex items-center justify-center text-gray-400 text-4xl">
            <img src={product.product_image} alt="" />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-semibold mb-2 inter">
            {product.product_name}
          </h1>
          <p className="text-lg text-[#806B07] font-bold mb-4 inter">
            ${product.price.toFixed(2)}
          </p>

          {/* Color Options */}
          <div className="mb-4">
            <span className="font-medium mr-2 inter">Color:</span>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded border border-gray-400 bg-yellow-100"></button>
              <button className="w-8 h-8 rounded border border-gray-400 bg-pink-100"></button>
              <button className="w-8 h-8 rounded border border-gray-400 bg-green-100"></button>
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-4 inter mb-5">
            <label className="block mb-1 font-medium">Quantity</label>
            <div className="flex items-center space-x-2">
              <button
                onClick={decrease}
                className="w-8 h-8 flex items-center justify-center bg-black text-white rounded"
              >
                –
              </button>
              <span className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded">
                {quantity}
              </span>
              <button
                onClick={increase}
                className="w-8 h-8 flex items-center justify-center bg-black text-white rounded"
              >
                +
              </button>
              <p className="ml-4 text-sm text-gray-600">
                Each Bag takes <strong>5–7 days</strong>
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 poppins">
              {product.description}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-black text-[#FFFFFF] py-3 items-center inline-flex justify-center rounded hover:bg-gray-900 transition inter"  onClick={handleAddToCart}>
            ADD TO CART
            <ShoppingCart className="w-6 h-6 text-white" />
          </button>
        </div>
      </main>

      {/* Recommendations */}
      <Recommendation />
      <Footer />
    </div>
  );
};

export default Products_Detail;
