"use client";

import React from "react";
import {
    ArrowRight,
    CheckCircle2,
    Clock,
    Sparkles,
    PhoneCall,
    Calendar,
} from "lucide-react";

export default function CTASection() {
    const highlights = [
        "No obligation consultation",
        "Tailored advisory roadmap",
        "100% data privacy assured",
    ];

    return (
        <section className="relative w-full bg-[#f8fafc] py-6 sm:py-8 font-sans select-none overflow-hidden text-[#0f172a]">
            <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[#f26522]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[#157327]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 lg:p-8 shadow-md shadow-slate-200/50 overflow-hidden">

                    {/* Decorative Corner Gradient Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f2a4a] via-[#f26522] to-[#157327]" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
                        <div className="lg:col-span-7 space-y-3 text-left">

                            {/* TOP BADGE */}
                            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#fff5f0] border border-[#f26522]/20 px-3 py-0.5">
                                <Sparkles className="w-3 h-3 text-[#f26522]" />
                                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#f26522]">
                                    Get Started Today
                                </span>
                            </div>

                            {/* HEADING */}
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2a4a] leading-tight tracking-tight">
                                Ready to Accelerate Your <span className="text-[#f26522]">Business Growth?</span>
                            </h2>

                            {/* SUBTITLE */}
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl">
                                Partner with our experts to eliminate regulatory roadblocks, streamline compliance filings, and build an institutional foundation for long-term scale.
                            </p>

                            {/* TRUST HIGHLIGHTS */}
                            <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4">
                                {highlights.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-1.5">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#157327] shrink-0" />
                                        <span className="text-[11px] font-bold text-[#0f2a4a]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <div className="bg-[#f8fafc] border border-slate-200/80 rounded-xl p-4 space-y-3 shadow-2xs">
                                <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 text-[#f26522]" />
                                        <span className="text-[11px] font-black uppercase tracking-wider text-[#0f2a4a]">
                                            Fast-Track Onboarding
                                        </span>
                                    </div>
                                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-[#157327]/10 text-[#157327]">
                                        24h Response
                                    </span>
                                </div>

                                {/* PRIMARY CTA BUTTON */}
                                <button
                                    type="button"
                                    className="w-full group relative inline-flex items-center justify-center gap-2 rounded-lg bg-[#0f2a4a] hover:bg-[#f26522] px-4 py-2.5 text-[11px] font-black uppercase tracking-wider text-white shadow-md shadow-[#0f2a4a]/20 hover:shadow-[#f26522]/30 transition-all duration-300 cursor-pointer active:scale-[0.98]"
                                >
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span>Book Free Consultation</span>
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>

                                {/* SECONDARY CTA BUTTON */}
                                <button
                                    type="button"
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-200/80 px-4 py-2 text-[11px] font-extrabold text-[#0f2a4a] shadow-2xs transition-colors duration-200 cursor-pointer"
                                >
                                    <PhoneCall className="w-3.5 h-3.5 text-[#157327]" />
                                    <span>Talk to an Expert Now</span>
                                </button>

                                {/* FOOTER NOTICE */}
                                <div className="text-center">
                                    <span className="text-[10px] font-bold text-slate-400">
                                        Trusted by 500+ expanding businesses nationwide.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM METRIC RAIL */}
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center pt-4 border-t border-slate-100">
                        <div className="bg-[#f8fafc] sm:bg-white border sm:border-slate-200/80 rounded-xl p-2.5 sm:p-3 shadow-2xs">
                            <span className="block text-lg sm:text-xl font-black text-[#0f2a4a]">99.8%</span>
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                                Filing Accuracy Rate
                            </span>
                        </div>
                        <div className="bg-[#f8fafc] sm:bg-white border sm:border-slate-200/80 rounded-xl p-2.5 sm:p-3 shadow-2xs">
                            <span className="block text-lg sm:text-xl font-black text-[#f26522]">24 Hours</span>
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                                Average Initial Response
                            </span>
                        </div>
                        <div className="bg-[#f8fafc] sm:bg-white border sm:border-slate-200/80 rounded-xl p-2.5 sm:p-3 shadow-2xs">
                            <span className="block text-lg sm:text-xl font-black text-[#157327]">100%</span>
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                                Transparent Pricing
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}