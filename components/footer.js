import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
        
        {/* लेफ्ट साइड: लोकल SEO और दुकान का नाम */}
        <div>
          <h2 className="text-xl font-bold text-white tracking-widest uppercase">
            Premium <span className="text-orange-500">Fabrication</span>
          </h2>
          {/* यह लाइन गूगल सर्च में साउथ एक्सटेंशन में रैंक करने में मदद करेगी */}
          <p className="text-gray-400 text-sm mt-2">South Extension Part 2, New Delhi</p>
        </div>
        
        {/* बीच में: काम की जानकारी और नंबर */}
        <div className="text-gray-400 text-sm space-y-1">
          <p>Top-Quality Gates, Railings & Industrial Sheds</p>
          <p>📞 +91 00000 00000</p>
        </div>

      </div>
      
      {/* सबसे नीचे: आपका 'मार्केटिंग मैग्नेट' (A S Tech Solutions) */}
      <div className="mt-8 text-center text-gray-500 text-xs border-t border-gray-800 pt-6 max-w-7xl mx-auto px-4">
        &copy; {new Date().getFullYear()} Premium Fabrication Works. All rights reserved. <br/>
        <span className="mt-3 inline-block text-gray-400">
          Engineered & Designed by <a href="mailto:aarifsaifi4180@gmail.com" className="text-orange-500 font-bold tracking-wide hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]">A S Tech Solutions</a>
        </span>
      </div>
    </footer>
  );
}
