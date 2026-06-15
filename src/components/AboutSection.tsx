import { Eye, Cpu, Network } from "lucide-react";

interface AboutSectionProps {
  darkMode: boolean;
}

export default function AboutSection({ darkMode }: AboutSectionProps) {
  const cards = [
    {
       title: "Agricultural Intelligence",
       description: "Monitor orchards and farms at scale through autonomous surveillance, crop insights, anomaly detection, and perimeter awareness, helping operators make informed decisions faster.",
       icon: Cpu
    },
    {
       title: "Search & Response",
       description: "Enable robots to explore unfamiliar environments, navigate known spaces efficiently, and assist teams in locating people, detecting intrusions, and maintaining situational awareness.",
       icon: Eye
    },
    {
       title: "Mission Command",
       description: "A unified command centre that transforms complex robotic systems into intuitive tools, allowing operators to supervise missions, provide guidance, and intervene when needed.",
       icon: Network
    },
  ];

  return (
    <section 
      id="about" 
      className={`py-12 px-6 md:px-12 border-t transition-colors duration-500 ${
        darkMode ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-100"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <span className={`font-sans text-xs font-semibold tracking-wider uppercase transition-colors duration-500 ${
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}>
            Core Capabilities
          </span>
          <h2 className={`text-2xl font-semibold tracking-tight mt-1 transition-colors duration-500 ${
            darkMode ? "text-slate-100" : "text-slate-900"
          }`}>
            What We Are Exploring
          </h2>
        </div>

        {/* 3 Columns Displayed Simultaneously */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`rounded-xl border p-6 md:p-8 transition-all duration-300 flex flex-col justify-between ${
                  darkMode 
                    ? "border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-950" 
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs"
                }`}
              >
                <div>
                  <div className={`flex h-11 w-11 items-center justify-center rounded-lg border mb-5 transition-colors ${
                    darkMode 
                      ? "border-slate-800 bg-slate-900 text-blue-400" 
                      : "border-slate-100 bg-slate-50 text-blue-600"
                  }`}>
                    <Icon size={20} />
                  </div>
                  
                  <h3 className={`text-lg font-medium tracking-tight transition-colors duration-500 ${
                    darkMode ? "text-slate-100" : "text-slate-900"
                  }`}>
                    {card.title}
                  </h3>
                  
                  <p className={`mt-3 text-sm leading-relaxed text-justify transition-colors duration-500 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

