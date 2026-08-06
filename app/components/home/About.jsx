"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowRight, ShieldCheck, Target, Award } from "lucide-react";

export default function HomeAboutTeaser() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 24,
      },
    },
  };

  return (
    <section className="w-full bg-[#f8fafc] py-12 sm:py-14 font-sans text-[#0f172a] border-y border-slate-100 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={containerVariants}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Badge - Fade In & Drop Down */}
        <motion.div variants={fadeUpVariants} className="flex justify-center mb-4">
          <div className="group inline-flex items-center gap-1.5 rounded-full bg-[#fff5f0] border border-[#f26522]/20 px-3.5 py-1 transition-all duration-300 ease-out hover:scale-105 hover:border-[#f26522]/50 hover:shadow-sm cursor-default">
            <Star className="w-3 h-3 fill-[#f26522] text-[#f26522] transition-transform duration-300 ease-out group-hover:rotate-45" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#f26522]">
              WHO WE ARE
            </span>
          </div>
        </motion.div>

        {/* Heading & Summary - Fade In & Slide Up */}
        <motion.div variants={fadeUpVariants} className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2a4a] leading-tight tracking-tight transition-colors duration-300 hover:text-[#f26522]">
            Architecting the Future of Business Growth through Precision.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed px-2 sm:px-0">
            At <strong className="text-[#0f2a4a]">AarambhGrow</strong>, we engineer robust registration, compliance, and growth frameworks so founders can eliminate administrative friction and focus on market innovation.
          </p>
        </motion.div>

        {/* Feature Badges - Staggered Slide In Animation */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {/* Card 1 */}
          <div className="group flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#f26522]/40">
            <Target className="w-5 h-5 text-[#f26522] shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-12" />
            <span className="text-xs sm:text-sm font-bold text-[#0f2a4a] transition-colors duration-300 group-hover:text-[#f26522]">
              Mission-Driven Entry
            </span>
          </div>

          {/* Card 2 */}
          <div className="group flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#157327]/40">
            <Award className="w-5 h-5 text-[#157327] shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-12" />
            <span className="text-xs sm:text-sm font-bold text-[#0f2a4a] transition-colors duration-300 group-hover:text-[#157327]">
              Institutional Standards
            </span>
          </div>

          {/* Card 3 */}
          <div className="group flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#f26522]/40">
            <ShieldCheck className="w-5 h-5 text-[#f26522] shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-12" />
            <span className="text-xs sm:text-sm font-bold text-[#0f2a4a] transition-colors duration-300 group-hover:text-[#f26522]">
              100% Compliance Precision
            </span>
          </div>
        </motion.div>

        {/* CTA Link - Final Stagger Fade In */}
        <motion.div variants={fadeUpVariants} className="mt-8 text-center">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#f26522] transition-all duration-300 ease-out hover:text-[#d95316]"
          >
            <span className="relative">
              Explore Our Mission, Vision & Guarantees
              <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#d95316] transition-all duration-300 ease-out group-hover:w-full" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}