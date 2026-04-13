import React, { useEffect, useState } from "react";
import { ArrowUp, AtSign, BarChart3, Check, ChevronDown, Globe, MoveRight, Play, Plus, Sparkles } from "lucide-react";

/* ─── mode data ─── */
const modes = ["plan", "run", "measure"];

const modeConfig = {
  plan: {
    prompt: "Build a campaign plan with creator mix, platform and ROI for my upcoming launch",
    glow: "rgba(251,146,60,0.28)",
    chatShift: "-4px",
    chatTilt: "-2deg",
    chatYaw: "-3deg",
  },
  run: {
    prompt: "Run a $25K campaign for our Q1 launch",
    glow: "rgba(74,222,128,0.24)",
    chatShift: "0px",
    chatTilt: "0deg",
    chatYaw: "0deg",
  },
  measure: {
    prompt: <>How many people did our <span className="bg-[#e0f2fe] text-[#0284c7] font-semibold px-2 py-0.5 rounded-md mx-0.5">@Q1 Campaign</span> reach?</>,
    glow: "rgba(168,85,247,0.28)",
    chatShift: "4px",
    chatTilt: "2deg",
    chatYaw: "3deg",
  },
};

/* ─── Plan Strategy cards: Pie charts ─── */
function PlanCards({ active }) {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-4 md:gap-12 lg:gap-16 pb-1" style={{ perspective: "1200px", transformStyle: "preserve-3d" }}>
      {/* Platform breakdown */}
      <div
        className={`transition-all duration-[560ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${active ? "opacity-100 translate-y-0 filter-none" : "pointer-events-none opacity-0 translate-y-10 scale-[0.9]"}`}
        style={{ transitionDelay: active ? "100ms" : "0ms", transform: `translateZ(-30px)` }}
      >
        <div className="w-[180px] md:w-[210px] rounded-[24px] border border-gray-200 bg-white p-3 md:p-3.5 shadow-[0_12px_28px_rgba(17,24,39,0.12)] hover:scale-[1.03] transition-all duration-300 cursor-pointer"
          style={{ transform: "rotate(-6deg) scale(0.95)" }}>
          <p className="text-[0.76rem] md:text-[0.82rem] font-bold text-gray-800 mb-2.5 tracking-tight">Platform breakdown</p>
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 80 80" className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] shrink-0">
              <circle cx="40" cy="40" r="34" fill="none" stroke="#e5e7eb" strokeWidth="12" />
              <circle cx="40" cy="40" r="34" fill="none" stroke="#f97316" strokeWidth="12"
                strokeDasharray="75 139" strokeDashoffset="0" />
              <circle cx="40" cy="40" r="34" fill="none" stroke="#ef4444" strokeWidth="12"
                strokeDasharray="50 164" strokeDashoffset="-75" />
              <circle cx="40" cy="40" r="34" fill="none" stroke="#8b5cf6" strokeWidth="12"
                strokeDasharray="28 186" strokeDashoffset="-125" />
            </svg>
            <div className="flex flex-col gap-1 text-[0.62rem] md:text-[0.68rem] font-semibold text-gray-600">
              <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_4px_rgba(249,115,22,0.8)]" />LinkedIn</div>
              <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_4px_rgba(239,68,68,0.8)]" />YouTube</div>
              <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_4px_rgba(139,92,246,0.8)]" />X</div>
            </div>
          </div>
        </div>
      </div>

      {/* Creator Mix */}
      <div
        className={`transition-all duration-[560ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${active ? "opacity-100 translate-y-0 filter-none" : "pointer-events-none opacity-0 translate-y-10 scale-[0.9]"}`}
        style={{ transitionDelay: active ? "200ms" : "0ms", transform: `translateZ(30px)` }}
      >
        <div className="w-[180px] md:w-[210px] rounded-[24px] border border-gray-200 bg-white p-3 md:p-3.5 shadow-[0_12px_28px_rgba(17,24,39,0.12)] hover:scale-[1.03] hover:rotate-[1deg] transition-all duration-300 cursor-pointer"
          style={{ transform: "rotate(6deg) scale(1.05)" }}>
          <p className="text-[0.76rem] md:text-[0.82rem] font-bold text-gray-800 mb-2.5 tracking-tight">Creator Mix</p>
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 80 80" className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] shrink-0">
              <circle cx="40" cy="40" r="34" fill="none" stroke="#e5e7eb" strokeWidth="12" />
              <circle cx="40" cy="40" r="34" fill="none" stroke="#10b981" strokeWidth="12"
                strokeDasharray="90 124" strokeDashoffset="0" />
              <circle cx="40" cy="40" r="34" fill="none" stroke="#3b82f6" strokeWidth="12"
                strokeDasharray="60 154" strokeDashoffset="-90" />
              <circle cx="40" cy="40" r="34" fill="none" stroke="#6366f1" strokeWidth="12"
                strokeDasharray="34 180" strokeDashoffset="-150" />
            </svg>
            <div className="flex flex-col gap-1 text-[0.62rem] md:text-[0.68rem] font-semibold text-gray-600">
              <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.8)]" />Micro</div>
              <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_4px_rgba(59,130,246,0.8)]" />Mid-tier</div>
              <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_4px_rgba(99,102,241,0.8)]" />Lighthouse</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Run Campaign cards: Arch Layout with Depth ─── */
