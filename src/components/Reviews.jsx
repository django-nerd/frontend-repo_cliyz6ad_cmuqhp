import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  { name: 'Anita', text: 'Absolutely fresh and delicious! My mornings feel lighter.', stars: 5 },
  { name: 'Rahul', text: 'The Premium plan is worth it. Love the variety!', stars: 5 },
  { name: 'Meera', text: 'Kids Mini Bowl is a hit at home. Super convenient.', stars: 4 },
  { name: 'Vikram', text: 'Quick delivery and great packaging. Recommended!', stars: 5 },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">What Customers Say</h2>
          <p className="text-slate-600 mt-2">Real feedback from our community.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 * idx }}
              className="rounded-2xl border border-slate-100 bg-white shadow p-6"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < r.stars ? 'fill-amber-400' : 'opacity-30'}`} />
                ))}
              </div>
              <p className="mt-3 text-slate-700">{r.text}</p>
              <p className="mt-4 font-medium text-slate-900">{r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
