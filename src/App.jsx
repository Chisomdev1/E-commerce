import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Home"
import ProductDetails from "./pages/Products_Detail"
import Checkout from "./pages/Checkout"
import { initializeProducts } from "./utils/LocalStorage";
import { useEffect } from "react";
const App = () => {

  useEffect(() => {
    initializeProducts(); // only call once
  }, []);

  return (
    <Routes>

        <Route path="/" element={<Index />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />

    </Routes>
  );
};

export default App;