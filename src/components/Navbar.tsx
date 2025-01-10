import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const Navbar = () => {
  const { state } = useCart();
  const cartItemCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality will be implemented later
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="w-48">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              ShopSmart 🛒
            </Link>
          </div>

          <div className="flex-1 flex justify-center">
            <form onSubmit={handleSearch} className="w-full max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2 pl-10 pr-8 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="w-48 flex items-center justify-end space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
            <Link to="/register" className="text-gray-700 hover:text-blue-600">
              Register
            </Link>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-blue-600 flex items-center"
            >
              Cart
              {cartItemCount > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
