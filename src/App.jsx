import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Plans from './components/Plans';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Plans />
        <About />
        <Reviews />
        <Contact />
      </main>
      <footer className="border-t border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600">© {new Date().getFullYear()} HAPPY BOWL – Fresh bowls. Fresh energy.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#menu" className="hover:underline">Menu</a>
            <a href="#plans" className="hover:underline">Plans</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#order" className="hover:underline">Order</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
