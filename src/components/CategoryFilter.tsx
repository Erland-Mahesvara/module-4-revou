import { Category } from "../types";

interface CategoryFilterProps {
  categories: Category[];
}

const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow w-full">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
