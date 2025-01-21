const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-indigo-600">
              ShopSmart
            </span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">
              Login
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">
              Register
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">
              Cart
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
