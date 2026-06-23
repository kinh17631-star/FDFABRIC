import "./globals.css";
import Navbar from "@/components/navbar"; 
import Footer from "@/components/footer"; 

export const metadata = {
  title: "F.D Saifi Fabrication | South Extension 2, New Delhi",
  description: "Premium fabrication works in South Extension Part 2, New Delhi. Expert in Steel Gates, windows, rolling shutters, fiber sheds, railings, channel gates, and expert welding repairs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-900 text-gray-100 antialiased selection:bg-orange-500 selection:text-white">
        <Navbar /> 
        <main className="min-h-screen">{children}</main> 
        <Footer /> 
      </body>
    </html>
  );
}