function RunCards({ active }) {
  const cards = [
    { title: "70 Contacted", sub: "Reaching 180K impressions", color: "text-green-700", icon: Check, z: -24, y: 18, rot: "-4deg", delay: "0ms" },
    { title: "8 Confirmed", sub: "For a total of $18K locked", color: "text-orange-600", icon: Sparkles, z: 12, y: 2, rot: "-1deg", delay: "80ms" },
    { title: "37 live posts", sub: "Reaching 180K impressions", color: "text-blue-600", icon: Globe, z: 12, y: 2, rot: "1deg", delay: "160ms" },
    { title: "Budget Deployment", sub: "No actions needed...", color: "text-green-700", icon: Sparkles, z: -24, y: 18, rot: "4deg", delay: "240ms" },
  ];

  return (
    <div className="absolute inset-0 flex items-end justify-center gap-2 md:gap-3 lg:gap-4 pb-1 px-2" style={{ perspective: "1500px", transformStyle: "preserve-3d" }}>
      {cards.map((c, i) => {
        const Icon = c.icon;
        return (
          <div key={i}
            className={`transition-all duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${active ? "opacity-100 filter-none" : "pointer-events-none opacity-0 translate-y-10 scale-[0.92]"}`}
            style={{ transitionDelay: active ? c.delay : "0ms", transform: `translateY(${c.y}px) translateZ(${c.z}px) rotate(${c.rot})` }}
          >
            <div className="w-[132px] md:w-[158px] min-h-[76px] rounded-[18px] border border-gray-200 bg-white px-3 py-2.5 md:px-3.5 md:py-3 shadow-[0_10px_24px_rgba(17,24,39,0.1)] hover:-translate-y-1.5 hover:scale-[1.03] hover:rotate-0 hover:shadow-[0_16px_30px_rgba(17,24,39,0.16)] transition-all duration-300 ease-out cursor-pointer">
              <div className={`flex items-center gap-1.5 ${c.color} font-bold text-[0.7rem] md:text-[0.78rem]`}>
                <Icon className="w-3.5 h-3.5" />
                {c.title}
              </div>
              <p className="text-[0.58rem] md:text-[0.62rem] text-gray-500 font-semibold mt-1 leading-snug">{c.sub}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Measure Results cards: Depth layout ─── */
function MeasureCards({ active }) {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-3 md:gap-5 lg:gap-8 pb-3" style={{ perspective: "1400px", transformStyle: "preserve-3d" }}>
      {/* Total impressions - Left pushed back */}
      <div
        className={`transition-all duration-[560ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${active ? "opacity-100 translate-y-0 filter-none" : "pointer-events-none opacity-0 translate-y-10 scale-[0.9]"}`}
        style={{ transitionDelay: active ? "100ms" : "0ms", transform: `translateZ(-50px)` }}
      >
        <div className="w-[130px] md:w-[150px] rounded-[24px] border border-gray-200 bg-white p-3 md:p-3.5 shadow-[0_10px_24px_rgba(17,24,39,0.1)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          style={{ transform: "rotate(-6deg) scale(0.95)" }}>
          <p className="text-[0.65rem] md:text-[0.72rem] font-bold text-gray-600 mb-1.5">Total impressions</p>
          <div className="flex items-end gap-1.5">
            <span className="text-[1.2rem] md:text-[1.4rem] font-extrabold text-gray-900 leading-none">1.4M</span>
            <span className="text-[0.6rem] md:text-[0.65rem] font-bold text-green-600 mb-0.5 flex items-center bg-green-100 px-1 py-0.5 rounded shadow-sm">
              <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 mr-0.5" fill="none"><path d="M2 8L6 3L10 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              54%
            </span>
          </div>
        </div>
      </div>

      {/* Engagement - Center slightly forward */}
      <div
        className={`transition-all duration-[560ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${active ? "opacity-100 translate-y-0 filter-none" : "pointer-events-none opacity-0 translate-y-10 scale-[0.9]"}`}
        style={{ transitionDelay: active ? "200ms" : "0ms", transform: `translateZ(20px) translateY(-14px)` }}
      >
        <div className="w-[170px] md:w-[210px] rounded-[24px] border border-gray-200 bg-white p-3 md:p-4 shadow-[0_10px_24px_rgba(17,24,39,0.1)] hover:scale-[1.05] transition-all duration-300 cursor-pointer"
          style={{ transform: "rotate(0deg) scale(1.05)" }}>
          <p className="text-[0.7rem] md:text-[0.78rem] font-bold text-gray-700 mb-1.5">Engagement per platform</p>
          <svg viewBox="0 0 140 55" className="w-full h-[36px] md:h-[46px]">
            <defs>
              <linearGradient id="engGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polyline fill="url(#engGrad)" stroke="none"
              points="5,48 18,44 32,42 48,38 62,32 78,26 94,20 110,14 126,8 135,5 135,52 5,52" />
            <polyline fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              points="5,48 18,44 32,42 48,38 62,32 78,26 94,20 110,14 126,8 135,5" />
          </svg>
        </div>
      </div>

      {/* Weekly CPE - Right forward tilt */}
      <div
        className={`transition-all duration-[560ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${active ? "opacity-100 translate-y-0 filter-none" : "pointer-events-none opacity-0 translate-y-10 scale-[0.9]"}`}
        style={{ transitionDelay: active ? "300ms" : "0ms", transform: `translateZ(50px)` }}
      >
        <div className="w-[180px] md:w-[220px] rounded-[24px] border border-gray-200 bg-white p-3 md:p-4 shadow-[0_10px_24px_rgba(17,24,39,0.1)] hover:scale-[1.05] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          style={{ transform: "rotate(6deg) scale(1.08)" }}>
          <p className="text-[0.7rem] md:text-[0.78rem] font-bold text-gray-800 mb-1.5">Weekly CPE</p>
          <svg viewBox="0 0 130 50" className="w-full h-[36px] md:h-[46px]">
            {[28, 36, 32, 42, 38, 30, 44, 34, 26, 36, 20, 30].map((h, i) => {
              const colors = ["#f97316", "#ef4444", "#a855f7"];
              return <rect key={i} x={3 + i * 10.2} y={48 - h} width="7" height={h} rx="2" fill={colors[i % 3]} opacity="0.95" />;
            })}
          </svg>
          <div className="flex items-center gap-2 mt-2 text-[0.55rem] md:text-[0.62rem] font-bold text-gray-500 tracking-wide">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_4px_rgba(249,115,22,0.8)]" />LinkedIn</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_4px_rgba(239,68,68,0.8)]" />YouTube</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_4px_rgba(168,85,247,0.8)]" />X</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Word-by-word text reveal ─── */
function RevealText({ text, className = "", delay = 0 }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-word-reveal transform-gpu"
          style={{ "--word-index": i + delay }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}

/* ─── Main app ─── */
export default function App() {
  const [activeMode, setActiveMode] = useState("plan");
  const [hoverMode, setHoverMode] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const visualMode = hoverMode ?? activeMode;
  const current = modeConfig[visualMode];

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-white font-body text-gray-900 selection:bg-gray-200">

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] flex-col px-4 md:px-8 pb-[10vh]">

        {/* Nav */}
        <nav className="hidden items-center justify-between pt-5 lg:flex shrink-0 transform-gpu translate-z-0">
          <div className="flex items-center gap-2 rounded-[14px] border border-gray-200 bg-white/80 px-3.5 py-2 backdrop-blur-md shadow-lg">
            <span className="font-heading text-[1.3rem] font-bold tracking-tight text-gray-900">gradix</span>
            <div className="mx-2 h-4 w-px bg-gray-300" />
            <button className="flex items-center gap-1 rounded-md px-3 py-1.5 text-[12.5px] font-semibold text-gray-700 hover:bg-gray-100 transition-colors">For Brands</button>
            <button className="flex items-center gap-1 rounded-md px-3 py-1.5 text-[12.5px] font-semibold text-gray-700 hover:bg-gray-100 transition-colors">For Creators</button>
          </div>
          <div className="flex items-center gap-1.5 rounded-[14px] border border-gray-200 bg-white/80 px-3.5 py-2 backdrop-blur-md shadow-lg">
            <a className="rounded-md px-3 py-1.5 text-[12.5px] font-semibold text-gray-700 hover:bg-gray-100 transition-colors" href="#">About</a>
            <a className="rounded-md px-3 py-1.5 text-[12.5px] font-semibold text-gray-700 hover:bg-gray-100 transition-colors" href="#">Careers</a>
            <button className="flex items-center gap-1 rounded-md px-3 py-1.5 text-[12.5px] font-semibold text-gray-700 hover:bg-gray-100 transition-colors">Login <ChevronDown className="h-3.5 w-3.5" /></button>
            <a className="ml-1.5 inline-flex items-center gap-1.5 rounded-[10px] border border-gray-300 bg-gray-900 px-4 py-2 text-[0.8rem] font-bold text-white hover:bg-black hover:shadow-[0_0_15px_rgba(17,24,39,0.2)] transition-all duration-300" href="#">
              Get access <MoveRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </nav>

        {/* Hero content */}
        <div className="flex flex-1 flex-col items-center justify-start pt-[5vh] md:pt-[6vh] lg:pt-[7vh] transform-gpu translate-z-0">

          <section className="mx-auto flex w-full max-w-[840px] flex-col items-center text-center">
            <h1 className="font-heading text-[clamp(1.8rem,4vw,3.2rem)] font-semibold tracking-tight leading-[1.08] whitespace-nowrap text-gray-900">
              <RevealText text="The AI Agent for Creator-led GTM" delay={0} />
            </h1>
            <p className="mt-4 max-w-[640px] text-[0.9rem] font-medium leading-relaxed text-gray-600 md:text-[0.95rem]">
              <RevealText text="Find the right creators, manage campaigns end-to-end, pay seamlessly and track what's working — no spreadsheets, no guesswork, no chaos." delay={4} />
            </p>

            <div
              className={`mt-7 flex w-full max-w-[380px] flex-col gap-3 transition-all duration-1000 delay-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] sm:flex-row transform-gpu ${isReady ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-[0.96]"}`}
            >
              <a href="#" className="inline-flex h-[42px] flex-1 items-center justify-center rounded-[12px] bg-gray-900 px-5 text-[0.85rem] font-bold text-white hover:bg-black hover:scale-[1.02] transition-all shadow-[0_4px_20px_rgba(17,24,39,0.22)]">Start for free</a>
              <button className="inline-flex h-[42px] flex-1 items-center justify-center gap-1.5 rounded-[12px] border border-gray-300 bg-white px-5 text-[0.85rem] font-bold text-gray-800 hover:bg-gray-50 hover:scale-[1.02] transition-all shadow-[0_4px_14px_rgba(17,24,39,0.08)]">
                Watch the trailer <Play className="h-3.5 w-3.5" />
              </button>
            </div>
          </section>

          {/* Cinematic 3D Chat Platform */}
          <section
            className={`relative mx-auto mt-8 w-full max-w-[740px] flex-1 flex flex-col items-center transition-all duration-500 delay-[250ms] ease-out md:mt-10 ${isReady ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            style={{ perspective: "1200px" }}
          >
            {/* The 3D stage containing cards and chat input */}
            <div className="relative w-full min-h-[120px] md:min-h-[132px]" style={{ transformStyle: "preserve-3d" }}>
              <PlanCards active={visualMode === "plan"} />
              <RunCards active={visualMode === "run"} />
              <MeasureCards active={visualMode === "measure"} />
            </div>

            {/* Central glowing anchor chat input - perfectly 0deg flat, elevated Z */}
            <div
              className="relative mx-auto w-full max-w-[470px] lg:max-w-[520px] transition-[transform,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] mt-2 md:mt-2.5"
              style={{ transform: `translateZ(30px) translateY(${current.chatShift}) rotateX(${current.chatTilt}) rotateY(${current.chatYaw})` }}
            >
              {/* Outer massive aura glow */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-[30px] border border-gray-200 transition-all duration-700 blur-[18px]"
                style={{ backgroundColor: current.glow }} />
              
              {/* Inner glowing soft border */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] border transition-all duration-500"
                style={{ borderColor: current.glow, boxShadow: `0 0 14px ${current.glow}` }} />

              <div className="w-full overflow-hidden rounded-[26px] border border-gray-200 bg-white text-black shadow-[0_16px_44px_rgba(17,24,39,0.14)] transform-gpu hover:shadow-[0_22px_52px_rgba(17,24,39,0.2)] transition-shadow duration-500">
                <div className="w-full overflow-hidden h-[60px] lg:h-[66px] px-4 pt-3 pb-1.5 lg:px-5 lg:pt-3.5 lg:pb-2.5 flex items-center">
                  <span
                    key={activeMode}
                    className="block text-[0.88rem] lg:text-[1rem] leading-snug whitespace-pre-wrap text-gray-900 font-medium animate-[fadeInUp_500ms_cubic-bezier(0.2,0.8,0.2,1)]"
                  >
                    {current.prompt}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 pb-2 pl-3 pr-2 border-t border-gray-200 lg:pb-2.5 lg:pl-3 lg:pr-2.5 pt-2">
                  <button className="w-7 h-7 rounded-[10px] flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors">
                    <Plus className="h-4.5 w-4.5" />
                  </button>
                  <div className="w-px h-5 bg-gray-200 rounded-full mx-1.5" />
                  <div className="px-2 py-1 rounded-[8px] border border-gray-200 bg-gray-50 flex items-center gap-1.5 text-gray-500 text-[0.75rem] font-semibold shadow-inner">
                    <AtSign className="h-3 w-3" />
                    <span>Campaign</span>
                  </div>
                  <button className="ml-auto w-8 h-8 lg:w-9 lg:h-9 rounded-[12px] inline-flex items-center justify-center bg-[#15171b] text-white hover:bg-black hover:scale-105 transition-all duration-200 transform-gpu shadow-md hover:shadow-xl">
                    <ArrowUp className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* 3D Mode Strategy Buttons Block - Deep rendering */}
            <div className="mt-8 flex w-full max-w-[520px] justify-center gap-2 md:gap-3 relative" style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
              {modes.map((mode, i) => {
                const icons = { plan: Sparkles, run: Play, measure: BarChart3 };
                const labels = { plan: "Plan strategy", run: "Run campaign", measure: "Measure results" };
                
                // Rotations and transforms applied
                const rotY = "0deg";
                const baseScale = mode === "run" ? 1.02 : 1;
                const actScale = mode === "run" ? 1.06 : 1.02;
                const zTranslate = mode === "run" ? 10 : 0;
                
                const Icon = icons[mode];
                const isActive = visualMode === mode;
                
                return (
                  <button
                    key={mode}
                    onMouseEnter={() => setHoverMode(mode)}
                    onMouseLeave={() => setHoverMode(null)}
                    onFocus={() => setHoverMode(mode)}
                    onBlur={() => setHoverMode(null)}
                    onClick={() => setActiveMode(mode)}
                    className={`inline-flex flex-1 items-center justify-center gap-2 rounded-[14px] px-4 py-2.5 text-[0.8rem] font-bold transition-all duration-300 transform-gpu cursor-pointer select-none border backdrop-blur-md 
                      ${
                        isActive 
                          ? mode === "run" 
                              ? "bg-white/[0.98] text-green-700 border-green-400/80 shadow-[0_8px_25px_rgba(74,222,128,0.4),0_0_0_2px_rgba(255,255,255,0.8)]" 
                              : "bg-white/[0.95] text-gray-900 border-white shadow-[0_8px_20px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.6)]" 
                          : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:text-gray-900"
                       }`}
                    style={{
                      transitionDelay: isReady ? `${120 + i * 60}ms` : "0ms",
                      opacity: isReady ? 1 : 0,
                      transform: isReady 
                        ? `rotateY(${rotY}) scale(${isActive ? actScale : baseScale}) translateZ(${isActive ? zTranslate + 8 : zTranslate}px)` 
                        : `rotateY(${rotY}) scale(0.96) translateZ(-20px) translateY(6px)`,
                      transformStyle: "preserve-3d"
                    }}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{labels[mode]}</span>
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
