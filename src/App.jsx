import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { ArrowUp, AtSign, BarChart3, Check, ChevronDown, Globe, MoveRight, Play, Plus, Sparkles, Wallet } from "lucide-react";

/* ─── mode data ─── */
const modes = ["plan", "run", "measure"];

const modeConfig = {
  plan: {
    prompt: "Build a campaign plan with creator mix, platform and ROI for my upcoming launch",
    glow: "rgba(251,146,60,0.28)",
    chatShift: "-4px",
    chatTilt: "-3deg",
    chatYaw: "-4deg",
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
    chatTilt: "3deg",
    chatYaw: "4deg",
  },
};

const smoothEase = [0.22, 1, 0.36, 1];

const revealUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, ease: smoothEase },
  },
};

const staggerReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const softScaleIn = {
  hidden: { opacity: 0, y: 20, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: smoothEase },
  },
};

const MotionNav = m.nav;
const MotionDiv = m.div;
const MotionSection = m.section;
const MotionButton = m.button;
const MotionAnchor = m.a;

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

function ScrollRevealText({ text, className = "", progress = 0, start = 0, span = 0.3 }) {
  const words = text.split(" ");
  const step = span / Math.max(words.length, 1);
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: Math.max(0, Math.min(1, (progress - (start + i * step)) / (step * 1.4))),
            transform: `translateY(${Math.max(0, 8 - ((progress - (start + i * step)) / (step * 1.4)) * 8)}px)`,
            transitionDelay: "0ms",
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}

