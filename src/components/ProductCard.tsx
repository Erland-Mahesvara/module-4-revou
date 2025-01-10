import { Link } from "react-router-dom";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 flex flex-col h-48">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {product.description}
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-blue-600">
            ${product.price}
          </span>
          <Link
            to={`/product/${product.id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
