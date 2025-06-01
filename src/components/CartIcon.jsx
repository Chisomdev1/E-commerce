import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartIcon() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCount(cart.reduce((acc, product) => acc + product.quantity, 0));
  }, []);

  useEffect(() => {
    const handleStorage = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCount(cart.reduce((acc, item) => acc + item.quantity, 0));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div className="relative cursor-pointer" onClick={() => navigate("/checkout")}>
      <span className="text-2xl">🛒</span>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  );
}
