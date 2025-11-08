import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const plans = [
  {
    name: 'CLASSIC',
    price: '2299 RS',
    sections: [
      { title: 'Fruits', items: ['Apple', 'Banana', 'Papaya', 'Orange', 'Guava', 'Watermelon', 'Pomegranate', 'Grapes', 'Pineapple'] },
      { title: 'Vegetables', items: ['Carrot', 'Cucumber'] },
      { title: 'Boiled Items', items: ['Groundnuts', 'Sweet Corn', 'Sweet Potato'] },
      { title: 'Sprouts', items: ['Lentils', 'Green Gram', 'Moth Beans', 'Cowpea'] },
    ],
  },
  {
    name: 'PREMIUM',
    price: '2799 RS',
    sections: [
      { title: 'Fruits', items: ['Apple', 'Banana', 'Papaya', 'Orange', 'Guava', 'Watermelon', 'Pomegranate', 'Grapes', 'Pineapple', 'Dragon Fruit', 'Kiwi'] },
      { title: 'Vegetables', items: ['Carrot', 'Cucumber'] },
      { title: 'Sprouts', items: ['Lentils', 'Green Gram', 'Moth Beans', 'Cowpea'] },
      { title: 'Dryfruits', items: ['Dates', 'Raisins (Green)', 'Raisins (Black)', 'Cashew', 'Almond'] },
      { title: 'Weekly Once', items: ['Boiled Egg', 'Ragi Java'] },
    ],
  },
];

function PlanCard({ plan, idx }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
  const waText = encodeURIComponent(`Hi HAPPY BOWL! I’d like to subscribe to the ${plan.name} plan (${plan.price}).`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.08 * idx }}
      className="relative bg-white rounded-2xl border border-emerald-100 shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-baseline justify-between">
          <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
          <span className="text-emerald-600 font-semibold">{plan.price}</span>
        </div>

        <div className="mt-4 divide-y divide-slate-100">
          {plan.sections.map((sec, i) => (
            <div key={sec.title}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-3 text-left font-medium text-slate-800"
              >
                <span>{sec.title}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]' }`}>
                <div className="overflow-hidden">
                  <ul className="pl-5 pb-3 list-disc text-slate-600 text-sm">
                    {sec.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          href={`https://wa.me/9121465735?text=${waText}`}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white px-5 py-2 font-medium shadow hover:bg-emerald-600 transition"
        >
          <MessageCircle className="w-4 h-4" /> Subscribe via WhatsApp
        </a>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-emerald-200/60"></div>
    </motion.div>
  );
}

export default function Plans() {
  return (
    <section id="plans" className="py-16 bg-gradient-to-br from-green-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Monthly Plans</h2>
          <p className="text-slate-600 mt-2">Healthy eating made simple & joyful.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((p, i) => (
            <PlanCard key={p.name} plan={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
