import Hero from "@/components/hero";
import Services from "@/components/services";
import WhatsApp from "@/components/whatsapp";

export default function Home() {
  return (
    // pt-20 इसलिए है ताकि आपका Navbar किसी टेक्स्ट को न छुपाए
    <div className="flex flex-col min-h-screen pt-20 relative bg-gray-900"> 
      
      {/* 1. साउथ एक्सटेंशन वाला सिनेमैटिक बैनर */}
      <Hero />
      
      {/* 2. स्टील गेट और वेल्डिंग का काम */}
      <Services />
      
      {/* 3. सद्दाम भाई का डायरेक्ट व्हाट्सएप */}
      <WhatsApp />
      
    </div>
  );
}
