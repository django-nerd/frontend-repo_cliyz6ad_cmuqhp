import { Instagram, Phone, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-green-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-green-500 text-white grid place-items-center font-bold">FB</div>
          <span className="font-semibold text-gray-900">Fruit Bowl</span>
        </a>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#home" className="text-gray-700 hover:text-green-600">Home</a>
          <a href="#menu" className="text-gray-700 hover:text-green-600">Menu</a>
          <a href="#about" className="text-gray-700 hover:text-green-600">About</a>
          <a href="#order" className="text-gray-700 hover:text-green-600">Order</a>
        </div>
        <div className="flex items-center space-x-3">
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition"
          >
            <ShoppingBag size={18} />
            <span className="hidden sm:inline">Order Now</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-gray-100 text-pink-600"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a href="tel:+15551234567" className="p-2 rounded-md hover:bg-gray-100 text-green-600" aria-label="Call">
            <Phone size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
