import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelfSelectionBar from "./components/SelfSelectionBar";
import AdvantageGrid from "./components/AdvantageGrid";
import AudioDemo from "./components/AudioDemo";
import EconomicsSection from "./components/EconomicsSection";
import SocialProof from "./components/SocialProof";
import HowItWorks from "./components/HowItWorks";
import LeadCapture from "./components/LeadCapture";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-jet-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SelfSelectionBar />
        <AdvantageGrid />
        <AudioDemo />
        <EconomicsSection />
        <SocialProof />
        <HowItWorks />
        <LeadCapture />
      </main>
      <Footer />
      <WhatsAppWidget />

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-40 bg-jet-black/80 backdrop-blur-xl border-t border-white/10"
          >
            <a
              href="#contact"
              className="btn-premium w-full text-center"
            >
              Book My Strategy Session
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
