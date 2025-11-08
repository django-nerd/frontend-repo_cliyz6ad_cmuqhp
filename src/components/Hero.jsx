import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-pink-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pt-24 md:pb-28 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Fresh Fruit Bowls Made Daily.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-slate-600 max-w-prose"
            >
              Healthy, colourful and delicious – just the way you love it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              {['100% Fresh', 'No Added Sugar', 'Customizable', 'Doorstep Delivery'].map((b) => (
                <span key={b} className="inline-flex items-center rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-sm text-emerald-700 shadow-sm">
                  {b}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#order" className="inline-flex items-center rounded-full bg-emerald-500 text-white px-5 py-3 font-semibold shadow hover:bg-emerald-600 transition">
                Order Now
              </a>
              <a href="#menu" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 font-semibold shadow border border-slate-200 hover:bg-slate-50 transition">
                Explore Menu
              </a>
            </motion.div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] md:h-[580px]">
            <Spline scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["Fresh Fruits", "Customizable", "Fast Delivery", "Affordable"].map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="rounded-2xl bg-white/80 border border-white/60 shadow p-4 text-center text-slate-700"
            >
              {t}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating micro-animations */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 rounded-full bg-emerald-400/70"
            initial={{ y: Math.random() * 600, x: Math.random() * 1200, opacity: 0.6 }}
            animate={{ y: [null, (Math.random() * 600) - 30], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 6 + Math.random() * 6, repeat: Infinity, repeatType: 'mirror' }}
          />
        ))}
      </div>
    </section>
  );
}
