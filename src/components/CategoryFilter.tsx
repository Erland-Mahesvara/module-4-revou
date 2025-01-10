import { Category } from "../types";

interface CategoryFilterProps {
  categories: Category[];
}

const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  return (
    <div className="card w-full">
      <h3 className="font-display text-2xl font-bold mb-6 text-vintage-sepia border-b border-vintage-gold/30 pb-2">
        Categories
      </h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            className="px-6 py-2 bg-vintage-paper text-vintage-coffee rounded-md
                     hover:bg-vintage-rust hover:text-vintage-cream 
                     transition-all duration-300 font-body
                     border border-vintage-sepia/10 hover:border-transparent
                     shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
