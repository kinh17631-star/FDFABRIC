import Hero from "@/components/hero";
import Services from "@/components/services";
import WhatsApp from "@/components/whatsapp";

export default function Home() {
  return (
    // pt-20 इसलिए ताकि नेविगेशन बार हमारी फोटो के ऊपर न चढ़े
    <div className="flex flex-col min-h-screen pt-20 relative"> 
      
      {/* 1. सबसे ऊपर वेल्डर वाली सिनेमैटिक फोटो और नाम */}
      <Hero />
      
      {/* 2. बीच में ताऊ जी का इंडस्ट्रियल काम */}
      <Services />
      
      {/* 3. फ्लोटिंग व्हाट्सएप बटन */}
      <WhatsApp />
      
    </div>
  );
}
