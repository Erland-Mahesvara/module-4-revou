import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-red-600">
          {error || "Product not found"}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="grid grid-cols-4 gap-2">
            {product.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} ${index + 2}`}
                className="w-full h-24 object-cover rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
            {product.category.name}
          </span>
          <p className="text-gray-600">{product.description}</p>
          <div className="text-2xl font-bold text-blue-600">
            ${product.price}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M462.31-616.36v-121.49H340.15v-50.25h122.16v-121.49h50.25v121.49h121.23v50.25H512.56v121.49h-50.25ZM290.88-97.69q-27.64 0-46.85-19.35t-19.21-47q0-27.27 19.35-46.54t47-19.27q27.64 0 46.85 19.41 19.21 19.42 19.21 46.81 0 27.4-19.35 46.67-19.35 19.27-47 19.27Zm389.59 0q-27.54 0-46.67-19.35-19.13-19.35-19.13-47 0-27.27 19.27-46.54t46.81-19.27q27.53 0 46.8 19.41 19.27 19.42 19.27 46.81 0 27.4-19.35 46.67-19.35 19.27-47 19.27ZM70.82-819.74V-870h107.03l166.92 354.21h276.51q3.46 0 6.16-1.74 2.69-1.73 4.61-4.8L782.1-788.1h56.67L681.85-499.59q-9.97 16.64-25.75 26.63-15.78 9.98-34.25 9.98H327.38l-52 96.26q-3.07 4.62-.32 10 2.76 5.39 8.79 5.39h462.97v50.25H288.05q-36.13 0-54.77-29.86t-1.89-60.39l61.94-112.36L145.9-819.74H70.82Z" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
