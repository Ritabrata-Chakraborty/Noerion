import React from "react";
import { Mail, ArrowUpRight, GraduationCap } from "lucide-react";

interface TeamSectionProps {
  darkMode: boolean;
}

export default function TeamSection({ darkMode }: TeamSectionProps) {
  const email = "ritabratabits@gmail.com";
  const portfolioUrl = "https://ritabrata-chakraborty.github.io/Portfolio/";

  return (
    <section 
      id="team" 
      className={`py-14 px-6 md:px-12 border-t transition-colors duration-500 ${
        darkMode ? "bg-slate-900/20 border-slate-900" : "bg-slate-50 border-slate-100"
      }`}
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <span className={`font-sans text-xs font-semibold tracking-wider uppercase transition-colors duration-500 ${
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}>
            The Team
          </span>
          <h2 className={`text-2xl font-semibold tracking-tight mt-1 transition-colors duration-500 ${
            darkMode ? "text-slate-100" : "text-slate-900"
          }`}>
            Who is Behind Noreion
          </h2>
        </div>

        {/* Compact, elegant developer profile profile */}
        <div className={`max-w-2xl mx-auto rounded-xl border p-6 md:p-8 transition-all duration-300 ${
          darkMode 
            ? "border-slate-800/80 bg-slate-950/70" 
            : "border-slate-200 bg-white"
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            
            {/* Left Block: Bio */}
            <div>
              <div className="flex items-center gap-2">
                <h3 className={`text-lg font-medium transition-colors duration-500 ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}>
                  Ritabrata Chakraborty
                </h3>
                <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-sans font-semibold tracking-wider transition-colors ${
                  darkMode ? "bg-blue-950/60 text-blue-400" : "bg-blue-50 text-blue-600"
                }`}>
                  Founder
                </span>
              </div>
              
              <p className={`mt-2 text-sm leading-relaxed max-w-md text-justify transition-colors duration-500 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}>
                Ritabrata is a robotics researcher focused on autonomous navigation, planning, and human-centred robotic systems. Drawing on experience spanning academia and industry he is building Noreion to make advanced robotic autonomy practical, accessible, and deployable in real-world environments.
              </p>
            </div>

            {/* Right Block: Compressed Action Links */}
            <div className="flex flex-col gap-3 min-w-[200px]">
              <a 
                href={portfolioUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center justify-between gap-2 rounded-lg px-4 py-2.5 text-xs font-medium border transition-all duration-200 hover:-translate-y-0.5 ${
                  darkMode 
                    ? "border-slate-800 bg-slate-900 hover:bg-slate-800 text-white" 
                    : "border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-850"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <GraduationCap size={14} className="opacity-80" />
                  <span>Research Portfolio</span>
                </div>
                <ArrowUpRight size={13} className="opacity-60" />
              </a>

              <button 
                onClick={() => {
                  window.location.href = `mailto:${"ritabratabits" + "@" + "gmail.com"}?subject=Inquiry%20to%20Noreion`;
                }}
                className={`flex items-center justify-between gap-2 rounded-lg px-4 py-2.5 text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 text-left w-full cursor-pointer ${
                  darkMode 
                    ? "bg-slate-100 hover:bg-slate-200 text-slate-900" 
                    : "bg-slate-950 hover:bg-slate-850 text-white"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <Mail size={14} className="opacity-85" />
                  <span>ritabbratabits [at] gmail [dot] com</span>
                </div>
                <ArrowUpRight size={13} className="opacity-80" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
