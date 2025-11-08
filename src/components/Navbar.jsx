import React, { useEffect, useState } from 'react';
import { ShoppingBag, Instagram, Phone, MessageCircle } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#plans', label: 'Plans' },
  { href: '#order', label: 'Order' },
];

export default function Navbar() {
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-slate-900 text-lg">HAPPY BOWL</a>

        <ul className="hidden md:flex items-center gap-6 text-slate-700">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`py-2 inline-block transition-colors ${active === l.href ? 'text-slate-900 border-b-2 border-emerald-500' : 'hover:text-slate-900'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/9121465735"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-600 transition shadow"
          >
            <ShoppingBag className="w-4 h-4" /> Order Now
          </a>
          <a
            href="https://instagram.com/happybowl.vizag"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-full hover:bg-slate-100 transition"
          >
            <Instagram className="w-5 h-5 text-slate-700" />
          </a>
          <a href="tel:+919121465735" aria-label="Call" className="p-2 rounded-full hover:bg-slate-100 transition">
            <Phone className="w-5 h-5 text-slate-700" />
          </a>
        </div>

        <div className="md:hidden">
          <a
            href="https://wa.me/9121465735"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white px-3 py-2 text-sm font-medium shadow"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
