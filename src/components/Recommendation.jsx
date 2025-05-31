import React from 'react';
import beadedbag from "../assets/image/beaded_bag.jpg";


const products = Array.from({ length: 4 }).map((_, i) => ({
    id: i + 1,
    name: 'beaded bag',
    category: i % 2 === 0 ? 'Bags' : 'Accessories',
    price: '₦5,000.00',
    image: beadedbag, // Replace with actual image path or leave placeholder
  }));

const Recommendation = () => {
  return (
    //   {/* You May Like Section */}
      <div className="px-4 md:px-16 py-8">
        <h2 className="text-xl font-semibold mb-6 inter">You may also like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 p-4 rounded shadow hover:shadow-lg transition duration-200">
              <div className="w-full h-40 bg-white flex items-center justify-center mb-4 relative">
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  🔥
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-100 h-100 object-contain"
                />
              </div>
              <h3 className="text-sm font-medium inter">{product.name}</h3>
              <div className='md:inline-flex justify-between items-center w-full'>
                <p className="font-semibold text-black mt-1 inter">{product.price}</p>
                <p className="text-gray-700 text-xs inter">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Recommendation