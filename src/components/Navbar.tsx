import React, { useState } from "react";
import { Sun, Moon, ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  companyName: string;
  founderPortfolio: string;
}

export default function Navbar({ darkMode, setDarkMode, companyName, founderPortfolio }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollSmoothTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`sticky top-0 z-50 border-b transition-colors duration-500 backdrop-blur-md ${
      darkMode 
        ? "border-slate-800/80 bg-slate-950/85 text-slate-100" 
        : "border-slate-200/80 bg-white/85 text-slate-900"
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left: Logo & Company Name */}
        <div className="flex items-center gap-3">
          {/* Custom elegant abstract geometric logo placeholder */}
          <div className="relative flex h-6 w-6 items-center justify-center">
            <div className={`absolute inset-0 rotate-45 rounded border transition-colors duration-500 ${
              darkMode ? "border-slate-400" : "border-slate-900"
            }`} />
            <div className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
              darkMode ? "bg-blue-400" : "bg-blue-600"
            }`} />
          </div>
          <span className="text-md font-semibold tracking-tight uppercase font-sans">
            {companyName}
          </span>
        </div>

        {/* Right: Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a 
            href="#about" 
            onClick={(e) => scrollSmoothTo("about", e)}
            className={`transition-colors duration-200 ${
              darkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            About
          </a>
          <a 
            href="#team" 
            onClick={(e) => scrollSmoothTo("team", e)}
            className={`transition-colors duration-200 ${
              darkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Team
          </a>

          {/* Theme Toggle Button */}
          <button 
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors border ${
              darkMode 
                ? "border-slate-800 hover:bg-slate-900 text-slate-300 hover:text-white" 
                : "border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900"
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

        {/* Mobile controls: Search/Toggle & Hamburger menu */}
        <div className="flex md:hidden items-center gap-2">
          <button 
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors border ${
              darkMode 
                ? "border-slate-800 text-slate-300" 
                : "border-slate-200 text-slate-600"
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors border ${
              darkMode 
                ? "border-slate-800 text-slate-300" 
                : "border-slate-200 text-slate-600"
            }`}
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t px-6 py-6 transition-colors duration-500 ${
          darkMode ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white"
        }`}>
          <div className="flex flex-col gap-5 text-sm font-medium">
            <a 
              href="#about" 
              onClick={(e) => scrollSmoothTo("about", e)}
              className={`py-1 ${
                darkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              About
            </a>
            <a 
              href="#team" 
              onClick={(e) => scrollSmoothTo("team", e)}
              className={`py-1 ${
                darkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Team
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
