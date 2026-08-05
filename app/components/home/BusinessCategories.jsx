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
    { label: "IT & Technology", icon: Cpu, color: "#157327" },
    { label: "Healthcare", icon: HeartPulse, color: "#DC2626" },
    { label: "Real Estate", icon: Building2, color: "#7C3AED" },
    { label: "E-commerce", icon: ShoppingCart, color: "#2563EB" },
    { label: "Education", icon: GraduationCap, color: "#059669" },
    { label: "Logistics", icon: Truck, color: "#D97706" },
    { label: "Startups", icon: Rocket, color: "#EA580C" },
];

const cardBase =
    "bg-white rounded-lg border border-slate-100 shadow-sm p-6 sm:p-7 transition-shadow duration-300 hover:shadow-xl";

export default function BusinessCategories() {
    return (
        <section className="bg-[#F8FAFC] py-14 sm:py-14 px-4">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="max-w-[1220px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {/* ══════════ LEFT CARD — Industries ══════════ */}
                <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className={cardBase}
                >
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-extrabold text-[#F26522] uppercase tracking-wider">
                            Solutions For Every Industry
                        </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#0F2A4A] mb-1">
                        Industry Focus
                    </h3>

                    <p className="text-xs sm:text-sm text-[#64748B] mb-5 leading-relaxed">
                        We serve businesses of all sizes and sectors with tailored compliance and growth solutions.
                    </p>

                    <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
                        {industries.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{
                                        duration: 0.35,
                                        delay: 0.05 + i * 0.04,
                                        ease: EASE,
                                    }}
                                    className="flex flex-col items-center text-center"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 0.2, ease: EASE }}
                                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-1.5 cursor-pointer bg-slate-50 border border-slate-100"
                                    >
                                        <Icon size={18} style={{ color: item.color }} strokeWidth={1.8} />
                                    </motion.div>
                                    <span className="text-xs font-medium text-[#0F2A4A] leading-tight">
                                        {item.label}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-6">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0F2A4A] hover:text-[#F26522] transition-colors duration-300 group"
                        >
                            And Many More
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
                    className={`${cardBase} flex flex-col justify-between`}
                >
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-extrabold text-[#157327] uppercase tracking-wider">
                                Client Stories
                            </span>
                        </div>

                        <h3 className="text-xl font-extrabold text-[#0F2A4A] mb-4">
                            Trusted By Growing Businesses
                        </h3>

                        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed italic mb-6">
                            &ldquo;Aarambh helped us with our registration and funding in
                            record time. Their team is professional, responsive, and truly
                            invested in our growth.&rdquo;
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-3">
                            {/* Initials Avatar */}
                            <div className="w-11 h-11 rounded-full bg-[#0F2A4A] text-white flex items-center justify-center font-extrabold text-sm border border-slate-200 shrink-0 shadow-sm">
                                RS
                            </div>

                            <div>
                                <p className="text-xs sm:text-sm font-bold text-[#0F2A4A] leading-tight m-0">
                                    Rahul Sharma
                                </p>
                                <p className="text-xs text-[#64748B] leading-tight m-0 mb-1">
                                    CEO, TechNova Pvt. Ltd.
                                </p>
                                <div className="flex gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            size={12}
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
                                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[#0F2A4A] hover:border-[#F26522] hover:text-[#F26522] transition-colors"
                            >
                                <ArrowLeft size={14} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.18, ease: EASE }}
                                aria-label="Next testimonial"
                                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[#0F2A4A] hover:border-[#F26522] hover:text-[#F26522] transition-colors"
                            >
                                <ArrowRight size={14} />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* ══════════ RIGHT CARD — CTA ══════════ */}
                <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="md:col-span-2 lg:col-span-1 rounded-lg p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between min-h-[360px] border border-slate-100 shadow-sm bg-white"
                >
                    {/* Background artwork — positioned so rocket is on the right */}
                    <Image
                        src="/images/rocket-bg.png"
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 420px"
                        className="object-cover object-right pointer-events-none"
                    />

                    {/* Soft gradient mask to guarantee text readability on bright/white backgrounds */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none"
                    />

                    {/* Content Wrapper */}
                    <div className="relative z-10 max-w-[65%] sm:max-w-[60%]">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#F26522]/10 text-[#F26522] text-xs font-extrabold uppercase tracking-wider mb-3">
                            Take The Next Step
                        </span>
                        <h3 className="text-[#0F2A4A] font-black text-xl sm:text-2xl leading-snug mb-3">
                            Ready to Scale Your Business?
                        </h3>
                        <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                            Book a free consultation with our experts and start your journey towards growth.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="relative z-10 flex flex-col gap-2.5">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-between bg-[#F26522] text-white px-5 py-3 rounded-full text-xs font-bold shadow-md transition-all duration-300 hover:bg-[#e05412]"
                        >
                            <span>Get Free Consultation</span>
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                                <ArrowRight className="w-3 h-3 text-white" />
                            </div>
                        </Link>

                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0F2A4A] px-5 py-3 rounded-full text-xs font-bold border border-slate-200 shadow-xs transition-all duration-300"
                        >
                            <MessageCircle size={15} className="text-[#25D366] fill-[#25D366]" />
                            <span>Chat on WhatsApp</span>
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}