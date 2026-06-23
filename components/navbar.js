import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900/95 backdrop-blur-md fixed top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl md:text-2xl font-extrabold text-white tracking-wider uppercase">
              F.D Saifi <span className="text-orange-500">Fabrication</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Our Services
            </Link>
            <a 
              href="tel:+919990136551" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md text-sm font-bold transition-all shadow-[0_0_15px_rgba(249,115,22,0.4)]"
            >
              Call: Saddam Saifi
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
