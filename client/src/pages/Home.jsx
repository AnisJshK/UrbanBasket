import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-green-100 selection:text-green-800">
      
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <CTABanner />
      <Footer />
    </div>
  );
}