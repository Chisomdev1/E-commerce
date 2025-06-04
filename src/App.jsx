import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Home";
import ProductDetails from "./pages/ProductDetail";
import SearchPage from './components/SearchPage';
import Checkout from "./pages/Checkout";
import ShippingInfo from "./pages/Shipping_Info";
import AccountDetail from "./pages/Account_Details";
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
        <Route path="/shippinginfo" element={<ShippingInfo />} />
        <Route path="/accountdetail" element={<AccountDetail />} />
        <Route path="/search" element={<SearchPage />} />

    </Routes>
  );
};

export default App;