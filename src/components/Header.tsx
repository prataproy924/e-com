
export default function Header() {
  return (
    <header className="bg-blue-200 hover:bg-blue-300 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
        <h1 className="text-xl font-bold">E-Com</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/products" className="hover:text-blue-500">Products</a></li>
            <li><a href="/cart" className="hover:text-blue-500">Cart</a></li>
            <li><a href="/login" className="hover:text-blue-500">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}