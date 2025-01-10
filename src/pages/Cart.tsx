import { useCart } from "../context/CartContext";

const Cart = () => {
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="card text-center">
        <h2 className="font-display text-3xl font-bold mb-4 text-vintage-sepia">
          Your Cart is Empty
        </h2>
        <p className="font-body text-vintage-coffee/80">
          Add some products to your cart to see them here.
        </p>
      </div>
    );
  }

  const handleQuantityDecrease = (itemId: number, currentQuantity: number) => {
    if (currentQuantity === 1) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, currentQuantity - 1);
    }
  };

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-display text-3xl font-bold text-vintage-sepia">
          Shopping Cart
        </h2>
        <button
          onClick={clearCart}
          className="font-body text-vintage-rust hover:text-vintage-gold transition-colors font-medium"
        >
          Clear Cart
        </button>
      </div>
      <div className="space-y-4">
        {state.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 border-b border-vintage-sepia/10 pb-6"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-24 h-24 object-cover border border-vintage-sepia/10"
            />
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-vintage-sepia">
                {item.title}
              </h3>
              <p className="font-body text-vintage-coffee/80">
                Category: {item.category.name}
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  onClick={() => handleQuantityDecrease(item.id, item.quantity)}
                  className="px-3 py-1 border border-vintage-sepia/20
                           hover:bg-vintage-paper transition-colors font-body text-vintage-coffee"
                >
                  -
                </button>
                <span className="font-body text-vintage-coffee font-medium px-3">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 border border-vintage-sepia/20
                           hover:bg-vintage-paper transition-colors font-body text-vintage-coffee"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-right">
              <div className="price-tag">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="font-body text-vintage-rust hover:text-vintage-gold transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="mt-6 space-y-4">
          <div className="flex justify-between text-lg font-body text-vintage-coffee">
            <span>Subtotal:</span>
            <span className="font-bold text-vintage-sepia">
              ${state.total.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-lg font-body text-vintage-coffee">
            <span>Tax (10%):</span>
            <span className="font-bold text-vintage-sepia">
              ${(state.total * 0.1).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-xl font-display font-bold border-t border-vintage-sepia/20 pt-6 text-vintage-sepia">
            <span>Total:</span>
            <span>${(state.total * 1.1).toFixed(2)}</span>
          </div>
          <button className="btn w-full py-4 text-lg font-bold mt-6">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
