import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Product } from "../types";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Link
        to="/"
        className="text-indigo-600 hover:text-indigo-800 mb-6 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full aspect-square object-cover bg-gray-100 rounded-lg"
          />
        </div>

        <div>
          <div className="text-indigo-600 font-medium mb-2">
            {product.category.name.toUpperCase()}
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>

          <div className="text-3xl font-bold text-indigo-600 mb-6">
            ${product.price}
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          <button className="w-full bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Additional Images
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {product.images.slice(1).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.title} view ${index + 2}`}
              className="w-full aspect-square object-cover bg-gray-100 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
