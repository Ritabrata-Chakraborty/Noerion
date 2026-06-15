interface VisionSectionProps {
  darkMode: boolean;
}

export default function VisionSection({ darkMode }: VisionSectionProps) {
  return (
    <section 
      className={`py-14 px-6 md:px-12 transition-colors duration-500 border-t ${
        darkMode ? "bg-slate-950/20 border-slate-900" : "bg-white border-slate-100"
      }`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <span className={`font-sans text-xs font-semibold tracking-wider uppercase transition-colors duration-500 ${
          darkMode ? "text-blue-400" : "text-blue-600"
        }`}>
          Core Philosophy
        </span>
        
        <h2 className={`text-3xl font-semibold tracking-tight mt-1 mb-4 transition-colors duration-500 ${
          darkMode ? "text-slate-100" : "text-slate-900"
        }`}>
          Our Vision
        </h2>

        {/* Elegant editorial quote layout */}
        <div className="relative max-w-2xl mx-auto">
          {/* Top-left decoration bracket */}
          <div className={`absolute -top-6 -left-6 h-6 w-6 border-t-2 border-l-2 transition-colors duration-500 ${
            darkMode ? "border-slate-800" : "border-slate-200"
          }`} />
          
          <blockquote className={`text-xl md:text-2xl leading-relaxed font-sans tracking-tight font-light transition-colors duration-500 ${
            darkMode ? "text-slate-300" : "text-slate-700"
          }`}>
            "We envision a future where autonomous systems become trusted partners in critical operations, helping responders search faster, enabling farmers to monitor larger areas with fewer resources, and empowering security teams with persistent awareness. By combining robotic autonomy with human expertise, we aim to make intelligent operations safer, more effective, and accessible across industries."
          </blockquote>

          {/* Bottom-right decoration bracket */}
          <div className={`absolute -bottom-6 -right-6 h-6 w-6 border-b-2 border-r-2 transition-colors duration-500 ${
            darkMode ? "border-slate-800" : "border-slate-200"
          }`} />
        </div>
      </div>
    </section>
  );
}
