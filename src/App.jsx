import React from "react";
import NumberFlow from "@number-flow/react";
import { ChevronDown, Play, TrendingUp, Plus, AtSign, ArrowUp, Sparkles, ChartNoAxesColumn, MoveRight } from "lucide-react";

const AnimatedWord = ({ word, index }) => (
  <span
    className="animate-word-reveal"
    style={{
      "--word-index": index,
      "--word-duration": "0.5s",
      "--word-stagger": "0.025s",
    }}
  >
    {word}&nbsp;
  </span>
);

export default function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-body text-white">
      {/* Background Video */}
      <video
        src="/heroVideo.webm"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full object-cover object-[60%_bottom] md:top-0! md:h-full! md:object-bottom transition-opacity duration-1000 ease-in-out opacity-100"
        style={{ top: "160px", height: "calc(100% - 160px)" }}
      />

      <div className="relative z-10 flex flex-col items-center w-full min-h-screen pt-6 pb-20">
        {/* Navigation */}
        <nav aria-orientation="horizontal" className="flex items-center justify-between w-full max-w-7xl px-4 lg:px-8 mx-auto">
          <div className="hidden lg:block">
            <div className="flex items-center gap-2 rounded-xl p-1.25 pr-1.5 transition-all duration-300 bg-white shadow-border-default">
              <div className="flex h-9 items-center justify-center px-2">
                <a aria-label="Passionfroot home" href="/" data-discover="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="124" height="30" viewBox="0 0 132 32" fill="none" className="transition-[fill] duration-300" aria-label="Passionfroot">
                    <path d="M48.6084 20.4482C48.6084 23.2633 45.6509 23.8623 43.3597 23.8623C41.3639 23.8623 39.2918 22.9716 38.5531 22.6206C38.38 22.5389 38.2714 22.3658 38.2714 22.1752V19.1676C38.2714 18.9264 38.5463 18.7854 38.7429 18.9264C41.041 20.5873 44.5298 20.9743 44.5298 20.0389C44.5298 19.0324 38.1579 19.2814 38.1579 14.853C38.1579 12.4318 40.32 11.1657 43.212 11.1657C47.1918 11.1657 48.222 13.8213 48.311 15.8925C48.3179 16.0598 48.1819 16.1988 48.0126 16.1988H44.3497C44.1854 16.1988 44.0514 16.0666 44.0514 15.9023V15.7924C44.0514 15.0485 43.798 14.6479 43.2208 14.6479C42.6905 14.6479 42.3902 15.0923 42.3902 15.4734C42.3902 17.7508 48.6094 16.4624 48.6094 20.4473L48.6084 20.4482ZM31.2362 15.4744C31.2362 15.0932 31.5375 14.6488 32.0668 14.6488C32.644 14.6488 32.8974 15.0495 32.8974 15.7934V15.9032C32.8974 16.0666 33.0305 16.1998 33.1958 16.1998H36.8587C37.0269 16.1998 37.1639 16.0608 37.1571 15.8935C37.068 13.8233 36.0378 11.1667 32.058 11.1667C29.166 11.1667 27.0039 12.4327 27.0039 14.854C27.0039 19.2823 33.3758 19.0334 33.3758 20.0398C33.3758 20.9753 29.8881 20.5883 27.589 18.9274C27.3933 18.7854 27.1174 18.9274 27.1174 19.1686V22.1762C27.1174 22.3668 27.227 22.5399 27.3992 22.6216C28.1378 22.9726 30.2099 23.8633 32.2057 23.8633C34.498 23.8633 37.4545 23.2653 37.4545 20.4492C37.4545 16.4643 31.2352 17.7527 31.2352 15.4754L31.2362 15.4744ZM52.0854 5.59967C50.3048 5.59967 49.1426 6.51664 49.1426 8.03456C49.1426 9.55248 50.3058 10.4695 52.0854 10.4695C53.865 10.4695 55.0282 9.55248 55.0282 8.03456C55.0282 6.51664 53.865 5.59967 52.0854 5.59967ZM14.406 17.5106C14.406 21.6599 13.1791 23.8623 10.6922 23.8623C9.51235 23.8623 8.45086 23.3674 7.79636 21.7989L8.11138 26.6774C8.12214 26.8486 7.98616 26.9925 7.81397 26.9925H3.51812C3.35376 26.9925 3.21973 26.8603 3.21973 26.6959V11.8182C3.21973 11.6548 3.35278 11.5216 3.51812 11.5216H6.40028C6.54801 11.5216 6.67324 11.6286 6.69476 11.7734L6.9863 13.8028C7.63787 12.1167 8.82361 11.1657 10.5298 11.1657C13.1146 11.1657 14.406 13.3614 14.406 17.5106ZM9.98978 17.5145C9.98978 15.9237 9.72465 14.6488 8.84317 14.6488C7.9617 14.6488 7.69657 15.9237 7.69657 17.5145C7.69657 19.1054 7.9617 20.3957 8.84317 20.3957C9.72465 20.3957 9.98978 19.1054 9.98978 17.5145ZM25.9356 16.2796V23.1992C25.9356 23.3625 25.8025 23.4957 25.6372 23.4957H22.755C22.6073 23.4957 22.4821 23.3888 22.4606 23.2439L22.2219 21.6832C21.4676 23.0144 20.0725 23.8633 18.6118 23.8633C16.4448 23.8633 15.1945 22.7888 15.1945 20.4249C15.1945 16.8367 18.6666 16.2358 21.6916 16.2932C21.4206 15.49 20.8678 15.0786 19.7408 15.0786C18.2078 15.0786 16.6943 15.9995 15.9527 16.5275C15.7551 16.6675 15.4821 16.5275 15.4821 16.2864V13.4625C15.4821 13.3079 15.5555 13.162 15.6798 13.0687C16.3147 12.5893 18.4191 11.1676 21.0488 11.1676C24.2128 11.1676 25.9366 13.3701 25.9366 16.2805L25.9356 16.2796ZM21.8638 18.9206C21.8667 17.8179 21.7992 17.1314 21.7992 17.1314C21.2308 17.1207 20.137 17.7226 20.1331 19.0626C20.1302 19.8949 20.4119 20.526 21.0293 20.5377C21.6368 20.5494 21.8618 19.8385 21.8638 18.9206ZM54.2417 11.5226H49.9262C49.7619 11.5226 49.6278 11.6548 49.6278 11.8191L49.6357 23.1992C49.6357 23.3625 49.7687 23.4957 49.9341 23.4957H54.2495C54.4138 23.4957 54.5479 23.3635 54.5479 23.1992L54.54 11.8191C54.54 11.6558 54.407 11.5226 54.2417 11.5226ZM66.3358 17.5106C66.3358 21.9769 64.2735 23.8623 60.9481 23.8623C57.6228 23.8623 55.5604 21.9769 55.5604 17.5106C55.5604 13.0444 57.6228 11.1589 60.9481 11.1589C64.2735 11.1589 66.3358 13.0444 66.3358 17.5106ZM62.082 17.5106C62.082 15.9198 61.8198 14.6488 60.9481 14.6488C60.0764 14.6488 59.8142 15.9198 59.8142 17.5106C59.8142 19.1015 60.0764 20.3918 60.9481 20.3918C61.8198 20.3918 62.082 19.1015 62.082 17.5106ZM107.53 17.5106C107.53 21.9769 105.468 23.8623 102.143 23.8623C98.8174 23.8623 96.755 21.9769 96.755 17.5106C96.755 13.0444 98.8174 11.1589 102.143 11.1589C105.468 11.1589 107.53 13.0444 107.53 17.5106ZM103.277 17.5106C103.277 15.9198 103.014 14.6488 102.142 14.6488C101.269 14.6488 101.007 15.9198 101.007 17.5106C101.007 19.1015 101.269 20.3918 102.142 20.3918C103.014 20.3918 103.277 19.1015 103.277 17.5106ZM128.482 14.6488C128.647 14.6488 128.781 14.5166 128.781 14.3523V11.8172C128.781 11.6538 128.648 11.5206 128.482 11.5206H125.239V8.51979C125.239 8.35642 125.106 8.22321 124.941 8.22321H122.314C122.165 8.22321 122.038 8.33309 122.019 8.47992C121.771 10.3761 120.819 11.6548 119.554 11.9718C119.42 12.0049 119.325 12.1225 119.325 12.2596V14.3513C119.325 14.5146 119.458 14.6479 119.624 14.6479H120.315V20.3948C120.315 22.0148 121.46 23.8614 124.472 23.8614C126.849 23.8614 128.157 22.9775 128.603 22.605C128.715 22.5107 128.78 22.3726 128.78 22.2268V19.7384C128.78 19.5021 128.516 19.3621 128.316 19.4914C127.877 19.7792 127.195 20.1478 126.592 20.1478C125.824 20.1478 125.238 19.8911 125.238 18.6085V14.6469H128.481L128.482 14.6488ZM119.039 17.5106C119.039 21.9769 116.977 23.8623 113.652 23.8623C110.326 23.8623 108.264 21.9769 108.264 17.5106C108.264 13.0444 110.326 11.1589 113.652 11.1589C116.977 11.1589 119.039 13.0444 119.039 17.5106ZM114.786 17.5106C114.786 15.9198 114.523 14.6488 113.651 14.6488C112.778 14.6488 112.516 15.9198 112.516 17.5106C112.516 19.1015 112.778 20.3918 113.651 20.3918C114.523 20.3918 114.786 19.1015 114.786 17.5106ZM75.175 11.1657C73.3397 11.1657 71.8849 11.9708 71.157 13.8165L70.8469 11.7744C70.8244 11.6295 70.6991 11.5226 70.5524 11.5226H67.6702C67.5059 11.5226 67.3718 11.6548 67.3718 11.8191V23.1992C67.3718 23.3625 67.5049 23.4957 67.6702 23.4957H71.9886C72.1529 23.4957 72.287 23.3635 72.287 23.1992L72.2919 15.6475C72.2919 14.9444 72.7693 14.6488 73.1841 14.6488C73.5989 14.6488 74.0675 14.8715 74.0675 15.6067V23.1982C74.0675 23.3616 74.2006 23.4948 74.3659 23.4948H78.6833C78.8477 23.4948 78.9817 23.3625 78.9817 23.1982V14.9989C78.9817 12.6282 77.7265 11.1657 75.176 11.1657H75.175ZM97.4271 12.0652L96.1142 14.7898C96.034 14.9551 95.8207 15.0125 95.671 14.9046C95.447 14.7422 95.2494 14.6498 94.8307 14.6488C94.2114 14.6469 93.1959 14.9989 93.1959 16.3428V23.1992C93.1959 23.3625 93.0628 23.4957 92.8975 23.4957H88.5801C88.4157 23.4957 88.2817 23.3635 88.2817 23.1992V11.8182C88.2817 11.6548 88.4148 11.5216 88.5801 11.5216H91.4623C91.61 11.5216 91.7352 11.6286 91.7567 11.7734L92.0776 13.8116C92.7957 11.6373 94.0568 11.1657 95.4304 11.1657C96.4175 11.1657 97.0339 11.4769 97.3244 11.6888C97.4448 11.7764 97.4937 11.931 97.4281 12.0652H97.4271ZM92.3066 16.4876C92.3066 16.4876 92.2997 16.4808 92.2968 16.4779V16.4876H92.3066ZM86.8905 10.1476C87.0881 10.2643 87.3347 10.1204 87.3347 9.89185V6.90755C87.3347 6.71501 87.2173 6.53998 87.0412 6.45927C83.0183 4.6049 79.6352 5.95265 79.6352 8.57522C79.6352 10.6717 81.9441 11.5216 81.9441 11.5216H80.5989C80.4355 11.5226 80.3034 11.6548 80.3034 11.8182V23.1982C80.3034 23.3616 80.4365 23.4948 80.6018 23.4948H84.9172C85.0816 23.4948 85.2156 23.3625 85.2156 23.1982V14.6479H87.0383C87.2026 14.6479 87.3366 14.5156 87.3366 14.3513V11.8182C87.3366 11.6568 87.2036 11.5226 87.0412 11.5226C85.9807 11.5196 84.2774 11.1375 84.2774 10.1602C84.2774 9.26951 85.696 9.4426 86.8925 10.1476H86.8905Z" fill="var(--color-ink-800)" className="transition-[fill] duration-300"></path>
                  </svg>
                </a>
              </div>
              <div className="h-4 w-px transition-colors duration-300 bg-ink-200"></div>
              <div className="flex gap-0.5 list-none">
                <li>
                  <button type="button" className="flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors font-body font-semibold text-[15px] leading-5 text-primary hover:bg-ink-100">
                    For Brands
                    <ChevronDown className="w-4 h-4 text-primary" />
                  </button>
                </li>
                <li>
                  <button type="button" className="flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors font-body font-semibold text-[15px] leading-5 text-primary hover:bg-ink-100">
                    For Creators
                    <ChevronDown className="w-4 h-4 text-primary" />
                  </button>
                </li>
              </div>
            </div>
          </div>
          <div className="hidden lg:block list-none">
            <div className="flex items-center gap-2 rounded-xl p-1.25 pr-1.5 transition-all duration-300 bg-white shadow-border-default">
              <div className="flex gap-0.5">
                <li>
                  <a href="#" className="flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors font-body font-semibold text-[15px] leading-5 text-primary hover:bg-ink-100">About</a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors font-body font-semibold text-[15px] leading-5 text-primary hover:bg-ink-100">Careers</a>
                </li>
              </div>
              <div className="h-4 w-px transition-colors duration-300 bg-ink-200"></div>
              <div className="flex items-center gap-1 list-none">
                <li>
                  <button type="button" className="flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors font-body font-semibold text-[15px] leading-5 text-primary hover:bg-ink-100">
                    Login
                    <ChevronDown className="w-4 h-4 text-primary" />
                  </button>
                </li>
                <a href="#" className="inline-flex items-center justify-center gap-2 transition-all duration-200 ease-in-out text-inverse border border-ink-700 relative overflow-hidden bg-ink-700 bg-linear-to-t from-ink-800 to-ink-700 bg-no-repeat bg-bottom bg-[length:100%_100%] shadow-[0_1px_1px_-0.5px_color-mix(in_oklch,var(--color-ink-900)_2%,transparent),0_3px_3px_-1.5px_color-mix(in_oklch,var(--color-ink-900)_2%,transparent),0_6px_6px_-3px_color-mix(in_oklch,var(--color-ink-900)_2%,transparent),0_12px_12px_-6px_color-mix(in_oklch,var(--color-ink-900)_1%,transparent)] hover:shadow-lg hover:bg-[length:100%_50%] h-[2.13rem] rounded-lg px-4 py-2 my-px text-sm font-bold">
                  Get access
                  <MoveRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="w-full max-w-[90%] md:max-w-7xl mt-12 md:mt-24 gap-4 px-4 relative z-20 flex flex-col items-center text-center mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="font-heading text-inverse font-medium text-h1 tracking-tighter">
              {["The", "AI", "Agent", "for", "Creator-led", "GTM"].map((word, i) => (
                <AnimatedWord key={i} word={word} index={i} />
              ))}
            </h1>
          </div>
          <div className="max-w-3xl flex flex-col gap-1 items-center text-center mt-2">
            <p className="font-body text-inverse-muted text-md md:text-lg font-medium leading-relaxed">
              {["Find", "the", "right", "creators,", "manage", "campaigns", "end-to-end,", "pay", "seamlessly", "and", "track", "what's", "working", "—", "no", "spreadsheets,", "no", "guesswork,", "no", "chaos."].map((word, i) => (
                <AnimatedWord key={i} word={word} index={i + 7} />
              ))}
            </p>
          </div>
          <div className="flex-col sm:flex-row w-full sm:max-w-xl flex gap-3 items-center justify-center pt-8">
            <span className="w-full sm:w-auto animate-word-reveal" style={{ "--word-index": 25, "--word-duration": "0.5s", "--word-stagger": "0.025s" }}>
              <a href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-all duration-200 border border-transparent bg-white/10 shadow-border-strong hover:bg-white/20 hover:shadow-border-vstrong h-12 rounded-xl px-6 py-2.5 my-px text-md font-bold w-full text-white backdrop-blur-md">
                Start for free
              </a>
            </span>
            <span className="w-full sm:w-auto animate-word-reveal" style={{ "--word-index": 26, "--word-duration": "0.5s", "--word-stagger": "0.025s" }}>
              <button type="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-all duration-200 text-inverse bg-white/5 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_1px_1px_rgba(255,255,255,0.06)_inset,0_2px_6px_rgba(0,0,0,0.12)] hover:bg-white/10 hover:text-white h-12 rounded-xl px-6 py-2.5 my-px text-md font-bold w-full sm:w-auto">
                Watch the trailer
                <Play className="w-4.5 h-4.5 fill-current" />
              </button>
            </span>
          </div>
        </div>

        {/* Dynamic 3D Element Showcase */}
        <div className="w-full md:w-[600px] lg:w-[900px] xl:w-[1000px] h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] relative mt-16 lg:mt-32 xl:mt-32 md:absolute md:top-[440px] md:left-1/2 md:-translate-x-1/2 z-10 flex flex-col items-center" style={{ perspective: "1200px" }}>
          <div className="w-[87%] max-w-[440px] lg:w-full lg:max-w-[640px] relative" style={{ transformStyle: "preserve-3d", transform: "rotateX(5.5deg) rotateY(6deg)" }}>

            {/* Stats Cards overlays */}
            <div className="absolute w-[120%] left-[-10%] bottom-[210px] flex justify-center pointer-events-none scale-75 md:scale-100 origin-bottom" style={{ transformStyle: "preserve-3d" }}>
              <div className="pointer-events-none relative flex items-end justify-center" style={{ transformStyle: "preserve-3d" }}>

                {/* Impressions Card */}
                <div className="bg-white/95 text-black backdrop-blur-md rounded-xl overflow-hidden p-3 shadow-[0px_0px_0px_3px_rgba(255,255,255,0.2),0px_0px_0px_1px_rgba(255,255,255,0.3)] w-[160px] -mr-6 z-20" style={{ transform: "translateX(-56px) translateY(10px) rotate(-5deg)" }}>
                  <div className="mb-1 flex items-center justify-between">
                    <p className="font-body text-sm font-bold text-gray-500">Total impressions</p>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <p className="font-body text-xl font-bold flex items-center">
                      <NumberFlow value={1.4} format={{ maximumFractionDigits: 1 }} />
                      <span>M</span>
                    </p>
                    <span className="flex items-center gap-0.5 rounded bg-green-100 px-1.5 py-0.5 text-[12px] font-semibold text-green-600">
                      <TrendingUp className="w-3 h-3" />
                      <NumberFlow value={54} format={{ style: "percent" }} />
                    </span>
                  </div>
                </div>

                {/* Engagement Card */}
                <div className="bg-white/95 text-black backdrop-blur-md rounded-xl overflow-hidden p-3 shadow-[0px_0px_0px_3px_rgba(255,255,255,0.2),0px_0px_0px_1px_rgba(255,255,255,0.3)] w-[240px] z-30 -ml-2">
                  <div className="mb-1 flex items-center justify-between">
                    <p className="font-body text-sm font-bold text-gray-500">Engagement per platform</p>
                  </div>
                  <svg width="220" height="80" viewBox="0 0 220 80" className="overflow-visible mt-2">
                    <defs>
                      <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <g>
                      <path d="M 2 78 L 74 56.2 L 146 34.5 L 218 2 L 218 78 L 2 78 Z" fill="url(#gradient1)" />
                      <path d="M 2 78 L 74 56.2 L 146 34.5 L 218 2" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </div>

                {/* CPE Card */}
                <div className="bg-white/95 text-black backdrop-blur-md rounded-xl overflow-hidden p-3 shadow-[0px_0px_0px_3px_rgba(255,255,255,0.2),0px_0px_0px_1px_rgba(255,255,255,0.3)] w-[200px] -ml-8 md:-ml-2 z-10" style={{ transform: "translateX(64px) translateY(20px) rotate(9deg)" }}>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-body text-sm font-bold text-gray-500">Weekly CPE</p>
                  </div>
                  <svg width="100%" height="80" viewBox="0 0 160 80" preserveAspectRatio="xMidYMid meet">
                    <g>
                      <rect x="9" y="6" width="10" height="60" rx="2" fill="#EB6928" opacity="0.85" />
                      <rect x="21" y="13.5" width="10" height="52.5" rx="2" fill="#EE5968" opacity="0.85" />
                      <rect x="33" y="24.75" width="10" height="41.25" rx="2" fill="#B26BF5" opacity="0.85" />
                    </g>
                    <g>
                      <rect x="46" y="21" width="10" height="45" rx="2" fill="#EB6928" opacity="0.85" />
                      <rect x="58" y="30.375" width="10" height="35.625" rx="2" fill="#EE5968" opacity="0.85" />
                      <rect x="70" y="37.875" width="10" height="28.125" rx="2" fill="#B26BF5" opacity="0.85" />
                    </g>
                    <g>
                      <rect x="83" y="32.25" width="10" height="33.75" rx="2" fill="#EB6928" opacity="0.85" />
                      <rect x="95" y="39.75" width="10" height="26.25" rx="2" fill="#EE5968" opacity="0.85" />
                      <rect x="107" y="47.25" width="10" height="18.75" rx="2" fill="#B26BF5" opacity="0.85" />
                    </g>
                    <g>
                      <rect x="120" y="43.5" width="10" height="22.5" rx="2" fill="#EB6928" opacity="0.85" />
                      <rect x="132" y="51" width="10" height="15" rx="2" fill="#EE5968" opacity="0.85" />
                      <rect x="144" y="54.75" width="10" height="11.25" rx="2" fill="#B26BF5" opacity="0.85" />
                    </g>
                  </svg>
                  <div className="flex w-full justify-center gap-2 mt-2">
                    <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#EB6928" }}></span><span className="text-[10px] text-gray-500">LinkedIn</span></div>
                    <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#EE5968" }}></span><span className="text-[10px] text-gray-500">YouTube</span></div>
                    <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#B26BF5" }}></span><span className="text-[10px] text-gray-500">X</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Search Bar UI */}
            <div className="relative mt-8" style={{ transformStyle: "preserve-3d" }}>
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-[24px]" style={{ border: "2px solid rgba(168, 85, 247, 0.8)", boxShadow: "rgba(168, 85, 247, 0.3) 0px 0px 15px, rgba(168, 85, 247, 0.5) 0px 0px 30px" }}>
                <div className="absolute inset-0 -z-10 rounded-[24px]" style={{ boxShadow: "rgba(168, 85, 247, 0.5) 0px 0px 40px", opacity: 0.7 }}></div>
              </div>
              <div className="w-full rounded-2xl lg:rounded-[24px] overflow-hidden shadow-[0px_0px_0px_3px_rgba(255,255,255,0.2),0px_0px_0px_1px_rgba(255,255,255,0.3)] bg-white/95 text-black backdrop-blur-md flex flex-col">
                <div className="w-full overflow-hidden h-[74px] lg:h-[80px] px-4 pt-4 pb-3 lg:px-5 lg:pt-5 lg:pb-3">
                  <span className="text-gray-900 text-lg lg:text-xl font-medium tracking-tight whitespace-pre-wrap">
                    <span>How many people did our </span>
                    <span className="rounded-md px-1 py-0.5 text-blue-600 bg-blue-100/50">@Q1 Campaign</span>
                    <span> reach?</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 pb-2 pl-3 pr-2 border-t border-gray-100/30 pt-2">
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-200">
                    <Plus className="w-5 h-5" />
                  </button>
                  <div className="w-px h-6 bg-gray-200 rounded-full mx-1"></div>
                  <div className="px-2 py-1 rounded-lg border border-gray-200 bg-gray-50 flex items-center gap-1.5 text-gray-600 text-sm font-semibold">
                    <AtSign className="w-4 h-4" />
                    <span>Campaign</span>
                  </div>
                  <button className="bg-gray-900 hover:bg-gray-800 text-white w-9 h-9 lg:w-11 lg:h-11 rounded-lg lg:rounded-xl ml-auto flex items-center justify-center shadow-sm transition-transform active:scale-95">
                    <ArrowUp className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* AI Action Tags */}
            <div className="flex gap-4 mt-6 flex-wrap justify-center relative z-20">
              <button className="px-3 py-1.5 text-sm lg:text-base font-semibold rounded-xl border transition-all duration-200 bg-white/95 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 flex items-center gap-2 shadow-sm">
                <Sparkles className="w-4 h-4" />
                <span>Plan strategy</span>
              </button>
              <button className="px-3 py-1.5 text-sm lg:text-base font-semibold rounded-xl border transition-all duration-200 bg-white/95 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-green-50 hover:border-green-200 hover:text-green-600 flex items-center gap-2 shadow-sm">
                <Play className="w-4 h-4 fill-current" />
                <span>Run campaign</span>
              </button>
              <button className="px-3 py-1.5 text-sm lg:text-base font-semibold rounded-xl border transition-all duration-200 bg-purple-100/95 backdrop-blur-sm border-purple-300 text-purple-700 flex items-center gap-2 shadow-sm">
                <ChartNoAxesColumn className="w-4 h-4" />
                <span>Measure results</span>
              </button>
            </div>

            {/* Fake cursor */}
            <div className="absolute z-50 pointer-events-none" style={{ left: "0", top: "0", transform: "translateX(609px) translateY(159px) scale(1.04) rotate(8deg)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <g filter="url(#cursor-shadow)">
                  <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.48 0 .72-.58.38-.92L6.35 2.76a.5.5 0 0 0-.85.45Z" fill="#0b0b0f" stroke="#ffffff" strokeWidth="1.35"></path>
                </g>
                <defs>
                  <filter id="cursor-shadow" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feDropShadow dx="0" dy="1.1" stdDeviation="0.9" floodColor="#0b0b0f" floodOpacity="0.16"></feDropShadow>
                    <feDropShadow dx="0" dy="0.4" stdDeviation="0.6" floodColor="#000000" floodOpacity="0.08"></feDropShadow>
                  </filter>
                </defs>
              </svg>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
