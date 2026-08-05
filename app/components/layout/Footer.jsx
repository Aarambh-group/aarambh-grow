"use client";

import Image from "next/image";
import {
    Phone,
    Mail,
    MapPin,
    Building2,
    ArrowUpRight,
    ShieldCheck,
    Briefcase,
} from "lucide-react";

const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact Us", href: "#contact" },
];

const serviceLinks = [
    { label: "Business Registration", href: "#" },
    { label: "Certification Services", href: "#" },
    { label: "Financial Assistance", href: "#" },
    { label: "Government Schemes", href: "#" },
    { label: "Digital Solutions", href: "#" },
    { label: "Compliance Services", href: "#" },
];

const socialLinks = [
    {
        label: "Facebook",
        href: "#",
        icon: (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        label: "Twitter",
        href: "#",
        icon: (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "#",
        icon: (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "#",
        icon: (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#081B33] text-slate-300 font-sans border-t-4 border-[#F97316]">
            {/* Upper Executive Contact Bar */}
            <div className="border-b border-slate-800/80 bg-[#061528]/60 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

                        {/* Phone */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#F97316]">
                                <Phone size={18} />
                            </div>
                            <div>
                                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Direct Inquiries</p>
                                <div className="text-xs font-semibold text-white flex items-center gap-2 mt-0.5">
                                    <a href="tel:+918511323120" className="hover:text-[#F97316] transition-colors">+91 85113 23120</a>
                                    <span className="text-slate-600">|</span>
                                    <a href="tel:+918511731120" className="hover:text-[#F97316] transition-colors">+91 85117 31120</a>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4 md:border-l md:border-slate-800/80 md:pl-6">
                            <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#1F8A4D]">
                                <Mail size={18} />
                            </div>
                            <div>
                                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Official Correspondence</p>
                                <a href="mailto:info@aarambhgrow.co.in" className="text-xs font-semibold text-white hover:text-[#1F8A4D] transition-colors mt-0.5 block">
                                    info@aarambhgrow.co.in
                                </a>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex items-center justify-start md:justify-end gap-2 md:border-l md:border-slate-800/80 md:pl-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* Main Corporate Body */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                    {/* Brand Profile (3 Cols) */}
                    <div className="lg:col-span-3 space-y-5">
                        <Image
                            src="/images/white-logo.png"
                            alt="AarambhGrow Group of Companies"
                            width={350}
                            height={120}
                            className="w-auto h-25 object-contain"
                        />
                        <p className="text-xs text-slate-400 leading-relaxed pr-2">
                            A premier corporate advisory and consulting enterprise driving growth for startups, MSMEs, and large business establishments across India.
                        </p>
                    </div>

                    {/* Navigational Hierarchy (5 Cols - Expanded layout to prevent text line wrap) */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4 lg:border-l lg:border-slate-800/80 lg:pl-6">
                        <div>
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 pl-3">
                                Navigation
                            </h4>
                            <ul className="space-y-1.5 text-xs">
                                {quickLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="group relative flex items-center gap-2 px-3 py-2 rounded-r-xl text-slate-400 hover:text-white bg-transparent hover:bg-gradient-to-r hover:from-[#F97316]/20 hover:to-transparent transition-all duration-300 border-l-2 border-transparent hover:border-[#F97316] whitespace-nowrap"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#F97316] group-hover:shadow-[0_0_10px_#F97316] transition-all duration-300 shrink-0" />
                                            <span className="font-medium tracking-wide transition-transform duration-300 group-hover:translate-x-1">
                                                {link.label}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 pl-3">
                                Solutions
                            </h4>
                            <ul className="space-y-1.5 text-xs">
                                {serviceLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="group relative flex items-center gap-2 px-3 py-2 rounded-r-xl text-slate-400 hover:text-white bg-transparent hover:bg-gradient-to-r hover:from-[#1F8A4D]/20 hover:to-transparent transition-all duration-300 border-l-2 border-transparent hover:border-[#1F8A4D] whitespace-nowrap"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#1F8A4D] group-hover:shadow-[0_0_10px_#1F8A4D] transition-all duration-300 shrink-0" />
                                            <span className="font-medium tracking-wide transition-transform duration-300 group-hover:translate-x-1">
                                                {link.label}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Corporate Headquarters Address Card (4 Cols) */}
                    <div className="lg:col-span-4 lg:border-l lg:border-slate-800/80 lg:pl-8">
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Building2 size={14} className="text-[#F97316]" /> Registered Office
                        </h4>

                        <div className="bg-white/5 border border-white/10 rounded-sm p-5 space-y-4">
                            <p className="text-xs text-slate-300 leading-relaxed">
                                G-902, Titanium City Center, Nr. Sachin Tower, Satellite, Ahmedabad – 380015, Gujarat, India
                            </p>

                            <a
                                href="https://maps.google.com/?q=G-902,Titanium+City+Center,Nr.Sachin+Tower,Satellite,Ahmedabad–380015"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-between w-full bg-white/10 hover:bg-[#F97316] text-white text-xs font-medium px-4 py-2.5 rounded-lg border border-white/10 transition-all duration-200"
                            >
                                <span className="flex items-center gap-2">
                                    <MapPin size={14} /> Open Location Map
                                </span>
                                <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright Line */}
            <div className="border-t border-slate-800/80 bg-[#051120] py-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© {currentYear} Aarambh Grow Group of Companies. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}