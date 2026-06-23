import Link from "next/link";

export default function Navbar() {
  return (
    // डार्क ग्रे बैकग्राउंड हल्का ट्रांसपेरेंट रहेगा (Industrial Premium Look)
    <nav className="w-full bg-gray-900/95 backdrop-blur-md fixed top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* लेफ्ट साइड: ताऊ जी की दुकान का नाम */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-extrabold text-white tracking-wider uppercase drop-shadow-md">
              Premium <span className="text-orange-500">Fabrication</span>
            </Link>
          </div>
          
          {/* राइट साइड: लिंक्स और कॉल बटन (डेस्कटॉप व्यू के लिए) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium">
              Services
            </Link>
            <Link href="#gallery" className="text-gray-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium">
              Our Work
            </Link>
            
            {/* डायरेक्ट कॉल करने के लिए ऑरेंज ग्लो वाला बटन */}
            <a 
              href="tel:+910000000000" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md text-sm font-bold transition-all shadow-[0_0_15px_rgba(249,115,22,0.4)]"
            >
              Call Now
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
