import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../types";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch products"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="p-4">Loading products...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="flex-1 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
                {product.category.name}
              </span>
              <p className="text-gray-600 mb-2 line-clamp-2">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-between items-center">
                <span className="text-lg font-bold text-indigo-600">
                  ${product.price}
                </span>
                <div className="flex gap-2">
                  <button className="bg-indigo-600 text-white px-2 py-2 rounded hover:bg-indigo-700 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                      fill="#e8eaed"
                    >
                      <path d="M465-613v-123H341v-60h124v-123h60v123h123v60H525v123h-60ZM289.79-80Q260-80 239-101.21t-21-51Q218-182 239.21-203t51-21Q320-224 341-202.79t21 51Q362-122 340.79-101t-51 21Zm404 0Q664-80 643-101.21t-21-51Q622-182 643.21-203t51-21Q724-224 745-202.79t21 51Q766-122 744.79-101t-51 21ZM62-820v-60h116l170 364h287.71L796-796h67L701-493q-11 19-28.56 30.5T634-451H331l-56 104h491v60H284q-37.66 0-57.33-30T224-378l64-118-148-324H62Z" />
                    </svg>
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
