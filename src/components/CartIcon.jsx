import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartIcon() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCount(cart.reduce((acc, item) => acc + item.quantity, 0));
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
    <div
      className="relative cursor-pointer inter"
      onClick={() => navigate("/checkout")}
    >
      <span className="text-2xl">
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 5H5.71094C4.74786 5 4.26653 5 3.87598 5.17521C3.5317 5.32965 3.23841 5.57838 3.02947 5.89258C2.79244 6.24902 2.71276 6.72386 2.55443 7.67383L1.62109 13.2738L1.62072 13.2759C1.40728 14.5565 1.3005 15.1972 1.48595 15.6965C1.64877 16.1348 1.96058 16.5022 2.36621 16.7349C2.82844 17 3.47776 17 4.77734 17H15.2224C16.522 17 17.1724 17 17.6346 16.7349C18.0402 16.5022 18.3513 16.1348 18.5141 15.6965C18.6995 15.1974 18.5928 14.557 18.3795 13.2774L18.3786 13.2738L17.4453 7.67383C17.287 6.72386 17.2077 6.24902 16.9707 5.89258C16.7618 5.57838 16.4682 5.32965 16.124 5.17521C15.7334 5 15.2524 5 14.2893 5H14M6 5H14M6 5C6 2.79086 7.79086 1 10 1C12.2091 1 14 2.79086 14 5"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  );
}
