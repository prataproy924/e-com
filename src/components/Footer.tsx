
export default function Footer() {
  return (
    <footer className="bg-gray-300 text-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h5 className="text-lg font-semibold">E-Com</h5>
            <p className="text-sm">We sell only the best</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 E-Com. All rights reserved.</p>
      </div>
    </footer>
  );
}