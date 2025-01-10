import { Category } from "../types";

interface CategoryFilterProps {
  categories: Category[];
}

const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  return (
    <div className="bg-retro-background p-6 rounded-lg shadow-pixel w-full border-4 border-retro-secondary">
      <h3 className="text-base font-retro mb-4 text-retro-text">Categories</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            className="px-4 py-1.5 bg-retro-primary text-retro-text text-sm rounded-full hover:bg-retro-accent hover:text-retro-background transition-colors"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
