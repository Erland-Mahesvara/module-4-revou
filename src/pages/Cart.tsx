const Cart = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <div className="space-y-4">
        {/* Sample cart item */}
        <div className="flex items-center space-x-4 border-b pb-4">
          <img
            src="https://placehold.co/100x100"
            alt="Product"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Sample Product</h3>
            <p className="text-gray-600">Category: Electronics</p>
            <div className="flex items-center space-x-2 mt-2">
              <button className="px-2 py-1 border rounded hover:bg-gray-100">
                -
              </button>
              <span>1</span>
              <button className="px-2 py-1 border rounded hover:bg-gray-100">
                +
              </button>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold">$99.99</div>
            <button className="text-red-600 hover:text-red-700">Remove</button>
          </div>
        </div>

        {/* Cart summary */}
        <div className="mt-6 space-y-4 border-t pt-4">
          <div className="flex justify-between text-lg">
            <span>Subtotal:</span>
            <span className="font-bold">$99.99</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Tax (10%):</span>
            <span className="font-bold">$10.00</span>
          </div>
          <div className="flex justify-between text-xl font-bold border-t pt-4">
            <span>Total:</span>
            <span>$109.99</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
