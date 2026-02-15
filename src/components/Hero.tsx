import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

// Avatars (24)
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";
import avatar7 from "@/assets/avatar-7.jpg";
import avatar8 from "@/assets/avatar-8.jpg";
import avatar9 from "@/assets/avatar-9.jpg";
import avatar10 from "@/assets/avatar-10.jpg";
import avatar11 from "@/assets/avatar-11.jpg";
import avatar12 from "@/assets/avatar-12.jpg";
import avatar13 from "@/assets/avatar-1.jpg";
import avatar14 from "@/assets/avatar-2.jpg";
import avatar15 from "@/assets/avatar-3.jpg";
import avatar16 from "@/assets/avatar-4.jpg";
import avatar17 from "@/assets/avatar-5.jpg";
import avatar18 from "@/assets/avatar-6.jpg";
import avatar19 from "@/assets/avatar-7.jpg";
import avatar20 from "@/assets/avatar-8.jpg";
import avatar21 from "@/assets/avatar-9.jpg";
import avatar22 from "@/assets/avatar-10.jpg";
import avatar23 from "@/assets/avatar-11.jpg";
import avatar24 from "@/assets/avatar-12.jpg";

const avatars = [
  avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8,
  avatar9, avatar10, avatar11, avatar12, avatar13, avatar14, avatar15, avatar16,
  avatar17, avatar18, avatar19, avatar20, avatar21, avatar22, avatar23, avatar24,
];

const words = ["Observe", "Learn", "Discuss", "Support", "Pause"];

export default function Hero() {
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveWord((prev) => (prev + 1) % words.length),
      2200
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-[90vh] sm:min-h-screen overflow-hidden pt-12 sm:pt-16 md:pt-20 -mb-4 sm:-mb-8 md:-mb-16
      bg-gradient-to-b from-[#050B2E] via-[#120C2F] to-[#050B2E]"
    >
      {/* BACKGROUND AVATAR GRID */}
      <div className="absolute inset-x-0 top-[80px] sm:top-[96px] md:top-[120px] bottom-0 z-0 px-4 sm:px-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3 md:gap-4">
          {avatars.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl"
            >
              <div className="absolute inset-0 bg-black/30 sm:bg-black/20" />
              <img
                src={src}
                alt="avatar"
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 min-h-[90vh] sm:min-h-screen flex items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-0">

        {/* CHOCOLATY BLUR BEHIND TEXT */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="
              w-[90%] sm:w-[80%] md:w-[65%] h-[50%] sm:h-[60%] md:h-[65%]
              bg-[#5A2A1A]/60 sm:bg-[#5A2A1A]/70
              blur-[80px] sm:blur-[120px] md:blur-[140px]
              rounded-full
            "
          />
        </div>

        {/* TEXT BLOCK */}
        <div className="relative z-10 w-full max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">

          {/* MAIN HEADING */}
          <div className="space-y-1 sm:space-y-2 md:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight">
              Welcome to Your
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold italic text-[#FDBA4D] drop-shadow-[0_0_25px_rgba(253,186,77,0.35)] leading-tight">
                Online Space
              </h2>
              <div className="flex gap-1 sm:gap-2">
                <span className="text-[#FDBA4D] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl animate-pulse">✦</span>
                <span className="text-[#FDBA4D] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl animate-pulse" style={{animationDelay: '0.5s'}}>✦</span>
              </div>
            </div>
          </div>

          {/* ANIMATED FEATURES */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-sm sm:text-base md:text-lg lg:text-xl italic text-white/80 font-medium px-4">
            {words.map((word, i) => (
              <span
                key={word}
                className={`transition-all duration-700 px-2 sm:px-3 py-1 rounded-full ${
                  i === activeWord
                    ? "text-[#FDBA4D] bg-[#FDBA4D]/10 scale-105 sm:scale-110 shadow-lg"
                    : "hover:text-white/90"
                }`}
              >
                {word}
              </span>
            ))}
          </div>

          {/* DESCRIPTION */}
          {/* <p className="text-center text-white/70 text-xs sm:text-sm md:text-base lg:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4">
            Connect, learn, and grow with a community of passionate learners and creators
          </p> */}

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center pt-2 sm:pt-4 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto min-w-[180px] sm:min-w-[200px] rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold
              bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600
              text-black shadow-xl shadow-orange-500/40 hover:shadow-orange-500/60
              transform hover:scale-105 transition-all duration-300"
            >
              Start a Discussion
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-w-[180px] sm:min-w-[200px] rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold
              border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black
              shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40
              transform hover:scale-105 transition-all duration-300"
            >
              Explore Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
