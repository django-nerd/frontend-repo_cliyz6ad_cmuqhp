import React from 'react';
import { motion } from 'framer-motion';

const bowls = [
  {
    name: 'Classic Fruit Bowl',
    price: '$8.99',
    desc: 'A colorful mix of seasonal fruits with honey-lime drizzle.',
    img: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bbf?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Tropical Mango Bowl',
    price: '$9.99',
    desc: 'Sweet mangoes, pineapple, coconut flakes and chia.',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Berry Blast Bowl',
    price: '$9.49',
    desc: 'Strawberries, blueberries and raspberries with granola.',
    img: 'https://images.unsplash.com/photo-1467453678174-768ec283a940?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Banana-Nut Bowl',
    price: '$8.49',
    desc: 'Banana slices, toasted nuts and a peanut butter swirl.',
    img: 'https://images.unsplash.com/photo-1455853659719-4b521eebc76d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Protein Power Bowl',
    price: '$10.99',
    desc: 'Greek yogurt, mixed fruits, seeds and protein crunch.',
    img: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Kids Mini Bowl',
    price: '$5.99',
    desc: 'Small-sized bowl with fun cut fruits – kid approved!',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Popular Bowls</h2>
          <p className="text-slate-600 mt-2">Fresh, customizable and made daily.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bowls.map((b, idx) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              className="bg-white rounded-2xl border border-slate-100 shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="overflow-hidden">
                <img src={b.img} alt={b.name} className="h-48 w-full object-cover hover:scale-105 transition duration-300" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{b.name}</h3>
                  <span className="text-emerald-600 font-semibold">{b.price}</span>
                </div>
                <p className="text-slate-600 text-sm mt-2">{b.desc}</p>
                <a href="#order" className="inline-flex mt-4 rounded-full bg-emerald-500 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-600 transition">
                  Order Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
