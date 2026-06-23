export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Unit 1: About & Shop Name */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-widest uppercase">
            F.D Saifi <span className="text-orange-500">Fabrication</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium quality steel gates, railings, rolling shutters, and structural welding works in Delhi.
          </p>
        </div>
        
        {/* Unit 2: Exact Location */}
        <div className="space-y-3">
          <h3 className="text-white font-bold text-md uppercase tracking-wider">Our Workshop</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Shop no. 45 Sohan Lal mkt,<br />
            Masjid Moth, South Extn, Part 2,<br />
            New Delhi - 110049
          </p>
        </div>
        
        {/* Unit 3: Contact Persons */}
        <div className="space-y-3">
          <h3 className="text-white font-bold text-md uppercase tracking-wider">Contact Us</h3>
          <div className="text-gray-400 text-sm space-y-2">
            <p className="hover:text-white transition-colors">
              👤 <span className="text-white font-medium">Saddam Saifi:</span> <a href="tel:+919990136551">+91 99901 36551</a>
            </p>
            <p className="hover:text-white transition-colors">
              👤 <span className="text-white font-medium">Sabir Saifi:</span> <a href="tel:+917532970755">+91 75329 70755</a>
            </p>
          </div>
        </div>

      </div>
      
      {/* Footer Bottom (Your Brand Advertisement) */}
      <div className="mt-12 text-center text-gray-500 text-xs border-t border-gray-900 pt-6 max-w-7xl mx-auto px-4">
        &copy; {new Date().getFullYear()} F.D Saifi Fabrication. All rights reserved. <br/>
        <span className="mt-3 inline-block text-gray-400 text-sm">
          Website Coded & Managed by <a href="mailto:aarifsaifi4180@gmail.com" className="text-orange-500 font-bold tracking-wide hover:text-white transition-all duration-300 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]">A S Tech Solutions</a>
        </span>
      </div>
    </footer>
  );
}
