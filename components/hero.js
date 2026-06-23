export default function Hero() {
  return (
    // Hero Section: यह सेक्शन बैकग्राउंड फोटो और मेन हैडलाइन दिखाएगा
    <section 
      className="relative w-full h-[85vh] flex items-center justify-center text-center px-4 bg-cover bg-center bg-no-repeat"
      style={{
        // मैंने यहां आपकी जनरेट की हुई फोटो का लिंक डाल दिया है
        backgroundImage: "url('image_0.png')"
      }}
    >
      
      {/* फोटो के ऊपर एक डार्क लेयर (Overlay) ताकि टेक्स्ट साफ़ दिखे */}
      <div className="absolute inset-0 bg-gray-900/80"></div>
      
      {/* मेन कंटेंट */}
      <div className="relative z-10 max-w-4xl mx-auto mt-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white uppercase drop-shadow-xl">
          Premium <span className="text-orange-500">Fabrication</span> Works
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          South Extension 2's most trusted name for quality iron, steel, and welding services. Engineered for strength and design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          {/* कॉल करने के लिए बटन */}
          <a href="tel:+910000000000" className="px-8 py-3 bg-orange-600 text-white font-bold rounded-md hover:bg-orange-700 transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.5)]">
            Call for Estimate
          </a>
          
          {/* काम देखने के लिए बटन */}
          <a href="#services" className="px-8 py-3 bg-transparent border-2 border-orange-500 text-orange-400 font-bold rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