function CampaignShowcaseSection({ scrollY }) {
  const mountain = "https://res.cloudinary.com/passionfroot/image/upload/w_1920/q_auto/f_auto/website/mountain";
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const avatars = [
    {
      name: "This looks great",
      x: "14%",
      y: "26%",
      img: "https://res.cloudinary.com/passionfroot/image/upload/dpr_2.0/f_auto/q_auto/c_fill,h_36,w_36/v1/workspace-production/L1hMai_Group%203%20(1)",
    },
    {
      name: "Love this, I'm in!",
      x: "50%",
      y: "22%",
      img: "https://res.cloudinary.com/passionfroot/image/upload/dpr_2.0/f_auto/q_auto/c_fill,h_36,w_36/v1/workspace-production/creators/e0a2f0b0-27eb-44aa-9d19-366faf60fd16/profile-growproduct",
    },
    {
      name: "I'm interested!",
      x: "78%",
      y: "24%",
      img: "https://res.cloudinary.com/passionfroot/image/upload/dpr_2.0/f_auto/q_auto/c_fill,h_36,w_36/v1/workspace-production/Elena%20LinkedIn%20Headshot__xVznF3",
    },
    {
      name: "Let's do it!",
      x: "18%",
      y: "42%",
      img: "https://res.cloudinary.com/passionfroot/image/upload/dpr_2.0/f_auto/q_auto/c_fill,h_36,w_36/v1/workspace-production/Austin%20Nasso%201__z8tpH7",
    },
    {
      name: "Count me in",
      x: "76%",
      y: "44%",
      img: "https://res.cloudinary.com/passionfroot/image/upload/dpr_2.0/f_auto/q_auto/c_fill,h_36,w_36/v1/workspace-production/Group%209%20(3)__jsuMrp",
    },
  ];
  const clamp01 = (n) => Math.max(0, Math.min(1, n));
  const revealStyle = (start, span = 0.14, y = 20) => {
    const t = clamp01((progress - start) / span);
    return {
      opacity: t,
      transform: `translateY(${(1 - t) * y}px) scale(${0.96 + t * 0.04})`,
      transition: "opacity 220ms linear, transform 220ms linear",
    };
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const start = vh * 0.94;
    const end = vh * 0.18;
    const p = (start - rect.top) / (start - end);
    setProgress(clamp01(p));
  }, [scrollY]);

  return (
    <section ref={sectionRef} className="mx-auto mt-8 w-full max-w-[1280px] rounded-xl bg-[#f6f5f1] p-3 md:p-5">
      <div className="relative h-[300px] overflow-hidden rounded-t-xl md:h-[460px] lg:h-[620px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mountain})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f6f5f1]/80" />
        <h2
          className="relative z-10 max-w-[640px] px-6 pt-8 font-heading text-[2.2rem] font-semibold leading-[1.02] text-white md:px-10 md:pt-12 md:text-[3.6rem]"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          Run campaigns at scale, not in spreadsheets.
        </h2>
      </div>

      <div className="relative -mt-28 rounded-b-xl bg-[#f6f5f1] px-4 pb-8 pt-8 md:-mt-40 md:px-8 md:pb-12 md:pt-12 lg:-mt-56 lg:px-12">
        <div className="rounded-xl bg-[#f9f8f4] px-4 py-8 md:px-8 md:py-10">
          <div className="text-center" data-aos="fade-up" data-aos-delay="80">
            <h3 className="font-heading text-[2rem] font-medium text-gray-900">Work with creators who actually respond</h3>
            <p className="mx-auto mt-3 max-w-[700px] text-[1rem] text-gray-700">
              Generic creator databases flood you with irrelevant profiles. Passionfroot creators already reach your ICP — so when you reach out, they&apos;re actually interested in partnering.
            </p>
          </div>

          <div className="relative mt-8 h-[460px] overflow-hidden md:h-[512px]">
            <div className="absolute left-1/2 top-[66%] h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,145,71,0.22)_0%,rgba(178,107,245,0.12)_38%,rgba(255,255,255,0)_72%)]" />
            <svg className="pointer-events-none absolute left-1/2 top-[68%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 700 700" fill="none">
              {[90, 145, 200, 255].map((r) => (
                <circle key={r} cx="350" cy="430" r={r} stroke="rgba(196,166,223,0.45)" />
              ))}
            </svg>

            <div className="relative z-10 flex justify-center gap-16 pt-2">
              <div className="text-center">
                <p className="font-heading text-[2rem] font-semibold text-gray-900">8x</p>
                <p className="text-sm font-semibold text-gray-700">Response rates</p>
                <p className="text-xs italic text-gray-500">vs. cold outreach</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-[2rem] font-semibold text-gray-900">3x</p>
                <p className="text-sm font-semibold text-gray-700">Faster turnaround</p>
                <p className="text-xs italic text-gray-500">vs. manual campaigns</p>
              </div>
            </div>

            {avatars.map((a, i) => (
              <div key={a.name} className="absolute z-20 flex flex-col items-center" style={{ left: a.x, top: a.y, ...revealStyle(0.16 + i * 0.08, 0.12, 14) }}>
                <span className="mb-1 rounded-md border border-gray-200 bg-white px-2 py-0.5 text-xs text-gray-700 shadow-sm">{a.name}</span>
                <div className="h-8 w-8 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                  <img src={a.img} alt={a.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
            ))}

            <div className="absolute bottom-20 left-1/2 z-20 w-[270px] -translate-x-1/2 rounded-xl bg-orange-500 px-3 py-2 text-sm font-semibold leading-5 text-orange-50 shadow-[0_8px_26px_rgba(235,105,39,0.35)]" style={revealStyle(0.58, 0.16, 18)}>
              We&apos;d love to collaborate with you on Youtube, LinkedIn &amp; X. Would you be open to discuss?
            </div>

            <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-[18px] border border-gray-300 bg-white p-1.5 shadow-sm" style={revealStyle(0.68, 0.12, 12)}>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900">
                <div className="grid grid-cols-2 gap-1">
                  {[0, 1, 2, 3].map((k) => <span key={k} className="h-1.5 w-1.5 rounded-[3px] bg-orange-500" />)}
                </div>
              </div>
            </div>
          </div>

          <div className="my-6 hidden h-px bg-gray-200 md:block" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1px_1fr] md:gap-12">
            <div data-aos="fade-right" data-aos-delay="60">
              <h3 className="font-heading text-[2rem] font-medium leading-tight text-gray-900">Keep campaigns moving without the manual work</h3>
              <p className="mt-3 max-w-[520px] text-[1rem] text-gray-700">
                Zest surfaces what needs attention in one action center: missed deadlines, pending approvals, follow-ups. Process everything efficiently and keep momentum.
              </p>
              <div className="mt-6 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
                <p className="text-sm font-bold text-gray-900">4 creators missed their draft deadline</p>
                <p className="text-sm font-bold text-gray-900">What would you like to do?</p>
                <div className="mt-3 space-y-2">
                  {["Send reminder to overdue creators", "Extend deadline by 5 days", "Ask Zest to do something else..."].map((item, i) => (
                    <div key={item} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
                      <span className="mr-2 font-semibold">{String.fromCharCode(65 + i)}</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden w-px bg-gray-200 md:block" />

            <div data-aos="fade-left" data-aos-delay="120">
              <h3 className="font-heading text-[2rem] font-medium leading-tight text-gray-900">Fast, compliant payments — no matter how many creators</h3>
              <p className="mt-3 max-w-[520px] text-[1rem] text-gray-700">
                Onboard Passionfroot once and pay any creator through our compliant wallet — no individual vendor approvals, no procurement delays.
              </p>
              <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm" style={revealStyle(0.76, 0.12, 16)}>
                <p className="text-sm font-bold text-gray-900">23 Creators to pay</p>
                <p className="mt-1 text-sm text-gray-700">Total <span className="font-bold">$34,550</span></p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-bold text-white" style={revealStyle(0.84, 0.1, 12)}>
                    <Wallet className="h-4 w-4" /> Pay with FrootWallet
                  </button>
                  <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-gray-900" style={revealStyle(0.9, 0.1, 12)}>
                    Select payment method
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main app ─── */
export default function App() {
  const [activeMode, setActiveMode] = useState("plan");
  const [hoverMode, setHoverMode] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [testimonialProgress, setTestimonialProgress] = useState(0);
  const [showIntroCursor, setShowIntroCursor] = useState(false);
  const [introCursorPos, setIntroCursorPos] = useState({ x: 0, y: 0 });
  const [introClicking, setIntroClicking] = useState(false);
  const [introMode, setIntroMode] = useState(null);
  const testimonialRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const visualMode = hoverMode ?? activeMode;
  const current = modeConfig[introMode ?? visualMode];
  const heroLift = Math.min(scrollY * 0.22, 120);
  const heroFade = Math.max(1 - scrollY / 700, 0.28);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: prefersReducedMotion ? 0 : 780,
      easing: "cubic-bezier(0.22,1,0.36,1)",
      once: true,
      offset: 72,
      mirror: false,
      disable: prefersReducedMotion,
    });
  }, [prefersReducedMotion]);

  useEffect(() => {
    const onScrollY = () => {
      setScrollY(window.scrollY || 0);
      const el = testimonialRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const start = vh * 0.9;
      const end = vh * 0.15;
      const p = (start - rect.top) / (start - end);
      setTestimonialProgress(Math.max(0, Math.min(1, p)));
    };
    onScrollY();
    window.addEventListener("scroll", onScrollY, { passive: true });
    return () => window.removeEventListener("scroll", onScrollY);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const runIntro = async () => {
      await new Promise((r) => setTimeout(r, 900));
      if (cancelled) return;
      setShowIntroCursor(true);

      for (const mode of modes) {
        if (cancelled) return;
        const button = document.querySelector(`[data-mode="${mode}"]`);
        if (!(button instanceof HTMLElement)) continue;

        const rect = button.getBoundingClientRect();
        setIntroCursorPos({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
        setIntroMode(mode);
        setHoverMode(mode);

        await new Promise((r) => setTimeout(r, 560));
        if (cancelled) return;
        setIntroClicking(true);
        setActiveMode(mode);
        await new Promise((r) => setTimeout(r, 200));
        if (cancelled) return;
        setIntroClicking(false);
        await new Promise((r) => setTimeout(r, 520));
      }

      if (cancelled) return;
      setHoverMode(null);
      setIntroMode(null);
      await new Promise((r) => setTimeout(r, 240));
      if (cancelled) return;
      setShowIntroCursor(false);
    };

    runIntro();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen bg-white font-body text-gray-900 selection:bg-gray-200">
      <div
        className={`pointer-events-none fixed z-[9999] transition-all duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${showIntroCursor ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        style={{ left: introCursorPos.x - 10, top: introCursorPos.y - 2, willChange: "transform,left,top" }}
      >
        <svg
          width="22"
          height="26"
          viewBox="0 0 24 28"
          fill="none"
          className={`transition-transform duration-150 ${introClicking ? "scale-75" : "scale-100"}`}
        >
          <path
            d="M4 2L4 22L9.5 16.5L14.5 25L18 23L13 14.5L20 14.5L4 2Z"
            fill="#111827"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Nav */}
      <MotionNav
        className="sticky top-0 z-40 mx-auto hidden w-full max-w-[1200px] items-center justify-between px-4 py-4 md:px-8 lg:flex"
        initial={prefersReducedMotion ? false : { opacity: 0, y: -18 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: smoothEase, delay: 0.12 }}
      >
        <div className="flex items-center gap-2 rounded-[14px] border border-gray-200 bg-white/95 px-3.5 py-2 backdrop-blur-md shadow-[0_6px_18px_rgba(17,24,39,0.08)]">
            <span className="font-heading text-[1.3rem] font-bold tracking-tight text-gray-900">gradix</span>
            <div className="mx-2 h-4 w-px bg-gray-300" />
            <button className="flex items-center gap-1 rounded-md px-3 py-1.5 text-[12.5px] font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
              For Brands <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <button className="flex items-center gap-1 rounded-md px-3 py-1.5 text-[12.5px] font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
              For Creators <ChevronDown className="h-3.5 w-3.5" />
            </button>
        </div>
        <div className="flex items-center gap-1.5 rounded-[14px] border border-gray-200 bg-white/95 px-3.5 py-2 backdrop-blur-md shadow-[0_6px_18px_rgba(17,24,39,0.08)]">
            <a className="rounded-md px-3 py-1.5 text-[12.5px] font-semibold text-gray-700 hover:bg-gray-100 transition-colors" href="#">About</a>
            <a className="rounded-md px-3 py-1.5 text-[12.5px] font-semibold text-gray-700 hover:bg-gray-100 transition-colors" href="#">Careers</a>
            <button className="flex items-center gap-1 rounded-md px-3 py-1.5 text-[12.5px] font-semibold text-gray-700 hover:bg-gray-100 transition-colors">Login <ChevronDown className="h-3.5 w-3.5" /></button>
            <a className="ml-1.5 inline-flex items-center gap-1.5 rounded-[10px] border border-gray-300 bg-gray-900 px-4 py-2 text-[0.8rem] font-bold text-white hover:bg-black hover:shadow-[0_0_15px_rgba(17,24,39,0.2)] transition-all duration-300" href="#">
              Get access <MoveRight className="h-3.5 w-3.5" />
            </a>
        </div>
      </MotionNav>

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col px-4 md:px-8 pb-16">

        {/* Hero content */}
        <MotionDiv
          className="flex min-h-[95vh] flex-col items-center justify-start pt-[5vh] md:pt-[6vh] lg:pt-[7vh] transform-gpu translate-z-0 transition-[transform,opacity] duration-300 ease-out"
          style={{ transform: `translateY(-${heroLift}px)`, opacity: heroFade }}
          initial={prefersReducedMotion ? false : "hidden"}
          animate={prefersReducedMotion ? undefined : "visible"}
          variants={staggerReveal}
        >

          <MotionSection className="mx-auto flex w-full max-w-[840px] flex-col items-center text-center" variants={staggerReveal}>
            <m.h1 className="font-heading text-[clamp(1.8rem,4vw,3.2rem)] font-semibold tracking-tight leading-[1.08] whitespace-nowrap text-gray-900" variants={revealUp}>
              <RevealText text="The AI Agent for Creator-led GTM" delay={0} />
            </m.h1>
            <m.p className="mt-4 max-w-[640px] text-[0.9rem] font-medium leading-relaxed text-gray-600 md:text-[0.95rem]" variants={revealUp}>
              <RevealText text="Find the right creators, manage campaigns end-to-end, pay seamlessly and track what's working — no spreadsheets, no guesswork, no chaos." delay={4} />
            </m.p>

            <MotionDiv
              className={`mt-7 flex w-full max-w-[380px] flex-col gap-3 transition-all duration-1000 delay-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] sm:flex-row transform-gpu ${isReady ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-[0.96]"}`}
              variants={softScaleIn}
            >
              <MotionAnchor
                href="#"
                className="inline-flex h-[42px] flex-1 items-center justify-center rounded-[12px] bg-gray-900 px-5 text-[0.85rem] font-bold text-white hover:bg-black transition-all shadow-[0_4px_20px_rgba(17,24,39,0.22)]"
                whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
              >
                Start for free
              </MotionAnchor>
              <MotionButton
                className="inline-flex h-[42px] flex-1 items-center justify-center gap-1.5 rounded-[12px] border border-gray-300 bg-white px-5 text-[0.85rem] font-bold text-gray-800 hover:bg-gray-50 transition-all shadow-[0_4px_14px_rgba(17,24,39,0.08)]"
                whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
              >
                Watch the trailer <Play className="h-3.5 w-3.5" />
              </MotionButton>
            </MotionDiv>
          </MotionSection>

          {/* Cinematic 3D Chat Platform */}
          <MotionSection
            className={`relative mx-auto mt-8 w-full max-w-[740px] flex-1 flex flex-col items-center transition-all duration-500 delay-[250ms] ease-out md:mt-10 ${isReady ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            style={{ perspective: "1200px" }}
            variants={softScaleIn}
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
                  <MotionButton
                    key={mode}
                    data-mode={mode}
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
                    whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{labels[mode]}</span>
                  </MotionButton>
                );
              })}
            </div>
          </MotionSection>
        </MotionDiv>

        <section
          ref={testimonialRef}
          className="relative left-1/2 right-1/2 mt-16 w-screen -translate-x-1/2 bg-white py-24 md:py-32"
          data-aos="fade-up"
          data-aos-duration="820"
        >
          <div className="mx-auto flex w-full max-w-[860px] flex-col items-center justify-center px-5 text-center">
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="40">
              <img
                loading="eager"
                className="h-12 w-auto"
                alt="Graphite"
                src="https://res.cloudinary.com/passionfroot/image/upload/dpr_2.0/f_auto/q_auto/c_fill,h_48/v1/website/graphite"
              />
            </div>

            <blockquote className="mt-10 font-heading text-[2rem] md:text-[3.15rem] font-medium leading-[1.08] tracking-tight text-gray-900" data-aos="fade-up" data-aos-delay="90">
              <p
                className="transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <ScrollRevealText text="“Creator marketing worked, but it didn’t scale." progress={testimonialProgress} start={0.04} span={0.28} />
              </p>
              <p
                className="transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <ScrollRevealText text="I thought there had to be a better way." progress={testimonialProgress} start={0.36} span={0.28} />
              </p>
              <p
                className="mt-5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <ScrollRevealText text="That’s how I found Passionfroot.”" progress={testimonialProgress} start={0.66} span={0.2} />
              </p>
            </blockquote>

            <footer
              className="mt-12 flex flex-col items-center gap-1 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              data-aos="fade-up"
              data-aos-delay="140"
              style={{
                opacity: Math.max(0, Math.min(1, (testimonialProgress - 0.82) / 0.18)),
                transform: `translateY(${Math.max(0, 8 - ((testimonialProgress - 0.82) / 0.18) * 8)}px)`,
              }}
            >
              <div className="pb-1">
                <img
                  loading="eager"
                  className="size-10 rounded-xl object-cover"
                  alt="Rani Kubersky"
                  src="https://res.cloudinary.com/passionfroot/image/upload/dpr_2.0/f_auto/q_auto/c_fill,h_40,w_40/v1/website/avatar-graphite"
                />
              </div>
              <span className="font-body text-[1rem] md:text-[1.05rem] text-gray-800 font-bold">Rani Kubersky</span>
              <span className="font-body text-[0.95rem] md:text-[1rem] text-gray-500">Marketing Manager</span>
            </footer>
          </div>
        </section>

        <CampaignShowcaseSection scrollY={scrollY} />
      </div>
      </div>
    </LazyMotion>
  );
}
