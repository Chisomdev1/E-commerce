import Bracelet1 from '../assets/image/Bracelet1.jpeg';
import Bracelet2 from '../assets/image/Bracelet2.jpeg';
import Bracelet3 from '../assets/image/Bracelet3.jpeg';
import Necklace1 from '../assets/image/Necklace1.jpeg';
import Necklace2 from '../assets/image/Necklace2.jpeg';
import Necklace3 from '../assets/image/Necklace3.jpeg';
import beadedTop1 from '../assets/image/beadedTop1.jpeg';
import beadedTop2 from '../assets/image/beadedTop2.jpeg';
import beadedBag1 from '../assets/image/beadedBag1.jpeg';
import beadedBag2 from '../assets/image/beadedBag2.jpeg';


export const initializeProducts = () => {
  const products = [
    {
      id: 1,
      product_name: "Beaded Bracelet",
      category: "Beaded Bracelet",
      description: "A high-performance laptop for work and play.",
      price: 11200,
      product_image: Bracelet1, // Use a public path or static folder
      colors: ["Red", "Blue", "Green"], 
    },

    {
      id: 2,
      product_name: "Necklace",
      category: "Beaded Necklace",
      description: "Comfortable shoes for daily runs.",
      price: 9500,
      product_image: Necklace1, // Use a public path or static folder
      colors: ["Red", "Blue", "Green"], 
    },

    {
      id: 3,
      product_name: "Beaded Top",
      category: "Beaded Top",
      description: "Brew the perfect cup of coffee every morning.",
      price: 10000,
      product_image: beadedTop1,
      colors: ["Red", "Blue", "Green"], 
    },

    {
      id: 4,
      product_name: "Beaded Bag",
      category: "Beaded Bag",
      description: "Durable and spacious for daily use.",
      price: 4500,
      product_image: beadedBag1,
      colors: ["Red", "Blue", "Green"], 
    },

    {
      id: 5,
      product_name: "Beaded Bracelet",
      category: "Beaded Bracelet",
      description: "A high-performance laptop for work and play.",
      price: 15000,
      product_image: Bracelet2, // Use a public path or static folder
      colors: ["Red", "Blue", "Green"], 
    },

    {
      id: 6,
      product_name: "Necklace",
      category: "Beaded Necklace",
      description: "Comfortable shoes for daily runs.",
      price: 5000,
      product_image: Necklace2, // Use a public path or static folder
      colors: ["Red", "Blue", "Green"], 
    },

    {
      id: 7,
      product_name: "Beaded Top",
      category: "Beaded Top",
      description: "Brew the perfect cup of coffee every morning.",
      price: 10000,
      product_image: beadedTop2,
      colors: ["Red", "Blue", "Green"], 
    },

    {
      id: 8,
      product_name: "Beaded Bag",
      category: "Beaded Bag",
      description: "Durable and spacious for daily use.",
      price: 9400,
      product_image: beadedBag2,
      colors: ["Red", "Blue", "Green"], 
    },

    {
      id: 9,
      product_name: "Beaded Bracelet",
      category: "Beaded Bracelet",
      description: "A high-performance laptop for work and play.",
      price: 12500,
      product_image: Bracelet3, // Use a public path or static folder
      colors: ["Red", "Blue", "Green"], 
    },

    {
      id: 10,
      product_name: "Necklace",
      category: "Beaded Necklace",
      description: "Comfortable shoes for daily runs.",
      price: 9500,
      product_image: Necklace3, // Use a public path or static folder
      colors: ["Red", "Blue", "Green"], 
    },
  ];

  localStorage.setItem("products", JSON.stringify(products));
};


export function getProducts() {
  return JSON.parse(localStorage.getItem('products')) || [];
}