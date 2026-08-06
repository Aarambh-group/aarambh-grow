"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Factory,
    Cpu,
    HeartPulse,
    Building2,
    ShoppingCart,
    GraduationCap,
    Truck,
    Rocket,
    Star,
    ArrowLeft,
    ArrowRight,
    MessageCircle,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const industries = [
    { label: "Manufacturing", icon: Factory, color: "#F26522" },
    { label: "IT & Tech", icon: Cpu, color: "#157327" },
    { label: "Healthcare", icon: HeartPulse, color: "#DC2626" },
    { label: "Real Estate", icon: Building2, color: "#7C3AED" },
    { label: "E-commerce", icon: ShoppingCart, color: "#2563EB" },
    { label: "Education", icon: GraduationCap, color: "#059669" },
    { label: "Logistics", icon: Truck, color: "#D97706" },
    { label: "Startups", icon: Rocket, color: "#EA580C" },
];

const cardBase =
    "bg-white rounded-lg border border-slate-100 shadow-sm p-5 sm:p-7 transition-shadow duration-300 hover:shadow-xl flex flex-col justify-between";

export default function BusinessCategories() {
    return (
        <section className="bg-[#F8FAFC] py-10 sm:py-16 px-4 sm:px-6 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="max-w-[1220px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
            >
                {/* ══════════ LEFT CARD — Industries ══════════ */}
                <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className={cardBase}
                >
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] sm:text-xs font-extrabold text-[#F26522] uppercase tracking-wider">
                                Solutions For Every Industry
                            </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-extrabold text-[#0F2A4A] mb-1">
                            Industry Focus
                        </h3>

                        <p className="text-xs sm:text-sm text-[#64748B] mb-4 sm:mb-5 leading-relaxed">
                            We serve businesses of all sizes and sectors with tailored compliance and growth solutions.
                        </p>

                        {/* Responsive Grid: 2 columns on mobile for spaciousness, 4 columns on sm+ */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                            {industries.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: i * 0.03,
                                            ease: EASE,
                                        }}
                                        className="flex items-center gap-2 sm:flex-col sm:items-center sm:text-center p-2 sm:p-1 rounded-lg bg-slate-50/60 sm:bg-transparent border border-slate-100 sm:border-none"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.08 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2, ease: EASE }}
                                            className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shrink-0 bg-white sm:bg-slate-50 border border-slate-100 shadow-2xs"
                                        >
                                            <Icon size={18} style={{ color: item.color }} strokeWidth={1.8} />
                                        </motion.div>
                                        <span className="text-xs sm:text-xs font-medium text-[#0F2A4A] leading-tight w-full truncate">
                                            {item.label}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="text-center mt-5 pt-3 border-t border-slate-100">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0F2A4A] hover:text-[#F26522] transition-colors duration-300 group py-1"
                        >
                            <span>And Many More</span>
                            <ArrowRight
                                size={14}
                                className="transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </motion.div>

                {/* ══════════ CENTER CARD — Testimonial ══════════ */}
                <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className={cardBase}
                >
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] sm:text-xs font-extrabold text-[#157327] uppercase tracking-wider">
                                Client Stories
                            </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-extrabold text-[#0F2A4A] mb-3">
                            Trusted By Growing Businesses
                        </h3>

                        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed italic mb-5">
                            &ldquo;Aarambh helped us with our registration and funding in
                            record time. Their team is professional, responsive, and truly
                            invested in our growth.&rdquo;
                        </p>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-10 h-10 rounded-full bg-[#0F2A4A] text-white flex items-center justify-center font-extrabold text-xs border border-slate-200 shrink-0 shadow-sm">
                                RS
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs font-bold text-[#0F2A4A] leading-tight truncate m-0">
                                    Rahul Sharma
                                </p>
                                <p className="text-[11px] text-[#64748B] leading-tight truncate m-0 mb-1">
                                    CEO, TechNova Pvt. Ltd.
                                </p>
                                <div className="flex gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            size={11}
                                            fill="#F26522"
                                            className="text-[#F26522]"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-1.5 shrink-0">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.18, ease: EASE }}
                                aria-label="Previous testimonial"
                                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[#0F2A4A] hover:border-[#F26522] hover:text-[#F26522] transition-colors bg-white shadow-2xs cursor-pointer"
                            >
                                <ArrowLeft size={13} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.18, ease: EASE }}
                                aria-label="Next testimonial"
                                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[#0F2A4A] hover:border-[#F26522] hover:text-[#F26522] transition-colors bg-white shadow-2xs cursor-pointer"
                            >
                                <ArrowRight size={13} />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* ══════════ RIGHT CARD — CTA ══════════ */}
                <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="md:col-span-2 lg:col-span-1 rounded-lg p-5 sm:p-7 relative overflow-hidden flex flex-col justify-between min-h-[320px] sm:min-h-[360px] border border-slate-100 shadow-sm bg-white"
                >
                    {/* Background Image / Rocket Art */}
                    <Image
                        src="/images/rocket-bg.png"
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 420px"
                        className="object-cover object-right pointer-events-none opacity-15 sm:opacity-90"
                    />

                    {/* Solid/Gradient Overlay for flawless text readability on mobile */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/80 sm:bg-gradient-to-r sm:from-white sm:via-white/90 sm:to-transparent pointer-events-none"
                    />

                    {/* Content */}
                    <div className="relative z-10 max-w-full sm:max-w-[65%]">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#F26522]/10 text-[#F26522] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider mb-2.5">
                            Take The Next Step
                        </span>
                        <h3 className="text-[#0F2A4A] font-black text-lg sm:text-2xl leading-snug mb-2">
                            Ready to Scale Your Business?
                        </h3>
                        <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-5 font-medium">
                            Book a free consultation with our experts and start your journey towards growth.
                        </p>
                    </div>

                    {/* Action buttons */}
                    <div className="relative z-10 flex flex-col gap-2.5">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-between bg-[#F26522] text-white px-4 sm:px-5 py-3 rounded-lg text-xs sm:text-sm font-bold shadow-md transition-all duration-300 hover:bg-[#e05412]"
                        >
                            <span>Get Free Consultation</span>
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                                <ArrowRight className="w-3 h-3 text-white" />
                            </div>
                        </Link>

                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0F2A4A] px-4 sm:px-5 py-3 rounded-lg text-xs sm:text-sm font-bold border border-slate-200 shadow-2xs transition-all duration-300"
                        >
                            <MessageCircle size={16} className="text-[#25D366] fill-[#25D366]" />
                            <span>Chat on WhatsApp</span>
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}