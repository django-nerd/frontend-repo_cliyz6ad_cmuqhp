import React, { useState } from 'react';
import { MapPin, Clock, Phone, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', bowl: '', address: '', notes: '' });

  const submit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi HAPPY BOWL! I’d like to order:\nName: ${form.name}\nPhone: ${form.phone}\nBowl: ${form.bowl}\nAddress: ${form.address}\nNotes: ${form.notes}`
    );
    window.open(`https://wa.me/9121465735?text=${text}`, '_blank');
  };

  return (
    <section id="order" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Order & Contact</h2>
          <p className="text-slate-600 mt-2">Serving fresh daily across our neighborhood.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-slate-100 shadow p-6"
          >
            <div className="flex items-center gap-2 text-slate-700">
              <Clock className="w-5 h-5 text-emerald-600" />
              <span>Hours: 6:00 AM – 9:00 AM</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 mt-3">
              <span>Days: Monday to Saturday</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 mt-3">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span>Location: Gajuwaka to Scindia</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 mt-3">
              <Phone className="w-5 h-5 text-emerald-600" />
              <a href="tel:+919121465735" className="text-emerald-700 hover:underline">Call/WhatsApp: 9121465735</a>
            </div>
            <div className="flex items-center gap-2 text-slate-700 mt-3">
              <Instagram className="w-5 h-5 text-emerald-600" />
              <a href="https://instagram.com/happybowl.vizag" target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline">@happybowl.vizag</a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow p-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">Name</label>
                <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Phone</label>
                <input required value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Select Bowl</label>
                <select value={form.bowl} onChange={(e)=>setForm({...form, bowl:e.target.value})} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="">Choose...</option>
                  {['Classic Fruit Bowl','Tropical Mango Bowl','Berry Blast Bowl','Banana-Nut Bowl','Protein Power Bowl','Kids Mini Bowl'].map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-600">Address</label>
                <input value={form.address} onChange={(e)=>setForm({...form, address:e.target.value})} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">Notes</label>
                <textarea value={form.notes} onChange={(e)=>setForm({...form, notes:e.target.value})} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" rows={3} />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white px-5 py-3 font-semibold shadow hover:bg-emerald-600 transition">
                <MessageCircle className="w-4 h-4" /> Order on WhatsApp
              </button>
              <a href="https://wa.me/9121465735" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 font-semibold shadow border border-slate-200 hover:bg-slate-50 transition">
                Quick Chat
              </a>
            </div>
          </motion.form>
        </div>
      </div>

      <a href="https://wa.me/9121465735" className="md:hidden fixed bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white px-4 py-3 font-semibold shadow-lg">
        <MessageCircle className="w-5 h-5" /> Order on WhatsApp
      </a>
    </section>
  );
}
