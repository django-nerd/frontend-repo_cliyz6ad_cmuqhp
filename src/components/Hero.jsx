import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-block text-xs tracking-widest uppercase text-green-700 bg-green-100 px-3 py-1 rounded-full">100% Fresh • No Added Sugar</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Fresh Fruit Bowls Made Daily.
          </h1>
          <p className="text-lg text-gray-600">
            Healthy, colourful and delicious – just the way you love it.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#menu" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:shadow-md hover:bg-green-700 transition">
              Order Now
              <ArrowRight size={18} />
            </a>
            <div className="flex items-center gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"/>Fresh Fruits</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-400 rounded-full"/>Fast Delivery</div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {[
              { title: "Fresh Fruits", color: "bg-green-100", text: "text-green-700" },
              { title: "Customizable", color: "bg-yellow-100", text: "text-yellow-700" },
              { title: "Fast Delivery", color: "bg-pink-100", text: "text-pink-700" },
              { title: "Affordable", color: "bg-blue-100", text: "text-blue-700" },
            ].map((f) => (
              <div key={f.title} className={`rounded-xl ${f.color} p-3 text-center text-sm font-medium ${f.text}`}>
                {f.title}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1740&auto=format&fit=crop"
            alt="Fresh colorful fruit bowl"
            className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
          />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-300/40 rounded-full blur-2xl"/>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-300/40 rounded-full blur-2xl"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
