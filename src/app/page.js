import Image from "next/image";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import WhyUs from "../components/WhyUs.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Schemes from "../components/Schemes.jsx";
import FAQ from "../components/FAQ.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e8eaf6] to-[#f5f5f5] flex flex-col items-center justify-between p-0 font-sans">
      <Navbar />
      <Hero />
      <WhyUs />
      <HowItWorks />
      <Schemes />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}
