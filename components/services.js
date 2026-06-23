export default function Services() {
  // यह वो लिस्ट है जहाँ हम ताऊ जी के काम की डिटेल्स डालते हैं
  const servicesList = [
    { 
      title: "Heavy Duty Iron Gates", 
      desc: "Custom designed, incredibly strong and secure iron gates for luxury homes and showrooms." 
    },
    { 
      title: "Stainless Steel Railings", 
      desc: "Premium rust-free SS (Stainless Steel) railings with modern and elegant designs." 
    },
    { 
      title: "Industrial & Tin Sheds", 
      desc: "Durable roofing and shed solutions engineered for commercial and industrial spaces." 
    },
    { 
      title: "Custom Welding Works", 
      desc: "Precision welding, grill work, and structural repairs with a 100% strength guarantee." 
    }
  ];

  return (
    // डार्क बैकग्राउंड वाला सर्विसेज सेक्शन
    <section id="services" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* सेक्शन की हेडिंग */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-wider">
            Our <span className="text-orange-500">Expertise</span>
          </h2>
          {/* हेडिंग के नीचे एक छोटी ऑरेंज लाइन (प्रीमियम लुक के लिए) */}
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
        </div>
        
        {/* सर्विसेज के बॉक्सेस (ग्र
