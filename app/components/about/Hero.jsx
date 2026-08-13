"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Headphones, ShieldCheck, Lock } from "lucide-react";

export default function AboutHero() {
  const features = [
    {
      icon: Headphones,
      title: "Rapid Response",
      description: "Dedicated support within 24 hours",
      iconColor: "text-[#157327]",
      bgColor: "bg-[#157327]/10",
    },
    {
      icon: ShieldCheck,
      title: "Strategic Advisory",
      description: "Insights from seasoned industry leaders",
      iconColor: "text-[#F26522]",
      bgColor: "bg-[#F26522]/10",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Strict confidentiality and data privacy",
      iconColor: "text-[#157327]",
      bgColor: "bg-[#157327]/10",
    },
  ];

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <section className="relative w-full bg-[#f8fafc] font-sans text-[#03254C] m-0 p-0 overflow-hidden min-h-[420px] lg:min-h-[450px] flex items-center">

      {/* FULL BACKGROUND IMAGE (Minor height increase applied via container bounds & scale) */}
      <div className="absolute right-0 -top-1 -bottom-1 left-auto w-full lg:w-[65%] z-0 pointer-events-none overflow-hidden flex items-center justify-end">
        <Image
          src="/images/about-bg1.png"
          alt="Corporate Advisory Background"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-contain object-right scale-110 sm:scale-[1.28] origin-right p-0"
        />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="w-full relative z-10 py-6 sm:py-8 lg:py-10">
        <motion.div
          className="w-full lg:w-3/5 space-y-4 text-center lg:text-left px-6 sm:px-12 lg:pl-16 lg:pr-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={fadeInUp} className="inline-block">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03254C]/5 border border-[#03254C]/10 text-[10px] sm:text-xs font-semibold text-[#03254C] uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#157327] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#157327]"></span>
              </span>
              <span>Strategic Advisory & Growth</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={fadeInUp} className="space-y-1">
            <h1 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-extrabold tracking-tight text-[#03254C] leading-[1.15]">
              Building Businesses. <br className="hidden sm:inline" />
              <span className="text-[#157327]">Enabling Growth.</span>{" "}
              <span className="text-[#F26522]">Creating Possibilities.</span>
            </h1>
            <div className="w-12 h-1 bg-gradient-to-r from-[#F26522] to-[#157327] rounded-full mt-2 mx-auto lg:mx-0" />
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-xs sm:text-sm font-normal text-[#475569] leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            We partner with ambitious founders, business leaders, and enterprises to deliver end-to-end consulting, legal compliance, and strategic scaling solutions built for enduring performance.
          </motion.p>

          {/* Feature Cards Grid */}
          <motion.div
            variants={fadeInUp}
            className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto lg:mx-0"
          >
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs text-left"
                >
                  <div className={`p-2 rounded-md ${item.bgColor} ${item.iconColor} shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#03254C]">
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] font-normal text-[#64748B] mt-0.5 leading-tight">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}