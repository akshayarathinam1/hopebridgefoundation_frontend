'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiArrowUpRight, FiChevronDown, FiBookOpen, FiHome, FiHeart, FiActivity, FiUsers } from "react-icons/fi";
import Button from "@/components/ui/Button";

const programs = [
  { label: "Education", href: "/programs/education", icon: FiBookOpen, emoji: "🎓", desc: "Scholarships & school kits" },
  { label: "Child & Orphan Care", href: "/programs/orphanage", icon: FiHome, emoji: "🏠", desc: "Safe shelter & nutrition" },
  { label: "Senior Citizen Care", href: "/programs/old-age", icon: FiHeart, emoji: "👵", desc: "Elder dignity & medicine" },
  { label: "Medical Support", href: "/programs/medical", icon: FiActivity, emoji: "🏥", desc: "Mobile clinics & surgery aid" },
  { label: "Social Service", href: "/programs/social-service", icon: FiUsers, emoji: "🤝", desc: "Relief & community welfare" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProgramsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.10)] py-2"
          : "bg-white/98 backdrop-blur-sm py-2.5"
      )}
    >
      <nav className="container-site flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="HopeBridge Foundation home">
          <Image
            src="/assets/hopebridge_logo.jpeg"
            alt="HopeBridge Foundation"
            width={300}
            height={300}
            className="h-18 md:h-[76px] w-auto object-contain transition-all duration-300"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {/* Home & About */}
          {navLinks.slice(0, 2).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:text-brand-red hover:bg-brand-red-light transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Programs dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              id="programs-dropdown-trigger"
              onClick={() => setProgramsOpen((v) => !v)}
              onMouseEnter={() => setProgramsOpen(true)}
              aria-expanded={programsOpen}
              aria-haspopup="true"
              className={clsx(
                "flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 cursor-pointer",
                programsOpen
                  ? "text-brand-red bg-brand-red-light"
                  : "text-gray-700 hover:text-brand-red hover:bg-brand-red-light"
              )}
            >
              Programs
              <FiChevronDown
                className={clsx(
                  "w-3.5 h-3.5 transition-transform duration-200",
                  programsOpen && "rotate-180"
                )}
              />
            </button>

            {/* Dropdown Panel */}
            <div
              onMouseLeave={() => setProgramsOpen(false)}
              className={clsx(
                "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 origin-top",
                programsOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              )}
            >
              {/* Header */}
              <div className="px-4 pt-4 pb-2 border-b border-gray-50">
                <Link
                  href="/programs"
                  onClick={() => setProgramsOpen(false)}
                  className="text-xs font-black uppercase tracking-wider text-brand-red hover:underline"
                >
                  All Programs →
                </Link>
              </div>

              {/* Individual programs */}
              <ul className="py-2">
                {programs.map((prog) => {
                  const Icon = prog.icon;
                  return (
                    <li key={prog.href}>
                      <Link
                        href={prog.href}
                        onClick={() => setProgramsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-brand-red-light group transition-colors duration-150"
                      >
                        <span className="w-9 h-9 rounded-xl bg-gray-100 group-hover:bg-brand-red/10 flex items-center justify-center flex-shrink-0 transition-colors">
                          <Icon className="w-4 h-4 text-gray-500 group-hover:text-brand-red transition-colors" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-brand-black group-hover:text-brand-red transition-colors leading-tight">
                            {prog.label}
                          </p>
                          <p className="text-xs text-gray-400 leading-tight mt-0.5">{prog.desc}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>

          {/* Contact */}
          <li>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:text-brand-red hover:bg-brand-red-light transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block flex-shrink-0">
          <Button href="/donate" size="md">
            <span>Donate Now</span>
            <FiArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 rounded-md text-brand-black hover:text-brand-red hover:bg-brand-red-light transition-colors"
        >
          {open ? (
            <HiOutlineX className="w-6 h-6" aria-hidden="true" />
          ) : (
            <HiOutlineMenuAlt3 className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100",
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="container-site flex flex-col py-4 gap-1">
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-semibold text-gray-700 rounded-md hover:text-brand-red hover:bg-brand-red-light transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-semibold text-gray-700 rounded-md hover:text-brand-red hover:bg-brand-red-light transition-colors"
            >
              About
            </Link>
          </li>

          {/* Mobile Programs Accordion */}
          <li>
            <button
              onClick={() => setMobileProgramsOpen((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 rounded-md hover:text-brand-red hover:bg-brand-red-light transition-colors cursor-pointer"
            >
              Programs
              <FiChevronDown
                className={clsx(
                  "w-4 h-4 transition-transform duration-200",
                  mobileProgramsOpen && "rotate-180"
                )}
              />
            </button>

            {/* Sub-items */}
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300",
                mobileProgramsOpen ? "max-h-96" : "max-h-0"
              )}
            >
              <ul className="ml-4 mt-1 border-l-2 border-brand-red/20 flex flex-col gap-0.5 pl-3">
                <li>
                  <Link
                    href="/programs"
                    onClick={() => { setOpen(false); setMobileProgramsOpen(false); }}
                    className="block px-3 py-2 text-xs font-black uppercase tracking-wider text-brand-red rounded-md hover:bg-brand-red-light transition-colors"
                  >
                    All Programs →
                  </Link>
                </li>
                {programs.map((prog) => (
                  <li key={prog.href}>
                    <Link
                      href={prog.href}
                      onClick={() => { setOpen(false); setMobileProgramsOpen(false); }}
                      className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-gray-700 rounded-md hover:text-brand-red hover:bg-brand-red-light transition-colors"
                    >
                      <span className="text-base">{prog.emoji}</span>
                      {prog.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-semibold text-gray-700 rounded-md hover:text-brand-red hover:bg-brand-red-light transition-colors"
            >
              Contact
            </Link>
          </li>

          <li className="mt-3 pt-3 border-t border-gray-100">
            <Button href="/donate" fullWidth>
              <span>Donate Now</span>
              <FiArrowUpRight className="w-4 h-4" />
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
