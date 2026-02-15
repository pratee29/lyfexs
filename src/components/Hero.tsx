import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const words = ["Observe", "Learn", "Discuss", "Support", "Pause"];

const FloatingCard = ({ delay, duration }: { delay: number; duration: number }) => (
  <div
    className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10"
    style={{
      animation: `float ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      left: `${Math.random() * 80}%`,
      top: `${Math.random() * 80}%`,
    }}
  />
);

const Particle = ({ delay }: { delay: number }) => (
  <div
    className="absolute w-1 h-1 bg-orange-400/40 rounded-full"
    style={{
      animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

export default function Hero() {
  const [activeWord, setActiveWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveWord((prev) => (prev + 1) % words.length),
      2200
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] sm:min-h-screen overflow-hidden pt-12 sm:pt-16 md:pt-20 -mb-4 sm:-mb-8 md:-mb-16 bg-[#0f172a]"
    >
      {/* LAYERED BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B2E] via-[#0f172a] to-[#1a1230]" />

      {/* FLOATING GLASS CARDS */}
      <div className="absolute inset-0 z-0 hidden md:block">
        {[...Array(8)].map((_, i) => (
          <FloatingCard key={i} delay={i * 0.5} duration={15 + i * 2} />
        ))}
      </div>

      {/* PARTICLES */}
      <div className="absolute inset-0 z-0 opacity-60">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} delay={i * 0.3} />
        ))}
      </div>

      {/* ANIMATED GLOW BEHIND HEADING */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-5">
        <div
          className="w-[90%] sm:w-[70%] md:w-[60%] h-[40%] sm:h-[50%] md:h-[60%] bg-gradient-radial from-orange-500/20 via-orange-600/10 to-transparent blur-[100px] sm:blur-[140px] rounded-full animate-pulse-glow"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/50 z-5" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 min-h-[90vh] sm:min-h-screen flex items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-0">
        {/* TEXT BLOCK */}
        <div
          className="relative z-10 w-full max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8"
          style={{
            transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          {/* MAIN HEADING */}
          <div className="space-y-1 sm:space-y-2 md:space-y-4 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight">
              Welcome to Your
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold italic bg-gradient-to-r from-orange-400 via-orange-500 to-gold bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,146,60,0.5)] leading-tight">
                Online Space
              </h2>
              <div className="flex gap-1 sm:gap-2">
                <span className="text-orange-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl animate-pulse">✦</span>
                <span className="text-gold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl animate-pulse" style={{animationDelay: '0.5s'}}>✦</span>
              </div>
            </div>
          </div>

          {/* ANIMATED FEATURES */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-sm sm:text-base md:text-lg lg:text-xl text-white/80 font-medium px-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {words.map((word, i) => (
              <span
                key={word}
                className={`transition-all duration-700 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm ${
                  i === activeWord
                    ? "text-orange-400 bg-orange-500/20 scale-105 sm:scale-110 shadow-lg shadow-orange-500/20 border border-orange-400/30"
                    : "hover:text-white/90 bg-white/5 border border-white/10"
                }`}
              >
                {word}
              </span>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center pt-2 sm:pt-4 px-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button
              size="lg"
              className="w-full sm:w-auto min-w-[180px] sm:min-w-[200px] rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold
              bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600
              text-black shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70
              transform hover:scale-105 transition-all duration-300
              relative overflow-hidden group"
            >
              <span className="relative z-10">Start a Discussion</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-w-[180px] sm:min-w-[200px] rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold
              border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black
              shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40
              transform hover:scale-105 transition-all duration-300
              backdrop-blur-sm bg-white/5"
            >
              Explore Now
            </Button>
          </div>
        </div>
      </div>

      {/* DEPTH SHADOW AT BOTTOM */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent z-5" />
    </section>
  );
}
