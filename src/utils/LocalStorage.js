

export const initializeProducts = () => {
  const products = [
    {
      id: 1,
      product_name: "Laptop",
      category: "Electronics",
      description: "A high-performance laptop for work and play.",
      price: 55000,
      product_image: "/assets/image/beaded_bag.jpg", // Use a public path or static folder
    },
    {
      id: 2,
      product_name: "Running Shoes",
      category: "Footwear",
      description: "Comfortable shoes for daily runs.",
      price: 80,
      image: "/assets/image/beaded_bag.jpg",
    },
    {
      id: 3,
      product_name: "Coffee Maker",
      category: "Appliances",
      description: "Brew the perfect cup of coffee every morning.",
      price: 100,
      image: "/assets/image/beaded_bag.jpg",
    },
    {
      id: 4,
      product_name: "Backpack",
      category: "Accessories",
      description: "Durable and spacious for daily use.",
      price: 45,
      product_image: "/assets/image/beaded_bag.jpg",
    },
    {
      id: 5,
      product_name: "Puma",
      category: "Footwear",
      description: "Comfortable shoes for daily runs.",
      price: 2900,
      image: "/assets/image/beaded_bag.jpg",
    },
  ];

  localStorage.setItem("products", JSON.stringify(products));
};


export function getProducts() {
  return JSON.parse(localStorage.getItem('products')) || [];
}