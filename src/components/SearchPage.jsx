import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getProducts } from '../utils/LocalStorage';

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    const products = getProducts(); // or however you fetch your products

    const filtered = products.filter(
      (product) =>
        (product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (product.category && product.category.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setResults(filtered);
  }, [searchQuery]);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-semibold">
        Search Results for "{searchQuery}"
      </h1>
      
      {results.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {results.map((product) => (
            <div
              key={product.id}
              className="cursor-pointer rounded-md border border-gray-200 p-4 hover:shadow-md"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="font-medium text-gray-900">{product.name}</div>
              <div className="text-sm text-gray-500">{product.category}</div>
              <div className="mt-2 font-bold">₦{product.price.toLocaleString()}</div>
            </div>
          ))}
        </div>
      ) : searchQuery ? (
        <div className="text-center text-gray-500">
          No results found for "{searchQuery}"
        </div>
      ) : (
        <div className="text-center text-gray-500">
          Enter a search term to find products
        </div>
      )}
    </div>
  );
};

export default SearchPage;