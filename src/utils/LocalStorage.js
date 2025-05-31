// utils/localStorage.js

import product_image from "../assets/image/beaded_bag.jpg";

export const initializeProducts = () => {
  const products = [
    {
      id: 1,
      product_name: "Laptop",
      category: "Electronics",
      description: "A high-performance laptop for work and play.",
      price: 550000,
      image: product_image,
    },
    {
      id: 2,
      product_name: "Running Shoes",
      category: "Footwear",
      description: "Comfortable shoes for daily runs.",
      price: 80,
      image: product_image,
    },
    {
      id: 3,
      product_name: "Coffee Maker",
      category: "Appliances",
      description: "Brew the perfect cup of coffee every morning.",
      price: 100,
      image: product_image,
    },
    {
      id: 4,
      product_name: "Backpack",
      category: "Accessories",
      description: "Durable and spacious for daily use.",
      price: 45,
      image: product_image,
    },
  ];

  localStorage.setItem("products", JSON.stringify(products));
};
