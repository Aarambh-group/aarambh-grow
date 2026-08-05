"use client";

import React, { useState } from "react";
import {
    Star,
    Target,
    Award,
    ShieldCheck,
    Sparkles,
    CheckCircle2,
} from "lucide-react";

export default function AboutSection() {
    const [activeHighlight, setActiveHighlight] = useState(0);

    const pillars = [
        {
            id: "mission",
            phrase: "eliminating administrative friction",
            title: "Our Purpose & Mission",
            badge: "MISSION",
            icon: Target,
            accent: "#f26522",
            description:
                "We engineer robust registration, compliance, and growth frameworks so founders can shift focus from administrative overhead to core market innovation.",
            highlights: [
                "Structured Market Entry Strategies",
                "Rapid Documentation & Regulatory Filing",
                "Tailored Operational Architecture",
            ],
        },
        {
            id: "vision",
            phrase: "setting national standards",
            title: "Our Long-Term Vision",
            badge: "VISION",
            icon: Award,
            accent: "#157327",
            description:
                "To establish India's most dependable digital-first consulting ecosystem—delivering institutional-grade advisory with zero friction.",
            highlights: [
                "Digital-First Advisory Engine",
                "Transparent Lifecycle Guidance",
                "Pan-India Regulatory Reach",
            ],
        },
        {
            id: "commitment",
            phrase: "100% regulatory compliance precision",
            title: "Our Quality Commitment",
            badge: "COMMITMENT",
            icon: ShieldCheck,
            accent: "#f26522",
            description:
                "Complete transparency with zero hidden costs, absolute compliance accuracy, and dedicated advisory at every single stage of growth.",
            highlights: [
                "Zero Hidden Cost Guarantee",
                "Dedicated Account Management",
                "Continuous Regulatory Updates",
            ],
        },
    ];

    const current = pillars[activeHighlight];

    return (
        <section className="relative w-full bg-[#f8fafc] py-10 sm:py-16 font-sans select-none overflow-hidden text-[#0f172a]">
            {/* Background Decorative Grid Patterns */}
            <div className="absolute top-8 left-8 opacity-20 pointer-events-none">
                <div className="grid grid-cols-6 gap-2">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#f26522]" />
                    ))}
                </div>
            </div>

            <div className="absolute top-8 right-8 opacity-20 pointer-events-none">
                <div className="grid grid-cols-6 gap-2">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#157327]" />
                    ))}
                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* SECTION BADGE */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#fff5f0] border border-[#f26522]/20 px-3.5 py-1">
                        <Star className="w-3 h-3 fill-[#f26522] text-[#f26522]" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#f26522]">
                            WHO WE ARE
                        </span>
                    </div>
                </div>

                {/* MAIN EDITORIAL CANVAS GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* LEFT: EDITORIAL INTERACTIVE TEXT */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2a4a] leading-[1.2] tracking-tight">
                            Architecting the Future of Business Growth through Precision.
                        </h2>

                        {/* Interactive Narrative Block */}
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                            At <strong className="text-[#0f2a4a] font-bold">AarambhGrow</strong>, we believe corporate scale is achieved by{" "}
                            <button
                                onMouseEnter={() => setActiveHighlight(0)}
                                onClick={() => setActiveHighlight(0)}
                                className={`inline-block font-bold px-1.5 py-0.5 rounded transition-all duration-200 border-b-2 cursor-pointer ${activeHighlight === 0
                                        ? "bg-[#fff5f0] text-[#f26522] border-[#f26522]"
                                        : "text-[#0f2a4a] border-slate-300 hover:border-[#f26522]"
                                    }`}
                            >
                                eliminating administrative friction
                            </button>{" "}
                            from the start. We are dedicated to{" "}
                            <button
                                onMouseEnter={() => setActiveHighlight(1)}
                                onClick={() => setActiveHighlight(1)}
                                className={`inline-block font-bold px-1.5 py-0.5 rounded transition-all duration-200 border-b-2 cursor-pointer ${activeHighlight === 1
                                        ? "bg-[#f0fdf4] text-[#157327] border-[#157327]"
                                        : "text-[#0f2a4a] border-slate-300 hover:border-[#157327]"
                                    }`}
                            >
                                setting national standards
                            </button>{" "}
                            for legal & financial consulting, ensuring every client operates with{" "}
                            <button
                                onMouseEnter={() => setActiveHighlight(2)}
                                onClick={() => setActiveHighlight(2)}
                                className={`inline-block font-bold px-1.5 py-0.5 rounded transition-all duration-200 border-b-2 cursor-pointer ${activeHighlight === 2
                                        ? "bg-[#fff5f0] text-[#f26522] border-[#f26522]"
                                        : "text-[#0f2a4a] border-slate-300 hover:border-[#f26522]"
                                    }`}
                            >
                                100% regulatory compliance precision
                            </button>
                            .
                        </p>

                        {/* Quick Trigger Selector */}
                        <div className="pt-2 flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                                Hover to explore:
                            </span>
                            {pillars.map((item, idx) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveHighlight(idx)}
                                    onMouseEnter={() => setActiveHighlight(idx)}
                                    className={`text-xs font-extrabold px-3 py-1 rounded-full transition-all duration-200 ${activeHighlight === idx
                                            ? "bg-[#0f2a4a] text-white shadow-sm"
                                            : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                                        }`}
                                >
                                    {item.badge}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: DYNAMIC ARCHITECTURAL DISPLAY PANEL */}
                    <div className="lg:col-span-5">
                        <div className="relative bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm">
                            {/* Top Meta Indicator */}
                            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                                <div className="flex items-center gap-2">
                                    <span
                                        className="w-2.5 h-2.5 rounded-full animate-pulse"
                                        style={{ backgroundColor: current.accent }}
                                    />
                                    <span className="text-xs font-black uppercase tracking-wider text-[#0f2a4a]">
                                        {current.badge}
                                    </span>
                                </div>
                                <Sparkles className="w-4 h-4 text-slate-300" />
                            </div>

                            {/* Title & Description */}
                            <div className="space-y-2 mb-5">
                                <h3 className="text-lg font-black text-[#0f2a4a]">
                                    {current.title}
                                </h3>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    {current.description}
                                </p>
                            </div>

                            {/* Bullet Points */}
                            <div className="space-y-2 mb-5">
                                {current.highlights.map((point, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2.5 p-2 rounded-lg bg-[#f8fafc] border border-slate-100"
                                    >
                                        <CheckCircle2
                                            className="w-3.5 h-3.5 shrink-0"
                                            style={{ color: current.accent }}
                                        />
                                        <span className="text-xs font-bold text-[#0f2a4a]">
                                            {point}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}