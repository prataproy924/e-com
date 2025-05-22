
import ProductCard from './ProductCard';

interface Product {
  name: string;
  price: number;
  image: string;
}

export default function ProductGrid() {
  const products: Product[] = [
    { name: "Laptop", price: 999, image: "https://via.placeholder.com/300x200?text=Laptop " },
    { name: "T-Shirt", price: 29, image: "https://via.placeholder.com/300x200?text=T-Shirt " },
    { name: "Smartphone", price: 699, image: "https://via.placeholder.com/300x200?text=Phone " },
    { name: "Headphones", price: 149, image: "https://via.placeholder.com/300x200?text=Headphones " },
    { name: "Watch", price: 199, image: "https://via.placeholder.com/300x200?text=Watch " },
    { name: "Shoes", price: 89, image: "https://via.placeholder.com/300x200?text=Shoes " },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-6 text-center">Popular Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}