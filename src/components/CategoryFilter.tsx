import { useEffect, useState } from "react";
import { Category } from "../types";

interface CategoryFilterProps {
  onCategorySelect: (categoryId: number | null) => void;
  selectedCategoryId: number | null;
}

const CategoryFilter = ({
  onCategorySelect,
  selectedCategoryId,
}: CategoryFilterProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch categories"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div className="p-4">Loading categories...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="w-64">
      <div className="bg-white shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="space-y-2">
          <button
            key="all"
            className={`w-full text-left px-4 py-2 rounded transition-colors ${
              selectedCategoryId === null
                ? "bg-indigo-100 text-indigo-700"
                : "hover:bg-indigo-50 hover:text-indigo-600"
            }`}
            onClick={() => onCategorySelect(null)}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`w-full text-left px-4 py-2 rounded transition-colors ${
                selectedCategoryId === category.id
                  ? "bg-indigo-100 text-indigo-700"
                  : "hover:bg-indigo-50 hover:text-indigo-600"
              }`}
              onClick={() => onCategorySelect(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
