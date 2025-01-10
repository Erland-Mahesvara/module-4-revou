const Cart = () => {
  const exampleItem = {
    id: 1,
    title: "Vintage Leather Bag",
    category: { name: "Accessories" },
    images: ["https://i.imgur.com/tT2Obph.jpeg"],
    price: 129.99,
    quantity: 1,
  };

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-display text-3xl font-bold text-vintage-sepia">
          Shopping Cart
        </h2>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-4 border-b border-vintage-sepia/10 pb-6">
          <img
            src={exampleItem.images[0]}
            alt={exampleItem.title}
            className="w-24 h-24 object-cover border border-vintage-sepia/10"
          />
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold text-vintage-sepia">
              {exampleItem.title}
            </h3>
            <p className="font-body text-vintage-coffee/80">
              Category: {exampleItem.category.name}
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <button
                className="px-3 py-1 border border-vintage-sepia/20
                         hover:bg-vintage-paper transition-colors font-body text-vintage-coffee"
              >
                -
              </button>
              <span className="font-body text-vintage-coffee font-medium px-3">
                {exampleItem.quantity}
              </span>
              <button
                className="px-3 py-1 border border-vintage-sepia/20
                         hover:bg-vintage-paper transition-colors font-body text-vintage-coffee"
              >
                +
              </button>
            </div>
          </div>
          <div className="text-right">
            <div className="price-tag">
              ${(exampleItem.price * exampleItem.quantity).toFixed(2)}
            </div>
            <button className="font-body text-vintage-rust hover:text-vintage-gold transition-colors">
              Remove
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between text-lg font-body text-vintage-coffee">
            <span>Subtotal:</span>
            <span className="font-bold text-vintage-sepia">
              ${exampleItem.price.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-lg font-body text-vintage-coffee">
            <span>Tax (10%):</span>
            <span className="font-bold text-vintage-sepia">
              ${(exampleItem.price * 0.1).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-xl font-display font-bold border-t border-vintage-sepia/20 pt-6 text-vintage-sepia">
            <span>Total:</span>
            <span>${(exampleItem.price * 1.1).toFixed(2)}</span>
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
