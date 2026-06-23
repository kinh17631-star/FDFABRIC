export default function Hero() {
  return (
    <section 
      className="relative w-full h-[85vh] flex items-center justify-center text-center px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000&auto=format&fit=crop')"
      }}
    >
      <div className="absolute inset-0 bg-gray-900/85"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto mt-16">
        <span className="text-orange-500 font-bold tracking-widest text-sm uppercase bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/30">
          South Extension Part 2, Delhi
        </span>
        
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mt-6 mb-6 text-white uppercase drop-shadow-xl">
          F.D Saifi <span className="text-orange-500">Fabrication</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Top-quality welding, steel structure design, and custom fabrication works. Serving premium residential & commercial spaces in South Delhi since years.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a href="tel:+919990136551" className="px-8 py-3 bg-orange-600 text-white font-bold rounded-md hover:bg-orange-700 transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.5)]">
            Call Saddam Saifi
          </a>
          <a href="#services" className="px-8 py-3 bg-transparent border-2 border-orange-500 text-orange-400 font-bold rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
