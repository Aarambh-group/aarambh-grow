"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Users,
    Briefcase,
    Calendar,
    ShieldCheck,
    Check,
} from "lucide-react";

const features = [
    "Expertise You Can Trust",
    "End-to-End Support for Every Business",
    "Transparent Process with No Hidden Costs",
    "Dedicated Support at Every Step",
];

const stats = [
    {
        icon: Users,
        value: "1000+",
        label: "Happy Clients",
        iconBg: "bg-[#FFF5F0]",
        iconColor: "text-[#F26522]",
    },
    {
        icon: Briefcase,
        value: "500+",
        label: "Projects Completed",
        iconBg: "bg-[#F0FDF4]",
        iconColor: "text-[#157327]",
    },
    {
        icon: Calendar,
        value: "20+",
        label: "Years of Experience",
        iconBg: "bg-indigo-50",
        iconColor: "text-indigo-600",
    },
    {
        icon: ShieldCheck,
        value: "98%",
        label: "Client Satisfaction",
        iconBg: "bg-[#FFF5F0]",
        iconColor: "text-[#F26522]",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="font-body flex items-center justify-center">

            <div className="relative w-full max-w-[1220px] rounded-lg aspect-[15/9] flex flex-col justify-center px-6 sm:px-10 overflow-hidden">
                {/* FULL BACKGROUND IMAGE */}
                <Image
                    src="/images/why.png"
                    alt="Why Choose Us Background"
                    fill
                    className="object-cover object-center z-0"
                    priority
                />

                {/* TOP BADGE */}
                <div className="relative z-10 flex justify-center mb-3 sm:mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FFF5F0] border border-orange-100 text-[10px] sm:text-[11px] font-bold font-heading text-[#F26522] uppercase tracking-wider">
                        <span className="w-1 h-1 rounded-full bg-[#F26522]" />
                        Why Choose Us
                        <span className="w-1 h-1 rounded-full bg-[#157327]" />
                    </span>
                </div>

                {/* CONTENT GRID */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">

                    {/* LEFT COLUMN — Text Content */}
                    <div className="lg:col-span-7 space-y-2 sm:space-y-3">
                        <h2 className="text-[20px] sm:text-[26px] lg:text-[30px] font-extrabold font-heading text-[#0F2A4A] leading-tight">
                            We Don’t Just Provide Services. <br className="hidden sm:inline" />
                            We Build{" "}
                            <span className="text-[#F26522]">Growth Engines.</span>
                        </h2>

                        <p className="text-[11px] sm:text-[12px] lg:text-[13px] font-normal text-[#64748B] leading-snug">
                            We simplify your business journey with expert guidance, transparent process and technology-driven solutions.
                        </p>

                        {/* Feature Bullet Points */}
                        <div className="space-y-1 sm:space-y-1.5 pt-1">
                            {features.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div className="w-3.5 h-3.5 rounded-full bg-[#F26522] flex items-center justify-center shrink-0">
                                        <Check className="w-2 h-2 text-white stroke-[3]" />
                                    </div>
                                    <span className="text-[11px] sm:text-[12px] font-semibold font-heading text-[#0F2A4A]">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN — 2x2 Stats Grid */}
                    <div className="lg:col-span-6 grid grid-cols-2 gap-2 sm:gap-3">
                        {stats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={i}
                                    className="bg-white/90 backdrop-blur-xs rounded-lg p-2.5 sm:p-3 border border-[#E2E8F0] shadow-2xs flex flex-col items-center justify-center text-center transition-transform duration-200 hover:-translate-y-0.5"
                                >
                                    <div
                                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${stat.iconBg} flex items-center justify-center mb-1`}
                                    >
                                        <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${stat.iconColor}`} />
                                    </div>
                                    <span className="text-[15px] sm:text-[18px] font-bold font-heading text-[#0F2A4A] leading-none mb-0.5">
                                        {stat.value}
                                    </span>
                                    <span className="text-[10px] sm:text-[11px] font-normal text-[#64748B]">
                                        {stat.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}