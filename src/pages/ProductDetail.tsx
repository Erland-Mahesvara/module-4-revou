import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        <div className="font-display text-2xl text-vintage-coffee/60">
          Loading...
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="font-display text-2xl text-vintage-rust">
          {error || "Product not found"}
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-96 object-cover border border-vintage-sepia/10"
          />
          <div className="grid grid-cols-4 gap-2">
            {product.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} ${index + 2}`}
                className="w-full h-24 object-cover cursor-pointer 
                         border border-vintage-sepia/10 hover:border-vintage-gold 
                         transition-all duration-300 hover:shadow-md"
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="font-display text-4xl font-bold text-vintage-sepia">
            {product.title}
          </h1>
          <span className="inline-block px-4 py-1.5 bg-vintage-paper text-vintage-coffee font-body text-sm">
            {product.category.name}
          </span>
          <p className="font-body text-vintage-coffee/80 text-lg leading-relaxed">
            {product.description}
          </p>
          <div className="text-3xl font-bold text-vintage-sepia mb-6">
            ${product.price}
          </div>
          <div>
            <button className="w-full btn bg-vintage-rust text-vintage-cream hover:bg-vintage-gold py-4 text-lg font-bold flex items-center justify-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="currentColor"
              >
                <path d="M462.31-616.36v-121.49H340.15v-50.25h122.16v-121.49h50.25v121.49h121.23v50.25H512.56v121.49h-50.25ZM290.88-97.69q-27.64 0-46.85-19.35t-19.21-47q0-27.27 19.35-46.54t47-19.27q27.64 0 46.85 19.41 19.21 19.42 19.21 46.81 0 27.4-19.35 46.67-19.35 19.27-47 19.27Zm389.59 0q-27.54 0-46.67-19.35-19.13-19.35-19.13-47 0-27.27 19.27-46.54t46.81-19.27q27.53 0 46.8 19.41 19.27 19.42 19.27 46.81 0 27.4-19.35 46.67-19.35 19.27-47 19.27ZM70.82-819.74V-870h107.03l166.92 354.21h276.51q3.46 0 6.16-1.74 2.69-1.73 4.61-4.8L782.1-788.1h56.67L681.85-499.59q-9.97 16.64-25.75 26.63-15.78 9.98-34.25 9.98H327.38l-52 96.26q-3.07 4.62-.32 10 2.76 5.39 8.79 5.39h462.97v50.25H288.05q-36.13 0-54.77-29.86t-1.89-60.39l61.94-112.36L145.9-819.74H70.82Z" />
              </svg>
              Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
