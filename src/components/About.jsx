import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1505253468034-514d2507d914?q=80&w=1200&auto=format&fit=crop"
              alt="Fresh fruit bowls"
              className="rounded-2xl shadow-lg"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=800&auto=format&fit=crop"
              alt="Ingredients"
              className="absolute -bottom-6 -right-6 w-40 rounded-xl shadow-md rotate-3 border-4 border-white"
              loading="lazy"
            />
          </motion.div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">About Us</h2>
            <p className="mt-3 text-slate-600">
              We started this fruit bowl business to make healthy eating easier, quicker and tastier. Every bowl is made fresh using hand-picked fruits. No added sugar. No preservatives. Just pure goodness.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700 list-disc pl-5">
              <li>Daily fresh sourcing</li>
              <li>Strict quality checks</li>
              <li>Eco-friendly packaging</li>
              <li>Doorstep delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
