import Navbar from "./components/Navbar";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <CategoryFilter />
          <ProductList />
        </div>
      </main>
    </div>
  );
}

export default App;
