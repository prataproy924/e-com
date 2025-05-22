
export default function Categories() {
  const categories = ["Electronics", "Clothing", "Home", "Books", "Beauty"];

  return (
    <section className="py-10 bg-blue-300 text-white">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-6 text-center">Shop by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="border p-4 rounded text-center hover:shadow-md hover:bg-blue-400">
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}