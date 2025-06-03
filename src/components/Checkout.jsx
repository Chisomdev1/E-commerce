import React from 'react';
import { useEffect, useState } from "react";

const Checkout = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);
  return (
    <div className="w-full md:w-2/3 mt-[7rem]">
          {products.map(({ index, id, product_name }) => (
            <div key={id} className="flex items-start gap-4 border-b pb-4 mb-4">
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
                <p className="font-medium text-sm">{product_name}</p>
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

  )
}

export default Checkout