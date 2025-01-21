import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Product } from "../types";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch product"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="p-4">Loading product details...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!product) return <div className="p-4">Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/"
        className="text-indigo-600 hover:text-indigo-800 mb-6 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-4">
        {/* Main Image */}
        <div className="w-full">
          <img
            className="w-full h-[500px] object-cover"
            src={product.images[0]}
            alt={product.title}
          />
        </div>

        {/* Product Details */}
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
            {product.category.name}
          </div>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            {product.title}
          </h1>
          <p className="mt-4 text-xl font-bold text-indigo-600">
            ${product.price}
          </p>
          <p className="mt-4 text-gray-600">{product.description}</p>

          <div className="mt-8">
            <button
              onClick={handleAddToCart}
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="#e8eaed"
              >
                <path d="M471.92-626.08v-121.46H349.46v-30.77h122.46v-121.46h30.77v121.46h120.69v30.77H502.69v121.46h-30.77Zm-175.21 510.7q-24 0-40.2-16.42-16.2-16.41-16.2-40.41 0-22.87 16.41-39.25 16.42-16.39 40.42-16.39 23.99 0 40.2 16.6 16.2 16.6 16.2 39.85t-16.42 39.63q-16.41 16.39-40.41 16.39Zm377.08 0q-23.68 0-39.66-16.42-15.98-16.41-15.98-40.41 0-22.87 16.18-39.25 16.18-16.39 39.85-16.39t40.05 16.6q16.39 16.6 16.39 39.85t-16.42 39.63q-16.41 16.39-40.41 16.39ZM90.46-829.23V-860h90.62l163.84 346.31h269.14q6.93 0 12.31-3.46 5.38-3.47 9.23-9.62l141.94-251.54h34.69L667.15-511.46q-9.04 13.61-22.61 22.42-13.57 8.81-28.84 8.81H327.15l-53.69 100.15q-6.15 9.23-.77 20 5.39 10.77 17.69 10.77h440.24v30.77H294q-30.74 0-46.56-25.38-15.82-25.39-1.9-51l64.77-116.46-148.77-317.85H90.46Z" />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Additional Images */}
        {product.images.length > 1 && (
          <div className="p-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Additional Images
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {product.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title} - Image ${index + 2}`}
                  className="h-48 w-full object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
