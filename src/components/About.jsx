const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Us</h2>
          <p className="text-gray-700">
            “We started this fruit bowl business to make healthy eating easier, quicker and tastier. Every bowl is made fresh using hand-picked fruits. No added sugar. No preservatives. Just pure goodness.”
          </p>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li>Daily fresh fruits sourced from trusted farms</li>
            <li>Strict hygiene and quality checks</li>
            <li>Eco-friendly packaging</li>
            <li>Doorstep delivery across the city</li>
          </ul>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1740&auto=format&fit=crop"
            alt="Fresh fruits and shop hygiene"
            className="w-full h-80 object-cover rounded-3xl shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-300/40 rounded-full blur-2xl"/>
        </div>
      </div>
    </section>
  );
};

export default About;
