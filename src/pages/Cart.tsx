import { useCart } from "../context/CartContext";

const Cart = () => {
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="bg-retro-background rounded-lg shadow-pixel p-6 text-center border-4 border-retro-secondary">
        <h2 className="text-xl font-retro mb-4 text-retro-text">
          Your Cart is Empty
        </h2>
        <p className="text-retro-text/80">
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
    <div className="bg-retro-background rounded-lg shadow-pixel p-6 border-4 border-retro-secondary">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-retro text-retro-text">Shopping Cart</h2>
        <button
          onClick={clearCart}
          className="text-retro-accent hover:text-retro-secondary font-retro"
        >
          Clear Cart
        </button>
      </div>
      <div className="space-y-4">
        {state.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 border-b-4 border-retro-secondary pb-4"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-base font-retro text-retro-text">
                {item.title}
              </h3>
              <p className="text-retro-text/80 text-sm">
                Category: {item.category.name}
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  onClick={() => handleQuantityDecrease(item.id, item.quantity)}
                  className="px-2 py-1 border-4 border-retro-secondary rounded hover:bg-retro-primary text-retro-text"
                >
                  -
                </button>
                <span className="text-retro-text">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 border-4 border-retro-secondary rounded hover:bg-retro-primary text-retro-text"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-retro text-retro-accent">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-retro-accent hover:text-retro-secondary font-retro text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="mt-6 space-y-4">
          <div className="flex justify-between text-base">
            <span className="text-retro-text">Subtotal:</span>
            <span className="font-retro text-retro-accent">
              ${state.total.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-base">
            <span className="text-retro-text">Tax (10%):</span>
            <span className="font-retro text-retro-accent">
              ${(state.total * 0.1).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-lg font-retro border-t-4 border-retro-secondary pt-4">
            <span className="text-retro-text">Total:</span>
            <span className="text-retro-accent">
              ${(state.total * 1.1).toFixed(2)}
            </span>
          </div>
          <button className="w-full bg-retro-accent text-retro-background py-3 rounded-lg hover:bg-retro-secondary transition-colors font-retro">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
