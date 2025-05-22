
interface Product {
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded overflow-hidden shadow hover:shadow-lg transition-shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="font-medium">{product.name}</h4>
        <p className="text-gray-600">${product.price}</p>
        <button className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-1 rounded text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
}