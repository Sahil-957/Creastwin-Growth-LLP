const testimonials = [
  {
    name: "Imran Khan",
    role: "Business Owner",
    text: "I got my gold loan in just 15 minutes. The staff was very helpful and explained all the schemes clearly.",
    color: "#3b82f6"
  },
  {
    name: "Smita Joshi",
    role: "Teacher",
    text: "Flexible repayment options helped me manage my finances during a family emergency. Highly recommend!",
    color: "#f59e42"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-[#2d2d2d] text-center mb-2">What People Say About Us</h2>
      <p className="text-center text-green-700 font-medium mb-12">Our customers love our fast, transparent, and friendly service!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {testimonials.map(t => (
          <div
            key={t.name}
            className="bg-white rounded-2xl shadow-md flex flex-col items-center p-8 transition hover:shadow-lg border-b-4"
            style={{ borderBottomColor: t.color, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.06)' }}
          >
            <span className="text-yellow-400 text-3xl mb-3">★★★★★</span>
            <p className="text-center text-gray-600 mb-3 text-lg">{t.text}</p>
            <span className="font-semibold text-[#2d2d2d]">{t.name}</span>
            <span className="text-base text-gray-600">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
