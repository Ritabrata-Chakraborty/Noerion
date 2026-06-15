import React, { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight, Compass, ShieldCheck, Database, Calendar } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import AbstractBackground from "./components/AbstractBackground";
import AboutSection from "./components/AboutSection";
import VisionSection from "./components/VisionSection";
import TeamSection from "./components/TeamSection";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const companyName = "Noreion";
  const founderPortfolio = "https://ritabrata-chakraborty.github.io/Portfolio/";

  // Synchronize document classes if we want to use standard tailwind's dark: class modifiers
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 overflow-x-hidden ${
      darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50/20 text-slate-900"
    }`}>
      {/* 1. Navbar */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        companyName={companyName}
        founderPortfolio={founderPortfolio}
      />

      {/* Main Grid Wrapper with subtle spatial background */}
      <div className="relative w-full">
        <AbstractBackground darkMode={darkMode} />

        {/* 2. Hero Section */}
        <section className="relative px-6 pt-16 pb-20 md:pt-24 md:pb-28 flex justify-center items-center">
          <div className="mx-auto max-w-7xl w-full text-left relative z-10 font-sans">

            {/* Dynamic Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight transition-colors duration-500 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Autonomy for <br />
              <span className={`transition-colors duration-500 ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}>
                Real-World Operations
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed transition-colors duration-500 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Smarter robotic operations powered by autonomy and guided by human expertise.
            </motion.p>
          </div>
        </section>

        {/* 3. About Section */}
        <AboutSection darkMode={darkMode} />

        {/* 4. Vision Section */}
        <VisionSection darkMode={darkMode} />

        {/* 5. Team Section */}
        <TeamSection darkMode={darkMode} />

        {/* 7. Footer */}
        <footer className={`border-t transition-colors duration-500 py-12 px-6 md:px-12 ${
          darkMode ? "bg-slate-950 border-slate-900 text-slate-500" : "bg-white border-slate-100 text-slate-500"
        }`}>
          <div className="mx-auto max-w-7xl flex flex-col items-center justify-center gap-4 text-center">
            <div className="text-xs font-sans tracking-wide">
              <span>© 2026 {companyName}. All rights reserved.</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
