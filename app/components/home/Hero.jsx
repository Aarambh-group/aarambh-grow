"use client";

import Link from "next/link";
import { ArrowRight, Building2, TrendingUp, Globe2, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-[calc(100dvh-4rem)] w-full flex flex-col justify-between bg-gradient-to-b from-slate-50/60 via-white to-slate-50/30 overflow-hidden font-sans select-none">
            
            {/* Custom Refresh / Page Load Keyframe Animations for Text Content Only */}
            <style jsx global>{`
                @keyframes slowFadeUp {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-slow-fade-1 {
                    animation: slowFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .animate-slow-fade-2 {
                    animation: slowFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
                    opacity: 0;
                }
                .animate-slow-fade-3 {
                    animation: slowFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
                    opacity: 0;
                }
                .animate-slow-fade-4 {
                    animation: slowFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards;
                    opacity: 0;
                }
                .animate-slow-fade-5 {
                    animation: slowFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
                    opacity: 0;
                }
            `}</style>

            {/* MAIN CONTENT & RIGHT BACKGROUND IMAGE CONTAINER */}
            <div className="relative flex-grow flex items-center min-h-0">

                {/* RIGHT ALIGNED BACKGROUND IMAGE LAYER (Zero Animations Added) */}
                <div
                    className="absolute top-1 -bottom-25 right-15 w-full lg:w-[75%] z-0 pointer-events-none"
                    style={{
                        backgroundImage: "url('/images/hero2.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right center",
                        backgroundSize: "100% auto"
                    }}
                />

                {/* Gradient Fading Layer for mobile readability */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/95 sm:via-white/80 to-transparent lg:hidden" />

                {/* LEFT SIDE BRAND CONTENT */}
                <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-2 lg:py-4">
                    <div className="max-w-xl lg:max-w-2xl flex flex-col items-start gap-2.5 sm:gap-3 z-20">

                        {/* Status Badge - Refreshes with animation */}
                        <div className="animate-slow-fade-1 inline-flex mb-5 items-center gap-2 rounded-full bg-slate-100/90 border border-slate-200/90 px-3.5 py-1 shadow-sm backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#157327] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#157327]"></span>
                            </span>
                            <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#03254C] uppercase">
                                Integrated Corporate & Growth Solutions
                            </span>
                        </div>

                        {/* Executive Heading - Refreshes with animation */}
                        <h1 className="animate-slow-fade-2 text-2xl sm:text-3xl lg:text-[42px] xl:text-[46px] font-extrabold tracking-tight text-[#03254C] leading-[1.12]">
                            Your Trusted Partner for <br />
                            <span className="text-[#F26522]">Business Growth</span> & <br />
                            <span className="text-[#157327]">Compliance.</span>
                        </h1>

                        {/* Subtitle - Refreshes with animation */}
                        <p className="animate-slow-fade-3 text-xs mb-2.5 sm:text-sm text-slate-600 font-normal leading-relaxed max-w-lg">
                            Empowering startups, MSMEs, and enterprises with end-to-end business consulting, company registration, compliance, certifications, financial advisory, and strategic growth solutions—all under one trusted partner.
                        </p>

                        {/* NAVBAR-STYLE SLIDE-UP ANIMATED BUTTONS - Refreshes with animation */}
                        <div className="animate-slow-fade-4 mt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">

                            {/* PRIMARY BUTTON */}
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-full border border-[#F26522] bg-[#F26522] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-colors duration-300 ease-out hover:text-[#03254C]"
                            >
                                <span className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0" />
                                <span className="relative z-10 flex items-center gap-1.5">
                                    Book a Free Consultation
                                    <ArrowUpRight className="h-4 w-4 text-white transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#157327]" />
                                </span>
                            </Link>

                            {/* SECONDARY BUTTON */}
                            <Link
                                href="/services"
                                className="group relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-full border border-slate-300 bg-white px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#03254C] shadow-sm transition-colors duration-300 ease-out hover:border-[#03254C] hover:text-white"
                            >
                                <span className="absolute inset-0 z-0 translate-y-full bg-[#03254C] transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0" />
                                <span className="relative z-10 flex items-center gap-1.5">
                                    Explore Our Services
                                    <ArrowUpRight className="h-4 w-4 text-[#03254C] transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F26522]" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM STATS CONTAINER - Refreshes with animation */}
            <div className="animate-slow-fade-5 relative z-20 pb-3 sm:pb-4">
                <div className="mx-auto flex justify-start w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="w-full lg:w-[56%] p-2.5 sm:p-3.5">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">

                            {/* Stat 1 */}
                            <div className="flex items-center gap-2">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#03254C]">
                                    <Building2 className="h-4.5 w-4.5" />
                                </div>
                                <div>
                                    <h3 className="text-xs sm:text-sm font-bold text-[#03254C]">Multiple</h3>
                                    <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Entities & Sectors</p>
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div className="flex items-center gap-2">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#F26522]">
                                    <TrendingUp className="h-4.5 w-4.5" />
                                </div>
                                <div>
                                    <h3 className="text-xs sm:text-sm font-bold text-[#03254C]">1000+</h3>
                                    <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Enterprises Scaled</p>
                                </div>
                            </div>

                            {/* Stat 3 */}
                            <div className="flex items-center gap-2">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-50 text-[#157327]">
                                    <Globe2 className="h-4.5 w-4.5" />
                                </div>
                                <div>
                                    <h3 className="text-xs sm:text-sm font-bold text-[#03254C]">Pan-India</h3>
                                    <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Corporate Presence</p>
                                </div>
                            </div>

                            {/* Stat 4 */}
                            <div className="flex items-center gap-2">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#03254C]">
                                    <ShieldCheck className="h-4.5 w-4.5" />
                                </div>
                                <div>
                                    <h3 className="text-xs sm:text-sm font-bold text-[#03254C]">99.8%</h3>
                                    <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Compliance Rate</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}