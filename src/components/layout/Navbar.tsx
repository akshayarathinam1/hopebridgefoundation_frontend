'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/get-involved" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:text-brand-red hover:bg-brand-red-light transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
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
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="container-site flex flex-col py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-gray-700 rounded-md hover:text-brand-red hover:bg-brand-red-light transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
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
