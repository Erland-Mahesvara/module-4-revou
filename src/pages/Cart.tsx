import { useCart } from "../context/CartContext";

const Cart = () => {
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600">
          Add some products to your cart to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <button
          onClick={clearCart}
          className="text-red-600 hover:text-red-700 font-medium"
        >
          Clear Cart
        </button>
      </div>
      <div className="space-y-4">
        {state.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 border-b pb-4"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">Category: {item.category.name}</p>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      updateQuantity(item.id, item.quantity - 1);
                    }
                  }}
                  className="px-2 py-1 border rounded hover:bg-gray-100"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 border rounded hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="mt-6 space-y-4">
          <div className="flex justify-between text-lg">
            <span>Subtotal:</span>
            <span className="font-bold">${state.total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Tax (10%):</span>
            <span className="font-bold">${(state.total * 0.1).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-bold border-t pt-4">
            <span>Total:</span>
            <span>${(state.total * 1.1).toFixed(2)}</span>
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
