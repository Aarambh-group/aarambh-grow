"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
        label: "Services",
        href: "/services",
        children: ["Web Development", "App Development", "Digital Marketing", "Branding"],
    },
    { label: "Contact Us", href: "/contact" },
];

function Logo() {
    return (
        <Link href="/" className="flex items-center gap-1 shrink-0 group">
            <div className="flex items-center transition-transform duration-300 group-hover:scale-[1.01]">
                <Image
                    src="/images/home-logo.png"
                    alt="Aarambh Grow"
                    width={130}
                    height={30}
                    priority
                    className="h-20 w-auto object-contain"
                />
            </div>
        </Link>
    );
}

function DesktopLink({ link }) {
    const hasChildren = Boolean(link.children?.length);

    return (
        <div className="group relative py-5 flex items-center">
            {/* Main Interactive Container */}
            <Link
                href={link.href}
                className="relative z-10 flex items-center gap-1 px-2 py-1.5 text-[13px] font-semibold text-[#03254C] transition-colors duration-300 ease-out select-none whitespace-nowrap hover:text-[#F26522]"
            >
                {/* Text Layer */}
                <span className="relative z-10 block transition-transform duration-300 ease-out">
                    {link.label}
                </span>

                {hasChildren && (
                    <ChevronDown className="relative z-10 h-3 w-3 text-slate-400 transition-all duration-300 ease-out group-hover:rotate-180 group-hover:text-[#F26522]" />
                )}

                {/* ANIMATED UNDERLINE EFFECT: Orange-to-Green Gradient Underline from Favicon */}
                <span
                    className="absolute bottom-0 left-3.5 right-3.5 h-[2px] scale-x-0 transition-transform duration-300 ease-out origin-left group-hover:scale-x-100"
                    style={{
                        background: "linear-gradient(90deg, #F26522 0%, #157327 100%)"
                    }}
                />
            </Link>

            {/* Premium Submenu */}
            {hasChildren && (
                <div className="invisible absolute top-full left-1/2 z-20 w-48 -translate-x-1/2 pt-2 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:visible group-hover:opacity-100">
                    <div className="overflow-hidden rounded-xl border border-slate-100 bg-white/95 p-1.5 shadow-[0_20px_40px_-15px_rgba(3,37,76,0.1)] backdrop-blur-xl transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                        {link.children.map((child) => (
                            <Link
                                key={child}
                                href="#"
                                className="group/item flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-[#03254C]/80 transition-all duration-200 hover:bg-[#F26522]/10 hover:text-[#F26522]"
                            >
                                <span className="transition-transform duration-200 group-hover/item:translate-x-0.5">
                                    {child}
                                </span>
                                <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 text-[#157327]" />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function MobileLink({ link, onNavigate }) {
    const [open, setOpen] = useState(false);
    const hasChildren = Boolean(link.children?.length);

    return (
        <div className="border-b border-slate-100/60 last:border-none">
            <div className="flex w-full items-center justify-between py-0.5">
                <Link
                    href={link.href}
                    onClick={onNavigate}
                    className="flex-grow py-2.5 text-[13px] font-semibold tracking-wide text-[#03254C] hover:text-[#F26522] transition-colors"
                >
                    {link.label}
                </Link>

                {hasChildren && (
                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        className="p-2.5 text-slate-400"
                        aria-label="Toggle submenu"
                    >
                        <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180 text-[#F26522]" : ""
                                }`}
                        />
                    </button>
                )}
            </div>

            <div
                className={`grid transition-all duration-300 ease-in-out ${hasChildren && open ? "grid-rows-[1fr] opacity-100 mb-2" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden pl-2 flex flex-col gap-1">
                    {link.children?.map((child) => (
                        <Link
                            key={child}
                            href="#"
                            onClick={onNavigate}
                            className="text-xs font-semibold text-slate-500 py-1 hover:text-[#157327] transition-colors"
                        >
                            {child}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled
                    ? "border-b border-slate-200/40 bg-white/90 shadow-sm backdrop-blur-md h-16"
                    : "border-b border-transparent bg-white h-16"
                }`}
        >
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                <Logo />

                {/* Desktop Menu */}
                <nav className="hidden items-center gap-2 lg:flex h-full">
                    {NAV_LINKS.map((link) => (
                        <DesktopLink key={link.label} link={link} />
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-5 lg:flex">
                    <a
                        href="tel:+919876543210"
                        className="group flex items-center gap-2 text-[13px] font-semibold text-[#03254C] hover:text-[#F26522] transition-colors"
                    >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-[#03254C] transition-transform duration-300 group-hover:bg-[#F26522] group-hover:text-white group-hover:-translate-y-0.5">
                            <Phone className="h-3.5 w-3.5" />
                        </span>
                        +91 987654 3210
                    </a>

                    <Link
                        href="/contact"
                        className="group relative flex items-center gap-1 overflow-hidden rounded-full border border-[#F26522] bg-[#F26522] px-4 py-1.5 text-xs font-semibold text-white transition-colors duration-300 ease-out hover:text-[#03254C]"
                    >
                        <span className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0" />
                        <span className="relative z-10 flex items-center gap-1">
                            Get Free Consultation
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white group-hover:text-[#157327]" />
                        </span>
                    </Link>
                </div>

                {/* Mobile Button */}
                <button
                    type="button"
                    onClick={() => setMobileOpen((o) => !o)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-[#03254C] hover:bg-slate-50 lg:hidden"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                    {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`absolute left-0 w-full border-t border-slate-100 bg-white/95 px-4 pb-4 backdrop-blur-xl lg:hidden transition-all duration-300 ease-in-out ${mobileOpen ? "top-full opacity-100 visible shadow-md" : "top-[95%] opacity-0 invisible"
                    }`}
            >
                <nav className="flex flex-col pt-0.5">
                    {NAV_LINKS.map((link) => (
                        <MobileLink
                            key={link.label}
                            link={link}
                            onNavigate={() => setMobileOpen(false)}
                        />
                    ))}
                </nav>

                <div className="mt-3 flex flex-col gap-2.5">
                    <a
                        href="tel:+919876543210"
                        className="flex items-center gap-2 py-1 text-[13px] font-semibold text-[#03254C]"
                    >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F26522]/10 text-[#F26522]">
                            <Phone className="h-3.5 w-3.5" />
                        </span>
                        +91 987 654 3210
                    </a>

                    <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-center gap-1 rounded-full bg-gradient-to-r from-[#F26522] to-[#157327] px-4 py-2.5 text-xs font-semibold text-white"
                    >
                        Get Free Consultation
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                </div>
            </div>
        </header>
    );
}