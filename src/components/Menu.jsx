const bowls = [
  {
    name: "Classic Fruit Bowl",
    price: "$8.99",
    desc: "A colorful mix of seasonal fruits with honey-lime drizzle.",
    img: "https://images.unsplash.com/photo-1543339308-43f2b89d4f30?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Tropical Mango Bowl",
    price: "$9.99",
    desc: "Sweet mangoes, pineapple, coconut flakes and chia.",
    img: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Berry Blast Bowl",
    price: "$9.49",
    desc: "Strawberries, blueberries and raspberries with granola.",
    img: "https://images.unsplash.com/photo-1511690272784-2f21e46c0f53?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Banana-Nut Bowl",
    price: "$8.49",
    desc: "Banana slices, toasted nuts and a peanut butter swirl.",
    img: "https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Protein Power Bowl",
    price: "$10.99",
    desc: "Greek yogurt, mixed fruits, seeds and protein crunch.",
    img: "https://images.unsplash.com/photo-1572441710534-7800e8eae6a2?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Kids Mini Bowl",
    price: "$5.99",
    desc: "Small-sized bowl with fun cut fruits – kid approved!",
    img: "https://images.unsplash.com/photo-1505253216365-79d3d2648cf0?q=80&w=1740&auto=format&fit=crop",
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Best-Selling Bowls</h2>
          <p className="text-gray-600 mt-2">Made fresh daily with hand-picked ingredients.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bowls.map((bowl) => (
            <div key={bowl.name} className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition bg-white flex flex-col">
              <img src={bowl.img} alt={bowl.name} className="h-48 w-full object-cover" />
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-lg text-gray-900">{bowl.name}</h3>
                  <span className="text-green-600 font-semibold">{bowl.price}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2 flex-1">{bowl.desc}</p>
                <a href="#order" className="mt-4 inline-block text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Order Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
