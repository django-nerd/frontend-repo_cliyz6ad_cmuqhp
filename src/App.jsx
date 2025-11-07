import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Reviews />
      <Contact />
      <footer className="py-8 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Fruit Bowl. Fresh bowls. Fresh energy.</p>
          <div className="text-sm text-gray-600">Follow us: <a className="text-pink-600 hover:underline" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a> • <a className="text-green-600 hover:underline" href="https://wa.me/15551234567" target="_blank" rel="noreferrer">WhatsApp</a></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
