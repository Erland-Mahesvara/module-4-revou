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
    <nav className="bg-vintage-cream border-b border-vintage-sepia/20 shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center h-20">
          <div className="w-48">
            <Link
              to="/"
              className="text-3xl font-display font-bold text-vintage-sepia hover:text-vintage-gold transition-colors"
            >
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
                  className="input w-full"
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-vintage-sepia/60"
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

          <div className="w-48 flex items-center justify-end space-x-6">
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
            <Link to="/cart" className="nav-link flex items-center">
              Cart
              {cartItemCount > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-vintage-rust text-vintage-cream text-xs rounded-full font-bold">
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
