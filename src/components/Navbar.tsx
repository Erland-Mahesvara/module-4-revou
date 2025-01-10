import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="bg-vintage-coffee border-b border-vintage-cream/10 shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center h-20">
          <div className="w-48">
            <Link
              to="/"
              className="text-3xl font-display font-bold text-vintage-cream hover:text-vintage-gold transition-colors"
            >
              Seven Pennies
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
                  className="input w-full pl-10 bg-vintage-cream"
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-vintage-coffee/60 pointer-events-none"
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
            <Link
              to="/login"
              className="text-vintage-paper/80 hover:text-vintage-gold transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-vintage-paper/80 hover:text-vintage-gold transition-colors"
            >
              Register
            </Link>
            <Link
              to="/cart"
              className="text-vintage-paper/80 hover:text-vintage-gold transition-colors flex items-center"
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
