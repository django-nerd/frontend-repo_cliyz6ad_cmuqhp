const reviews = [
  { name: "Aisha R.", rating: 5, text: "Super fresh and tasty! The Berry Blast is my go-to lunch." },
  { name: "Mark D.", rating: 5, text: "Fast delivery and great portions. Love the customizable options." },
  { name: "Priya K.", rating: 4, text: "Kids Mini Bowl is perfect for my little one. Healthy and fun!" },
  { name: "Leo P.", rating: 5, text: "Protein Power Bowl keeps me fueled post workout. Highly recommend." },
];

const StarRow = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={i < count ? "#f59e0b" : "#e5e7eb"}
        className="w-4 h-4"
      >
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.402 8.168L12 18.896l-7.336 3.868 1.402-8.168L.132 9.21l8.2-1.192z"/>
      </svg>
    ))}
  </div>
);

const Reviews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="text-gray-600 mt-2">Real reviews from our happy bowl lovers.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition bg-white">
              <StarRow count={r.rating} />
              <p className="text-gray-700 mt-3 text-sm">“{r.text}”</p>
              <p className="text-gray-900 font-semibold mt-4">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
