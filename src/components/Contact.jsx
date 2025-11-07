import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="order" className="py-16 bg-gradient-to-t from-yellow-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Order & Contact</h2>
          <p className="text-gray-700">Place your order using the form or message us directly on WhatsApp. We deliver fresh bowls to your doorstep.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
              <Clock className="text-green-600" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Delivery Timing</p>
                <p className="text-sm text-gray-600">Mon–Sun: 8:00 AM – 9:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
              <MapPin className="text-green-600" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p className="text-sm text-gray-600">Downtown, Main Street, City</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
              <Phone className="text-green-600" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
              <Mail className="text-green-600" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-sm text-gray-600">hello@fruitbowl.shop</p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition"
          >
            <MessageCircle size={18} /> Order on WhatsApp
          </a>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Name</label>
              <input type="text" required className="mt-1 w-full border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Phone</label>
              <input type="tel" required className="mt-1 w-full border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500" />
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-700">Select Bowl</label>
            <select className="mt-1 w-full border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500">
              <option>Classic Fruit Bowl</option>
              <option>Tropical Mango Bowl</option>
              <option>Berry Blast Bowl</option>
              <option>Banana-Nut Bowl</option>
              <option>Protein Power Bowl</option>
              <option>Kids Mini Bowl</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-700">Address</label>
            <input type="text" className="mt-1 w-full border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Notes</label>
            <textarea rows="3" className="mt-1 w-full border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="Any special requests?" />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition">Submit Order Request</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
