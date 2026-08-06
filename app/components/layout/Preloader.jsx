"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState("entering");

    useEffect(() => {
        // Phase 1: Zoom In
        const t1 = setTimeout(() => setPhase("loading"), 800);

        // Phase 2: Progress Counter
        const duration = 1600;
        const start = performance.now();

        function tick(now) {
            const elapsed = now - start;
            const raw = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - raw, 2);
            setProgress(Math.round(eased * 100));

            if (raw < 1) {
                requestAnimationFrame(tick);
            }
        }
        const raf = setTimeout(() => requestAnimationFrame(tick), 800); // Delay start to match phase

        // Phase 3: Zoom Out & Exit
        const t2 = setTimeout(() => setPhase("exiting"), 2500);
        const t3 = setTimeout(() => setPhase("done"), 3300);

        return () => {
            clearTimeout(t1);
            clearTimeout(raf);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, []);

    if (phase === "done") return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden">

            {/* Inline styles for custom keyframe animations and masks */}
            <style>{`
                @keyframes ag-spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .ag-spinner-ring {
                    background: conic-gradient(from 0deg, #f97316 0%, #f97316 25%, #ffffff 50%, #22c55e 75%, #163A70 100%);
                    -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 6px), black calc(100% - 5px));
                    mask: radial-gradient(farthest-side, transparent calc(100% - 6px), black calc(100% - 5px));
                    animation: ag-spin 1.5s linear infinite;
                }
                @keyframes ag-glow {
                    0%, 100% { opacity: 0.4; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.05); }
                }
            `}</style>

            {/* Right side — Saffron shadow */}
            <div
                className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at 85% 25%, rgba(249,115,22,0.08) 0%, transparent 65%)",
                    filter: "blur(60px)",
                }}
            />

            {/* Left bottom — Green shadow */}
            <div
                className="absolute bottom-0 left-0 w-1/2 h-full pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at 15% 80%, rgba(34,197,94,0.08) 0%, transparent 65%)",
                    filter: "blur(60px)",
                }}
            />

            {/* Center subtle Navy Blue glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(22,58,112,0.05) 0%, transparent 70%)",
                    filter: "blur(40px)",
                    animation: "ag-glow 3s ease-in-out infinite"
                }}
            />

            {/* Main Content Wrapper — The Zoom In/Out Effect */}
            <div
                className={`flex flex-col items-center transition-all duration-700 ease-out ${phase === "entering"
                        ? "scale-[0.6] opacity-0 blur-[10px]"
                        : phase === "loading"
                            ? "scale-100 opacity-100 blur-0"
                            : "scale-110 opacity-0 blur-[6px]"
                    }`}
            >
                {/* Logo & Spinning Chakra Ring Container */}
                <div className="relative w-28 h-28 flex items-center justify-center mb-8">
                    {/* Spinning Tricolor Ring */}
                    <div className="absolute inset-0 rounded-full ag-spinner-ring"></div>

                    {/* Inner White Circle to create the ring effect */}
                    <div className="absolute inset-[6px] rounded-full bg-white shadow-sm"></div>

                    {/* Logo Image */}
                    <Image
                        src="/images/favicon1.png" // Make sure this path is correct in your public folder
                        alt="AarambhGrow"
                        width={100}
                        height={100}
                        priority
                        className="relative z-10 w-16 h-16 object-contain"
                    />
                </div>

                {/* Company Name — Exact Logo Style Typography */}
                <div className="flex flex-col items-start md:items-center text-left md:text-center">
                    <h1
                        className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-wide leading-none"
                        style={{
                            fontFamily: "'Cinzel', serif",
                            color: "#163A70", // Navy Blue
                            letterSpacing: "0.05em",
                        }}
                    >
                        Aarambh Grow
                    </h1>

                    <p
                        className="mt-2 text-lg md:text-xl leading-none"
                        style={{
                            fontFamily: "'Cinzel', serif",
                            color: "#7D7768", // Keeping your existing elegant gold/beige
                            letterSpacing: "0.18em",
                        }}
                    >
                        Group of Companies
                    </p>
                </div>

                {/* Progress Bar — Orange -> White -> Green Gradient */}
                <div className="w-48 h-[4px] bg-slate-100 rounded-full mt-8 overflow-hidden relative">
                    <div
                        className="h-full rounded-full transition-all duration-100 ease-out"
                        style={{
                            width: `${phase === "entering" ? 0 : progress}%`,
                            background: "linear-gradient(to right, #f97316, #ffffff, #22c55e)",
                            boxShadow: "0 0 10px rgba(34, 197, 94, 0.4)", // Subtle green glow at the end of the bar
                        }}
                    />
                </div>

                {/* Percentage Counter & Status Text */}
                <div className="flex flex-col items-center mt-4">
                    <p className="text-[10px] font-medium tracking-[0.25em] text-slate-400 uppercase mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Initiating Growth
                    </p>
                    <p
                        className="text-sm font-bold tracking-widest text-[#163A70]"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontFeatureSettings: '"tnum"' }}
                    >
                        {phase === "entering" ? "0" : progress}%
                    </p>
                </div>
            </div>

            {/* Google Font Injection - Added Cinzel to the link! */}
            <link
                href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap"
                rel="stylesheet"
            />
        </div>
    );
}