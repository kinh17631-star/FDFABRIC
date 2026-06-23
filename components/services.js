export default function Services() {
  const servicesList = [
    { title: "Steel Gates & Windows", desc: "Custom designed premium steel gates, modern windows, and stylish safety railings." },
    { title: "Commercial Shutters", desc: "Heavy-duty rolling shutters and durable channel gates for shops and showrooms." },
    { title: "Fiber & Metal Sheds", desc: "High-grade fiber sheds and structures perfect for rooftops, parking, and balconies." },
    { title: "Welding & Door Frames", desc: "Strong door frames, precision fabrication layout, and immediate on-site welding or repairing services." }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
            Our <span className="text-orange-500">Expertise</span>
          </h2>
          <p className="mt-4 text-gray-400">High-end fabrication solutions built for ultimate strength and modern aesthetics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-md bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 text-orange-500 font-bold text-lg">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
